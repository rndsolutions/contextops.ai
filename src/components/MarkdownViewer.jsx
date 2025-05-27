import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = ({ fileName }) => {
  const { i18n } = useTranslation();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const lang = i18n.language || 'en';
    const url = `/locales/${lang}/${fileName}`;

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
      })
      .catch((err) => {
        console.error(`❌ Error loading markdown from ${url}:`, err);
        setMarkdown('⚠️ Could not load content.');
      });
  }, [i18n.language, fileName]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-lg">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownViewer;
