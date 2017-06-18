import React, {Component} from 'react';
import RadioGroup from '../components/RadioGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';


class InputContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: '',
			message: '',
			modeOptions: [],
			modeSelection: [],
			ciphered: ''
		};
		this.handleInputSubmit = this.handleInputSubmit.bind(this);
		this.handleClearInput = this.handleClearInput.bind(this);
		this.handleKeyChange = this.handleKeyChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleModesSelection = this.handleModesSelection.bind(this);
	}
	componentDidMount() {
		fetch('./default_input.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					key: data.key,
					message: data.message,
					modeOptions: data.modeOptions,
					modeSelection: data.modeSelection,
					ciphered: data.ciphered
				});
			});
	}
	handleKeyChange(e) {
		this.setState({ key: e.target.value }, () => console.log('key: ', this.state.key));
	}
	handleMessageChange(e) {
		this.setState({ message: e.target.value }, () => console.log('message: ', this.state.message));
	}
	handleModesSelection(e) {
		this.setState({ modeSelection: [e.target.value] }, () => console.log('mode: ', this.state.modeSelection));
	}

	handleClearInput(e) {
		e.preventDefault();
		this.setState({
			key: '',
			message: '',
			modeSelection: ['Cipher'],
			ciphered: ''
		});
	}
	handleInputSubmit(e) {
		e.preventDefault();

		const inputPayload = {
			key: this.state.key,
			message: this.state.message,
			mode: this.state.modeSelection
		};

		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:3001/myCipher", true);
		xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
		xhr.send(JSON.stringify(inputPayload));

    	xhr.onreadystatechange = function() {
    		if(xhr.readyState === 4 && xhr.status === 200) {
        		this.setState({
					ciphered: xhr.response
				});
			}
		}.bind(this)
	}
	render() {
		return (
			<form className="container" onSubmit={this.handleInputSubmit}>
				Key:
				<br/>
				<SingleInput
					inputType={'text'}
					name={'key'}
					content={this.state.key}
					controlFunc={this.handleKeyChange}
					placeholder={'Enter the key by which you want to encode your message.'} />
				Message:
				<br/>
				<TextArea
					name={'message'}
					rows={10}
					resize={false}
					content={this.state.message}
					controlFunc={this.handleMessageChange}
					placeholder={'Please note, that numbers, symbols and spaces are not encoded and are left in place.'} />
				<RadioGroup
					title={'Would you like to cipher or decipher the message?'}
					setName={'modes'}
					type={'radio'}
					controlFunc={this.handleModesSelection}
					options={this.state.modeOptions}
					selectedOptions={this.state.modeSelection} />
				<button
					className="btn btn-link"
					onClick={this.handleClearInput}>Clear fields</button>
				<input
					type="submit"
					className="btn btn-primary"
					value="Do it!"/>				
				<TextArea
					name={'cipher'}
					rows={10}
					resize={false}
					content={this.state.ciphered}
					placeholder={'Your encoded message will appear here.'} />
			</form>
		);
	}
}

export default InputContainer;