import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";




const App = () => {


	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				{/* <Route path='/dialogs' component={Dialogs} />
					<Route path='/Profile' component={Profile} />
					<Route path='/News' component={News} />
					<Route path='/Music' component={Music} />
					<Route path='/Setting' component={Setting} /> */}

				<Route path='/dialogs' render={() => <DialogsContainer />}  />

				<Route path='/Profile'
					render={() => <Profile />} />

				<Route path='/users'
					render={() => <UsersContainer />} />

				<Route path='/News' render={() => <News />} />
				<Route path='/Music' render={() => <Music />} />
				<Route path='/Setting' render={() => <Setting />} />
			</div>
		</div>
	);
}


export default App;
