import React, { useEffect, useState } from "react";
import styled from "styled-components";
import media from "styles/media";
import colors from "styles/colors";
import text from "styles/text";

const MasonryGrid = () => {
  const [imgChunks, setImageChunks] = useState([]);
  const img1 =
    "https://cdna.artstation.com/p/marketplace/presentation_assets/001/774/626/large/file.jpg?1654797523";
  const img2 =
    "https://c4.wallpaperflare.com/wallpaper/995/599/664/art-friendship-trust-baby-children-s-hd-wallpaper-preview.jpg";
  const img3 =
    "https://c4.wallpaperflare.com/wallpaper/995/599/664/art-friendship-trust-baby-children-s-hd-wallpaper-preview.jpg";
  const photosArray = [img1, img2, img3, img2, img3, img1, img3, img1, img2];
  const chunkSize = 3;

  useEffect(() => {
    let chunks = [];
    for (let i = 0; i < photosArray.length; i += chunkSize) {
      chunks.push(photosArray.slice(i, i + chunkSize));
    }
    setImageChunks(chunks);
  }, []);

  const renderChunks = imgChunks.map((chunk, index) => {
    return (
      <Column key={index + chunk + 2}>
        {chunk.map((imgUrl, index) => {
          return (
            <Photo key={index + imgUrl}>
              <Image src={imgUrl} alt={"random-image"} />
            </Photo>
          );
        })}
      </Column>
    );
  });

  return (
    <Wrapper>
      <h2>Photo Gallery</h2>
      <PhotoGallery>{renderChunks}</PhotoGallery>
    </Wrapper>
  );
};

export default MasonryGrid;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  flex: 2;
`;
const Photo = styled.div``;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const PhotoGallery = styled.div`
  display: flex;
  gap: 20px;
  ${media.fullWidth} {
  }

  ${media.tablet} {
  }

  ${media.mobile} {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  max-width: 1224px;
  width: 90%;
  margin: auto;
  padding: 40px 0;
`;
