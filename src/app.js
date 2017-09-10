import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

import JobCharts from './components/job-charts.jsx';

class App extends React.Component {

	render() {
		return (
			<JobCharts />
		);
	}
}

var root = document.getElementById('app');
ReactDOM.render(<App />, root);