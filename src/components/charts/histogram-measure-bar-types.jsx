import React from 'react';
import PropTypes from 'prop-types';

export class SimpleMeasureBar extends React.Component {
	static PropTypes = {
		num: PropTypes.number.isRequired,
		label: PropTypes.string
	}

	render () {
		return (
			<div className="histogram__measure-bar">
				{
					this.props.num + ' ' + (this.props.label || '')
				}
			</div>
		);
	}
}

export class LastMeasureBar extends React.Component {
	static PropTypes = {
		xDisplayNames: PropTypes.array.isRequired
	}

	render () {
		return (
			<div className="histogram__measure-last-bar">
				{
					this.props.xDisplayNames.map((i) => {
						return (<div className="histogram__measure-last-bar__label" key={i}><span>{i}</span></div>)
					})
				}	
			</div>
		)
	}
}
