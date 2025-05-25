import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./EditReviewModal.css";

const EditReviewModal = ({ isOpen, onClose, review, onSubmit, isLoading }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    rating: 0,
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [hoveredStar, setHoveredStar] = useState(0);

  useEffect(() => {
    if (review) {
      setFormData({
        rating: review.rating || 0,
        title: review.title || "",
        description: review.description || "",
      });
    }
  }, [review]);

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
      onClose();
    } catch (error) {
      console.error("Error updating review:", error);
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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{t("reviews.list.editReview")}</h3>
          <button className="closeButton1" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="edit-review-form">
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
            {errors.rating && (
              <span className="error-text">{errors.rating}</span>
            )}
          </div>

          {/* Title */}
          <div className="form-group">
            <label className="form-label" htmlFor="edit-review-title">
              {t("reviews.form.reviewTitle")}
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              id="edit-review-title"
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
            <label className="form-label" htmlFor="edit-review-description">
              {t("reviews.form.yourReview")}
              <span style={{ color: "red" }}> *</span>
            </label>
            <textarea
              id="edit-review-description"
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
              type="button"
              className="cancel-button"
              onClick={onClose}
              disabled={isLoading}
            >
              {t("reviews.locationReviews.cancel")}
            </button>
            <button
              type="submit"
              className={`submit-button ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  {t("reviews.list.updating")}
                </>
              ) : (
                t("reviews.form.submitReview")
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReviewModal;
