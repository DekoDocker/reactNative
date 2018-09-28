import React from "react";
import { StackActions, NavigationActions } from 'react-navigation';
import HeaderNav from './comm/HeaderNav';
import InfoItem from './InfoItem';
import {
	StyleSheet,
	Dimensions,
	Text,
	View,
	Image,
	FlatList,
	ListView,
	RefreshControl,
} from 'react-native';

const _width_             = Dimensions.get('window').width;
const _height_            = Dimensions.get('window').height;
const _iFaceWidth_        = 55;
const _infoItemMaxWidth_  = _width_;
const _infoItemMaxHeight_ = 55;

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state            = {
			headerTitle: '消息',
			refreshing : false,
			infoList   : [],
			sectionID  : -1,
		};
		global.InfoNavigation = this.props.navigation;
	}

	componentWillMount() {
		let infoList = [
			{ key: 'item1', username: 'username 1', msg: 'Title Text item1', lastTime: '20:20:20', noRead: 99,isSend:false },
			{ key: 'item2', username: 'username 2', msg: 'Title Text item2', lastTime: '20:20:20', noRead: 99,isSend:false },
			{ key: 'item3', username: 'username 3', msg: 'Title Text item3', lastTime: '20:20:20', noRead: 99,isSend:true },
			{ key: 'item4', username: 'username 4', msg: 'Title Text item4', lastTime: '20:20:20', noRead: 99,isSend:false }
		];
		this.setState({ infoList });
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
				<HeaderNav headerTitle={ headerTitle }/>
				<FlatList
					style={ styles.infoListCon }
					numColumns={ 1 }
					data={ this.state.infoList }
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

	_onRefresh              = () => {
		this.setState({ refreshing: true, });
		setTimeout(() => {this.setState({ refreshing: false })}, 2000);
	};
	_renderItem             = ({ item, index }) => {
		return <InfoItem item={ item } maxWidth={ _infoItemMaxWidth_ } maxHeight={ _infoItemMaxHeight_ }
						 iFaceWidth={ _iFaceWidth_ } rowID={ index } sectionID={ this.state.sectionID }
						 setSectionID={ (sectionID) => { this.setState({ sectionID }) } }/>;
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
	_setTarBarIndex         = () => {
		InfoNavigation.setParams({ "tarBarIndex": 100 });
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