import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-Reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";




class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render () {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className='app-wrapper'>
				{/* eslint-disable-next-line react/jsx-no-undef */}
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					{/* <Route path='/dialogs' component={Dialogs} />
					<Route path='/Profile' component={Profile} />
					<Route path='/News' component={News} />
					<Route path='/Music' component={Music} />
					<Route path='/Setting' component={Setting} /> */}

					<Route path='/dialogs'
						   render={() => <DialogsContainer />} />

					<Route path='/Profile/:userId?'
						   render={() => <ProfileContainer />} />

					<Route path='/users'
						   render={() => <UsersContainer />} />

					<Route path='/login'
						   render={() => <Login />}/>






					<Route path='/News' render={() => <News />} />
					<Route path='/Music' render={() => <Music />} />
					<Route path='/Setting' render={() => <Setting />} />
				</div>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})


let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp})) (App);

const  SamuraiJSApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}

export default SamuraiJSApp;