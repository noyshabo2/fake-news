import React from 'react'
import ArticlePage from '../../routes/ArticlePage.jsx'
import ArticlePage2 from '../../routes/ArticlePage2.jsx'
import { decodeHebrewUrl, getArticleInfo, ARTICLE_ROUTES } from '../../../utils/urlUtils.js'

export default async function Article({ params }) {
  // Await params and decode URL
  const { id } = await params
  const decodedId = decodeHebrewUrl(id)
  const articleInfo = getArticleInfo(id)
  
  console.log('Original ID:', id)
  console.log('Decoded ID:', decodedId)
  console.log('Article Info:', articleInfo)
  
  // Route to the correct article component based on decoded ID
  switch (decodedId) {
    case 'נוכל-הדייטים-מתל-אביב':
      return <ArticlePage />
    case 'האקרית-שהצילה-את-wix':
      return <ArticlePage2 />
    default:
      console.log('No match found for:', decodedId)
      return (
        <div className="container">
          <h1>מאמר לא נמצא</h1>
          <p>המאמר שחיפשתם לא קיים במערכת.</p>
          <p>ID: {decodedId}</p>
          <details>
            <summary>Available Articles:</summary>
            <ul>
              {Object.keys(ARTICLE_ROUTES).map(key => (
                <li key={key}>{key}</li>
              ))}
            </ul>
          </details>
        </div>
      )
  }
}

export function generateStaticParams() {
  // Generate static params from article routes
  return Object.keys(ARTICLE_ROUTES).map(articleId => ({
    id: encodeURIComponent(articleId)
  }))
}
