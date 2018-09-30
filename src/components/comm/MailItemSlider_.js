import React from 'react';
import { Text, View, } from 'react-native';

class MailItemSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state              = {
			isTouchDown: false,  // 是否按下右侧 A B C
		};
		this.statusHeight       = isIphoneX ? 30 : 22 + isIphoneX ? 80 : 60;
		this.mailList           = this.props.data;
		this._maxHeight_        = this.props.maxHeight;
		this._sectionTopHeight_ = this.props.sectionTopHeight;
		this._tabNavHeight_     = this.props.tabNavHeight;
		this._sectionItemWidth_ = this.props.sectionItemWidth;
		this._touchDownBGColor_ = this.props.touchDownBGColor;
		this._touchUpBGColor_   = this.props.touchUpBGColor;
	}

	render() {
		let _sectionItemHeight = this._getSectionItemHeight();
		return (
			<View style={ {
				position     : 'absolute',
				right        : 0,
				top          : 0,
				zIndex       : 9999,
				width        : this._sectionItemWidth_,
				height       : this._maxHeight_ - this._sectionTopHeight_ - this.statusHeight,
				paddingTop   : this._sectionTopHeight_ + this.statusHeight,
				paddingBottom: this._tabNavHeight_,
			} }
				  onStartShouldSetResponder={ () => true } // 在用户开始触摸的时候（手指刚刚接触屏幕的瞬间），是否愿意成为响应者？
				  onMoveShouldSetResponder={ () => true } // :如果View不是响应者，那么在每一个触摸点开始移动（没有停下也没有离开屏幕）时再询问一次：是否愿意响应触摸交互呢？
				  onResponderGrant={ this._onResponderGrant } // 用户按下触发
				  onResponderMove={ this._onResponderMove } // 用户正在屏幕上移动手指时（没有停下也没有离开屏幕）
				  onResponderRelease={ this._onResponderRelease } // 触摸操作结束时触发（手指抬起离开屏幕）
			>
				{ this.mailList.map((item, index) => {
					return <View key={ index } style={ {
						textAlign      : 'center',
						alignItems     : 'center',
						height         : _sectionItemHeight,
						lineHeight     : _sectionItemHeight,
						backgroundColor: this.state.isTouchDown ? this._touchDownBGColor_ : this._touchUpBGColor_
					} }>
						<Text style={ { color: '#777' } }> { item.title }                        </Text>
					</View>
				}) }
			</View>
		);
	}

	_onResponderGrant     = (event) => {
		this._scrollToLocation(event);
		this.setState({ isTouchDown: true, })
	};
	_onResponderMove      = (event) => {
		this._scrollToLocation(event);
		this.setState({ isTouchDown: true, })
	};
	_onResponderRelease   = (event) => {
		this.setState({ isTouchDown: false, })
	};
	_scrollToLocation     = (event) => {
		const touch            = event.nativeEvent.touches[ 0 ];
		let _sectionItemHeight = this._getSectionItemHeight();
		if (touch.pageY - this.statusHeight >= this._sectionTopHeight_ &&
			touch.pageY <= this.statusHeight + this._sectionTopHeight_ + this._tabNavHeight_ + _sectionItemHeight * this.mailList.length) {
			const index = (touch.pageY - this.statusHeight - this._sectionTopHeight_) / _sectionItemHeight;
			if (parseInt(index) <= this.mailList.length - 1) {
				this.props._scrollToLocation({
					animated    : true,
					itemIndex   : 0,
					sectionIndex: parseInt(index),
					viewPosition: 0,
					viewOffset  : 0
				});
			}
		}
	};
	_getSectionItemHeight = () => {
		return (this._maxHeight_ - this.statusHeight - this._sectionTopHeight_ - this._tabNavHeight_) / this.mailList.length;
	};
}

export default MailItemSlider;