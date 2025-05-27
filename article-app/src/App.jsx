import React from 'react';
import ArticleList from './components/ArticleList';

const articles = [
  { title: 'Статья 1', author: 'Автор 1', text: 'Текст статьи 1', date: '2023-01-01' },
  { title: 'Статья 2', author: 'Автор 2', text: 'Текст статьи 2', date: '2023-01-02' },
  { title: 'Статья 3', author: 'Автор 3', text: 'Текст статьи 3 ', date: '2023-01-03' },
  { title: 'Статья 4', author: 'Автор 4', text: 'Текст статьи 4', date: '2023-01-04' },
];

const App = () => {
  return <ArticleList articles={articles} />;
};

export default App;