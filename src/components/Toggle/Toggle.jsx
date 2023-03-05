import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../redux/theme';

import style from '../Sidebar/Sidebar.module.scss';

const Toggle = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.themeSlice);
	const [isDark, setIsDark] = React.useState(false);

	const handleChange = () => {
		const toggle = theme === 'dark' ? 'light' : 'dark';
		theme === 'dark' ? setIsDark(false) : setIsDark(true);
		dispatch(setMode(toggle));
	};

	return (
		<DarkModeSwitch
			className={style.toggle}
			checked={isDark}
			onChange={handleChange}
			size={120}
		/>
	);
};

export default Toggle;
