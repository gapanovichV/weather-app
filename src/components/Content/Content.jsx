import React from 'react';

import CardWeek from '../Card/CardWeek';

import style from './Content.module.scss';

const Content = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<div className={style.header__select}>
					<button className={style.header__select__btn}>&#xb0;C</button>
					<button className={style.header__select__btn}>&#xb0;F</button>
				</div>
			</div>
			<div className={style.card__wrapper}>
				<CardWeek />
			</div>
			<div className={style.title}>Today`s Highlights</div>
		</div>
	);
};

export default Content;
