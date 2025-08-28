import React from 'react'

export default function ArticlePage() {
  return (
    <article className="article container">
      <div className="breadcrumbs">
        <a href="https://timeout.co.il/">טיים אאוט</a>
        <span>/</span>
        <a href="https://timeout.co.il/">הבועה</a>
      </div>

      <header className="article-header">
        <div className="kicker">חשיפה</div>
        <h1 className="title">“נוכל הדייטים מתל אביב”</h1>
        <div className="meta">
          <span>מערכת</span>
          <span className="dot">•</span>
          <time>היום</time>
        </div>
        <p className="subtitle">הוא לא מיליונר יהלומים, לא טס בפרייבט ג’ט, ובטח שלא חבר של דן בילזריאן, אבל האשכנזי הגבוה עם העיניים הכחולות ממיאמי הפך בחודשים האחרונים לאגדה אורבנית בתל אביב.</p>
      </header>

      <figure className="hero">
        <img src="/assets/aa2.jpg" alt="דמות ראשית" />
        <figcaption>צילום שסופק על ידי העורכים</figcaption>
      </figure>

      <div className="article-body">
        <p>עשרות נשים בעיר מתארות את אותה התבנית החוזרת: “חשבתי שאני מיוחדת… הוא הזמין אותי לקוקטיילים, טיול שקיעה בטיילת, דירה “פנסי” על בן גוריון ואז נעלם. בלי סימן. פשוט התאדה.”</p>
        <p>אחרות מספרות על היכרות קצרה אך אינטנסיבית: “יש לו מבט כחול שמפיל אותך. הוא גורם לך להרגיש שאת היחידה, ואז למחרת כבר יוצא עם מישהי אחרת מהחבורה שלך.”</p>
        <p>בין הבנות כבר הוצמד לו כינוי: <strong>מיאמי בוי</strong>.</p>
        <p>בתחילה הוא הציג עצמו כ”בחור התמים ממיאמי שעובד על למצוא בחורה לחתונה”. בפועל, זה הפך למסע כיבושים אינסופי  מדיזינגוף ועד חוף הילטון.</p>

        <div className="inline-image">
          <img src="/assets/aa3.JPG" alt="תמונה נוספת" />
          <span className="caption">צילום שסופק על ידי העורכים</span>
        </div>

        <h2>העדויות נערמות</h2>
        <blockquote>“הוא אמר לי שאני שונה ולא כמו הבחורות של מיאמי.”</blockquote>
        <blockquote>“שלח לי הודעה: ‘נמאס לי מכל הסטוצים הריקניים אני מרגיש שאיתך זה משו שיוכל להוביל לחתונה״</blockquote>
        <blockquote>“כששאלתי אם הוא רציני, הוא אמר: ‘אני רציני, מחפש בחורה יהודייה טובה להתחתן איתה  אבל רק אם היא מתחת גיל 23.’”</blockquote>
      </div>

      <footer className="article-footer">
        <div className="tags">
          <a href="https://timeout.co.il/">#תל_אביב</a>
          <a href="https://timeout.co.il/">#נוכל</a>
          <a href="https://timeout.co.il/">#המתחזים</a>
          <a href="https://timeout.co.il/">#דייטינג</a>
        </div>
        <div className="share">
          <a href="https://timeout.co.il/">שיתוף בפייסבוק</a>
          <a href="https://timeout.co.il/">שיתוף בטוויטר</a>
        </div>
      </footer>
    </article>
  )
}


