import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaUser, FaEnvelope, FaCamera, FaSave } from "react-icons/fa";
import { MdLock, MdEdit } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "./settings.css";
import axios from "axios";
import { updateProfile, updatePassword } from "../../services/api";
import defaultAvatar from "../../assets/images/avaDefault.jpg";

const Settings = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgFile, setImgFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  
  // Form states
  const [displayName, setDisplayName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Fetch user data on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    } else {
      // Redirect to login if no token
      window.location.href = "/";
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get("/auth/me", config);

      if (response.status === 200) {
        setUser(response.data.data);
        setDisplayName(response.data.data.displayName || "");
        setPreviewUrl(response.data.data.avatarUrl);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error(t("settings.errorFetchingUser"));
      
      // If token is invalid, redirect to home
      localStorage.removeItem("token");
      window.location.href = "/";
    } finally {
      setLoading(false);
    }
  };

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
      
      // Prepare form data with profile image if changed
      let avatarUrl = user?.avatarUrl;
      
      if (imgFile) {
        // Upload image first
        const formData = new FormData();
        formData.append("file", imgFile);
        
        try {
          const uploadResponse = await axios.post("/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          });
          
          if (uploadResponse.data && uploadResponse.data.url) {
            avatarUrl = uploadResponse.data.url;
          }
        } catch (error) {
          console.error("Image upload error:", error);
          toast.error(t("settings.imageUploadError"));
          setLoading(false);
          return;
        }
      }
      
      // Update profile with new info
      const profileData = {
        displayName,
        avatarUrl
      };
      
      const response = await updateProfile(profileData);
      
      if (response.status === 200) {
        toast.success(t("settings.profileUpdateSuccess"));
        setUser({
          ...user,
          displayName,
          avatarUrl
        });
      }
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error(t("settings.profileUpdateError"));
    } finally {
      setLoading(false);
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
        newPassword
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

  if (loading && !user) {
    return (
      <div className="settings-container loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="settings-container">
      <ToastContainer autoClose={3000} theme="colored" position="bottom-right" />
      
      <div className="settings-card">
        <div className="settings-header">
          <h2>{t("settings.title")}</h2>
          <p>{t("settings.subtitle")}</p>
        </div>
        
        <div className="settings-tabs">
          <button 
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            {t("settings.profileTab")}
          </button>
          <button 
            className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            {t("settings.securityTab")}
          </button>
        </div>
        
        <div className="settings-content">
          {activeTab === 'profile' && (
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
                  <FaEnvelope className="icon" />
                  <input
                    type="email"
                    id="email"
                    value={user?.email || ""}
                    disabled
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="displayName">{t("settings.displayName")}</label>
                <div className="input-with-icon">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder={t("settings.enterDisplayName")}
                  />
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
                      <FaSave /> {t("settings.saveChanges")}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
          
          {activeTab === 'security' && (
            <form className="settings-form" onSubmit={handlePasswordUpdate}>
              <div className="form-group">
                <label htmlFor="currentPassword">{t("settings.currentPassword")}</label>
                <div className="input-with-icon">
                  <MdLock className="icon" />
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder={t("settings.enterCurrentPassword")}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="newPassword">{t("settings.newPassword")}</label>
                <div className="input-with-icon">
                  <MdLock className="icon" />
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder={t("settings.enterNewPassword")}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">{t("settings.confirmPassword")}</label>
                <div className="input-with-icon">
                  <MdLock className="icon" />
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t("settings.confirmNewPassword")}
                  />
                </div>
              </div>
              
              <div className="password-requirements">
                <p>{t("settings.passwordRequirements")}</p>
                <ul>
                  <li className={newPassword.length >= 8 ? "valid" : ""}>{t("settings.minChars")}</li>
                  <li className={/[A-Z]/.test(newPassword) ? "valid" : ""}>{t("settings.upperCase")}</li>
                  <li className={/[0-9]/.test(newPassword) ? "valid" : ""}>{t("settings.number")}</li>
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
                      <FaSave /> {t("settings.updatePassword")}
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
