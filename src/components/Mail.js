import React from "react";
import HeaderNav from "./comm/HeaderNav";
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class Mail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle: '联系人'
		};
	}

	render() {
		const { headerTitle } = this.state;
		return (
			<View style={ styles.mailCon }>
				<HeaderNav headerTitle={ headerTitle }/>
				<View style={ styles.mailMain }>
					<Text onPress={ ()=>{InfoNavigation.setParams({ "tarBarIndex": 100 });} }>Info231231</Text>
					<Text>Mail</Text>
				</View>
			</View>
		);
	}
}

export default Mail;

const styles = StyleSheet.create({
	mailCon : {
		flex: 1,
	},
	mailMain: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});