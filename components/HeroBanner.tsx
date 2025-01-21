import React from "react";
import RichText from "./RichText";
import ContentWrapper from "./ContentWrapper";

interface HeroBannerProps {
  content?: string;
  background?: string;
  backgroundImage?: string;
  imageSrc?: string;
  imageAlt?: string;
  size?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  content = "Lorem ipsum",
  background = "primary-100",
  backgroundImage,
  imageSrc,
  size = "auto",
  imageAlt = "Hero image",
}) => {
  return (
    <div className={`hero-banner ${background ? `bg-${background}` : ""} ${size ? `size-${size}` : ""}`}>
      {backgroundImage && <img className="hero-background" src={backgroundImage} alt="Background" />}
      <ContentWrapper>
        <div className="hero-content">
          <RichText content={content} />
        </div>
        {imageSrc && (
          <div className="hero-image">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
