import React from "react";
import PropTypes from "prop-types";
import { StackActions, NavigationActions } from 'react-navigation';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class Info extends React.Component {
	render() {
		return (
			<View style={ styles.infoCon }>
				<Text onPress={ this._setTarBarIndex }>Info231231</Text>
				<Text onPress={ this._onLogout }>Info</Text>
			</View>
		);
	}

	_setTarBarIndex = () => {
		const { navigation } = this.props;
		navigation.setParams({ "tarBarIndex": 10 });
	};
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

export default Info;

const styles = StyleSheet.create({
	infoCon: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});