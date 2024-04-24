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
import AboutSection from '@/components/AboutSection/AboutSection';
import ClientsSection from '@/components/ClientsSection/ClientsSection';
import DeliverySection from '@/components/DeliverySection/DeliverySection';

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
					{/* <div className={`${styles['home-main__info']} ${styles['info']}`}>
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
					</div> */}
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
							<img src='/images/advantages/money.png' alt='деньги' />
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
			<DeliverySection locale={locale} />

			<ClientsSection locale={locale} />

			<AboutSection locale={locale} />

			{/* <section className={styles['home-special-offer']}>
				<div className='container'>
					<SpecialOfferSlider />
				</div>
			</section> */}


		</main>
	);
}
