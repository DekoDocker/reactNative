import React from 'react';
import { Text, View } from 'react-native';
import createNavigator from './routes/StackNavigator';
import * as storageKeys from './constants/StorageTypes';

class SetUpPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSignIn: false,  // 是否登录
			isLoad  : false,  // 是否开始加载页面
		};
	}

	componentWillMount() {
		_storage.load(storageKeys.SIGN_USER, (ret) => {
			let isok = ret != null && ret !== undefined;
			this.setState({ isSignIn: isok, isLoad: true });
		});
	}

	render() {
		const { isSignIn, isLoad } = this.state;
		const Navigator            = createNavigator(isSignIn);
		return isLoad ? <Navigator/> : null;
	}
}

export default SetUpPage;
