import React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';

class TabBarItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { focused, tintColor, selectedImage, normalImage, tarBarIndex } = this.props;
		return (
			<View style={ styles.tabBarCon }>
				<Image source={ focused ? selectedImage : normalImage }
					   style={ { tintColor: tintColor, width: 25, height: 25 } }/>
				{ tarBarIndex && tarBarIndex > 0 ?
					<View style={ [styles.tabBarBadge, {
						right: tarBarIndex > 99 ? -25 : tarBarIndex > 9 ? 15 : 10,
					}] }>
						<Text style={ { fontSize: 12, textAlign: 'center', color: '#fff' } }>
							{ tarBarIndex > 99 ? '99+' : tarBarIndex }</Text>
					</View>
					: null }
			</View>
		)
	}
}

export default TabBarItem;

const styles = StyleSheet.create({
	tabBarCon  : {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
	tabBarBadge: {
		overflow       : 'hidden',
		backgroundColor: '#FF2E63',
		position       : 'absolute',
		top            : -3,
		height         : 20,
		minWidth       : 20,
		borderRadius   : 10,
		alignItems     : 'center',
		justifyContent : 'center',
		paddingLeft    : 6,
		paddingRight   : 6,
	},
});