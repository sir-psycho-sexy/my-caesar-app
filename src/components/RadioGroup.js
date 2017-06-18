import React from 'react';

const CheckboxOrRadioGroup = (props) => (
	<div>
		<label className="form-label">{props.title}</label>
		<div className="checkbox-group">
			{props.options.map(option => {
				return (
					<label key={option} className="form-label capitalize">
						<input
							className="form-checkbox"
							name={props.setName}
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

CheckboxOrRadioGroup.propTypes = {
	// eslint-disable-next-line
	title: React.PropTypes.string.isRequired,
	// eslint-disable-next-line
	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	// eslint-disable-next-line
	setName: React.PropTypes.string.isRequired,
	// eslint-disable-next-line
	options: React.PropTypes.array.isRequired,
	// eslint-disable-next-line
	selectedOptions: React.PropTypes.array,
	// eslint-disable-next-line
	controlFunc: React.PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;
