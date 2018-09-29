import React from 'react';
import { connect } from 'react-redux';
import InfoSend from '../components/InfoSend';
import * as router from '../constants/RouterConstants';
import * as storageKeys from '../constants/StorageTypes';

const MailPage = props => <InfoSend { ...props }/>;

const mapStateToProps = (state) => {
	return {
		router,
		storageKeys,
	};
};

export default connect(mapStateToProps, {})(MailPage);
