import React from "react";
import PropTypes from "prop-types";
import { StackActions, NavigationActions } from 'react-navigation';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={ styles.signCon }>
				<Text onPress={ this._onLogin }>TestLogin</Text>
			</View>
		);
	}

	_onLogin = () => {
		const { storageKeys, navigation, router } = this.props;
		let resetAction                           = StackActions.reset({
			index  : 0,
			actions: [
				NavigationActions.navigate({ routeName: router.MAIN_PATH.key, }),
			],
		});
		navigation.dispatch(resetAction);
		_storage.save(storageKeys.SIGN_USER, "test_user_1");
	};
}

export default SignIn;

const styles = StyleSheet.create({
	signCon: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});