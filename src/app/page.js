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

export default function Home() {
	return (
		<main>
			<section className={`${styles['home-main']} first-screen`}>
				<div className='container' style={{position: 'relative'}}>
						<h1 className={styles['home-main__header']}><span>Поставка комлектующих</span> для строительных объектов</h1>
						<p className={styles['home-main__promise']}>Обеспечим поставку наших товаров в кратчайшие сроки <span>со склада в Москве</span>, или <span>привезем из Китая</span></p>
						<div className={styles['home-main__actions']}>
							<Button text={'Получить коммерческое предложение'} />
						</div>
						<div className={`${styles['home-main__info']} ${styles['info']}`}>
							<div className={styles['info__item']}>
								<p>Более <span>500 тыс единиц тваров</span> на складе</p>
								<div className={styles['info__img']}>
									<img src="/images/home-main-info1.png" alt=""/>
								</div>
							</div>
							<div className={styles['info__item']}>
								<p>Собственное <span>производство в Китае</span></p>
								<div className={styles['info__img']}>
									<img src="/images/home-main-info2.png" alt="city"/>
								</div>
							</div>
						</div>
					<div>

					</div>
					<HomeFrontSlider />
				</div>
			</section>
			<section className={styles['home-advantages']}>
				<div className='container'>
					<h2 className={styles['home-sections-header']}>Какие преимущества вы получите <span>сотрудничая с компанией ВЫСОТА ?</span></h2>
					<div className={styles['home-advantages-content']}>
						<div className={`${styles['home-advantages-block']} ${styles['home-advantages-block-1']}`}>
							<div className={styles['home-advantages-block-text']}>
								<h5>Имеем все необходимые <span>лицензии и допуски</span> на продукцию</h5>
								<p>
									Наша продукция имеет сертификаты и протоколы испытаний, стандарт качества EN74-1/BS1139
								</p>
							</div>
							<div className={styles['home-advantages-block-img']}>
								<img src='/images/advantages/papers.png' alt='лицензия' />
							</div>
						</div>
						<div className={`${styles['home-advantages-block']} ${styles['home-advantages-block-2']}`}>
							<div className={styles['home-advantages-block-text']}>
								<h5>Мы работаем напрямую <span>с проверенными зарубежными производителями</span></h5>
								<p>
									{'Компания «Высота» (ООО «Уралснабресурс») является производителем строительных лесов в Китае на заводах TYT CO. LTD.  Полный ассортимент строительных лесов, опалубки и средств безопасности для строительной и промышленной отрасли.'}
								</p>
							</div>
							<div className={styles['home-advantages-block-img']}>
								<img src='/images/advantages/truck.png' alt='грузовик' />
							</div>
						</div>
						
						<div className={`${styles['home-advantages-block']} ${styles['home-advantages-block-3']}`}>
							<div className={styles['home-advantages-block-text']}>
								<h5><span>Широкий ассортимент</span> продукции и система контроля качества</h5>
								<p>
								Благодаря тесным контактам с другими производителями оборудования на территории России предлагаем клиентам наилучшие решения их задач при минимальных затратах.
								</p>
							</div>
							<div className={styles['home-advantages-block-img']}>
								<img src='/images/advantages/calendar.png' alt='календарь' />
							</div>
						</div>
						<div className={`${styles['home-advantages-block']} ${styles['home-advantages-block-4']}`}>
							<div className={styles['home-advantages-block-text']}>
								<h5>Гарантируем <span>лучшую стоимость</span> на рынке</h5>
								<p>
									Мы сами производим хомуты и комплектующие на заводах в Китае и Индии, поэтому предлагаем самые доступные цены.
								</p>
							</div>
							<div className={styles['home-advantages-block-img']}>
								<img src='/images/advantages/receipt.png' alt='деньги' />
							</div>
						</div>
						
					</div>
					<div className={styles['home-advantages-form']}>
						<Form main={false}/>
					</div>
				</div>
			</section>
			<section className={styles['home-catalog']}>
				<div className='container'>
					<h2 className={styles['home-sections-header']}>Каталог <span>комплектующих</span></h2>
					<CatalogSlider />
				</div>
			</section>
			<section className={styles['home-projects']}>
				<div className='container'>
					<h2 className={styles['home-sections-header']}>Нам доверяют комплектацию <span>самых ответственных объектов</span></h2>
					<ProjectsSlider />
				</div>
			</section>
			<section className={styles['home-delivery']}>
				<div className='container' >
					<h2 className={styles['home-sections-header']}>Доставка <span>в любую точку</span>  России и стран СНГ</h2>
					<p>Обеспечим поставку наших товаров в кратчайшие сроки со склада в Москве, или привезем из Китая.</p>
					<div className={styles['home-delivery__map-contact-block']}>
						<div className={styles['home-delivery__delivery-map']}>
							<img src='/images/delivery-map.svg' alt='фон'/>
						</div>
						<div className={styles['home-delivery__contact']}>
							<h4>Офис Уфа</h4>
							<p>г. Уфа ул. Зорге 19/1</p>
							<span>Пн-Пт, с 09:00 до 18:00,</span>
							<span>Сб-Вс, Выходной</span>
							<p>8 800 700 54 13</p>
						</div>
					</div>
					<div className={styles['home-reputation']}>
						<h3 className={styles['home-sections-header']}>Надежная <span>репутация</span>, проверенная временем</h3>
						<ReputationBlocks />
					</div>
				</div>
			</section>
			
			<section className={styles['home-clients']}>
				<div className='container'>
					<div className={styles['home-clients__gov-clients']}>
						<h2 className={styles['home-sections-header']}>Осуществляем  комплектации объектов <span>крупнейших государственных компаний</span></h2>
						<GovClientsSlider />
					</div>
					<div className={styles['home-clients__thanks-letters']}>
						<h2>Благодарственные письма</h2>
						<ThanksSlider />
					</div>
				</div>
			</section>

			<section className={styles['home-about']}>
				<div className='container'>
					<div className={styles['home-about__video']}>
						<h6>Смотрите видео о нас</h6>
						<video controls="controls" poster='/images/home-about-video-preview.jpg'>
							<source src="/videos/visota.mp4" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2"/>
						</video>
					</div>
					<div className={styles['home-about__description']}>
						<h2 className={styles['home-sections-header']}>Компания «Высота» - <span className={styles['home-about__header-bold']}>ведущий поставщик</span> В РФ и СНГ <span className={styles['home-about__header-blue']}>строительных лесов и опалубки</span></h2>
						<div>
							<p>Мы производим комплектующие на крупнейших заводах в Китае, что позволяет нам предложить лучшие цены на рынке на нашу продукцию. Комплектующие производятся на современном оборудовании.</p>
							<p>Мы производим комплектующие на крупнейших заводах в Китае, что позволяет нам предложить лучшие цены на рынке на нашу продукцию. Комплектующие производятся на современном оборудовании.</p>
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
