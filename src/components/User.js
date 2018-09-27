import React from "react";
import PropTypes from "prop-types";
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class User extends React.Component {
	render() {
		return (
			<View style={ styles.userCon }>
				<Text>user</Text>
			</View>
		);
	}
}

export default User;

const styles = StyleSheet.create({
	userCon: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});