import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as router from '../constants/RouterConstants';
import TabNavigator from './TabNavigator';
import SignInScreen from '../page/SignInPage';
import InfoSendScreen from '../page/InfoSendPage';
import init from '../utils/init';

init();
const RouteConfigs         = {
	Main    : { screen: TabNavigator, },
	SignIn  : { screen: SignInScreen, },
	InfoSend: { screen: InfoSendScreen, },
};
const StackNavigatorConfig = (isSignIn) => {
	return {
		initialRouteName: isSignIn ? router.MAIN_PATH.key : router.SIGNIN_PATH.key, // 默认显示界面
		headerMode      : 'none',// 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
	};
};

const createNavigator = (isSignIn) => {
	return createStackNavigator(RouteConfigs, StackNavigatorConfig(isSignIn));
};
export default createNavigator;