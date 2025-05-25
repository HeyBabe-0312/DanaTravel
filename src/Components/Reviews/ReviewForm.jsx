import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./ReviewForm.css";

const ReviewForm = ({ onSubmit, isLoading }) => {
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
      newErrors.rating = t("reviews.form.pleaseSelectRating");
    }

    if (!formData.title.trim()) {
      newErrors.title = t("reviews.form.titleRequired");
    }

    if (!formData.description.trim()) {
      newErrors.description = t("reviews.form.descriptionRequired");
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
      await onSubmit(formData);
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
        <h3>{t("reviews.form.writeReview")}</h3>
        <p>{t("reviews.form.shareExperience")}</p>
      </div>

      <form onSubmit={handleSubmit} className="review-form">
        {/* Star Rating */}
        <div className="form-group">
          <label className="form-label">
            {t("reviews.form.rating")}
            <span style={{ color: "red" }}> *</span>
          </label>
          <div className="stars-container">
            {renderStars()}
            <span className="rating-text">
              {formData.rating > 0 && (
                <span>
                  {formData.rating}/5 {t("reviews.form.stars")}
                </span>
              )}
            </span>
          </div>
          {errors.rating && <span className="error-text">{errors.rating}</span>}
        </div>

        {/* Title */}
        <div className="form-group">
          <label className="form-label" htmlFor="review-title">
            {t("reviews.form.reviewTitle")}
            <span style={{ color: "red" }}> *</span>
          </label>
          <input
            id="review-title"
            type="text"
            className={`form-input ${errors.title ? "error" : ""}`}
            placeholder={t("reviews.form.summarizeExperience")}
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
            {t("reviews.form.yourReview")}
            <span style={{ color: "red" }}> *</span>
          </label>
          <textarea
            id="review-description"
            className={`form-textarea ${errors.description ? "error" : ""}`}
            placeholder={t("reviews.form.tellUsExperience")}
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
                {t("reviews.form.submitting")}
              </>
            ) : (
              t("reviews.form.submitReview")
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
