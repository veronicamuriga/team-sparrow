import React from 'react';
import Application from './components/Application';
import UserContext from './contexts/UserContext';
// import './App.css';

function App() {
  return (
    <>
		<UserContext>
			<Application/>
		</UserContext>
    </>
  );
}
export default App;