import React from 'react';
import { useSelector } from 'react-redux';

import Search from '../Search/Search';

import icon from '../../img/SVG/day_partial_cloud.svg';
import cloud from '../../img/SVG/cloudy.svg';
import wind from '../../img/SVG/wind.svg';

import style from './Sidebar.module.scss';

const Sidebar = () => {
	const value = useSelector((state) => state.weatherDay);
	console.log(value);
	const status = value.status;
	const data = value.value;

	return (
		<div className={style.wrapper}>
			<Search />
			<img className={style.weather__icon} src={icon} alt="погода" />
			<div className={style.weather__info}>
				{status === 'resolved' && (
					<>
						<h1 className={style.weather__now}>
							{Math.round(data.main.temp)}&#xb0;<span>c</span>
						</h1>
						<div className={style.weather__info__where}>
							{data.name}, {data.sys.country}
						</div>
						<div className={style.weather__info__date}>Дата и время скоро</div>
						<hr />
						<div className={style.weather__info__rainfall}>
							<img width={25} src={cloud} alt="cloud" /> Clouds - {data.clouds.all}%
						</div>
						<div className={style.weather__info__rainfall}>
							<img width={25} src={wind} alt="rain" /> Wind - {data.wind.speed} m/s
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
