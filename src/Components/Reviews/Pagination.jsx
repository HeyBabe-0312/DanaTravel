import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  isLoading,
}) => {
  const { t } = useTranslation();

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, currentPage + 2);

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (page) => {
    if (page !== currentPage && page !== "..." && !isLoading) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span className="pagination-text">
          {t("Showing")} {startItem}-{endItem} {t("of")} {totalItems}{" "}
          {t("reviews")}
        </span>
      </div>

      <div className="pagination-controls">
        <button
          className="pagination-button prev-button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          title={t("Previous page")}
        >
          <MdNavigateBefore className="pagination-icon" />
          <span className="pagination-label">{t("Previous")}</span>
        </button>

        <div className="pagination-numbers">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`pagination-number ${
                page === currentPage ? "active" : ""
              } ${page === "..." ? "ellipsis" : ""}`}
              onClick={() => handlePageClick(page)}
              disabled={page === "..." || isLoading}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="pagination-button next-button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          title={t("Next page")}
        >
          <span className="pagination-label">{t("Next")}</span>
          <MdNavigateNext className="pagination-icon" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
