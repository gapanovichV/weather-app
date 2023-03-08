import React from 'react';
import axios from 'axios';
import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherDay';

import glass from '../../img/search-symbol.png';
import style from './Search.module.scss';
import { fetchWeatherWeek } from '../redux/weatherWeek';

const API = import.meta.env.VITE_API_GEO;

const Search = () => {
	const dispatch = useDispatch();
	const [city, setCity] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const [data, setDate] = React.useState([]);

	const handleClickDropDown = () => {
		fetchCity();
		city === '' ? setOpen(false) : setOpen(true);
	};

	const fetchCity = async () => {
		try {
			const { data } = await axios(
				`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API}`,
			);
			setDate(data);
		} catch (error) {
			console.log(error);
		}
	};
  const params = 'm'
	const handleClickSearch = (lat, lon) => {
		dispatch(fetchWeather({ lat, lon, params }));
		dispatch(fetchWeatherWeek({ lat, lon, params }));
		setOpen(false);
		setCity('');
		setDate([]);
	};

  const handleChangeInput = (e) => {
    setCity(e.target.value)
  }

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) handleClickDropDown();
	};

	const classNames = cn(style.nav__search, { [style.open]: open });
	return (
		<div className={style.nav}>
			<div className={classNames}>
				<input
					onKeyDown={handleKeyDown}
					value={city}
					onChange={handleChangeInput}
					placeholder="Search for places ..."
					className={style.nav__search__input}
					type="text"
				/>

				<button onClick={handleClickDropDown} className={style.nav__search__btn}>
					<img src={glass} alt="Search" />
				</button>
			</div>
			<div className={style.dropdown}>
				{open ? (
					<ul className={style.dropdown__menu}>
						{data.map((el, index) => (
							<li key={index} className={style.dropdown__menu__item}>
								<button
									onClick={() => handleClickSearch(el.lat, el.lon)}
									className={style.btn_dropdown}
								>
									{el.name}, {el.country}
								</button>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</div>
	);
};

export default Search;
