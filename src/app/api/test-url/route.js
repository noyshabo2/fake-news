import { NextResponse } from 'next/server'
import { decodeHebrewUrl, ARTICLE_ROUTES } from '../../../utils/urlUtils.js'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const testUrl = searchParams.get('url') || 'האקרית-שהצילה-את-wix'
  
  console.log('🧪 Testing URL:', testUrl)
  
  const results = {
    input: testUrl,
    hasPercent: testUrl.includes('%'),
    
    // Different decoding attempts
    decoding: {
      single: (() => {
        try { return decodeURIComponent(testUrl) } 
        catch(e) { return 'ERROR: ' + e.message }
      })(),
      
      double: (() => {
        try { 
          const first = decodeURIComponent(testUrl)
          return decodeURIComponent(first)
        } catch(e) { return 'ERROR: ' + e.message }
      })(),
      
      custom: decodeHebrewUrl(testUrl)
    },
    
    // Article matching
    matching: {
      directMatch: ARTICLE_ROUTES[testUrl] ? 'Found' : 'Not found',
      decodedMatch: (() => {
        const decoded = decodeHebrewUrl(testUrl)
        return ARTICLE_ROUTES[decoded] ? 'Found' : 'Not found'
      })(),
      availableKeys: Object.keys(ARTICLE_ROUTES)
    },
    
    // Character analysis
    analysis: {
      length: testUrl.length,
      chars: testUrl.split('').map(char => ({
        char,
        code: char.charCodeAt(0),
        hex: char.charCodeAt(0).toString(16)
      }))
    }
  }
  
  return NextResponse.json(results, { 
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  })
}

export async function POST(request) {
  const body = await request.json()
  const { testUrls = [] } = body
  
  const results = testUrls.map(url => ({
    url,
    decoded: decodeHebrewUrl(url),
    found: ARTICLE_ROUTES[decodeHebrewUrl(url)] ? true : false
  }))
  
  return NextResponse.json({
    tested: testUrls.length,
    results,
    availableArticles: Object.keys(ARTICLE_ROUTES)
  })
}
