// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage';

// function App() {
//   return (
//     <Switch>
//       <Route path="/login">
//         <LoginFormPage />
//       </Route>
//     </Switch>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import SpotPage from "./components/SpotPage";
import Navigation from './components/Navigation';
import Home from './components/Home';
import LoginFormModal from './components/LoginFormModal';
import Hosting from './components/Hosting';

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/current">
						<Hosting />
					</Route>
					<Route path="/spots/:spotId">
						<SpotPage />
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;
