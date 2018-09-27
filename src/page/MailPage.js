import React from 'react';
import {connect} from 'react-redux';
import Mail from '../components/Mail';
import * as storageKeys from '../constants/StorageTypes';

const MailPage = props => <Mail { ...props }/>;

const mapStateToProps = (state) => {
	return {
		storageKeys,
	};
};

export default connect(mapStateToProps, {})(MailPage);
