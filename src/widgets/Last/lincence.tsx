'use client'
import React from 'react';
import styles from './licence.module.css'
import { handleDownloadDoc } from "src/feature/download-prez";
import { LinkButton } from 'src/shareds/button/button';

const Licence:React.FC = ()=>{
    const arrLicenceText=['Свидетельство об аккредитации на право осуществления инжиниринговых услуг по техническому надзору',
        'Свидетельство об аккредитации на право осуществления экспертных работ',
        'Свидетельство об аккредитации на право управления проектами',
        'Лицензия на инженерно-геодезические работы',
        'Сертификат соответствия государственной системы технического регулирования'
    ]
    return(
        <div className={styles.container} style={{gap:'20px'}}>
            <h1>TOO `Engineering Services`</h1>
            <p>БИН 130440013597</p>
            <div className={styles.licenses}>
                <h3>Лицензии</h3>
                <ul>
                    <li>
                        <LinkButton label={arrLicenceText[0]}  currentClick={handleDownloadDoc}/>
                    </li>
                    <li>
                        <LinkButton label={arrLicenceText[1]} currentClick={handleDownloadDoc}/>                  
                    </li>
                    <li>
                        <LinkButton label={arrLicenceText[2]} currentClick={handleDownloadDoc}/>
                    </li>
                    <li>
                        <LinkButton label={arrLicenceText[3]}  currentClick={handleDownloadDoc}/>
                    </li>
                    <li>
                        <LinkButton label={arrLicenceText[4]} currentClick={handleDownloadDoc}/>
                    </li>
                </ul>
            </div>
            <div className={styles.offices}>
                <h3>Офисы</h3>
                <div className={styles.office}>
                    <h4>Головной офис в Казахстане</h4>
                    <p>г. Астана, ул. Сыганак 17/16, 3 этаж</p>
                    <p><a href='tel:+77776771761' className={styles.contact}>+7 777 677 17 61</a></p>
                </div>

                <div className={styles.office}>
                    <h4>Офис в Узбекистане</h4>
                    <p>г. Ташкент, Бешагач микрорайон, 1/12, 1 этаж</p>
                    <p><a href='tel:+998998835641' className={styles.contact}>+998 998 835 641</a></p>
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
