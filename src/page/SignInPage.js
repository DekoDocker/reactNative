import React from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import * as router from '../constants/RouterConstants';
import * as storageKeys from '../constants/StorageTypes';

const SignInPage = props => <SignIn { ...props }/>;

const mapStateToProps = (state) => {
	return {
		router,
		storageKeys,
	};
};

export default connect(mapStateToProps, {})(SignInPage);
