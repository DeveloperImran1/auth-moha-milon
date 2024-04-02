import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();   // ai navigate er moddhe kono route dila oi route a nia jai. conditionaly navigate use kora hoi.


    const handleSubmit = (e)=> {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(signInUser);

        signInUser(email, password)
        .then(result => {
            console.log(result);
            e.target.reset();    // onSubmit a event asle,, oi event.target.reset() method k call korle input field clear hobe.
            navigate("/");    // jokhon thikthak vabe login hobe, tokhon home page a nia jabe.
        })
        .catch(err => console.error(err))

    }


    // handle google signin --->> 
    const handleSignIn = ()=> {
        signInWithGoogle()
        .then(result => {
            console.log(result)
        })
        .catch( err => console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>You new Auth Moha Milon? Please <Link to="/register" className="font-bold text-blue-800" >Register</Link> </p>
                </div>

                {/* handleSignIn button    . aikhane onClick a  signInWithGoogle function k call kore dibona. karon .then and .catch er maddhoem error k dhorte hobe.*/}
                <button onClick={handleSignIn} >SignIn Google</button> 

            </div>
        </div>
    );
};

export default Login;