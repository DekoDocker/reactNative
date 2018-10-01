import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image,
} from 'react-native';

class UserCartInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { maxWidth, cartHeight, iconConSize, iconSize, contentDom, rightDom, _onPress } = this.props;
		return (
			<TouchableHighlight activeOpacity={ 0.8 } onPress={ () => {_onPress();} }>
				<View style={ {
					width        : maxWidth, height: cartHeight, backgroundColor: '#fff',
					flexDirection: 'row', paddingLeft: 5, paddingRight: 5,
				} }>
					<View style={ {
						width: iconConSize, height: iconConSize, alignItems: 'center', justifyContent: 'center',
					} }>
						<Image source={ require('../../res/images/comm/iface.jpg') }
							   style={ { width: iconSize, height: iconSize, borderRadius: iconSize / 2 } }/>
					</View>
					{ contentDom }
					{ rightDom }
				</View>
			</TouchableHighlight>
		);
	}
}

export default UserCartInfo;
