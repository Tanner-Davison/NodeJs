import React from "react";
import styled from "styled-components";
import media from "styles/media";
import colors from "styles/colors";
import text from "styles/text";

const MasonryGrid = () => {
  return (
    <Wrapper>
      <h2>Photo Gallery</h2>
      <PhotoGallery>
        <Column>
          <Photo>
            <Image
              src={
                "https://cdna.artstation.com/p/marketplace/presentation_assets/001/774/626/large/file.jpg?1654797523"
              }
              alt="random photo"
            />
          </Photo>
          <Photo>
            <Image
              src={
                "https://c4.wallpaperflare.com/wallpaper/995/599/664/art-friendship-trust-baby-children-s-hd-wallpaper-preview.jpg"
              }
              alt="random photo"
            />
          </Photo>
          <Photo>
            <Image
              src={
                "https://e0.pxfuel.com/wallpapers/126/740/desktop-wallpaper-modern-random-b-scb-modern-earth.jpg"
              }
              alt="random photo"
            />
          </Photo>
        </Column>
        <Column>
          <Photo>
            <Image
              src={
                "https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_lost_in_random_02_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen"
              }
              alt="random photo"
            />
          </Photo>
          <Photo>
            <Image
              src={
                "https://c4.wallpaperflare.com/wallpaper/995/599/664/art-friendship-trust-baby-children-s-hd-wallpaper-preview.jpg"
              }
              alt="random photo"
            />
          </Photo>
          <Photo>
            <Image
              src={
                "https://e0.pxfuel.com/wallpapers/126/740/desktop-wallpaper-modern-random-b-scb-modern-earth.jpg"
              }
              alt="random photo"
            />
          </Photo>
        </Column>
        <Column>
          <Photo>
            <Image
              src={
                "https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_lost_in_random_02_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen"
              }
              alt="random photo"
            />
          </Photo>
          <Photo>
            <Image
              src={
                "https://cdna.artstation.com/p/marketplace/presentation_assets/001/774/626/large/file.jpg?1654797523"
              }
              alt="random photo"
            />
          </Photo>
          <Photo>
            <Image
              src={
                "https://e0.pxfuel.com/wallpapers/126/740/desktop-wallpaper-modern-random-b-scb-modern-earth.jpg"
              }
              alt="random photo"
            />
          </Photo>
        </Column>
        <Column>
          <Photo>
            <Image
              src={
                "https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_lost_in_random_02_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen"
              }
              alt="random photo"
            />
          </Photo>
          <Photo>
            <Image
              src={
                "https://c4.wallpaperflare.com/wallpaper/995/599/664/art-friendship-trust-baby-children-s-hd-wallpaper-preview.jpg"
              }
              alt="random photo"
            />
          </Photo>
          <Photo>
            <Image
              src={
                "https://e0.pxfuel.com/wallpapers/126/740/desktop-wallpaper-modern-random-b-scb-modern-earth.jpg"
              }
              alt="random photo"
            />
          </Photo>
        </Column>
      </PhotoGallery>
    </Wrapper>
  );
};

export default MasonryGrid;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
object-fit: cover;
  flex:2;
`;
const Photo = styled.div`

`;
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
