import React from "react";

interface RichTextProps {
  content?: string;
  children?: React.ReactNode;
}

const RichText: React.FC<RichTextProps> = ({ content, children }) => {
  
  if (content) {
    return (
      <div
        className="rich-text"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return <div className="rich-text">{children}</div>;
};

export default RichText;
