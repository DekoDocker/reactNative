import React from "react";
import { NavigationActions, StackActions } from 'react-navigation';
import HeaderNav from "./comm/HeaderNav";
import {
	StyleSheet,
	Dimensions,
	Text,
	View,
	TouchableHighlight,
	Image,
	ScrollView,
} from 'react-native';

const _width_                   = Dimensions.get('window').width;
const _height_                  = Dimensions.get('window').height;
const _tabNavHeight_            = 50;    // 底部导航高度
const _userCartSeparatorHeight_ = 10;
const _iCartHeight_             = 65;
const _iFaceSize_               = 65;

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state            = {
			headerTitle: '我的'
		};
		this.scrollViewHeight = _height_ - isIphoneX ? 80 : 60 - _tabNavHeight_;
	}

	componentWillMount() {
	}

	render() {
		const { headerTitle } = this.state;
		return (
			<View style={ styles.userCon }>
				<HeaderNav headerTitle={ headerTitle }/>
				<ScrollView style={ [ styles.userMain, { height: this.scrollViewHeight } ] }>
					<View style={ styles.userCartSeparator }/>
					<TouchableHighlight activeOpacity={ 0.8 } onPress={ () => {alert(1);} }>
						<View style={ {
							width        : _width_, height: _iCartHeight_, backgroundColor: '#fff',
							flexDirection: 'row', paddingLeft: 5, paddingRight: 5,
						} }>
							<View style={ {
								width     : _iFaceSize_, height: _iFaceSize_,
								alignItems: 'center', justifyContent: 'center',
							} }>
								<Image source={ require('../../res/images/comm/iface.jpg') }
									   style={ { width: 55, height: 55, borderRadius: 55 / 2 } }/>
							</View>
							<View style={ {
								flex: 1, height: _iCartHeight_, justifyContent: 'center',
							} }>
								<Text style={ { fontSize: 14, color: '#000', paddingBottom: 2 } }>username</Text>
								<Text style={ { fontSize: 12, color: '#777', paddingTop: 2 } }>15114501234</Text>
							</View>
							<View style={ {
								height       : _iCartHeight_,
								flexDirection: 'row',
								alignItems   : 'center',
							} }>
								<Image source={ require('../../res/images/comm/QR_code.png') }
									   style={ { width: 18, height: 18, tintColor: '#777' } }/>
								<Image source={ require('../../res/images/comm/right.png') }
									   style={ { width: 15, height: 15, tintColor: '#777' } }/>
							</View>
						</View>
					</TouchableHighlight>
				</ScrollView>
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
	_setTarBarIndex = (tarBarIndex) => {
		InfoNavigation.setParams({ "tarBarIndex": tarBarIndex });
	};
}

export default User;

const styles = StyleSheet.create({
	userCon          : {
		flex: 1,
	},
	userMain         : {
		flex           : 1,
		backgroundColor: '#eee',
	},
	userCartSeparator: {
		width          : _width_,
		height         : _userCartSeparatorHeight_,
		backgroundColor: '#eee',
	}
});