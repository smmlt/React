import React from 'react';
import './Article.css';

const Article = ({ title, author, text, date, fontFamily, fontSize, color }) => {
  const customStyle = {
    fontFamily,
    fontSize,
    color,
  };

  return (
    <div className="article" style={customStyle}>
      <h2>{title}</h2>
      <p><strong>Автор:</strong> {author}</p>
      <p>{text}</p>
      <p><em>Дата выпуска:</em> {date}</p>
    </div>
  );
};

export default Article;