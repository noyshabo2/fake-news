import React from 'react'

export default function ArticlePage() {
  return (
    <article className="article container">
      <div className="breadcrumbs">
        <a href="https://timeout.co.il/">טיים אאוט</a>
        <span>/</span>
        <a href="https://timeout.co.il/">טכנולוגיה</a>
      </div>

      <header className="article-header">
        <div className="kicker">אבטחת מידע</div>
        <h1 className="title">נוי שבו, עובדת Wix, סיכלה מתקפת האקרים מאיראן</h1>
        <div className="meta">
          <span>מערכת</span>
          <span className="dot">•</span>
          <time>היום</time>
        </div>
        <p className="subtitle">נוי שבו, מהצוות ההנדסי של Wix, זיהתה בזמן אמת דפוסים חריגים שהעידו על מתקפה ממוקדת מצד קבוצת האקרים איראנית – והובילה סיכול מהיר ללא פגיעה בשירות. כעת היא מועמדת ל"עובדת החודש".</p>
      </header>

      <figure className="hero">
        <img src="/assets/noy-shabo.png" alt="תצלום אילוסטרטיבי של עבודה בזמן תקרית" />
        <figcaption>תצלום שסופק על ידי העורכים</figcaption>
      </figure>

      <div className="article-body">
        <p>בשעות הערב המאוחרות, כאשר רוב הצוותים כבר ירדו מהדשבורדים, נוי שבו הבחינה בעלייה חריגה בתעבורה מכיוונים בלתי שגרתיים. בדיקה מהירה העלתה שמדובר בניסיונות חודרניים מתוזמנים, המאופיינים בפרופיל המקושר לקבוצות תקיפה איראניות.</p>
        <p>שבו ריכזה את צוות התגובה המהירה, הפעילה חוקים ממוקדים ב-WAF, בודדה צמתים חשודים, והסיטה בקשות למאגני סייבר חיצוניים – וכל זאת מבלי לפגוע בזמני התגובה לגולשים.</p>
        <p>במקביל, הוקפצו מומחי האבטחה של Wix שהעמיקו באיסוף ממצאים וטיוב החסימות. השרתים נותרו זמינים לכל אורכה של התקרית, והניסיון לפגיעה בתשתיות האתר נבלם באופן נקודתי.</p>

        <div className="inline-image">
          <img src="/assets/image.png" alt="דיאגרמת זרימת אבטחה" />
          <span className="caption">כלי ניטור ותיאום תגובה מהירה</span>
        </div>

        <h2>מאחורי הקלעים של הסיכול</h2>
        <blockquote>"זה היה שילוב של אינטואיציה מבוססת נתונים ונהלים קפדניים. זיהינו, מיפינו, חסמנו — בלי דרמה מיותרת." — נוי שבו</blockquote>
        <blockquote>"המקצועיות והקור רוח של נוי מנעו הסלמה והשפעה על המשתמשים." — ראש צוות אבטחת מידע ב-Wix</blockquote>
        <p>בעקבות האירוע, הנהלת Wix שיבחה את התפקוד והודיעה כי נוי שבו נשקלת לתואר <strong>עובדת החודש</strong> על תרומתה הקריטית לשמירת רציפות השירות והאמון של מיליוני משתמשים.</p>
      </div>

      <footer className="article-footer">
        <div className="tags">
          <a href="https://timeout.co.il/">#ויקס</a>
          <a href="https://timeout.co.il/">#אבטחת_מידע</a>
          <a href="https://timeout.co.il/">#סייבר</a>
          <a href="https://timeout.co.il/">#איראן</a>
          <a href="https://timeout.co.il/">#הייטק</a>
        </div>
        <div className="share">
          <a href="https://timeout.co.il/">שיתוף בפייסבוק</a>
          <a href="https://timeout.co.il/">שיתוף בטוויטר</a>
        </div>
      </footer>
    </article>
  )
}


