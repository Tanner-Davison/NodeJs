import { useState } from "react";
import styled from "styled-components";
import AddImage from "../../assets/AddImage.webp";
import loadingGiphy from "../../assets/loadingGiphy.webp";
import uploadPhotoSvg from "../../assets/uploadPhotoSvg.svg";
import media from "../../styles/media";
import text from "../../styles/text";
import { uploadCoverPhoto } from "../../API/photoHandler";
import protrudingSquares from "../../assets/hollowedBoxes.svg";

const ProfileBanner = ({ userData }) => {
  const { profileImageUrl = "" } = userData || {};
  const [photo, setPhoto] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(userData?.coverPhotoUrl || "");
  const [backgroundHover, setBackgroundHover] = useState(false);

  const coverPhotoClick = (e) => {
    const hiddenInput = document.querySelector("#hidden-cover-file-upload");
    hiddenInput.click(e);
  };
  const coverPhotoChange = async (e) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    const response = await uploadCoverPhoto(formData);
    if (response) {
      console.log(response.message);
      setCoverPhoto(response.coverPhotoUrl);
    } else {
      console.log("bad response");
    }
  };
  const handleVisibility = () => {
    const profileImg = document.querySelector(".profile-img");
    profileImg.style.filter = "brightness(50%)";
    setIsVisible(true);
  };
  const handlePhotoUpload = () => {
    const fileUploader = document.querySelector("#hidden-file-upload");
    fileUploader.click();
  };

  const handleFileChange = async (event) => {
    handleMouseLeave;
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/pixel-pushers/upload/ProfilePhoto", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (response.ok) {
        const dataRes = await response.json();
        setLoading(false);
        setPhoto(dataRes.profileImageUrl);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleMouseLeave = (e) => {
    if (e.currentTarget.classList.value.includes("upload-btn")) return;
    const profileImg = document.querySelector(".profile-img");
    profileImg.style.filter = "brightness(100%)";
    return setIsVisible(false);
  };

  return (
    <Wrapper
      className="profilebannerwrapper"
      id="workplease"
      $imageurl={coverPhoto}
      onMouseEnter={() => setBackgroundHover(true)}
      onMouseLeave={() => setBackgroundHover(false)}
    >
      <ProfileImageWrapper
        className="image-wrapper"
        onMouseEnter={handleVisibility}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        {!profileImageUrl && !photo && !loading && (
          <ProfileImage
            className="profile-img"
            src={AddImage}
            alt={"tempImg"}
          />
        )}
        {profileImageUrl && !photo && !loading && (
          <ProfileImage
            className="profile-img"
            src={profileImageUrl}
            alt={"tempImg"}
          />
        )}
        {photo && !loading && (
          <ProfileImage className="profile-img" src={photo} alt={"tempImg"} />
        )}
        {loading && (
          <ProfileImage
            className="profile-img"
            src={loadingGiphy}
            alt={"loading"}
            style={{ minHeight: "100px", height: "150px", width: "150px" }}
          />
        )}
        <UploadPhotoBtn
          className="upload-btn"
          onClick={handlePhotoUpload}
          onMouseEnter={() => handleVisibility()}
          $visible={isVisible}
          src={uploadPhotoSvg}
          alt={"upload-photo"}
        />
        <input
          type="file"
          id="hidden-file-upload"
          accept="image/*"
          onChange={(e) => handleFileChange(e)}
          style={{ display: "none" }}
        />
      </ProfileImageWrapper>
      <CoverPhotoBtn onClick={coverPhotoClick} $ishover={backgroundHover}>
        Change Background
      </CoverPhotoBtn>
      <input
        type="file"
        id="hidden-cover-file-upload"
        style={{ display: "none" }}
        accept="image/*"
        onChange={(e) => coverPhotoChange(e)}
      />
    </Wrapper>
  );
};

