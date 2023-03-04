import React from 'react';
import { useSelector } from 'react-redux';

import CardWeek from '../Card/CardWeek';

import style from './Content.module.scss';

const Content = () => {
	const valueWeek = useSelector((state) => state.weatherWeek);
	const valueDay = useSelector((state) => state.weatherDay);

	const statusWeek = valueWeek.status;
	const dataWeek = valueWeek.value;
	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<div className={style.header__select}>
					<button className={style.header__select__btn}>&#xb0;C</button>
					<button className={style.header__select__btn}>&#xb0;F</button>
				</div>
			</div>
			<div className={style.card__wrapper}>
				{statusWeek === 'ok'
					? dataWeek
							.slice(1)
							.map((value) => (
								<CardWeek
									key={value.datetime}
									maxTemp={value.high_temp}
									minTemp={value.low_temp}
									dateTime={value.datetime}
									codeIcon={value.weather.code}
								/>
							))
					: null}
			</div>
			<div className={style.title}>Today`s Highlights</div>
		</div>
	);
};

export default Content;
