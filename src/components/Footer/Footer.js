import Link from 'next/link'
import React from 'react'

import styles from './footer.module.css'
import FooterCatalog from './FooterCatalog'
import FooterAbout from './FooterAbout'

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={`${styles['footer__grid']} container`}>
				<div className={styles['footer__top']}>
					<div className={styles['footer__company']}>
						<div className={styles['footer__logo']}>
							<a href='/'><img src='/images/visota-logo.png' alt='logo' /></a>
						</div>
						<span>Поставка комплектующих для строительных объектов</span>
					</div>
					<div className={styles['footer__social']}>
						<span>Пишите нам в мессенджеры:</span>
						<figure className={styles['footer__youtube']}>
							<a href='#'>
								<img src='/svgs/youtube-icon.svg' alt='иконка'/>
							</a>
						</figure>
						<figure className={styles['footer__vk']}>
							<a href='#'>
								<img src='/svgs/vk-icon.svg' alt='иконка'/>
							</a>
						</figure>
					</div>
				</div>
				<FooterCatalog />
				<FooterAbout />
				<div className={styles['footer__contacts']}>
					<h6>Контакты</h6>
					<span className={styles['footer__city']}>г. Уфа</span>
					<ul className={styles['footer__numbers']}>
						<li><a href='tel:+78007005413'>
								<img src='/svgs/phone-pic.svg' alt='phone picture' />
								8 800 700 54 13
							</a>
						</li>
						<li><a href='tel:+79677436716'>
								<img src='/svgs/phone-pic.svg' alt='phone picture' />
								8 967 743 67 16
							</a>
						</li>
					</ul>
					<p className={styles['footer__work-schedule']}>
						<span>Пн-Пт, с 09:00 до 18:00,</span>
						<span>Сб-Вс, выходной</span>
					</p>
				</div>
				<div className={styles['footer__contacts-small']} >
					<h6>Телефон</h6>
					<a href='tel:+78007005413'>+7 800 700 54 13</a>
					<p className={styles['footer__work-schedule']}>
						<span>Пн-Пт, с 09:00 до 18:00,</span>
						<span>Сб-Вс, выходной</span>
					</p>
					<div className={styles['mail__main']}>
						<a href='mailto:visota1300@mail.ru'>visota1300@mail.ru</a>
						<a href='mailto:visota1300@mail.ru'>Отправить письмо</a>
					</div>
				</div>
				<div className={styles['footer__mail']}>
					<h6>Почта</h6>
					<div className={styles['mail__main']}>
						<a href='mailto:visota1300@mail.ru'>visota1300@mail.ru</a>
						<span>Пишите письма, скидывайте свои проекты</span>
						<span>рады будем ответить Вам</span>
					</div>
					<div className={styles['mail__commercial']}>
						<span>Для коммерческих предложений</span>
						<a href='mailto:visota1300@mail.ru'>visota1300@mail.ru</a>
					</div>
					<div className={styles['mail__head']}>
						<a href='mailto:visota1300@mail.ru'>Написать руководителю</a>
					</div>
				</div>
			</div>
			<div className={styles['footer__bottom']}>
				<div className={`${styles['footer__bottom-flex']} container`}>
					<span>Все права защищены © {new Date().getFullYear()}. При копировании обязательна ссылка на сайт <a href='https://visota13.ru/'>visota13.ru</a></span>
					<a href='#'>Политика конфиденциальности</a>
					<a href='#'>Пользовательское соглашение</a>
					<span>Сайт разработан командой <a href='#'>Axis-Marketing.ru</a></span>
				</div>
			</div>
		</footer>
	)
}

export default Footer