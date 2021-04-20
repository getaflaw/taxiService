import React, {useState, useContext} from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

	const [userData, setUserData] = useState({email: null, password: null})
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const login = (email, password) => {
		setIsLoggedIn(true)
		console.log('raz')
		setUserData({email: email, password: password})
	}
	const logOut = () => {
		setIsLoggedIn(false)
		console.log('raz2')
		setUserData({email: null, password: null})
	}


	return (
		<AuthContext.Provider value={{
			login,
			logOut,
			isLoggedIn
		}}>
			{children}
		</AuthContext.Provider>
	)
}