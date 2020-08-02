import React from 'react';
import Application from './components/Application';
import UserContext from './contexts/UserContext';
import Test from './components/Test';
// import './App.css';

function App() {
  return (
    <>
		<UserContext>
			<Test/>
		</UserContext>
    </>
  );
}
export default App;