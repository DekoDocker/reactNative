import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import * as router from '../constants/RouterConstants';
import TabBarItem from '../components/comm/TabBarItem';
import InfoScreen from '../page/InfoPage';
import MailScreen from '../page/MailPage';
import UserScreen from '../page/UserPage';

const RouteConfigs             = {
	Info: {
		screen           : InfoScreen,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: router.INFO_PATH.name,
			tabBarIcon : ({ focused, tintColor }) => {
				const { params } = navigation.state;
				return <TabBarItem tintColor={ tintColor } focused={ focused }
								   tarBarIndex={ params ? params.tarBarIndex : 0 }
								   normalImage={ require('../../res/images/info.png') }
								   selectedImage={ require('../../res/images/info.png') }/>
			},
		}),
	},
	Mail: {
		screen           : MailScreen,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: router.Mail_PATH.name,
			tabBarIcon : ({ focused, tintColor }) => {
				const { params } = navigation.state;
				return <TabBarItem tintColor={ tintColor } focused={ focused }
								   tarBarIndex={ params ? params.tarBarIndex : 0 }
								   normalImage={ require('../../res/images/mail.png') }
								   selectedImage={ require('../../res/images/mail.png') }/>
			},
		}),
	},
	User: {
		screen           : UserScreen,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: router.USER_PATH.name,
			tabBarIcon : ({ focused, tintColor }) => {
				const { params } = navigation.state;
				return <TabBarItem tintColor={ tintColor } focused={ focused }
								   tarBarIndex={ params ? params.tarBarIndex : 0 }
								   normalImage={ require('../../res/images/user.png') }
								   selectedImage={ require('../../res/images/user.png') }/>
			},
		}),
	},
};
const BottomTabNavigatorConfig = {
	initialRouteName: router.INFO_PATH.key,
	backBehavior    : 'none',
	tabBarOptions   : {
		activeTintColor        : '#0087cb',
		activeBackgroundColor  : '#fff',
		inactiveTintColor      : '#888888',
		inactiveBackgroundColor: '#fff',
	},
};

export default createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);