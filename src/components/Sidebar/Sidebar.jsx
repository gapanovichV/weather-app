import React from 'react';
import { useSelector } from 'react-redux';

import Search from '../Search/Search';
import { weatherIcon } from '../weatherIcon';

import style from './Sidebar.module.scss';

const Sidebar = () => {
	const value = useSelector((state) => state.weatherDay);
	const status = value.status;
	const data = value.value;

	return (
		<div className={style.wrapper}>
			<Search />
			{status === 'ok' && (
				<>
					<img
						className={style.weather__icon}
						src={`../src/img/SVG/${weatherIcon(data.weather.code, data.weather.icon)}`}
						alt="погода"
					/>
					<div className={style.weather__info}>
						<h1 className={style.weather__now}>
							{Math.round(data.temp)}&#xb0;<span>c</span>
						</h1>
						<div className={style.weather__info__where}>
							{data.city_name}, {data.country_code}
						</div>
						<div className={style.weather__info__date}>Дата и время скоро</div>
						<hr />
						<div className={style.weather__info__rainfall}>
							<img width={25} src={`../src/img/SVG/${weatherIcon()}`} alt="cloud" /> Clouds -
							{data.clouds}%
						</div>
						<div className={style.weather__info__rainfall}>
							<img width={25} src={`../src/img/SVG/${weatherIcon()}`} alt="rain" /> Wind -
							{data.wind_spd.toFixed(2)} m/s
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
