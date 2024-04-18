// 'use client'
import Form from '@/components/Form/Form';
import AboutAchievements from '@/components/Home/about/AboutAchievements';
import SpecialOfferSlider from '@/components/Slider/SpecialOfferSlider';
import GovClientsSlider from '@/components/Slider/GovClientsSlider';
import ProjectsSlider from '@/components/Slider/ProjectsSlider';
import ThanksSlider from '@/components/Slider/ThanksSlider';
import Button from '@/components/UI/Buttons/Button';
import styles from '@/styles/home.module.css'
import Image from 'next/image';
import CatalogSlider from '@/components/Slider/CatalogSlider';
import HomeFrontSlider from '@/components/Slider/HomeFrontSlider';
import ReputationBlocks from '@/components/Home/reputation/ReputationBlocks';
import PopupForm from '@/components/Form/PopupForm';
import initTranslations from '@/locales/i18n';

export default async function Home({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, ['home', 'common'])
	return (
		<main>
			<section className={`${styles['home-main']} first-screen`}>
				<div className='container' style={{ position: 'relative' }}>
					<h1 className={styles['home-main__header']}
						dangerouslySetInnerHTML={{ __html: t('home:main.title', { interpolation: { escapeValue: false } }) }}
					>
					</h1>
					<p className={styles['home-main__promise']}
						dangerouslySetInnerHTML={{ __html: t('home:main.second', { interpolation: { escapeValue: false } }) }}
					>
					</p>
					<div className={styles['home-main__actions']}>
						<PopupForm text={t('main.button')} />
					</div>
					<div className={`${styles['home-main__info']} ${styles['info']}`}>
						<div className={styles['info__item']}>
							<p
								dangerouslySetInnerHTML={{ __html: t('home:main.block_first', { interpolation: { escapeValue: false } }) }}
							>
							</p>
							<div className={styles['info__img']}>
								<img src="/images/home-main-info1.png" alt="" />
							</div>
						</div>
						<div className={styles['info__item']}>
							<p
								dangerouslySetInnerHTML={{ __html: t('home:main.block_second', { interpolation: { escapeValue: false } }) }}
							>
							</p>
							<div className={styles['info__img']}>
								<img src="/images/home-main-info2.png" alt="city" />
							</div>
						</div>
					</div>
					<div className={styles['home-main__slider']}>
						<HomeFrontSlider />
					</div>
					{/* <HomeFrontSlider /> */}
				</div>
			</section>
			<section className={styles['home-advantages']}>
				<div className='container'>
					<h2 className={styles['home-sections-header']}
						dangerouslySetInnerHTML={{ __html: t('home:advantages.title', { interpolation: { escapeValue: false } }) }}
					>
					</h2>
					<div className={styles['home-advantages-content']}>
						<div className={`${styles['home-advantages-block']} ${styles['home-advantages-block-1']}`}>
							<img src='/images/advantages/papers.png' alt='лицензия' />
							<h5
								dangerouslySetInnerHTML={{ __html: t('home:advantages.first_block_title', { interpolation: { escapeValue: false } }) }}
							>
							</h5>
							<p>
								{t('home:advantages.first_block_text')}
							</p>
						</div>
						<div className={`${styles['home-advantages-block']} ${styles['home-advantages-block-2']}`}>
							<img src='/images/advantages/truck.png' alt='грузовик' />
							<h5
								dangerouslySetInnerHTML={{ __html: t('home:advantages.second_block_title', { interpolation: { escapeValue: false } }) }}
							>
							</h5>
							<p>
								{t('home:advantages.second_block_text')}
							</p>
						</div>

						<div className={`${styles['home-advantages-block']} ${styles['home-advantages-block-3']}`}>
							<img src='/images/advantages/calendar.png' alt='календарь' />
							<h5
								dangerouslySetInnerHTML={{ __html: t('home:advantages.third_block_title', { interpolation: { escapeValue: false } }) }}
							>
							</h5>
							<p>
								{t('home:advantages.third_block_text')}
							</p>
						</div>
						<div className={`${styles['home-advantages-block']} ${styles['home-advantages-block-4']}`}>
							<img src='/images/advantages/receipt.png' alt='деньги' />
							<h5
								dangerouslySetInnerHTML={{ __html: t('home:advantages.forth_block_title', { interpolation: { escapeValue: false } }) }}
							>
							</h5>
							<p>
								{t('home:advantages.forth_block_text')}
							</p>
						</div>

					</div>
					<div className={styles['home-advantages-form']}>
						<Form main={false} />
					</div>
				</div>
			</section>
			<section className={styles['home-catalog']}>
				<div className='container'>
					<h2 className={styles['home-sections-header']}
						dangerouslySetInnerHTML={{ __html: t('home:catalog.title', { interpolation: { escapeValue: false } }) }}
					></h2>
					<CatalogSlider />
				</div>
			</section>
			<section className={styles['home-projects']}>
				<div className='container'>
					<h2 className={styles['home-sections-header']}
						dangerouslySetInnerHTML={{ __html: t('home:projects.title', { interpolation: { escapeValue: false } }) }}
					></h2>
					<ProjectsSlider />
				</div>
			</section>
			<section className={styles['home-delivery']}>
				<div className='container' >
					<h2 className={styles['home-sections-header']}
						dangerouslySetInnerHTML={{ __html: t('home:delivery.title', { interpolation: { escapeValue: false } }) }}
					></h2>
					<p>{t('home:delivery.text')}</p>
					<div className={styles['home-delivery__map-contact-block']}>
						<div className={styles['home-delivery__delivery-map']}>
							<img src='/images/delivery-map.svg' alt='фон' />
						</div>
						<div className={styles['home-delivery__contact']}>
							<h4>{t('common:office_ufa')}</h4>
							<p>{t('common:address')}</p>
							<span>{t('common:schedule_workweek')},</span>
							<span>{t('common:schedule_weekend')}</span>
							<p>8 800 700 54 13</p>
						</div>
					</div>
					<div className={styles['home-reputation']}>
						<h3 className={styles['home-sections-header']}
							dangerouslySetInnerHTML={{ __html: t('home:reputation.title', { interpolation: { escapeValue: false } }) }}
						></h3>
						<ReputationBlocks />
					</div>
				</div>
			</section>

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
						<ThanksSlider />
					</div>
				</div>
			</section>

			<section className={styles['home-about']}>
				<div className='container'>
					<div className={styles['home-about__video']}>
						<h6>{t('home:about.video')}</h6>
						<video controls="controls" poster='/images/home-about-video-preview.jpg'>
							<source src="/videos/visota.mp4" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2" />
						</video>
					</div>
					<div className={styles['home-about__description']}>
						<h2 className={styles['home-sections-header']}
							dangerouslySetInnerHTML={{ __html: t('home:about.title', { interpolation: { escapeValue: false } }) }}
						></h2>
						<div>
							<p>{t('home:about.text')}</p>
							<p>{t('home:about.text')}</p>
						</div>
					</div>
					<AboutAchievements />
				</div>
			</section>

			<section className={styles['home-special-offer']}>
				<div className='container'>
					<SpecialOfferSlider />
				</div>
			</section>


		</main>
	);
}
