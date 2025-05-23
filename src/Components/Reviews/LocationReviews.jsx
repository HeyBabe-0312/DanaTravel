import React, { useState, useEffect, useCallback } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaComments, FaChartBar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useUser } from "../../contexts/UserContext";
import {
  getCommentsBySpot,
  createComment,
  likeComment,
  unlikeComment,
  dislikeComment,
  removeDislikeComment,
} from "../../services/api";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import Pagination from "./Pagination";
import "./LocationReviews.css";

const LocationReviews = ({ id }) => {
  const { t } = useTranslation();
  const { user } = useUser();

  // State management
  const [reviews, setReviews] = useState([]);
  const [reviewStats, setReviewStats] = useState({
    totalReviews: 0,
    averageRating: 0,
    ratingDistribution: [0, 0, 0, 0, 0],
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);

  // Fetch reviews when component mounts or page changes
  const fetchReviews = useCallback(
    async (page = 1) => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getCommentsBySpot(
          id,
          page,
          pagination.itemsPerPage
        );

        if (response.data.success) {
          setReviews(response.data.data.comments || []);
          setPagination((prev) => ({
            ...prev,
            currentPage: response.data.data.pagination.currentPage || page,
            totalPages: response.data.data.pagination.totalPages || 1,
            totalItems: response.data.data.pagination.totalComments || 0,
          }));

          // Calculate review statistics
          calculateReviewStats(response.data.data.comments || []);
        } else {
          throw new Error(response.data.message || "Failed to fetch reviews");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError(error.message || "Failed to load reviews");
        setReviews([]);
      } finally {
        setIsLoading(false);
      }
    },
    [id, pagination.itemsPerPage]
  );

  useEffect(() => {
    fetchReviews(pagination.currentPage);
  }, [fetchReviews, pagination.currentPage]);

  const calculateReviewStats = (reviewsData) => {
    if (!reviewsData || reviewsData.length === 0) {
      setReviewStats({
        totalReviews: 0,
        averageRating: 0,
        ratingDistribution: [0, 0, 0, 0, 0],
      });
      return;
    }

    const totalReviews = reviewsData.length;
    const totalRating = reviewsData.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    const averageRating = totalRating / totalReviews;

    const distribution = [0, 0, 0, 0, 0];
    reviewsData.forEach((review) => {
      if (review.rating >= 1 && review.rating <= 5) {
        distribution[review.rating - 1]++;
      }
    });

    setReviewStats({
      totalReviews,
      averageRating: Math.round(averageRating * 10) / 10,
      ratingDistribution: distribution,
    });
  };

  const handleReviewSubmit = async (reviewData) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const response = await createComment({ ...reviewData, spotId: id });

      if (response.data.success) {
        setShowForm(false);
        // Refresh reviews to show the new one
        await fetchReviews(1);
        setPagination((prev) => ({ ...prev, currentPage: 1 }));
      } else {
        throw new Error(response.data.message || "Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      setError(error.message || "Failed to submit review");
      throw error; // Re-throw to let form handle it
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLikeToggle = async (reviewId, userHasLiked) => {
    try {
      const response = userHasLiked
        ? await unlikeComment(reviewId)
        : await likeComment(reviewId);

      if (response.data.success) {
        // Update the review in state
        setReviews((prev) =>
          prev.map((review) => {
            if (review._id === reviewId) {
              return {
                ...review,
                likeCount: response.data.data.likeCount,
                dislikeCount: response.data.data.dislikeCount,
                userHasLiked: !userHasLiked,
                userHasDisliked: false, // Remove dislike if user likes
              };
            }
            return review;
          })
        );
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      throw error;
    }
  };

  const handleDislikeToggle = async (reviewId, userHasDisliked) => {
    try {
      const response = userHasDisliked
        ? await removeDislikeComment(reviewId)
        : await dislikeComment(reviewId);

      if (response.data.success) {
        // Update the review in state
        setReviews((prev) =>
          prev.map((review) => {
            if (review._id === reviewId) {
              return {
                ...review,
                likeCount: response.data.data.likeCount,
                dislikeCount: response.data.data.dislikeCount,
                userHasDisliked: !userHasDisliked,
                userHasLiked: false, // Remove like if user dislikes
              };
            }
            return review;
          })
        );
      }
    } catch (error) {
      console.error("Error toggling dislike:", error);
      throw error;
    }
  };

  const handlePageChange = (page) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
    // Scroll to top of reviews section
    document.getElementById("location-reviews")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const renderStars = (rating, size = "medium") => {
    const sizeClass = size === "large" ? "star-large" : "star-medium";
    return [...Array(5)].map((_, index) => {
      const starNumber = index + 1;
      return starNumber <= Math.floor(rating) ? (
        <AiFillStar
          key={starNumber}
          className={`star-icon filled ${sizeClass}`}
        />
      ) : starNumber === Math.ceil(rating) && rating % 1 >= 0.5 ? (
        <AiFillStar
          key={starNumber}
          className={`star-icon half-filled ${sizeClass}`}
        />
      ) : (
        <AiOutlineStar key={starNumber} className={`star-icon ${sizeClass}`} />
      );
    });
  };

  const renderRatingDistribution = () => {
    const maxCount = Math.max(...reviewStats.ratingDistribution);

    return (
      <div className="rating-distribution">
        <h4 className="distribution-title">
          <FaChartBar className="chart-icon" />
          {t("Rating Distribution")}
        </h4>
        <div className="distribution-bars">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = reviewStats.ratingDistribution[rating - 1];
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;

            return (
              <div key={rating} className="distribution-row">
                <span className="rating-label">{rating}</span>
                <AiFillStar className="distribution-star" />
                <div className="bar-container">
                  <div
                    className="bar-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="count-label">({count})</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div id="location-reviews" className="location-reviews">
      <div className="reviews-header">
        <div className="header-content">
          <div className="reviews-title">
            <FaComments className="reviews-icon" />
            <h2>{t("Reviews & Ratings")}</h2>
          </div>

          <div className="reviews-summary">
            <div className="rating-overview">
              <div className="average-rating">
                <span className="rating-number">
                  {reviewStats.averageRating}
                </span>
                <div className="rating-stars">
                  {renderStars(reviewStats.averageRating, "large")}
                </div>
                <span className="total-reviews">
                  {reviewStats.totalReviews} {t("reviews")}
                </span>
              </div>

              {reviewStats.totalReviews > 0 && renderRatingDistribution()}
            </div>
          </div>
        </div>

        <div className="header-actions">
          {user ? (
            <button
              className="write-review-btn"
              onClick={() => setShowForm(!showForm)}
              disabled={isSubmitting}
            >
              {showForm ? t("Cancel") : t("Write a Review")}
            </button>
          ) : (
            <div className="login-prompt">
              <span>{t("Please login to write a review")}</span>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => fetchReviews(pagination.currentPage)}>
            {t("Try Again")}
          </button>
        </div>
      )}

      {showForm && user && (
        <div className="review-form-section">
          <ReviewForm
            onSubmit={handleReviewSubmit}
            isSubmitting={isSubmitting}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="reviews-content">
        <ReviewList
          reviews={reviews}
          onLikeToggle={handleLikeToggle}
          onDislikeToggle={handleDislikeToggle}
          isLoading={isLoading}
          currentUser={user}
        />

        {pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            totalItems={pagination.totalItems}
            itemsPerPage={pagination.itemsPerPage}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default LocationReviews;