export default ProfileBanner;
const CoverPhotoBtn = styled.button`
  display: flex;
  opacity: ${(props) => (props.$ishover ? "1" : "0")};
  align-items: center;
  align-self: flex-end;
  border: none;
  outline: none;
  transition: opacity 0.3s ease-in-out;
  height: 2.083vw;
  margin: 0.694vw 1.736vw 0.694vw auto;
  ${media.fullWidth} {
    height: 30px;
    margin: 10px 25px 10px auto;
  }

  ${media.tablet} {
    ${text.bodyXSBold}
    height: 2.93vw;
    margin: 0.977vw 2.441vw 0.977vw auto;
    padding:1.441vw;
  }

  ${media.mobile} {
    ${text.bodyXSBold}
    height: 7.009vw;
  margin: 2.336vw 5.841vw 2.336vw auto;
  }
`;
const UploadPhotoBtn = styled.img`
  position: absolute;
  cursor: pointer;
  display: flex;
  background-image: ${uploadPhotoSvg};
  background-size: 35px;
  background-repeat: no-repeat;

  opacity: ${(props) => (props.$visible ? "1" : "0")};
  bottom: 0vw;
  right: 3.819vw;
  top: 3.819vw;
  width: 2.431vw;
  height: 2.431vw;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  ${media.fullWidth} {
    bottom: 0px;
    right: 55px;
    top: 55px;
    width: 35px;
    height: 35px;
  }

  ${media.tablet} {
    bottom: 0vw;
    right: 5.371vw;
    top: 5.371vw;
    width: 3.418vw;
    height: 3.418vw;
  }

  ${media.mobile} {
    width: 7.009vw;
    height: 7.009vw;
    top: 9.346vw;
    left: 9.346vw;
  }
`;
const ProfileImage = styled.img`
  cursor: pointer;
  position: relative;
  width: 10.417vw;
  height: 10.417vw;
  border-radius: 5%;

  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: brightness(50%);
  }
  ${media.fullWidth} {
    width: 150px;
    height: 150px;
  }

  ${media.tablet} {
    width: 14.648vw;
    height: 14.648vw;
  }

  ${media.mobile} {
    width: 23.364vw;
    height: 23.364vw;
  }
`;
const ProfileImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: black;
  border-radius: 50%;
  width: 10.417vw;
  height: 10.417vw;
  border: 0.208vw solid white;
  bottom: -3.889vw;
  margin-left: 2.778vw;
  ${media.fullWidth} {
    border: 3px solid white;
    bottom: -56px;
    margin-left: 40px;
    width: 150px;
    height: 150px;
  }

  ${media.tablet} {
    bottom: -6.836vw;
    margin-left: 3.906vw;
    width: 14.648vw;
    height: 14.648vw;
    border: 0.293vw solid white;
  }

  ${media.mobile} {
    bottom: -9.682vw;
    margin-left: 5.841vw;
    width: 23.364vw;
    height: 23.364vw;
    border: 0.701vw solid white;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 62.5vw;
  height: 19.514vw;
  background-image: ${(props) =>
    props.$imageurl ? `url(${props.$imageurl})` : `url(${protrudingSquares})`};
  background-repeat: ${(props) => (props.$imageurl ? "no-repeat" : "repeat")};
  background-position: bottom;
  background-size: ${(props) => (props.$imageurl ? "62.5vw 19.514vw" : "59%")};
  object-fit: cover;
  margin-top: 2.431vw;
  border-radius: 1.736vw;
  border: 0.069vw solid black;
  border-top: none;
  z-index: 1;
  ${media.fullWidth} {
    width: 900px;
    height: 281px;
    background-size: ${(props) => (props.$imageurl ? "900px 281px" : "59%")};
    border-radius: 25px;
    margin-top: 35px;
    border: 1px solid black;
  }

  ${media.tablet} {
    height: 24.902vw;
    width: 70.477vw;
    background-size: ${(props) =>
      props.$imageurl ? "70.477vw 24.902vw" : "59%"};
    border-radius: 2.441vw;
    margin-top: 4.883vw;
    border: 0.098vw solid black;
  }

  ${media.mobile} {
    width: 86.776vw;
    height: 41.047vw;
    background-size: ${(props) =>
      props.$imageurl ? "86.776vw 41.047vw" : "59%"};
    border-radius: 5.841vw;
    margin-top: 5.841vw;
    border: 0.234vw solid black;
  }
`;
