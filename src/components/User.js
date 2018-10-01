import React from "react";
import { NavigationActions, StackActions } from 'react-navigation';
import HeaderNav from "./comm/HeaderNav";
import UserCartInfo from "./UserCartInfo";
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
const _userCartSeparatorHeight_ = 10;    // 分割线高度
const _iCartHeight_             = 65;    // 个人资料 卡片高度
const _iFaceConSize_            = 65;    // 个人资料 卡片图标容器大小
const _iFaceSize_               = 55;    // 个人资料 卡片图标大小
const _cartHeight_              = 40;    // 普通 卡片高度
const _iconConSize_             = 40;    // 普通 卡片图标容器大小
const _iconSize_                = 30;    // 普通 卡片图标大小

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
					<UserCartInfo maxWidth={ _width_ }
								  cartHeight={ _iCartHeight_ }
								  iconConSize={ _iFaceConSize_ }
								  iconSize={ _iFaceSize_ }
								  contentDom={ this._iContentDom('username', '15115411234') }
								  rightDom={ this._iRightDom(require('../../res/images/comm/QR_code.png')) }
								  _onPress={ () => {alert(1);} }
					/>
					<View style={ styles.userCartSeparator }/>
					<View style={ styles.userCartSeparator }/>
					<UserCartInfo maxWidth={ _width_ }
								  cartHeight={ _cartHeight_ }
								  iconConSize={ _iconConSize_ }
								  iconSize={ _iconSize_ }
								  contentDom={ this._contentDom('test 1') }
								  rightDom={ this._rightDom() }
								  _onPress={ () => {alert('test 1');} }
					/>
					<View style={ styles.userCartSeparator }/>
					<UserCartInfo maxWidth={ _width_ }
								  cartHeight={ _cartHeight_ }
								  iconConSize={ _iconConSize_ }
								  iconSize={ _iconSize_ }
								  contentDom={ this._contentDom('test 2') }
								  rightDom={ this._rightDom() }
								  _onPress={ () => {alert('test 2');} }
					/>
					<View style={ styles.userCartSeparator }/>
					<UserCartInfo maxWidth={ _width_ }
								  cartHeight={ _cartHeight_ }
								  iconConSize={ _iconConSize_ }
								  iconSize={ _iconSize_ }
								  contentDom={ this._contentDom('退出登录') }
								  _onPress={ () => {this._onLogout();} }
					/>
				</ScrollView>
			</View>
		);
	}

	_iContentDom    = (username, phone) => {
		return (<View
			style={ {
				flex          : 1,
				height        : _iCartHeight_,
				justifyContent: 'center',
				paddingLeft   : 3
			} }>
			<Text style={ {
				fontSize     : 14,
				color        : '#111',
				paddingBottom: 2
			} }>{ username }</Text>
			<Text style={ {
				fontSize  : 12,
				color     : '#777',
				paddingTop: 2
			} }>{ phone }</Text>
		</View>);
	};
	_iRightDom      = (qrcodeSource) => {
		return (<View
			style={ {
				height       : _iCartHeight_,
				flexDirection: 'row',
				alignItems   : 'center',
				paddingLeft  : 3
			} }>
			{ qrcodeSource &&
			<Image source={ qrcodeSource }
				   style={ { width: 18, height: 18, tintColor: '#777' } }/>
			}
			<Image source={ require('../../res/images/comm/right.png') }
				   style={ { width: 15, height: 15, tintColor: '#777' } }/>
		</View>);
	};
	_contentDom     = (title) => {
		return (<View
			style={ {
				flex          : 1,
				height        : _iconConSize_,
				justifyContent: 'center',
				paddingLeft   : 3
			} }>
			<Text style={ {
				fontSize: 14, color: '#111',
			} }>{ title }</Text>
		</View>);
	};
	_rightDom       = () => {
		return (<View
			style={ {
				height       : _iconConSize_,
				flexDirection: 'row',
				alignItems   : 'center',
				paddingLeft  : 3
			} }>
			<Image source={ require('../../res/images/comm/right.png') }
				   style={ { width: 15, height: 15, tintColor: '#777' } }/>
		</View>);
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
	};
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