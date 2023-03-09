import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setParams } from '../redux/params';
import { fetchWeather } from '../redux/weatherDay';
import { fetchWeatherWeek, weatherWeek } from '../redux/weatherWeek';

import CardWeek from '../Card/CardWeek';
import Highlights from '../Highlights/Highlights';

import style from './Content.module.scss';

const Content = () => {
	const dispatch = useDispatch();
	const valueWeek = useSelector((state) => state.weatherWeek);
	const [units, setUnits] = React.useState('m');
	const statusWeek = valueWeek.status;
	const dataWeek = valueWeek.value;

	const handleChangeParams = () => {
		dispatch(setParams(units));
	};

	React.useEffect(() => {
		handleChangeParams();
	}, [units]);

	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<div className={style.header__select}>
					<button onClick={() => setUnits('m')} className={style.header__select__btn}>
						&#xb0;C
					</button>
					<button onClick={() => setUnits('i')} className={style.header__select__btn}>
						&#xb0;F
					</button>
				</div>
			</div>
			<div className={style.card__wrapper}>
				{statusWeek === 'ok' &&
					dataWeek
						.slice(1)
						.map((value) => (
							<CardWeek
								key={value.datetime}
								maxTemp={value.high_temp}
								minTemp={value.low_temp}
								dateTime={value.datetime}
								codeIcon={value.weather.code}
							/>
						))}
			</div>
			<div className={style.title}>Today`s Highlights</div>
			<Highlights />
		</div>
	);
};

export default Content;
