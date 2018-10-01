import React from "react";
import HeaderNav from "./comm/HeaderNav";
import MailItemSlider from "./comm/MailItemSlider";
import MailItem from "./MailItem";
import {
	StyleSheet,
	Dimensions,
	Text,
	View,
	SectionList,
} from 'react-native';


const _sectionTopHeight_    = 100;   // 顶部组件高度，如[新朋友...]
const _sectionHeaderHeight_ = 24;    // 组件标题高度，如[A B C...]
const _rowHeight_           = 44;    // 组件内容高度

const _height_           = Dimensions.get('window').height;
const _tabNavHeight_     = 50;    // 底部导航高度
const _sectionItemWidth_ = 20;    // 右侧滑块宽度
const _touchDownBGColor_ = '#eee';
const _touchUpBGColor_   = 'transparent';

class Mail extends React.Component {
	constructor(props) {
		super(props);
		this.state       = {
			headerTitle: '联系人',
			mailList   : [],
		};
		this.sectionList = undefined;
	}

	componentWillMount() {
		let mailList = [];
		mailList.push({ title: 'A', data: [ 'A item1' ] });
		mailList.push({ title: 'C', data: [ 'C item5' ] });
		mailList.push({ title: 'D', data: [ 'D item5' ] });
		mailList.push({ title: 'E', data: [ 'E item5' ] });
		mailList.push({ title: '#', data: [ '$@21dsd' ] });
		this.setState({ mailList });
	}

	render() {
		const { headerTitle } = this.state;
		return (
			<View style={ styles.mailCon }>
				<HeaderNav headerTitle={ headerTitle }/>
				<SectionList
					style={ { flex: 1, backgroundColor: '#eee', } }
					ref={ ref => this.sectionList = ref }
					getItemLayout={ this._getItemLayout }
					keyExtractor={ (item, index) => item + index }
					extraData={ this.state }
					stickySectionHeadersEnabled={ true }
					sections={ this.state.mailList }
					ListHeaderComponent={ this._ListHeaderComponent }
					renderItem={ this._renderItem }
					renderSectionHeader={ this._renderSectionHeader }
				/>
				{ /*
				 <MailItemSlider maxHeight={ _height_ }
				 data={ this.state.mailList }
				 _scrollToLocation={ this._scrollToLocation }
				 sectionTopHeight={ _sectionTopHeight_ }
				 tabNavHeight={ _tabNavHeight_ }
				 sectionItemWidth={ _sectionItemWidth_ }
				 touchDownBGColor={ _touchDownBGColor_ }
				 touchUpBGColor={ _touchUpBGColor_ }/>
				 */ }
				<MailItemSlider maxHeight={ _height_ }
								data={ this.state.mailList }
								_scrollToLocation={ this._scrollToLocation }
								sectionItemWidth={ _sectionItemWidth_ }/>
			</View>
		);
	}

	_ListHeaderComponent = () => {
		return <View style={ { height: _sectionTopHeight_ } }>
			<MailItem item={ '新朋友' } rowHeight={ _sectionTopHeight_ / 2 } _onPress={ () => {alert('新朋友');} }/>
			<MailItem item={ '群聊' } rowHeight={ _sectionTopHeight_ / 2 } _onPress={ () => {alert('群聊');} }/>
		</View>;
	};
	_renderItem          = ({ item, index, section }) => {
		return <MailItem key={ index } item={ item } rowHeight={ _rowHeight_ } _onPress={ () => {alert(1);} }/>;
	};
	_renderSectionHeader = ({ section: { title } }) => {
		return <View style={ {
			backgroundColor: '#eee',
			justifyContent : 'center',
			height         : _sectionHeaderHeight_,
			paddingLeft    : 5,
		} }>
			<Text style={ { color: '#777' } }>{ title }</Text>
		</View>
	};
	_getItemLayout       = (data, index) => {
		// length :  当前rowItem的高度
		// offset ： 当前rowItem在父组件中的偏移量（包括rowItem的高度 + 分割线的高度 + section的高度）
		// index  :  当前rowItem的位置
		return { length: _rowHeight_, offset: _rowHeight_ * index + _sectionHeaderHeight_, index };
	};
	_scrollToLocation    = (data) => {
		this.sectionList.scrollToLocation(data);
	};
	_setTarBarIndex = (tarBarIndex) => {
		InfoNavigation.setParams({ "tarBarIndex": tarBarIndex });
	};
}

export default Mail;

const styles = StyleSheet.create({
	mailCon : {
		flex: 1,
	},
	mailMain: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});