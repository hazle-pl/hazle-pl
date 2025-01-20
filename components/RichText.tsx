import React from "react";

interface RichTextProps {
  content: string;
}

const RichText: React.FC<RichTextProps> = ({ content }) => {
  return (
    <div
      className="rich-text"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichText;
