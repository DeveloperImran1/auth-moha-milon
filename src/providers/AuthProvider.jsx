import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google auth provider
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = ()=> {
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
    }

    // github auth provider
    const githubProvider = new GithubAuthProvider();
    const signInGithub = ()=> {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // signOut
    const logOut = ()=> {
        setLoading(true);
        return signOut(auth)
    }

    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
           
                setUser(currentUser)
                setLoading(false);
            }
            else{
                setUser("")
            }
        })
        return ()=> {
            unSubscribe()
        }
    } ,[])

    const authInfo = {registerUser, loginUser, setUser, user, signInWithGoogle, signInGithub, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;





// Host with firebase: (terminal a kaj na korle git bash a try now )
// firebase er jei project k host korb sei project select kore Build > Hoisting > get started >  Than akta computer a , akbarii ai command ta dita hoi. (windows change korle abar dita hobe.) npm install -g firebase-tools
// Than terminal ai comand ta dita hobe. akta computer a akbar dilai hobe: firebase login
// akhon porer comand gulo every project a dita hoi:
// firebase init
// Tarpor up and down arrow use kore "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys" a jate hobe. Tarpor select korer jonno enter marle hobena, "space" key chapte hobe. Tarpore "enter" marte hobe.
// Than select: Use an existing project
// Than amar sob project er nam asbe, jeita host korte chassi seita select kore enter marte hobe.
// ? What do you want to use as your public directory? dist
// ? Configure as a single-page app (rewrite all urls to /index.html)? Y
// Set up automatic builds and deploys with GitHub? (y/N) n
// npm run build
// firebase deploy
// last a Live link ta pabo: Hosting URL: https://conceptiual-session-mohamilon.web.app
// tasaraw firebase a hoisting > 2 ta live link thake > 1st er ta use kora recomanded.

//---------->>>>>> Jodi code a kiso likha change kori,, tahole update korar jonno sudho 2 ta command dita hoi.
// 1. npm run build
// 2. firebase deploy




///------------------------------------->>> Host with: Netlify:
// 1st a dist folder dia deploy korte hobe. reload hole page not found dei. So, index.html file a kiso code add dita hoi. age kothao note kore rakhsi dekho.
// google or github aigula dia login korar somoi error diba. sei jonno netlify project live link nia > firebase > Authentication > setting > Authorised domains > add domain > link ta bosate hobe. Tahole fb, google, github diaw login kora jabe.