import React from 'react';
import {connect} from 'react-redux';
import User from '../components/User';
import * as router from '../constants/RouterConstants';
import * as storageKeys from '../constants/StorageTypes';

const UserPage = props => <User { ...props }/>;

const mapStateToProps = (state) => {
	return {
		router,
		storageKeys,
	};
};

export default connect(mapStateToProps, {})(UserPage);
