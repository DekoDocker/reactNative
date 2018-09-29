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
			sectionID: '',
			rowID    : '',
		};
	}

	initInfoItemRightBtns = () => {
		let infoItemRightBtns = [
			{
				text           : this.props.item.noRead !== 0 ? '标记已读' : '标记未读',
				backgroundColor: '#F78D3F',
				color          : '#fff',
				underlayColor  : '#F78D3F',
				onPress        : () => this.props.onReadInfoItem(this.props.item),
			},
			{
				text           : '删除',
				backgroundColor: '#f22c5e',
				color          : '#fff',
				underlayColor  : '#f22c5e',
				onPress        : () => this.props.onDelInfoItem(this.props.item),
			},
		];
		return infoItemRightBtns;
	};

	render() {
		const { item, maxWidth, maxHeight, iFaceWidth, sectionID, rowID } = this.props;
		return (
			<Swipeout autoClose={ true } backgroundColor={ '#fff' } right={ this.initInfoItemRightBtns() }
					  close={ !(this.state.sectionID === sectionID && this.state.rowID === rowID) }
					  sectionID={ item.key } rowID={ rowID } onOpen={ this._onOpen }
					  scroll={ scrollEnabled => { this.props.setInfoListScrollEnabled(scrollEnabled)} }
			>
				<TouchableHighlight activeOpacity={ 0.8 } onPress={ () => {alert(2)} }>
					<View style={ [ styles.infoItemCon, { width: maxWidth, height: maxHeight, } ] }>
						<View style={ [ styles.infoItemIFace, { width: iFaceWidth, height: maxHeight, } ] }>
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
								{ item.noRead && item.noRead > 0 ?
									<View style={ [ styles.infoItemBadge, {
										backgroundColor: '#FF2E63',
										paddingTop     : .3
									} ] }>
										<Text style={ {
											fontSize: 11,
											color   : '#fff',
										} }>{ item.noRead > 99 ? '99+' : item.noRead }</Text>
									</View> : <View style={ styles.infoItemBadge }/> }
							</View>
						</View>
					</View>
				</TouchableHighlight>
			</Swipeout>
		);
	}

	_onOpen = (sectionID, rowID, direction) => {
		if (!direction) {
			return;
		}
		this.setState({ sectionID, rowID });
		this.props.setSectionID(sectionID);
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
		overflow      : 'hidden',
		height        : 18,
		minWidth      : 18,
		borderRadius  : 18 / 2,
		alignItems    : 'center',
		justifyContent: 'center',
		paddingLeft   : 6,
		paddingRight  : 6,
	},
});