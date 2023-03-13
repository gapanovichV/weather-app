import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './components/redux/weatherDay';
import { fetchWeatherWeek } from './components/redux/weatherWeek';
import { setLatLon } from './components/redux/params';

import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

import './index.scss';

const App = () => {
	const dispatch = useDispatch();
	const { lat, lon, units } = useSelector((state) => state.paramsSlice);
	const theme = useSelector((state) => state.themeSlice);

	React.useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	React.useEffect(() => {
		function geo_success(position) {
			const coords = position.coords;
			dispatch(setLatLon({ lat: coords.latitude, lon: coords.longitude }));
			dispatch(fetchWeather({ lat: coords.latitude, lon: coords.longitude, units }));
			dispatch(fetchWeatherWeek({ lat: coords.latitude, lon: coords.longitude, units }));
		}
		function geo_error() {
			dispatch(fetchWeather({ lat: 0, lon: 0, units }));
			alert('Вы не дали разрешение. По умолчанию выставлено 0 - широты и 0 - долготы ');
		}
		navigator.geolocation.getCurrentPosition(geo_success, geo_error);
	}, []);

	React.useEffect(() => {
		dispatch(fetchWeatherWeek({ lat, lon, units }));
		dispatch(fetchWeather({ lat, lon, units }));
	}, [units]);

	return (
		<>
			<Sidebar />
			<Content />
		</>
	);
};

export default App;
