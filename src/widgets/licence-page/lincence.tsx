import React from "react";
import styles from './licence.module.css'

const Licence:React.FC = ()=>{
    return(
        <div className={styles.container} style={{gap:'20px'}}>
            <h1>TOO "Engineering Services"</h1>
            <p>БИН 130440013597</p>
            <div className={styles.licenses}>
                <h3>Лицензии</h3>
                <ul>
                    <li>
                        <a href="#">Свидетельство об аккредитации на право осуществления инжиниринговых услуг по техническому надзору</a>
                    </li>
                    <li>
                        <a href="#">Свидетельство об аккредитации на право осуществления экспертных работ</a>                    </li>
                    <li>
                        <a href="#">Свидетельство об аккредитации на право управления проектами</a>
                    </li>
                    <li>
                        <a href="#">Лицензия на инженерно-геодезические работы</a>                    </li>
                    <li>
                        <a href="#">Сертификат соответствия государственной системы технического регулирования</a>
                    </li>
                </ul>
            </div>
            <div className={styles.offices}>
                <h3>Офисы</h3>
                <div className={styles.office}>
                    <h4>Головной офис в Казахстане</h4>
                    <p>г. Астана, ул. Сыганак 17/16, 3 этаж</p>
                    <p><a href="tel:+77767771761" className="contact">+7 777 677 17 61</a></p>
                </div>

                <div className={styles.office}>
                    <h4>Офис в Узбекистане</h4>
                    <p>г. Ташкент, Бешагач микрорайон, 1/12, 1 этаж</p>
                    <p><a href="tel:+998998835641" className="contact">+998 998 835 641</a></p>
                </div>

                <div className={styles.office}>
                    <h4>Офис в г. Алматы</h4>
                    <p>ул. Егизбаева 9</p>
                </div>

                <div className={styles.office}>
                    <h4>Офис в г. Шымкент</h4>
                    <p>ул. Толеметова 1</p>
                </div>

                <div className={styles.office}>
                    <h4>Офис в г. Атырау</h4>
                    <p>ул. Рыбатан Габдиева 46</p>
                </div>
            </div>
        </div>
    )
}

export default Licence;
