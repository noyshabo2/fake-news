/**
 * URL utilities for handling Hebrew article URLs
 */

// Article mapping for better URL structure (optional improvement)
export const ARTICLE_ROUTES = {
  'נוכל-הדייטים-מתל-אביב': {
    title: 'נוכל הדייטים מתל אביב',
    component: 'ArticlePage',
    slug: 'dating-scammer-tel-aviv' // SEO-friendly alternative
  },
  'האקרית-שהצילה-את-wix': {
    title: 'האקרית שהצילה את Wix',
    component: 'ArticlePage2',
    slug: 'hacker-who-saved-wix' // SEO-friendly alternative
  }
}

/**
 * Encode Hebrew text for URLs
 * @param {string} text - Hebrew text to encode
 * @returns {string} - URL-encoded text
 */
export function encodeHebrewUrl(text) {
  return encodeURIComponent(text)
}

/**
 * Decode URL-encoded Hebrew text with multiple fallback attempts
 * @param {string} encodedText - URL-encoded text
 * @returns {string} - Decoded Hebrew text
 */
export function decodeHebrewUrl(encodedText) {
  console.log('🔍 Decoding URL:', encodedText)
  
  // If already decoded (no % characters), return as is
  if (!encodedText.includes('%')) {
    console.log('✅ Already decoded:', encodedText)
    return encodedText
  }
  
  try {
    // First attempt: single decode
    const decoded = decodeURIComponent(encodedText)
    console.log('✅ Single decode result:', decoded)
    
    // Check if it needs double decoding (sometimes happens in production)
    if (decoded.includes('%')) {
      try {
        const doubleDecoded = decodeURIComponent(decoded)
        console.log('✅ Double decode result:', doubleDecoded)
        return doubleDecoded
      } catch (doubleError) {
        console.log('⚠️ Double decode failed, using single decode')
        return decoded
      }
    }
    
    return decoded
  } catch (error) {
    console.error('❌ Error decoding URL:', error)
    console.error('❌ Original text:', encodedText)
    return encodedText
  }
}

/**
 * Generate article URL
 * @param {string} articleId - Article identifier
 * @param {boolean} useSeoFriendly - Whether to use SEO-friendly slug
 * @returns {string} - Complete article URL
 */
export function generateArticleUrl(articleId, useSeoFriendly = false) {
  if (useSeoFriendly && ARTICLE_ROUTES[articleId]?.slug) {
    return `/article/${ARTICLE_ROUTES[articleId].slug}`
  }
  return `/article/${encodeHebrewUrl(articleId)}`
}

/**
 * Get article info by ID (decoded or encoded) with multiple fallback attempts
 * @param {string} id - Article ID (can be encoded or decoded)
 * @returns {object|null} - Article info or null if not found
 */
export function getArticleInfo(id) {
  console.log('🔍 Getting article info for:', id)
  
  // Try direct lookup first (in case it's already the right key)
  if (ARTICLE_ROUTES[id]) {
    console.log('✅ Found article with direct lookup')
    return ARTICLE_ROUTES[id]
  }
  
  // Try decoded version
  const decodedId = decodeHebrewUrl(id)
  console.log('🔍 Trying decoded ID:', decodedId)
  
  if (ARTICLE_ROUTES[decodedId]) {
    console.log('✅ Found article with decoded ID')
    return ARTICLE_ROUTES[decodedId]
  }
  
  // Try encoded version (in case the key is encoded)
  try {
    const encodedId = encodeURIComponent(id)
    console.log('🔍 Trying encoded ID:', encodedId)
    
    if (ARTICLE_ROUTES[encodedId]) {
      console.log('✅ Found article with encoded ID')
      return ARTICLE_ROUTES[encodedId]
    }
  } catch (encodeError) {
    console.log('⚠️ Failed to encode ID for lookup')
  }
  
  // Fuzzy matching attempt - check if any key contains the essence of the ID
  const keys = Object.keys(ARTICLE_ROUTES)
  console.log('🔍 Available article keys:', keys)
  console.log('🔍 Looking for match with:', decodedId)
  
  // Try partial matching
  const partialMatch = keys.find(key => {
    return key.includes(decodedId) || decodedId.includes(key) || 
           key.replace(/[^\u0590-\u05FF\w-]/g, '') === decodedId.replace(/[^\u0590-\u05FF\w-]/g, '')
  })
  
  if (partialMatch) {
    console.log('✅ Found article with partial match:', partialMatch)
    return ARTICLE_ROUTES[partialMatch]
  }
  
  console.log('❌ No article found for:', id)
  return null
}
