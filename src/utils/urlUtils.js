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
 * Decode URL-encoded Hebrew text
 * @param {string} encodedText - URL-encoded text
 * @returns {string} - Decoded Hebrew text
 */
export function decodeHebrewUrl(encodedText) {
  try {
    return decodeURIComponent(encodedText)
  } catch (error) {
    console.error('Error decoding URL:', error)
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
 * Get article info by ID (decoded or encoded)
 * @param {string} id - Article ID (can be encoded or decoded)
 * @returns {object|null} - Article info or null if not found
 */
export function getArticleInfo(id) {
  const decodedId = decodeHebrewUrl(id)
  return ARTICLE_ROUTES[decodedId] || null
}
