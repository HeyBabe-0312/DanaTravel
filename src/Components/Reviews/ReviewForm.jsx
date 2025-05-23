import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./ReviewForm.css";

const ReviewForm = ({ onSubmitReview, isLoading }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    rating: 0,
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [hoveredStar, setHoveredStar] = useState(0);

  const validateForm = () => {
    const newErrors = {};

    if (formData.rating === 0) {
      newErrors.rating = t("Please select a rating");
    }

    if (!formData.title.trim()) {
      newErrors.title = t("Title is required");
    }

    if (!formData.description.trim()) {
      newErrors.description = t("Description is required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await onSubmitReview(formData);
      // Reset form on successful submission
      setFormData({
        rating: 0,
        title: "",
        description: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleStarClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
    setErrors((prev) => ({ ...prev, rating: "" }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starNumber = index + 1;
      const isActive = starNumber <= (hoveredStar || formData.rating);

      return (
        <button
          key={starNumber}
          type="button"
          className={`star-button ${isActive ? "active" : ""}`}
          onClick={() => handleStarClick(starNumber)}
          onMouseEnter={() => setHoveredStar(starNumber)}
          onMouseLeave={() => setHoveredStar(0)}
        >
          {isActive ? (
            <AiFillStar className="star-icon filled" />
          ) : (
            <AiOutlineStar className="star-icon" />
          )}
        </button>
      );
    });
  };

  return (
    <div className="review-form-container">
      <div className="review-form-header">
        <h3>{t("Write a Review")}</h3>
        <p>{t("Share your experience with other travelers")}</p>
      </div>

      <form onSubmit={handleSubmit} className="review-form">
        {/* Star Rating */}
        <div className="form-group">
          <label className="form-label">{t("Rating")} *</label>
          <div className="stars-container">
            {renderStars()}
            <span className="rating-text">
              {formData.rating > 0 && (
                <span>
                  {formData.rating}/5 {t("stars")}
                </span>
              )}
            </span>
          </div>
          {errors.rating && <span className="error-text">{errors.rating}</span>}
        </div>

        {/* Title */}
        <div className="form-group">
          <label className="form-label" htmlFor="review-title">
            {t("Review Title")} *
          </label>
          <input
            id="review-title"
            type="text"
            className={`form-input ${errors.title ? "error" : ""}`}
            placeholder={t("Summarize your experience")}
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            maxLength={100}
          />
          <div className="input-info">
            <span className="char-count">{formData.title.length}/100</span>
          </div>
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>

        {/* Description */}
        <div className="form-group">
          <label className="form-label" htmlFor="review-description">
            {t("Your Review")} *
          </label>
          <textarea
            id="review-description"
            className={`form-textarea ${errors.description ? "error" : ""}`}
            placeholder={t("Tell us about your experience...")}
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            maxLength={500}
            rows={4}
          />
          <div className="input-info">
            <span className="char-count">
              {formData.description.length}/500
            </span>
          </div>
          {errors.description && (
            <span className="error-text">{errors.description}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="form-actions">
          <button
            type="submit"
            className={`submit-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                {t("Submitting...")}
              </>
            ) : (
              t("Submit Review")
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
