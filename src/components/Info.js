import React from "react";
import { NavigationActions, StackActions } from 'react-navigation';
import HeaderNav from './comm/HeaderNav';
import Eject from './comm/Eject';
import InfoItem from './InfoItem';
import { Dimensions, FlatList, Image, ListView, RefreshControl, StyleSheet, Text, View, } from 'react-native';

const _width_             = Dimensions.get('window').width;
const _height_            = Dimensions.get('window').height;
const _iFaceWidth_        = 55;
const _infoItemMaxWidth_  = _width_;
const _infoItemMaxHeight_ = 55;

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state            = {
			headerTitle          : '消息',
			refreshing           : false,
			infoList             : [],
			sectionID            : -1,
			InfoListScrollEnabled: true,
		};
		global.InfoNavigation = this.props.navigation;
		this.eject            = undefined;
	}

	componentWillMount() {
		let infoList = [];
		infoList.push({
			key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
			username: 'username ' + parseInt(infoList.length + 1),
			msg     : 'Title Text item ' + parseInt(infoList.length + 1),
			lastTime: '20:20:20',
			noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
			isSend  : false
		});
		infoList.push({
			key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
			username: 'username ' + parseInt(infoList.length + 1),
			msg     : 'Title Text item ' + parseInt(infoList.length + 1),
			lastTime: '20:20:20',
			noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
			isSend  : false
		});
		infoList.push({
			key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
			username: 'username ' + parseInt(infoList.length + 1),
			msg     : 'Title Text item ' + parseInt(infoList.length + 1),
			lastTime: '20:20:20',
			noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
			isSend  : false
		});
		this.setState({ infoList }, () => {this._updTabBarBadgeCount()});
	}

	render() {
		const { headerTitle } = this.state;
		const _refreshControl = <RefreshControl
			refreshing={ this.state.refreshing }
			onRefresh={ this._onRefresh }
			tintColor={ '#999' }
			titleColor={ '#777' }
			title="拼命加载中..."/>;
		return (
			<View style={ styles.infoCon }>
				<Eject ref={ (c) => this.eject = c }/>
				<HeaderNav headerTitle={ headerTitle }/>
				<FlatList
					style={ styles.infoListCon }
					numColumns={ 1 }
					data={ this.state.infoList }
					scrollEnabled={ this.state.InfoListScrollEnabled }
					extraData={ this.state }
					keyExtractor={ (item, index) => item.key }
					renderItem={ this._renderItem }
					ListEmptyComponent={ this._ListEmptyComponent }
					ItemSeparatorComponent={ this._ItemSeparatorComponent }
					refreshControl={ _refreshControl }
					onScroll={ () => {this.setState({ sectionID: -1 })} }
				/>
			</View>
		);
	}

	_toInfoSend             = (item) => {
		const { navigation, router } = this.props;
		let infoList                 = this.state.infoList;
		let index                    = infoList.indexOf(item);
		item.noRead                  = 0;
		infoList.splice(index, item);
		this.setState({ infoList }, () => {
			let badgeCount = this._updTabBarBadgeCount();
			let backTitle  = badgeCount > 99 ? this.state.headerTitle + '(99+)' : badgeCount !== 0 ? this.state.headerTitle + '(' + badgeCount + ')' : this.state.headerTitle;

			navigation.navigate({
				routeName: router.INFOSEND_PATH.key,
				params   : {
					headerTitle: item.username,
					backTitle  : backTitle,
				},
			});
			this.setState({ InfoListScrollEnabled: true, sectionID: -1 })
		});
	};
	_onRefresh              = () => {
		this.setState({ refreshing: true, });
		setTimeout(() => {
			let infoList = this.state.infoList;
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			infoList.push({
				key     : 'item' + new Date().getTime() + parseInt(infoList.length + 1),
				username: 'username ' + parseInt(infoList.length + 1),
				msg     : 'Title Text item ' + parseInt(infoList.length + 1),
				lastTime: '20:20:20',
				noRead  : parseInt(Math.random() * (100 - 1 + 1) + 1, 10),
				isSend  : false
			});
			this.setState({ infoList }, () => {
				this._updTabBarBadgeCount();
				this.setState({ refreshing: false });
				this.eject._openEject("INFO", "刷新成功")
			});
		}, 2000);
	};
	_onDelInfoItem          = (item) => {
		let infoList = this.state.infoList;
		let index    = infoList.indexOf(item);
		infoList.splice(index, 1);
		this.setState({ infoList }, () => {this._updTabBarBadgeCount()});
	};
	_onReadInfoItem         = (item) => {
		let infoList = this.state.infoList;
		let index    = infoList.indexOf(item);
		item.noRead  = item.noRead !== 0 ? 0 : 1;
		infoList.splice(index, item);
		this.setState({ infoList }, () => {this._updTabBarBadgeCount()});
	};
	_renderItem             = ({ item, index }) => {
		return <InfoItem item={ item } maxWidth={ _infoItemMaxWidth_ } maxHeight={ _infoItemMaxHeight_ }
						 onDelInfoItem={ this._onDelInfoItem } onReadInfoItem={ this._onReadInfoItem }
						 toInfoSend={ this._toInfoSend } iFaceWidth={ _iFaceWidth_ }
						 sectionID={ this.state.sectionID } index={ index }
						 setInfoConfigs={ (InfoListScrollEnabled, sectionID) => {
							 if (this.state.InfoListScrollEnabled !== InfoListScrollEnabled) {
								 this.setState({ InfoListScrollEnabled, sectionID })
							 }
						 } }
		/>;
	};
	_ListEmptyComponent     = () => {
		return <View style={ {
			flex          : 1,
			height        : _height_ - 300,
			alignItems    : 'center',
			justifyContent: 'center',
		} }>
			<Image source={ require('../../res/images/comm/info.png') }
				   style={ { width: 80, height: 80, } }/>
			<Text style={ { fontSize: 13, color: '#777' } }>暂时没有新消息</Text>
		</View>;
	};
	_ItemSeparatorComponent = () => {
		return <View style={ { flex: 1, height: 1, flexDirection: 'row' } }>
			<View style={ { width: _iFaceWidth_ + 5, backgroundColor: '#fff' } }/>
			<View style={ { width: _width_ - _iFaceWidth_, backgroundColor: '#dfe0e2' } }/>
		</View>;
	};
	_updTabBarBadgeCount    = () => {
		let infoList         = this.state.infoList;
		let tabBarBadgeCount = 0;
		infoList.forEach(it => { tabBarBadgeCount += it.noRead; });
		this._setTarBarIndex(tabBarBadgeCount);
		return tabBarBadgeCount;
	};
	_setTarBarIndex         = (tarBarIndex) => {
		const { navigation } = this.props;
		navigation.setParams({ "tarBarIndex": tarBarIndex });
	};
}

export default Info;

const styles = StyleSheet.create({
	infoCon    : {
		flex: 1,
	},
	infoListCon: {
		flex           : 1,
		backgroundColor: '#eee',
	},
});