import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './components/redux/weatherDay';
import { fetchWeatherWeek } from './components/redux/weatherWeek';

import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

import './index.scss';

const App = () => {
	const theme = useSelector((state) => state.themeSlice);
	const dispatch = useDispatch();

	React.useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);
	const params = 'm';
	React.useEffect(() => {
		function geo_success(position) {
			const coords = position.coords;
			const geo = { lat: coords.latitude, lon: coords.longitude, params };
			console.log('alt, lon', geo);
			dispatch(fetchWeather(geo));
			dispatch(fetchWeatherWeek(geo));
		}
		function geo_error() {
			dispatch(fetchWeather({ lat: 0, lon: 0 }));
			alert('Вы не дали разрешение. По умолчанию выставлено 0 - широты и 0 - долготы ');
		}
		navigator.geolocation.getCurrentPosition(geo_success, geo_error);
	}, []);

	return (
		<>
			<Sidebar />
			<Content />
		</>
	);
};

export default App;
