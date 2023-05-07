import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import { Image } from '@mui/icons-material';


const Home = () => {
    {
        var items = [
            {
                name: "1 theh best place for hosting",
                description: "theh best place for hosting",
                image: "http://localhost:3600/images/פינוי-בינוי-רמת-אליהו.jpg"
            },
            {
                name: "2 theh best place for hosting",
                description: "theh best place for hosting",
                image: "http://localhost:3600/images/לאתר-הדמיה-משמר-הגבול-10.jpg"
            },
            {
                name: "3 theh best place for hosting",
                description: "theh best place for hosting",
                image: "http://localhost:3600//images/duniz.jpg"
            },
            {
                name: "1 theh best place for hosting",
                description: "theh best place for hosting",
                image: "http://localhost:3600/images/פינוי-בינוי-רמת-אליהו.jpg"
            },
            {
                name: "2 theh best place for hosting",
                description: "theh best place for hosting",
                image: "http://localhost:3600/images/לאתר-הדמיה-משמר-הגבול-10.jpg"
            },
            {
                name: "3 theh best place for hosting",
                description: "theh best place for hosting",
                image: "http://localhost:3600//images/duniz.jpg"
            },


        ]

        return (

            <>
                <Carousel animation='slide' duration={2500}>
                    {
                        items.map((item, i) => <Item key={i} item={item} sx={{ height: "100%" }} />)
                    }
                </Carousel>
                <Typography>מגמות בהתחדשות עירונית</Typography>
                <Typography>ישנן גישות שונות לדרכים בהן ניתן ליישם התחדשות עירונית:</Typography>
                <Typography>פינוי בינוי – הריסת מתחמים קיימים, לרוב הנמצאים במצב תשתיתי ירוד, ובניית מתחמים חדשים במקומם, תוך ציפוף המרקם הקיים: תוספת דירות, שיקום תשתיות בסביבת המתחם (תחבורה, ביוב, חשמל) ופיתוח נופי (גנים ציבוריים). כדי ליישם את שיטת הפינוי-בינוי, מתפנים הדיירים המקומיים (בהליך מוסכם ומתואם מראש) למתחם חלופי לתקופת הבנייה. בתום בניית המתחם מחדש אמורים התושבים לחזור לדירה שקיבלו בהסכם במתחם החדש. בשל שדרוג המתחמים לעיתים עולות הוצאות התחזוקה והדיירים המקוריים או דיירים בעלי מאפיינים סוציו-אקונומי דומה לא תמיד יכולים לשאת בהוצאות. לצורך פתרון בעיה זו, משולבים בפרויקטים דירות במסגרת "דיור בר השגה" ודירות בגדלים שונים כך שתמהיל האוכלוסייה החי במקום יהיה מגוון. בתהליך זה מתקבלים אזורים במרכזים עירוניים קיימים בעלי תשתיות חדשות ומגורים ועסקים המספקים איכות חיים גבוהה יותר ממנה נהנים גם הדיירים וגם הסביבה העירונית הרחבה.</Typography>
                <Typography>שדרוג ושיקום מתחמים קיימים – שדרוג של מתחמי מגורים, מסחר או תשתיות קיימות בתוך הרקמה העירונית הקיימת. דוגמה לכך הוא פרויקט שיקום שכונות (1977), במסגרתה שוקמו שכונות מצוקה עניות בתוך הערים. השיקום כלל מבני מגורים, חינוך ותשתיות. דוגמה לפרויקט שדרוג ושיקום תשתיות הוא פארק ההיי-ליין בניו-יורק: שדרוג ומתן שימוש מחדש לתשתית רכבת ישנה שעברה בתוך העיר והפיכתה לפארק וטיילת. שדרוג התשתית והכנסת תוכן חדש לשימוש בה הביא להתחלה של התחדשות בכל השכונה ובניית מתחמי מגורים חדשים כמו גם מינוף כלכלי ותיירותי לשכונה כולה. גישה זו מאפשרת לדיירים להישאר בבתיהם בזמן שדרוג המבנים, כלומר אינה מחייבת פינויים. לרוב הדיירים מקבלים זכות להרחבת הדירה הפרטית ומקבלים שדרוג בתשתיות של המבנה (מים, חשמל, חיזוק מבני) ובתשתיות של הסביבה (השטחים הפתוחים, חניות, כבישים). היתרון של השארות הדיירים בבניין בזמן השדרוג יכול להוות גם חסרון שכן המשמעות היא לגור במתחם בנייה לתקופה שאינה ידועה מראש. יתרון נוסף לגישה זו היא האפשרות לבצע פעולת שדרוג נקודתית בעיר מבלי לפגוע באופן בוטה במהלך החיים בעיר.</Typography>

            </>
        )
    }
}
function Item(props) {
    return (
        <Paper className="carousel-image" sx={{ flexFlow: "column", backgroundImage: `url(${props.item.image})`, backgroundSize: "100% 100%" }}>
            <h2>{props.item.name}</h2>
            <p style={{ height: "400px" }}>{props.item.description}</p>
        </Paper>
    )
}
export default Home