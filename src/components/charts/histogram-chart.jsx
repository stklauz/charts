import React from 'react';
import PropTypes from 'prop-types';

import { SimpleMeasureBar, LastMeasureBar } from './histogram-measure-bar-types.jsx';

export default class HistogramChart extends React.Component {

	static propTypes = {
		nDivisions : PropTypes.number.isRequired,
		yLabel : PropTypes.string.isRequired,
		yTotal: PropTypes.number.isRequired,
		xDisplayNames: PropTypes.array.isRequired,
		xValues: PropTypes.array.isRequired
	};

	constructor(props) {
		super(props);
		
		this.renderMeasures = this.renderMeasures.bind(this);
		this.renderBars = this.renderBars.bind(this);
	}

	renderMeasures() {
		var measures = [];
		var yLabel= this.props.yLabel;
		var yTotal = this.props.yTotal;
		var nDivisions = this.props.nDivisions;
		var ySegment = yTotal / nDivisions;

		for (var i = 0; i <= nDivisions; i++) {
			var num = this.props.roundedNum ? 
					  Math.ceil(yTotal - ySegment * i) :
					  (yTotal - ySegment * i).toFixed(2);
			var measureBarType = <SimpleMeasureBar num={num} key={num} />;

			if (i === 0) {
				measureBarType = <SimpleMeasureBar num={num} label={yLabel} key={num}/>;
			}

			if (i === nDivisions) {
				measureBarType = <LastMeasureBar key= {num} xDisplayNames={this.props.xDisplayNames}/>
			}

			measures.push(measureBarType)
		}

		return measures.map(a => a);
	}

	renderBars () {
		var bars = [];
		var yTotal = this.props.yTotal;
		var xValues = this.props.xValues;

		for (var i = 0; i < xValues.length; i++ ) {
			var height = (xValues[i] / yTotal) * 100;
			var width = (1 / xValues.length ) * 100;

			bars.push(
				<div key={i} className="histogram__bar"
					style={{height: height + '%', width: width + '%', left: width * i + '%' }}
					>
					
				</div>
			);
		}

		return bars.map(i => i);

	}

	render () {
		return (
			<div>
				<div className="histogram">
					<div className="histogram__measures">
						{
							this.renderMeasures()
						}
					</div>
					<div className="histogram__bars">
						{
							this.renderBars()
						}
					</div>
				</div>
				<div>
					{this.props.xLabel}
				</div>
			</div>
		);
	}
}