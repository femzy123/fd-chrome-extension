import React from "react";

interface ArticleProps {
  title: string;
  text: string;
}

const Article: React.FC<ArticleProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default Article;
