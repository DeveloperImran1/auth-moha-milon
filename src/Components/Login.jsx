import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const {loginUser, signInWithGoogle, setUser, signInGithub, user} = useContext(AuthContext);

    // pathname pawer jonn
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);   //Output: {pathname: '/login', search: '', hash: '', state: '/about', key: 'hrpp4jwq'}

    useEffect( ()=>{
        if(user){
            navigate(location.state)
        }
    } ,[user])
    const handleSignInGoogle = ()=> {
        signInWithGoogle()
        .then(res => {
            // setUser(res.user)
        })
        .catch(err => console.log(err))
    }
    const handleSignInGithub = ()=> {
        signInGithub()
        .then(result => {
            // setUser(result.user)
            console.log(result.user)
        })
        .catch(err => console.log(err))
    }

    const handleLogin = e=> {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);

        loginUser(email, password)
        .then(result => console.log("Successfully login", result))
        .catch(err => console.log( err))
    }

    return (
        <div className='w-[40%] border-2 mx-auto p-2 rounded-lg '>
            <form onSubmit={handleLogin} className='w-[50%] mx-auto '> 
          
                <div>
                    <p>Email</p>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <p>Password</p>
                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                </div>
             
                <button className="btn btn-accent w-full mt-5">Login</button>

            </form>
            <button onClick={handleSignInGoogle} className="btn btn-accent w-full mt-5">Sign In Google</button>
            <button onClick={handleSignInGithub} className="btn btn-accent w-full mt-5">Sign In Github</button>
        </div>
    );
};

export default Login;