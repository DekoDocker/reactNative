import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class MailItemSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state              = {
			isTouchDown: false,  // 是否按下右侧 A B C
		};
		this.mailList           = this.props.data;
		this._maxHeight_        = this.props.maxHeight;
		this._sectionItemWidth_ = this.props.sectionItemWidth;
	}

	render() {
		return (
			<View style={ {
				position: 'absolute',
				right   : 0,
				top     : 0,
				zIndex  : 999,
				width   : this._sectionItemWidth_,
				height  : this._maxHeight_,
			} }>
				<View style={ { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
					{ this.mailList.map((item, index) => {
						return <View key={ index }
									 activeOpacity={ 1 }
									 onStartShouldSetResponder={ () => true }
									 onMoveShouldSetResponder={ () => true }
									 onResponderGrant={ event => this._onResponderGrant(event, item.title) }
									 onResponderMove={ event => this._onResponderMove(event, item.title) }>
							<Text style={ { color: '#777', fontSize: 12, paddingLeft: 2, paddingRight: 2 } }
								  key={ "letter" + index }>
								{ item.title }
							</Text>
						</View>;
					}) }
				</View>
			</View>
		);
	}

	_onLetterSelectedListener = (event, letter) => {
		const touch = event.nativeEvent.touches[ 0 ];
		this.props._scrollToLocation({
			animated    : true,
			itemIndex   : 0,
			sectionIndex: this._getIndex(letter),
			viewPosition: 0,
			viewOffset  : 0
		});
	};
	_onResponderGrant         = (event, letter) => {
		this._onLetterSelectedListener(event, letter);
	};
	_onResponderMove          = (event, letter) => {
		this._onLetterSelectedListener(event, letter);
	};
	_getIndex                 = (letter) => {
		for (let i = 0; i < this.mailList.length; i++) {
			let item = this.mailList[ i ];
			if (item.title === letter) {
				return i;
			}
		}
	};
}

export default MailItemSlider;