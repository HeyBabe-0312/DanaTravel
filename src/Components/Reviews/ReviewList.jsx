import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import "./ReviewList.css";

const ReviewList = ({
  reviews,
  onLikeToggle,
  onDislikeToggle,
  isLoading,
  currentUser,
}) => {
  const { t } = useTranslation();
  const [actionLoading, setActionLoading] = useState({});

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      const starNumber = index + 1;
      return starNumber <= rating ? (
        <AiFillStar key={starNumber} className="star-icon filled" />
      ) : (
        <AiOutlineStar key={starNumber} className="star-icon" />
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
                    className="avatar-img"
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
                    <span className="rating-number">({review.rating}/5)</span>
                  </div>
                  <span className="review-date">
                    {formatDate(review.createdAt)}
                  </span>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default ReviewList;
