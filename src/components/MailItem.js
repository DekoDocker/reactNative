import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
} from 'react-native';

class MailItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { item, _onPress, rowHeight } = this.props;
		return (
			<TouchableHighlight activeOpacity={ 0.8 } onPress={ () => {_onPress()} }>
				<View style={ [ styles.mailItemCon, { height: rowHeight } ] }>
					<Image source={ require('../../res/images/comm/iface.jpg') }
						   style={ {
							   width       : rowHeight - 5,
							   height      : rowHeight - 5,
							   borderRadius: (rowHeight - 5) / 2
						   } }/>
					<Text style={ { paddingLeft: 5 } }>{ item }</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

export default MailItem;

const styles = StyleSheet.create({
	mailItemCon: {
		backgroundColor: '#fff',
		alignItems     : 'center',
		flexDirection  : 'row',
		paddingLeft    : 5,
		paddingRight   : 5,
	},
});