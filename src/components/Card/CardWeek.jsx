import React from 'react';

import style from './CardWeek.module.scss';
import s from '../../img/SVG/fog.svg';

const CardWeek = () => {
	return (
		<div className={style.card}>
			<div className={style.card__title}>Sun</div>
			<img className={style.card__img} width={70} src={s} alt="s" />
			<div className={style.card__descr}>
				15&#xb0; <span>-3&#xb0;</span>
			</div>
		</div>
	);
};

export default CardWeek;
