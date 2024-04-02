import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// create context and export
export const AuthContext = createContext(null);   // aikhane AuthContext holo variabler nam . seita jekono nam hote pare.



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // create useState for loading 
    const [loading, setLoading] = useState(true);

    // createUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // loginUser
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }




    // signOut(auth)
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    // observed auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            console.log("Current value of the current user", currenUser);
            setUser(currenUser);

            // user set kora hole loading er value false kore dibo
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    }, []);


    // login with google

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = ()=> {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }



    // useContext() er maddhome onno kono component theke jokhon dhorbo, seikhane user and createUser function ta pabo.
    const authInfo = { user, createUser, signInUser, logOut, loading, signInWithGoogle }

    return (
        // createContext jei variable er moddhe store koresi sei nam.Provider dita hobe.
        <AuthContext.Provider value={authInfo}>
            {/* aikhane jei jei component thakbe sudho sei sei conponent gulo ai AuthContext er access korte parbe. But all component k access dewer jonno main.jsx file a <RouterProvider> k <AuthProvider> component er moddhe rakhe call korte hobe. */}

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}



// Summary:


// AuthProvider component er bahira createContext create kore export kore dita hobe.
// Than ai authProvider component k main.jsx theke call kore dewer somoi element er moddhe <RouterProvider router={router} /> k dita dita hobe.
// oi routerProvider k AuthProvider conponent er perameter a childreen hisabe dhorte hobe.
// Akhon AuthProvider k call korar somoi maghkhane {childreen} k dita hobe. Tahole full project ai context er value access korte parbe. ex: AuthContext.Provider value={authInfo}>  {children}   </AuthContext.Provider>
// aikhane value hisabe akta object diasi.Object er moddhe useState er user namer akta variable ase , and createUser namer akta function pathia disi.
// ai createUser function jeikhane call hobe, seikhan theke perameter a email and password k nei.
// Perameter a asa email, password, ar firebase.config.js file theke export kora auth dia, firebase er user register korar function a pathia diasi and return koresi.  return createUserWithEmailAndPassword(auth, email, password)
// createUserWithEmailAndPassword k return koresi. so jei component thek call korbo, seikhane firebase er responce and error k .then er maddhome dhorte hobe.



// observed auth state change ---> firebase er manage users > Get the currently signed-in user aikhane ai method ase.
// every state change a current user er all information paoa jai.login ase kina log out korisa.
// aita korar jonno AuthProvider component a akta useEffect() nita hobe. useEffect er 1st perameter a jei function thake. sei function er vitore onAuthStateChanged(auth, currenUser) ; firebase er ai method k call kore dita hoi. 2nd peramter akta function, ai function perameter a current user k perameter hisabe pai.
// jeheto current user k passi. so uporer useState er setUser(currtentUser) a currentUser k call kore disi.
// ai onAuthStateChanged full method k unSbscribe namer variable (unSubscribe) er moddhe store korsi. Tarpor return koresi akta arrow function. jei function er modddhe unSubscribe() k call kore disi.




// Abar sign out korte hole: password authentication > sobar last a
// signOut(auth) ai method k AuthProvider component a akta logOut function er moddhe rake call kore disi. and oi logOut function k context a pathia disi. Fole useContext er maddhome oi logOut function k distucture kore pabo and SignOut button er onClick a handleLogout function call kore dibo , jar moddhe logOut function call hobe.




// Abar google dia signUp korte hole: 
// AuthProvider.jsx file a const provider = new GoogleAuthProvider(); k import korte hobe and call korte hobe.
// Tarpor a akta function er moddhe return signInWithPopup(auth, provider) function k call kore dita hobe. and mustbe return korte hobe. jeheto signInWithPopup k call korar somoi sudho auth and provider holei hosse. tai ai function er perameter a kiso nita hobena.
// Ar oi function k context er moddhe pathia dita hobe.
// Tarpor login component a context a dewa function k dhorte hobe, and handleLoginWithGoogle kono function er moddhe call kore dia .then and .catch k dhorte hobe. ar handleLoginWithGoogle function k kono button er onClick a call kore dita hobe.