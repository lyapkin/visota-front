import React from 'react'
import Image from 'next/image'

import s from '@/styles/success.module.css'

const Success = () => {
	return (
		<div className={`${s['success']} first-screen`}>
			<div className='container'>
				<h1 className={s['success__title']}>Спасибо за заявку</h1>
				<div className={s['success__content']}>
					<div className={s['success__icon']}><Image src={'/svgs/success.svg'} width={45} height={45} /></div>
					<div className={s['success__text']}>
						Вы успешно отправили заявку.<br/>
						В ближайшее время мы свяжемся с Вами.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Success