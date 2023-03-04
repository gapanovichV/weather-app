import React from 'react';

import { weatherIcon } from '../weatherIcon';

import style from './CardWeek.module.scss';

const CardWeek = ({ maxTemp, minTemp, dateTime, codeIcon }) => {
	const getWeekDay = (date) => {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Tru', 'Fri', 'Sat'];

		return days[date.getDay()];
	};
	const date = new Date(dateTime);
	return (
		<div className={style.card}>
			<div className={style.card__title}>{getWeekDay(date)}</div>
			<img
				className={style.card__img}
				src={`../src/img/SVG/${weatherIcon(codeIcon)}`}
				alt="weather"
			/>
			<div className={style.card__descr}>
				{Math.round(maxTemp)}&#xb0; <span>{Math.round(minTemp)}&#xb0;</span>
			</div>
		</div>
	);
};

export default CardWeek;
