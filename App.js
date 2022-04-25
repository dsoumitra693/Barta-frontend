import React, { createContext, useState } from 'react'
import Navigation from './Screens/Navigation';

export const User = createContext()
const App = () => {
    const [userData, setUserData] = useState('null');
        return (
            <User.Provider value={{userData, setUserData}}>
                <Navigation />
            </User.Provider>
        )
}

export default App