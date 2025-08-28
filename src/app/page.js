import React from 'react'
import Link from 'next/link'

export default function Home() {
  const articles = [
    {
      id: "נוכל הדייטים מתל אביב",
      title: "נוכל הדייטים מתל אביב",
      kicker: "חשיפה",
      subtitle: "הוא לא מיליונר יהלומים, לא טס בפרייבט ג'ט, ובטח שלא חבר של דן בילזריאן, אבל האשכנזי הגבוה עם העיניים הכחולות ממיאמי הפך בחודשים האחרונים לאגדה אורבנית בתל אביב.",
      image: "/assets/aa2.jpg",
      href: "/article/נוכל-הדייטים-מתל-אביב"
    },
    {
      id: "האקרית שהצילה את wix",
      title: "האקרית שהצילה את wix",
      kicker: "סייבר",
      subtitle: "אבטחת מידע נוי שבו, עובדת Wix, סיכלה מתקפת האקרים מאיראן",
      image: "/assets/noy-shabo.png",
      href: "/article/האקרית-שהצילה-את-wix"
    }
  ]

  return (
    <div className="container">
      <section className="hero-section">
        <h1 className="sr-only">טיים אאוט תל אביב - חדשות ותרבות</h1>
        <div className="featured-articles">
          {articles.map((article) => (
            <article key={article.id} className="featured-article">
              <Link href={article.href}>
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="article-content">
                  <div className="kicker">{article.kicker}</div>
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-subtitle">{article.subtitle}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      
      <section className="more-articles">
        <h2>עוד חדשות</h2>
        <div className="articles-grid">
          <div className="article-card">
            <h3>סצינת המוזיקה בתל אביב</h3>
            <p>מבט על המועדונים החדשים שפותחים בעיר</p>
          </div>
          <div className="article-card">
            <h3>מסעדות חדשות שחובה להכיר</h3>
            <p>הכתובות החמות ביותר לשבוע הזה</p>
          </div>
          <div className="article-card">
            <h3>תערוכות וגלריות</h3>
            <p>האירועי התרבות שמומלצים לסוף השבוע</p>
          </div>
        </div>
      </section>
    </div>
  )
}
