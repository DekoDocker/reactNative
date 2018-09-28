import React from "react";
import PropTypes from "prop-types";
import Swipeout from 'react-native-swipeout';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
} from 'react-native';

class InfoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sectionID        : '',
			rowID            : '',
			rowIds           : [],
			infoItemRightBtns: [
				{
					text: 'Button'
				}
			]
		};
	}

	render() {
		const { item, maxWidth, maxHeight, iFaceWidth, sectionID, rowID } = this.props;
		return (
			<Swipeout autoClose={ true } backgroundColor={ '#fff' } right={ this.state.infoItemRightBtns }
					  close={ !(this.state.sectionID === sectionID) } rowID={ rowID }
					  onOpen={ this._onOpen }>
				<TouchableHighlight activeOpacity={ 0.8 } onPress={ () => {alert(2)} }>
					<View style={ [styles.infoItemCon, { width: maxWidth, height: maxHeight, }] }>
						<View style={ [styles.infoItemIFace, { width: iFaceWidth, height: maxHeight, }] }>
							<Image source={ require('../../res/images/comm/iface.jpg') }
								   style={ { width: 45, height: 45, borderRadius: 45 / 2 } }/>
						</View>
						<View style={ { flex: 1, height: maxHeight, } }>
							<View style={ { flex: 1, justifyContent: 'center' } }>
								<Text style={ {
									fontSize     : 14,
									color        : '#000',
									paddingBottom: .3
								} }>{ item.username }</Text>
								<View style={ { flexDirection: 'row', paddingTop: .3, } }>
									{ item.isSend && <Image source={ require('../../res/images/comm/left.png') }
															style={ { width: 17, height: 17, } }/> }
									<Text
										style={ { fontSize: 12, color: '#777', paddingTop: .3 } }>{ item.msg }</Text>
								</View>
							</View>
						</View>
						<View style={ { minWidth: 80, height: maxHeight, } }>
							<View style={ { flex: 1, alignItems: 'flex-end', justifyContent: 'center' } }>
								<Text style={ {
									fontSize     : 11,
									color        : '#777',
									paddingBottom: .3
								} }>{ item.lastTime }</Text>
								<View style={ [styles.infoItemBadge, { paddingTop: .3 }] }>
									{ item.noRead && item.noRead > 0 ?
										<Text style={ {
											fontSize: 11,
											color   : '#fff',
										} }>{ item.noRead > 99 ? '99+' : item.noRead }</Text> : null }
								</View>
							</View>
						</View>
					</View>
				</TouchableHighlight>
			</Swipeout>
		);
	}

	_onOpen = (sectionID, rowID, direction) => {
		if(!direction) {
			return;
		}
		let rowIds = this.state.rowIds;
		rowIds.push(rowID);
		this.setState({ sectionID: rowID, rowIds: rowIds });
		this.props.setSectionID(rowID);
	};
}

export default InfoItem;

const styles = StyleSheet.create({
	infoItemCon  : {
		flexDirection  : 'row',
		backgroundColor: '#fff',
		paddingLeft    : 5,
		paddingRight   : 5,
	},
	infoItemIFace: {
		alignItems    : 'center',
		justifyContent: 'center',
	},
	infoItemBadge: {
		overflow       : 'hidden',
		backgroundColor: '#FF2E63',
		height         : 18,
		minWidth       : 18,
		borderRadius   : 18 / 2,
		alignItems     : 'center',
		justifyContent : 'center',
		paddingLeft    : 6,
		paddingRight   : 6,
	},
});