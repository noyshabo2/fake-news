import Link from 'next/link'
import { generateArticleUrl, ARTICLE_ROUTES } from '../utils/urlUtils.js'

/**
 * Component for creating proper links to articles
 * Handles Hebrew URL encoding automatically
 */
export default function ArticleLink({ articleId, children, className = '', ...props }) {
  const articleInfo = ARTICLE_ROUTES[articleId]
  
  if (!articleInfo) {
    console.warn(`Article not found: ${articleId}`)
    return <span className={className}>{children || articleId}</span>
  }

  const url = generateArticleUrl(articleId)
  const title = articleInfo.title

  return (
    <Link 
      href={url} 
      className={className}
      title={title}
      {...props}
    >
      {children || title}
    </Link>
  )
}

// Usage example:
export function ArticleList() {
  return (
    <div>
      <h2>מאמרים אחרונים</h2>
      <ul>
        <li>
          <ArticleLink articleId="נוכל-הדייטים-מתל-אביב">
            קראו על נוכל הדייטים מתל אביב
          </ArticleLink>
        </li>
        <li>
          <ArticleLink articleId="האקרית-שהצילה-את-wix">
            סיפורה של האקרית שהצילה את Wix
          </ArticleLink>
        </li>
      </ul>
    </div>
  )
}
