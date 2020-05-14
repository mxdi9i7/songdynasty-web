import React, { useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './routes';
import RoomPage from './pages/Room';
import { auth } from 'firebase';

export const AuthContext = createContext({});

function App() {
	const [user, setUser] = useState({});

	auth().onAuthStateChanged((v) => {
		if (v) {
			setUser(v.providerData[0]);
		}
	});

	return (
		<div className='app-container'>
			<AuthContext.Provider value={user}>
				<Router>
					<React.Fragment>
						<Header />
						{routes.map((route, i) => (
							<Route
								key={i}
								exact
								path={route.link}
								component={route.component}
							/>
						))}
						<Route exact path='/room/:id' component={RoomPage} />
						<Footer />
					</React.Fragment>
				</Router>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
