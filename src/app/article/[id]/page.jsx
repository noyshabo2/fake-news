import React from 'react'
import ArticlePage from '../../routes/ArticlePage.jsx'
import ArticlePage2 from '../../routes/ArticlePage2.jsx'

export default async function Article({ params }) {
  const { id } = await params
  
  console.log('=== URL Debug Info ===')
  console.log('Raw ID from params:', id)
  console.log('ID type:', typeof id)
  console.log('ID includes %:', id.includes('%'))
  
  // Decode URL-encoded Hebrew characters with multiple attempts
  let decodedId = id
  
  // First attempt: standard decode
  if (id.includes('%')) {
    try {
      decodedId = decodeURIComponent(id)
      console.log('First decode attempt:', decodedId)
      
      // Check if we need double decoding
      if (decodedId.includes('%')) {
        try {
          const doubleDecoded = decodeURIComponent(decodedId)
          console.log('Double decode attempt:', doubleDecoded)
          decodedId = doubleDecoded
        } catch (doubleError) {
          console.log('Double decode failed, using single decode')
        }
      }
    } catch (error) {
      console.log('Decode error:', error)
      decodedId = id // fallback to original if decode fails
    }
  }
  
  console.log('Final decoded ID:', decodedId)
  console.log('Target match 1:', decodedId === 'נוכל-הדייטים-מתל-אביב')
  console.log('Target match 2:', decodedId === 'האקרית-שהצילה-את-wix')
  
  // Manual test for the specific failing URL
  const testUrl = '%D7%94%D7%90%D7%A7%D7%A8%D7%99%D7%AA-%D7%A9%D7%94%D7%A6%D7%99%D7%9C%D7%94-%D7%90%D7%AA-wix'
  const testDecoded = decodeURIComponent(testUrl)
  console.log('Manual test - Test URL:', testUrl)
  console.log('Manual test - Decoded:', testDecoded)
  console.log('Manual test - Matches target:', testDecoded === 'האקרית-שהצילה-את-wix')
  console.log('Manual test - Matches current ID:', testDecoded === decodedId)
  console.log('=== End Debug ===')
  
  // Route to the correct article component based on decoded ID or slug
  switch (decodedId) {
    // Hebrew URLs
    case 'נוכל-הדייטים-מתל-אביב':
      return <ArticlePage />
    case 'האקרית-שהצילה-את-wix':
      return <ArticlePage2 />
    
    // English SEO-friendly slugs
    case 'dating-scammer-tel-aviv':
      return <ArticlePage />
    case 'hacker-who-saved-wix':
      return <ArticlePage2 />
    
    // Fallback: check for encoded URLs directly
    case '%D7%A0%D7%95%D7%9B%D7%9C-%D7%94%D7%93%D7%99%D7%99%D7%98%D7%99%D7%9D-%D7%9E%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91':
      return <ArticlePage />
    case '%D7%94%D7%90%D7%A7%D7%A8%D7%99%D7%AA-%D7%A9%D7%94%D7%A6%D7%99%D7%9C%D7%94-%D7%90%D7%AA-wix':
      return <ArticlePage2 />
    default:
      console.log('No match found. Original ID:', id, 'Decoded ID:', decodedId)
      return (
        <div className="container" style={{ padding: '20px', fontFamily: 'Arial' }}>
          <h1>מאמר לא נמצא</h1>
          <p>המאמר שחיפשתם לא קיים במערכת.</p>
          
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            marginTop: '20px', 
            borderRadius: '5px',
            fontSize: '12px',
            fontFamily: 'monospace',
            direction: 'ltr',
            textAlign: 'left'
          }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Debug Information:</h4>
            <p><strong>Original ID:</strong> {id}</p>
            <p><strong>Decoded ID:</strong> {decodedId}</p>
            <p><strong>ID has %:</strong> {id.includes('%') ? 'Yes' : 'No'}</p>
            <p><strong>Expected Hebrew 1:</strong> נוכל-הדייטים-מתל-אביב</p>
            <p><strong>Expected Hebrew 2:</strong> האקרית-שהצילה-את-wix</p>
            <p><strong>Expected English 1:</strong> dating-scammer-tel-aviv</p>
            <p><strong>Expected English 2:</strong> hacker-who-saved-wix</p>
            <p><strong>Match Hebrew 1:</strong> {decodedId === 'נוכל-הדייטים-מתל-אביב' ? 'YES' : 'NO'}</p>
            <p><strong>Match Hebrew 2:</strong> {decodedId === 'האקרית-שהצילה-את-wix' ? 'YES' : 'NO'}</p>
            <p><strong>Match English 1:</strong> {decodedId === 'dating-scammer-tel-aviv' ? 'YES' : 'NO'}</p>
            <p><strong>Match English 2:</strong> {decodedId === 'hacker-who-saved-wix' ? 'YES' : 'NO'}</p>
            <p><strong>Manual test decode:</strong> {decodeURIComponent('%D7%94%D7%90%D7%A7%D7%A8%D7%99%D7%AA-%D7%A9%D7%94%D7%A6%D7%99%D7%9C%D7%94-%D7%90%D7%AA-wix')}</p>
          </div>
        </div>
      )
  }
}

export function generateStaticParams() {
  return [
    // Hebrew URLs (encoded)
    { id: encodeURIComponent('נוכל-הדייטים-מתל-אביב') },
    { id: encodeURIComponent('האקרית-שהצילה-את-wix') },
    
    // English SEO-friendly slugs
    { id: 'dating-scammer-tel-aviv' },
    { id: 'hacker-who-saved-wix' }
  ]
}

