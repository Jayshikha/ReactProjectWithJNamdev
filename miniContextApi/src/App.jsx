import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
    return (
        <>
        <div style={{ background: 'black', color: 'white' }}>

            <h1>Counter App</h1>
            <UserContextProvider>
                <Login />
                <Profile />
            </UserContextProvider>
        </div>
        </>
    )
}

export default App;
