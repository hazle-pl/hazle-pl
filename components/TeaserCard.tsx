import React from "react";
import RichText from "./RichText";

interface TeaserCardProps {
  imageSrc?: string;
  imageAlt?: string;
  background?: string;
  content?: string;
  imagePosition?: "top" | "bottom" | "left" | "right";
  href?: string;
}

const TeaserCard: React.FC<TeaserCardProps> = ({
  imageSrc = "/assets/preview.jpg",
  imageAlt = "Image alt",
  background = "transparent",
  content = "Lorem ipsum",
  imagePosition = "top",
  href,
}) => {
  const CardWrapper = href ? 'a' : 'div';

  return (
    <CardWrapper href={href} className={`teaser-card bg-${background}`}>
      <div className={`teaser-card-wrapper image-${imagePosition}`}>
        <img className="teaser-image" src={imageSrc} alt={imageAlt} />
        <div className="teaser-content">
            <RichText content={content}/>
        </div>
      </div>
    </CardWrapper>
  );
};

export default TeaserCard;
