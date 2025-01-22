import React from "react";

interface RichTextProps {
  content?: string;
  children?: React.ReactNode;
  justify?: string;
}

const RichText: React.FC<RichTextProps> = ({ content, children, justify }) => {
  
  if (content) {
    return (
      <div
        className={`rich-text ${justify}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return <div className={`rich-text ${justify}`}>{children}</div>;
};

export default RichText;
