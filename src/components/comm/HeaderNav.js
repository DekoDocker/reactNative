import React from "react";
import {
	StyleSheet,
	Dimensions,
	Text,
	View,
	StatusBar,
} from 'react-native';
import BackBtn from "./BackBtn";

const _width_ = Dimensions.get('window').width;

class HeaderNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerConHeightMax      : isIphoneX ? 80 : 60,
			headerStatusBarHeightMax: isIphoneX ? 30 : 22,
		};
	}

	render() {
		const { headerTitle, leftComponent, rightComponent, backTitle, navigation } = this.props;
		return (
			<View style={ [ styles.headerCon, { height: this.state.headerConHeightMax, } ] }>
				<StatusBar barStyle={ 'light-content' }/>
				<View style={ [ styles.headerView, { paddingTop: this.state.headerStatusBarHeightMax, } ] }>
					<View
						style={ [ styles.headerLeft, { height: this.state.headerConHeightMax - this.state.headerStatusBarHeightMax, } ] }>
						{ backTitle ? <BackBtn navigation={ navigation } backTitle={ backTitle }/> : leftComponent }
					</View>
					<View
						style={ [ styles.headerTitle, { height: this.state.headerConHeightMax - this.state.headerStatusBarHeightMax, } ] }>
						<Text ellipsizeMode={ 'tail' } numberOfLines={ 1 }
							  style={ { fontSize: 16, color: '#fff', } }>{ headerTitle }</Text>
					</View>
					<View
						style={ [ styles.headerRight, { height: this.state.headerConHeightMax - this.state.headerStatusBarHeightMax, } ] }>
						{ rightComponent }
					</View>
				</View>
			</View>
		);
	}
}

export default HeaderNav;

const styles = StyleSheet.create({
	headerCon  : {
		width          : _width_,
		backgroundColor: '#63b5ff',
		// backgroundColor: '#252A34',
	},
	headerView : {
		flex         : 1,
		width        : _width_,
		alignItems   : 'center',
		flexDirection: 'row',
		paddingLeft  : 8,
		paddingRight : 8,
	},
	headerLeft : {
		width         : _width_ / 3,
		alignItems    : 'flex-start',
		justifyContent: 'center',
	},
	headerTitle: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
	headerRight: {
		width         : _width_ / 3,
		alignItems    : 'flex-end',
		justifyContent: 'center',
	},
});