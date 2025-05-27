import React from 'react';
import ArticleItem from './ArticleItem';
import './Article.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <ArticleItem
          key={index}
          title={article.title}
          author={article.author}
          text={article.text}
          date={article.date}
          fontFamily={article.fontFamily}
          fontSize={article.fontSize}
          color={article.color}
        />
      ))}
    </div>
  );
};

export default ArticleList;