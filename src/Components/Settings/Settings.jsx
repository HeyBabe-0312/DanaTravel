import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUser,
  FaEnvelope,
  FaCamera,
  FaSave,
  FaUserEdit,
  FaShieldAlt,
} from "react-icons/fa";
import { MdLock, MdSecurity } from "react-icons/md";
import { RiLockPasswordFill, RiShieldUserFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "./settings.css";
import {
  updateProfile,
  updatePassword,
  uploadProfileImage,
} from "../../services/api";
import defaultAvatar from "../../assets/images/avaDefault.jpg";
import { useUser } from "../../contexts/UserContext";

const Settings = () => {
  const { t } = useTranslation();
  // Use the global user context
  const {
    user,
    loading: userLoading,
    fetchUserData,
    updateUserData,
  } = useUser();
  const [loading, setLoading] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");

  // Form states
  const [displayName, setDisplayName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Set initial form values when user data is loaded
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPreviewUrl(user.avatarUrl);
    }

    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, [user]);

  // Handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    if (!file.type.match("image.*")) {
      toast.error(t("settings.imageTypeError"));
      return;
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error(t("settings.imageSizeError"));
      return;
    }

    // Set the file and create a preview URL
    setImgFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle profile update
  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Handle image upload first if there's a new image
      if (imgFile) {
        try {
          // Use our new uploadProfileImage API function
          const uploadResponse = await uploadProfileImage(imgFile);

          if (
            uploadResponse.status === 200 &&
            uploadResponse.data.data.avatarUrl
          ) {
            // Update local state with the new avatar URL
            setPreviewUrl(uploadResponse.data.data.avatarUrl);

            // Update the user context with the new avatar URL
            updateUserData({
              avatarUrl: uploadResponse.data.data.avatarUrl,
            });

            toast.success(t("settings.imageUploadSuccess"));
          }
        } catch (error) {
          console.error("Image upload error:", error);
          toast.error(t("settings.imageUploadError"));
          setLoading(false);
          return;
        }
      }

      // Update profile with display name
      if (displayName && displayName !== user?.displayName) {
        const profileData = {
          displayName,
        };

        const response = await updateProfile(profileData);

        if (response.status === 200) {
          toast.success(t("settings.profileUpdateSuccess"));

          // Update the user context with the new display name
          updateUserData({
            displayName,
          });
        }
      } else if (imgFile && !displayName) {
        // If only the image was changed, still show a success message
        toast.success(t("settings.profileUpdateSuccess"));
      }

      // Refresh user data from the server to ensure everything is in sync
      fetchUserData();
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error(t("settings.profileUpdateError"));
    } finally {
      setLoading(false);
      setImgFile(null); // Clear the selected file after upload
    }
  };

  // Handle password update
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    // Validate passwords
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.warn(t("settings.fillAllFields"));
      return;
    }

    if (newPassword.length < 8) {
      toast.warn(t("settings.passwordTooShort"));
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error(t("settings.passwordsDoNotMatch"));
      return;
    }

    try {
      setLoading(true);

      const passwordData = {
        currentPassword,
        newPassword,
      };

      const response = await updatePassword(passwordData);

      if (response.status === 200) {
        toast.success(t("settings.passwordUpdateSuccess"));
        // Clear password fields
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error("Password update error:", error);

      if (error.response && error.response.status === 401) {
        toast.error(t("settings.currentPasswordIncorrect"));
      } else {
        toast.error(t("settings.passwordUpdateError"));
      }
    } finally {
      setLoading(false);
    }
  };

  if ((loading || userLoading) && !user) {
    return (
      <div className="settings-container loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="settings-container">
      <ToastContainer
        autoClose={3000}
        theme="colored"
        position="bottom-right"
      />

      <div className="settings-card">
        <div className="settings-header">
          <h2>{t("settings.title")}</h2>
          <p>{t("settings.subtitle")}</p>
        </div>

        <div className="settings-tabs">
          <button
            className={`tab-button ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <div className="tab-icon-wrapper">
              <FaUser className="tab-icon" />
              <span>{t("settings.profileTab")}</span>
            </div>
          </button>
          <button
            className={`tab-button ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            <div className="tab-icon-wrapper">
              <MdSecurity className="tab-icon" />
              <span>{t("settings.securityTab")}</span>
            </div>
          </button>
        </div>

        <div className="settings-content">
          {activeTab === "profile" && (
            <form className="settings-form" onSubmit={handleProfileUpdate}>
              <div className="avatar-upload">
                <div className="avatar-preview">
                  <img
                    src={previewUrl || defaultAvatar}
                    alt={t("settings.profilePicture")}
                    className="avatar-image"
                  />
                  <div className="avatar-edit">
                    <label htmlFor="imageUpload" className="avatar-edit-button">
                      <FaCamera />
                    </label>
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("settings.email")}</label>
                <div className="input-with-icon">
                  <input
                    type="email"
                    id="email"
                    value={user?.email || ""}
                    disabled
                  />
                  <FaEnvelope className="icon" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="displayName">{t("settings.displayName")}</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder={t("settings.enterDisplayName")}
                  />
                  <FaUserEdit className="icon" />
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="primary-button"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="button-spinner"></span>
                  ) : (
                    <>
                      <div className="button-icon-wrapper">
                        <FaSave />
                      </div>
                      {t("settings.saveChanges")}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {activeTab === "security" && (
            <form className="settings-form" onSubmit={handlePasswordUpdate}>
              <div className="form-group">
                <label htmlFor="currentPassword">
                  {t("settings.currentPassword")}
                </label>
                <div className="input-with-icon">
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder={t("settings.enterCurrentPassword")}
                  />
                  <MdLock className="icon" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">{t("settings.newPassword")}</label>
                <div className="input-with-icon">
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder={t("settings.enterNewPassword")}
                  />
                  <RiLockPasswordFill className="icon" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  {t("settings.confirmPassword")}
                </label>
                <div className="input-with-icon">
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t("settings.confirmNewPassword")}
                  />
                  <RiShieldUserFill className="icon" />
                </div>
              </div>

              <div className="password-requirements">
                <p>{t("settings.passwordRequirements")}</p>
                <ul>
                  <li className={newPassword.length >= 8 ? "valid" : ""}>
                    {t("settings.minChars")}
                  </li>
                  <li className={/[A-Z]/.test(newPassword) ? "valid" : ""}>
                    {t("settings.upperCase")}
                  </li>
                  <li className={/[0-9]/.test(newPassword) ? "valid" : ""}>
                    {t("settings.number")}
                  </li>
                </ul>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="primary-button"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="button-spinner"></span>
                  ) : (
                    <>
                      <div className="button-icon-wrapper">
                        <FaShieldAlt />
                      </div>
                      {t("settings.updatePassword")}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
