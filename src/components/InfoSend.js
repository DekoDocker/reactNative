import React from "react";
import HeaderNav from "./comm/HeaderNav";
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class InfoSend extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={ styles.infoSendCon }>
				<HeaderNav { ...this.props } headerTitle={ params ? params.headerTitle : 'error' }
						   backTitle={ params ? params.backTitle : 'error' }/>
				<View style={ styles.infoSendMain }>
					<Text>InfoSend</Text>
				</View>
			</View>
		);
	}
}

export default InfoSend;

const styles = StyleSheet.create({
	infoSendCon : {
		flex: 1,
	},
	infoSendMain: {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
	},
});