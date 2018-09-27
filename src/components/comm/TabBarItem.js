import React from "react";
import { StyleSheet, View, Image } from 'react-native';

class TabBarItem extends React.Component {
	render() {
		const { focused, tintColor, selectedImage, normalImage, tarBarIndex } = this.props;
		return (
			<View style={ styles.tabBarCon }>
				<Image source={ focused ? selectedImage : normalImage }
					   style={ { tintColor: tintColor, width: 25, height: 25 } }/>
			</View>
		)
	}
}

export default TabBarItem;

const styles = StyleSheet.create({
	tabBarCon: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});