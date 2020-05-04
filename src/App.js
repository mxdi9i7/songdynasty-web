import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './routes';

function App() {
	return (
		<div className='App'>
			<Router>
				<React.Fragment>
					<Header />
					{routes.map((route) => (
						<Route exact path={route.link} component={route.component} />
					))}
					<Footer />
				</React.Fragment>
			</Router>
		</div>
	);
}

export default App;
