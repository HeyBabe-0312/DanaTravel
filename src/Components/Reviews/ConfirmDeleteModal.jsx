import React from "react";
import { FaTimes, FaTrash, FaExclamationTriangle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./ConfirmDeleteModal.css";

const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
  reviewTitle,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="delete-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="delete-modal-header">
          <div className="warning-icon">
            <FaExclamationTriangle />
          </div>
          <h3>{t("reviews.list.confirmDelete")}</h3>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="delete-modal-body">
          <p>{t("reviews.list.deleteConfirmMessage")}</p>
          {reviewTitle && (
            <div className="review-preview">
              <strong>"{reviewTitle}"</strong>
            </div>
          )}
        </div>

        <div className="delete-modal-actions">
          <button
            className="cancel-button"
            onClick={onClose}
            disabled={isLoading}
          >
            {t("reviews.list.cancelDelete")}
          </button>
          <button
            className={`delete-button ${isLoading ? "loading" : ""}`}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                {t("reviews.list.deleting")}
              </>
            ) : (
              <>
                <FaTrash />
                {t("reviews.list.confirmDeleteButton")}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
