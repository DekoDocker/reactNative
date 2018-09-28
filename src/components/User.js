import React from "react";
import { StackActions, NavigationActions } from 'react-navigation';
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
					<Text onPress={ this._onLogout }>user</Text>
				</View>
			</View>
		);
	}
	_onLogout       = () => {
		const { storageKeys, navigation, router } = this.props;
		let resetAction                           = StackActions.reset({
			index  : 0,
			actions: [
				NavigationActions.navigate({ routeName: router.SIGNIN_PATH.key }),
			],
		});
		navigation.dispatch(resetAction);
		_storage.remove(storageKeys.SIGN_USER);
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