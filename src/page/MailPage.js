import React from 'react';
import { connect } from 'react-redux';
import Mail from '../components/Mail';
import * as router from '../constants/RouterConstants';
import * as storageKeys from '../constants/StorageTypes';

const MailPage = props => <Mail { ...props }/>;

const mapStateToProps = (state) => {
	return {
		router,
		storageKeys,
	};
};

export default connect(mapStateToProps, {})(MailPage);
