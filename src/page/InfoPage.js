import React from 'react';
import { connect } from 'react-redux';
import Info from '../components/Info';
import * as router from '../constants/RouterConstants';
import * as storageKeys from '../constants/StorageTypes';

const InfoPage = props => <Info { ...props }/>;

const mapStateToProps = (state) => {
	return {
		router,
		storageKeys,
	};
};

export default connect(mapStateToProps, {})(InfoPage);
