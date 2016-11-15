import React, { Component } from 'react';
import logo from './logo.svg';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './nova.css';
import { createAction } from 'redux-actions';



export default class CalculatorComponent extends Component {

	constructor(props) {
		super(props);
 		this.state = {
      		deck_num: 40,
			chance_value: 0
    	};

		this.handleClick = this.handleClick.bind(this);
	}

	choose(n, k) {
		if (k == 0) return 1
		return (n * this.choose(n - 1, k - 1)) / k
	}

	atLeast1a(x, y, z) {
		var result = 0.0
		if (x - z >= y)
			result = 1 - this.choose(x - z, y) / this.choose(x, y)
		else
			result = 1.0
		return result
	}

	handleClick(event) {

		this.setState({
			deck_num: event.target.value
        });
		
		var result = this.atLeast1a(this.state.deck_num, 5, 3)

		this.setState({
        	chance_value: result
        });

		console.log(result);
	}

	render() {
		return (

			<div className="App">
				<div className="App-header">
					<h2>遊戲王機率計算器</h2>
				</div>
				<label className="styles.label">牌組張數</label>
				<input 
				id="deck_num_tf"
				type="number"
					  onChange={this.handleClick}
					></input>
				<br />
				<label className="styles.label" >A類卡片張數</label>
				<TextField id="card_num_tf" hintText="" value="3"></TextField>
				<br />
				<label className="styles.label" >抽到至少1張的機率</label>
				<TextField id="chance_value_tf" hintText="" 
				value={this.state.chance_value}></TextField>
				<br />
				<RaisedButton onClick={this.handleClick} label="計算" >
				</RaisedButton>

				<RaisedButton label="重置" />

			</div>

		);
	}

}
