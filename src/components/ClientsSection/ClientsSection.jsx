import React, { Suspense } from 'react'

import styles from '@/styles/home.module.css'
import initTranslations from '@/locales/i18n'
import GovClientsSlider from '../Slider/GovClientsSlider'
import ThanksSlider from '../Slider/ThanksSlider'

const ClientsSection = async ({locale}) => {
    const { t } = await initTranslations(locale, ['home'])
    return (
        <section className={styles['home-clients']}>
            <div className='container'>
                <div className={styles['home-clients__gov-clients']}>
                    <h2 className={styles['home-sections-header']}
                        dangerouslySetInnerHTML={{ __html: t('home:gov_clients.title', { interpolation: { escapeValue: false } }) }}
                    ></h2>
                    <GovClientsSlider />
                </div>
                <div className={styles['home-clients__thanks-letters']}>
                    <h2
                        dangerouslySetInnerHTML={{ __html: t('home:thank_letters.title', { interpolation: { escapeValue: false } }) }}
                    ></h2>
                    <Suspense fallback={<div>...loading</div>}>
                    <ThanksSlider />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default ClientsSection