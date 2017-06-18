import React from 'react';

const TextArea = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<textarea
			className="form-input"
			style={props.resize ? null : {resize: 'none'}}
			name={props.name}
			rows={props.rows}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

TextArea.propTypes = {
	// eslint-disable-next-line
	title: React.PropTypes.string.isRequired,
	// eslint-disable-next-line
	rows: React.PropTypes.number.isRequired,
	// eslint-disable-next-line
	name: React.PropTypes.string.isRequired,
	// eslint-disable-next-line
	content: React.PropTypes.string.isRequired,
	// eslint-disable-next-line
	resize: React.PropTypes.bool,
	// eslint-disable-next-line
	placeholder: React.PropTypes.string,
	// eslint-disable-next-line
	controlFunc: React.PropTypes.func.isRequired
};

export default TextArea;