import React from 'react';
import PropTypes from 'prop-types';

import HistogramChart from './charts/histogram-chart.jsx';

import {Data} from './../data.js';

export default class JobCharts extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			title : 'Job Title',
			nDivisions: 3,
			yLabel: 'y',
			xLabel: 'membros da família'
		};

		this.getBiggerDataNum = this.getBiggerDataNum.bind(this);
		this.getXDisplayNames = this.getXDisplayNames.bind(this);
		this.getXValues = this.getXValues.bind(this);
	}

	getBiggerDataNum () {
		var biggerNum = 0;
		
		Data.map((i) => {
			if (biggerNum < i.value) {
				biggerNum = i.value;
			}
		})

		return biggerNum;
	}

	getXDisplayNames () {
		var xDisplayNames = [];

		Data.map((i) => {
			xDisplayNames.push(i.label)
		})

		return xDisplayNames;
	}

	getXValues () {
		var xValues = [];

		Data.map((i) => {
			xValues.push(i.value)
		})

		return xValues;
	}

	render () {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<HistogramChart 
					nDivisions = {this.state.nDivisions}

					yLabel={this.state.yLabel}
					yTotal = {this.getBiggerDataNum()}
					xDisplayNames={this.getXDisplayNames()}
					xLabel={this.state.xLabel}
					xValues={this.getXValues()} />
			</div>
		);
	}
}