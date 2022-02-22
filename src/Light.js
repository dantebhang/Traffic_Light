import React from "react";
import Circle from "./Circle";

const colors = {
	red: {
		backgroundColor: "red",
	},
	yellow: {
		backgroundColor: "yellow",
	},
	green: {
		backgroundColor: "green",
	},
	gray: {
		backgroundColor: "gray",
	},
};

export default class Light extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			red: colors.gray,
			yellow: colors.gray,
			green: colors.gray,
			gray: colors.gray,

			isRed: false,
			isYellow: false,
			isGreen: false,
		};
		this.handleRed = this.handleRed.bind(this);
		this.handleYellow = this.handleYellow.bind(this);
		this.handleGreen = this.handleGreen.bind(this);
	}

	handleRed = () => {
		this.setState({
			red: colors.red,
			isRed: true,
			isYellow: false,
			isGreen: false,
		});
	};

	handleYellow = () => {
		this.setState({
			yellow: colors.yellow,
			isRed: false,
			isYellow: true,
			isGreen: false,
		});
	};

	handleGreen = () => {
		this.setState({
			green: colors.green,
			isRed: false,
			isYellow: false,
			isGreen: true,
		});
	};

	render() {
		const { isRed, isYellow, isGreen } = this.state;

		return (
			<div className="light">
				<div onClick={this.handleRed}>
					{isRed ? (
						<Circle color={this.state.red} />
					) : (
						<Circle color={this.state.gray} />
					)}
				</div>

				<div onClick={this.handleYellow}>
					{isYellow ? (
						<Circle color={this.state.yellow} />
					) : (
						<Circle color={this.state.gray} />
					)}
				</div>

				<div onClick={this.handleGreen}>
					{isGreen ? (
						<Circle color={this.state.green} />
					) : (
						<Circle color={this.state.gray} />
					)}
				</div>
			</div>
		);
	}
}
