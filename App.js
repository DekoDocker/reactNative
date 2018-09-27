import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/createStore';
import SetUp from './src/SetUp';

type Props = {};

class App extends React.Component<Props> {
	render() {
		return (
			<Provider store={ store }>
				<SetUp/>
			</Provider>
		);
	}
}

export default App;
