import React from 'react';

import Search from '../Search/Search';

import icon from '../../img/SVG/day_partial_cloud.svg';
import cloud from '../../img/SVG/cloudy.svg';
import rain from '../../img/SVG/rain.svg';

import style from './Sidebar.module.scss';
const Sidebar = () => {
	return (
		<div className={style.wrapper}>
      <Search/>
			<img className={style.weather__icon} src={icon} alt="погода" />
			<div className={style.weather__info}>
				<h1 className={style.weather__now}>12&#xb0;<span>c</span></h1>
				<div className={style.weather__info__where}>Minsk, BY</div>
				<div className={style.weather__info__date}>
					Monday,<span>16:00</span>
				</div>
				<hr />
				<div className={style.weather__info__rainfall}>
					<img width={25} src={cloud} alt="cloud" /> Clouds - 75%
				</div>
				<div className={style.weather__info__rainfall}>
					<img width={25} src={rain} alt="rain" /> Rain - 30%
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
