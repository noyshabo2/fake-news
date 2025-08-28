import React from 'react'
import ArticlePage from '../../routes/ArticlePage.jsx'
import ArticlePage2 from '../../routes/ArticlePage2.jsx'
import { decodeHebrewUrl, getArticleInfo, ARTICLE_ROUTES } from '../../../utils/urlUtils.js'

export default async function Article({ params }) {
  // Await params and decode URL
  const { id } = await params
  const decodedId = decodeHebrewUrl(id)
  const articleInfo = getArticleInfo(id)
  
  console.log('🔍 Article Page Debug:')
  console.log('- Original ID:', id)
  console.log('- Decoded ID:', decodedId) 
  console.log('- Article Info:', articleInfo)
  console.log('- Available Routes:', Object.keys(ARTICLE_ROUTES))
  
  // If we found article info, route to the correct component
  if (articleInfo) {
    console.log('✅ Article found, routing to:', articleInfo.component)
    
    switch (articleInfo.component) {
      case 'ArticlePage':
        return <ArticlePage />
      case 'ArticlePage2':
        return <ArticlePage2 />
      default:
        console.log('⚠️ Unknown component:', articleInfo.component)
    }
  }
  
  // Fallback: try direct string matching (legacy support)
  switch (decodedId) {
    case 'נוכל-הדייטים-מתל-אביב':
      console.log('✅ Legacy match: נוכל-הדייטים-מתל-אביב')
      return <ArticlePage />
    case 'האקרית-שהצילה-את-wix':
      console.log('✅ Legacy match: האקרית-שהצילה-את-wix')
      return <ArticlePage2 />
  }
  
  // Article not found
  console.log('❌ No match found for:', decodedId)
  
  return (
    <div className="container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔍 מאמר לא נמצא - Debug Info</h1>
      <div style={{ backgroundColor: '#f5f5f5', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
        <h3>Debug Information:</h3>
        <p><strong>Original URL ID:</strong> <code>{id}</code></p>
        <p><strong>Decoded ID:</strong> <code>{decodedId}</code></p>
        <p><strong>Article Info Found:</strong> {articleInfo ? 'Yes' : 'No'}</p>
        
        <h4>Manual Decode Test:</h4>
        <p><strong>Manual decodeURIComponent:</strong> <code>{(() => {
          try { return decodeURIComponent(id) } catch(e) { return 'DECODE_ERROR: ' + e.message }
        })()}</code></p>
        
        <h4>Available Articles:</h4>
        <ul>
          {Object.keys(ARTICLE_ROUTES).map(key => (
            <li key={key}>
              <code>{key}</code> 
              {key === decodedId && <span style={{color: 'green'}}> ← SHOULD MATCH!</span>}
            </li>
          ))}
        </ul>
        
        <h4>Character Comparison:</h4>
        <p>Target: <code>האקרית-שהצילה-את-wix</code></p>
        <p>Actual: <code>{decodedId}</code></p>
        <p>Match: {decodedId === 'האקרית-שהצילה-את-wix' ? '✅ YES' : '❌ NO'}</p>
        <p>Length: {decodedId.length} vs 22</p>
      </div>
      
      <p>המאמר שחיפשתם לא קיים במערכת.</p>
    </div>
  )
}

export function generateStaticParams() {
  // Generate static params from article routes
  return Object.keys(ARTICLE_ROUTES).map(articleId => ({
    id: encodeURIComponent(articleId)
  }))
}
