import React from 'react';
import axios from 'axios';
import glass from '../../img/search-symbol.png';

import style from './Search.module.scss';

const api = '';

const Search = () => {
	const [city, setCity] = React.useState('');
	const [data, setData] = React.useState({});

	const handleClickSearch = async () => {
		const res = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`);
		setData(res.data);
		setCity('');
	};

	return (
		<div className={style.nav}>
			<div className={style.nav__search}>
				<input
					value={city}
					onChange={(e) => setCity(e.target.value)}
					placeholder="Search for places ..."
					className={style.nav__search__input}
					type="text"
				/>
				<button onClick={handleClickSearch} className={style.nav__search__btn}>
					<img src={glass} alt="Search" />
				</button>
			</div>
		</div>
	);
};

export default Search;
