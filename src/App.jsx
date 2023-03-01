import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchWeather } from './components/redux/weatherDay';

import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

import './index.scss';

const App = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		function geo_success(position) {
			const coords = position.coords;
			dispatch(fetchWeather({ lat: coords.latitude, lon: coords.longitude }));
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
