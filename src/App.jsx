import React from 'react';
import Content from './components/Content/Content';

import Sidebar from './components/Sidebar/Sidebar';

import './index.scss';

const App = () => {
	return (
		<>
			<Sidebar />
			<Content />
		</>
	);
};

export default App;
