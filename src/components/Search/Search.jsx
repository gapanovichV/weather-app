import React from 'react';
import axios from 'axios';
import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherDay';

import glass from '../../img/search-symbol.png';
import style from './Search.module.scss';

const API = import.meta.env.VITE_API_WEATHER;

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

	const handleClickSearch = (lat, lon) => {
		dispatch(fetchWeather({ lat, lon }));
		setOpen(false);
		setCity('');
		setDate([]);
	};

	const classNames = cn(style.nav__search, { [style.open]: open });
	return (
		<div className={style.nav}>
			<div className={classNames}>
				<input
					value={city}
					onChange={(e) => setCity(e.target.value)}
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
