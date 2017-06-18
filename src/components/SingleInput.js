import React from 'react';

const SingleInput = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<input
			className="form-input"
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

SingleInput.propTypes = {
	// eslint-disable-next-line
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	// eslint-disable-next-line
	title: React.PropTypes.string.isRequired,
	// eslint-disable-next-line
	name: React.PropTypes.string.isRequired,
	// eslint-disable-next-line
	controlFunc: React.PropTypes.func.isRequired,
	// eslint-disable-next-line
	content: React.PropTypes.oneOfType([
		// eslint-disable-next-line
		React.PropTypes.string,
		// eslint-disable-next-line
		React.PropTypes.number,
	]).isRequired,
	// eslint-disable-next-line
	placeholder: React.PropTypes.string,
};

export default SingleInput;