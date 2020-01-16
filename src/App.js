import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import LandingPage from './pages/Landing';
import AuthPage from './pages/Auth';

//styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Router>
				<React.Fragment>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/auth' component={AuthPage} />
				</React.Fragment>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
