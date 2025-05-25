import React, { useState, useEffect } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { FaUser, FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import EditReviewModal from "./EditReviewModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import "./ReviewList.css";

const ReviewList = ({
  reviews,
  onLikeToggle,
  onDislikeToggle,
  onEditReview,
  onDeleteReview,
  isLoading,
  currentUser,
}) => {
  const { t } = useTranslation();
  const [actionLoading, setActionLoading] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is part of a dropdown menu or options button
      const isDropdownClick =
        event.target.closest(".dropdown-menu") ||
        event.target.closest(".options-button");

      if (!isDropdownClick) {
        setDropdownOpen(null);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [dropdownOpen]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      const starNumber = index + 1;
      return starNumber <= rating ? (
        <AiFillStar key={starNumber} className="starIcon filled" />
      ) : (
        <AiOutlineStar key={starNumber} className="starIcon" />
      );
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Use browser's locale or current language from i18n
    const locale = i18n.language === "ja" ? "ja-JP" : "vi-VN";
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleLikeClick = async (reviewId, userHasLiked) => {
    if (!currentUser) {
      alert(t("reviews.list.pleaseLoginToLike"));
      return;
    }

    setActionLoading((prev) => ({ ...prev, [`like-${reviewId}`]: true }));
    try {
      await onLikeToggle(reviewId, userHasLiked);
    } catch (error) {
      console.error("Error toggling like:", error);
    } finally {
      setActionLoading((prev) => ({ ...prev, [`like-${reviewId}`]: false }));
    }
  };

  const handleDislikeClick = async (reviewId, userHasDisliked) => {
    if (!currentUser) {
      alert(t("reviews.list.pleaseLoginToDislike"));
      return;
    }

    setActionLoading((prev) => ({ ...prev, [`dislike-${reviewId}`]: true }));
    try {
      await onDislikeToggle(reviewId, userHasDisliked);
    } catch (error) {
      console.error("Error toggling dislike:", error);
    } finally {
      setActionLoading((prev) => ({ ...prev, [`dislike-${reviewId}`]: false }));
    }
  };

  const handleEditClick = (review) => {
    console.log("Edit clicked for review:", review._id);
    setSelectedReview(review);
    setEditModalOpen(true);
    setDropdownOpen(null);
  };

  const handleDeleteClick = (review) => {
    console.log("Delete clicked for review:", review._id);
    setSelectedReview(review);
    setDeleteModalOpen(true);
    setDropdownOpen(null);
  };

  const handleEditSubmit = async (reviewData) => {
    try {
      await onEditReview(selectedReview._id, reviewData);
      setEditModalOpen(false);
      setSelectedReview(null);
    } catch (error) {
      console.error("Error editing review:", error);
      throw error;
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await onDeleteReview(selectedReview._id);
      setDeleteModalOpen(false);
      setSelectedReview(null);
    } catch (error) {
      console.error("Error deleting review:", error);
      throw error;
    }
  };

  const toggleDropdown = (reviewId) => {
    setDropdownOpen(dropdownOpen === reviewId ? null : reviewId);
  };

  const canEditOrDelete = (review) => {
    return (
      currentUser && review.userId && review.userId._id === currentUser._id
    );
  };

  if (isLoading) {
    return (
      <div className="reviews-loading">
        <div className="loading-spinner large"></div>
        <p>{t("reviews.list.loadingReviews")}</p>
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className="no-reviews">
        <div className="no-reviews-icon">
          <AiOutlineStar />
        </div>
        <h3>{t("reviews.list.noReviewsYet")}</h3>
        <p>{t("reviews.list.beFirstToShare")}</p>
      </div>
    );
  }

  return (
    <div className="review-list">
      {reviews.map((review) => (
        <div key={review._id} className="review-card">
          <div className="review-header">
            <div className="reviewer-info">
              <div className="reviewer-avatar">
                {review.userId?.avatarUrl ? (
                  <img
                    src={review.userId.avatarUrl}
                    alt={review.userId.displayName}
                    className="avatarImg"
                  />
                ) : (
                  <FaUser className="avatar-icon" />
                )}
              </div>
              <div className="reviewer-details">
                <h4 className="reviewer-name">
                  {review.userId?.displayName ||
                    t("reviews.list.anonymousUser")}
                </h4>
                <div className="review-meta">
                  <div className="review-rating">
                    {renderStars(review.rating)}
                    <span className="ratingNumber">({review.rating}/5)</span>
                  </div>
                  <span className="review-date">
                    {formatDate(review.createdAt)}
                  </span>
                </div>
              </div>
            </div>
            {canEditOrDelete(review) && (
              <div className="review-options">
                <button
                  className="options-button"
                  onClick={() => toggleDropdown(review._id)}
                  title={t("reviews.list.options")}
                >
                  <FaEllipsisV />
                </button>
                {dropdownOpen === review._id && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item edit-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(review);
                      }}
                    >
                      <FaEdit />
                      {t("reviews.list.edit")}
                    </button>
                    <button
                      className="dropdown-item delete-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClick(review);
                      }}
                    >
                      <FaTrash />
                      {t("reviews.list.delete")}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="review-content">
            <h5 className="review-title">{review.title}</h5>
            <p className="review-description">{review.description}</p>
          </div>

          <div className="review-actions">
            <div className="action-buttons">
              <button
                className={`action-button like-button ${
                  review.userHasLiked ? "active" : ""
                }`}
                onClick={() => handleLikeClick(review._id, review.userHasLiked)}
                disabled={actionLoading[`like-${review._id}`]}
                title={
                  review.userHasLiked
                    ? t("reviews.list.unlike")
                    : t("reviews.list.like")
                }
              >
                {actionLoading[`like-${review._id}`] ? (
                  <div className="loading-spinner small"></div>
                ) : review.userHasLiked ? (
                  <AiFillLike className="action-icon" />
                ) : (
                  <AiOutlineLike className="action-icon" />
                )}
                <span className="action-count">{review.likeCount || 0}</span>
              </button>

              <button
                className={`action-button dislike-button ${
                  review.userHasDisliked ? "active" : ""
                }`}
                onClick={() =>
                  handleDislikeClick(review._id, review.userHasDisliked)
                }
                disabled={actionLoading[`dislike-${review._id}`]}
                title={
                  review.userHasDisliked
                    ? t("reviews.list.removeDislike")
                    : t("reviews.list.dislike")
                }
              >
                {actionLoading[`dislike-${review._id}`] ? (
                  <div className="loading-spinner small"></div>
                ) : review.userHasDisliked ? (
                  <AiFillDislike className="action-icon" />
                ) : (
                  <AiOutlineDislike className="action-icon" />
                )}
                <span className="action-count">{review.dislikeCount || 0}</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Edit Review Modal */}
      {editModalOpen && selectedReview && (
        <EditReviewModal
          isOpen={editModalOpen}
          onClose={() => {
            setEditModalOpen(false);
            setSelectedReview(null);
          }}
          onSubmit={handleEditSubmit}
          review={selectedReview}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && selectedReview && (
        <ConfirmDeleteModal
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setSelectedReview(null);
          }}
          onConfirm={handleDeleteConfirm}
          reviewTitle={selectedReview.title}
        />
      )}
    </div>
  );
};

export default ReviewList;
