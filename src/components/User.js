import React from "react";
import HeaderNav from "./comm/HeaderNav";
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle:'我的'
		};
	}

	render() {
		const { headerTitle } = this.state;
		return (
			<View style={ styles.userCon }>
				<HeaderNav headerTitle={ headerTitle }/>
				<View style={ styles.userMain }>
					<Text>user</Text>
				</View>
			</View>
		);
	}
}

export default User;

const styles = StyleSheet.create({
	userCon: {
		flex          : 1,
	},
	userMain: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});