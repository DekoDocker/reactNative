import React from "react";
import {
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';

class BackBtn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { backTitle } = this.props;
		return (
			<TouchableOpacity style={ styles.backCon }
							  activeOpacity={ 0.5 }
							  onPress={ () => {alert(1)} }>
				<Image source={ require('../../../res/images/comm/back.png') }
					   style={ { width: 17, height: 17, } }/>
				{ backTitle ?
					<Text ellipsizeMode={ 'tail' } numberOfLines={ 1 } style={ {
						paddingLeft: 2,
						fontSize   : 13,
						color      : '#fff',
					} }>{ backTitle }</Text> : null }
			</TouchableOpacity>
		);
	}
}

export default BackBtn;

const styles = StyleSheet.create({
	backCon: {
		flex         : 1,
		flexDirection: 'row',
		alignItems   : 'center',
	},
});