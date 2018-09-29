import React from "react";
import { StyleSheet, Dimensions, Image, Text, View, Animated, Easing, } from 'react-native';

const _ejectWidth_    = Dimensions.get('window').width;
const _ejectIconSize_ = 17;
const _ejectDuration_ = 260;

class Eject extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerConHeightMax      : isIphoneX ? 80 : 60,
			headerStatusBarHeightMax: isIphoneX ? 30 : 22,
			ejectDoms               : [],
			ejectAnimateds          : [],
		};
		this.ERROR = {
			ejectConBg   : '#ED5485',
			ejectIcon    : require('../../../res/images/comm/eject_error.png'),
			ejectConColor: '#fff',
		};
		this.INFO  = {
			ejectConBg   : '#50C1E9',
			ejectIcon    : require('../../../res/images/comm/eject_info.png'),
			ejectConColor: '#fff',
		};
	}

	render() {
		return (
			<View style={ styles.ejectCon }>
				{ this.state.ejectDoms.map((item) => {return item}) }
			</View>
		);
	}

	_openEject     = (type, ejectMsg) => {
		let ejectConfigs = this._getEjectType(type);
		let k            = new Date().getTime();

		// 动画值
		let ejectAnimateds = this.state.ejectAnimateds;
		let ejectAnimated  = {
			key: k,
			val: {
				_ejectConHeightAnimated      : new Animated.Value(0),
				_ejectStatusBarHeightAnimated: new Animated.Value(0),
				_ejectIconSizeAnimated       : new Animated.Value(0),
			}
		};
		ejectAnimateds.push(ejectAnimated);

		// dom 节点
		let ejectDoms = this.state.ejectDoms;
		let dom       = <Animated.View key={ k } style={ [ styles.ejectMain, {
			backgroundColor: ejectConfigs.ejectConBg,
			height         : ejectAnimated.val._ejectConHeightAnimated,
			paddingTop     : ejectAnimated.val._ejectStatusBarHeightAnimated,
		} ] }>
			<Animated.Image source={ ejectConfigs.ejectIcon }
							style={ {
								width : ejectAnimated.val._ejectIconSizeAnimated,
								height: ejectAnimated.val._ejectIconSizeAnimated,
							} }/>
			<Text style={ {
				paddingLeft: 5,
				color      : ejectConfigs.ejectConColor,
			} }>{ ejectMsg }</Text>
		</Animated.View>;
		ejectDoms.push(dom);
		this.setState({ ejectDoms, ejectAnimateds });
		this._startAnimated(ejectAnimated, dom);
	};
	_getEjectType  = (type) => {
		switch (type) {
			case 'ERROR':
				return this.ERROR;
			case 'INFO':
				return this.INFO;
		}
	};
	_startAnimated = (ejectAnimated, dom) => {
		Animated.parallel([
			Animated.timing(
				ejectAnimated.val._ejectConHeightAnimated,
				{
					duration: _ejectDuration_,
					toValue : this.state.headerConHeightMax,
					easing  : Easing.linear,
				},
			),
			Animated.timing(
				ejectAnimated.val._ejectStatusBarHeightAnimated,
				{
					duration: _ejectDuration_,
					toValue : this.state.headerStatusBarHeightMax,
					easing  : Easing.linear,
				},
			),
			Animated.timing(
				ejectAnimated.val._ejectIconSizeAnimated,
				{
					duration: _ejectDuration_,
					toValue : _ejectIconSize_,
					easing  : Easing.linear,
				}
			),
		]).start(() => {setTimeout(() => {this._endAnimated(ejectAnimated, dom);}, 2000);});
	};
	_endAnimated   = (ejectAnimated, dom) => {
		Animated.parallel([
			Animated.timing(
				ejectAnimated.val._ejectConHeightAnimated,
				{
					duration: _ejectDuration_,
					toValue : 0,
				},
			),
			Animated.timing(
				ejectAnimated.val._ejectStatusBarHeightAnimated,
				{
					duration: _ejectDuration_,
					toValue : 0,
				},
			),
			Animated.timing(
				ejectAnimated.val._ejectIconSizeAnimated,
				{
					duration: _ejectDuration_,
					toValue : 0,
				}
			),
		]).start(() => {
			setTimeout(() => {
				let ejectAnimateds = this.state.ejectAnimateds;
				let ejectDoms      = this.state.ejectDoms;
				let ejectIndex     = ejectAnimateds.indexOf(ejectAnimated);
				let domIndex       = ejectDoms.indexOf(dom);
				ejectAnimateds.splice(ejectIndex, 1);
				ejectDoms.splice(domIndex, 1);
				this.setState({ ejectDoms, ejectAnimateds });
			}, 10000);
		});
	};
}

const styles = StyleSheet.create({
	ejectCon : {
		width   : _ejectWidth_,
		position: 'absolute',
		top     : 0,
		zIndex  : 999,
	},
	ejectMain: {
		flex         : 1,
		alignItems   : 'center',
		paddingLeft  : 10,
		paddingRight : 10,
		color        : '#fff',
		flexDirection: 'row',
	}
});

export default Eject;