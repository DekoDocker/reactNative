import React from "react";
import PropTypes from "prop-types";
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class Mail extends React.Component {
	render() {
		return (
			<View style={ styles.mailCon }>
				<Text>Mail</Text>
			</View>
		);
	}
}

export default Mail;

const styles = StyleSheet.create({
	mailCon: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});