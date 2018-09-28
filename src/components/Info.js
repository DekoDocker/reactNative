import React from "react";
import { StackActions, NavigationActions } from 'react-navigation';
import HeaderNav from './comm/HeaderNav';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state    = {
			headerTitle: '消息'
		};
		global.InfoNavigation = this.props.navigation;
	}

	render() {
		const { headerTitle } = this.state;
		return (
			<View style={ styles.infoCon }>
				<HeaderNav headerTitle={ headerTitle }/>
				<Text onPress={ this._setTarBarIndex }>Info231231</Text>
				<Text onPress={ this._onLogout }>Info</Text>
			</View>
		);
	}

	_setTarBarIndex = () => {
		InfoNavigation.setParams({ "tarBarIndex": 100 });
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
		flex: 1,
	},
});