import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

    const {registerUser, setUser} = useContext(AuthContext);

    const [error, setError] = useState("")


    const handleSubmit = e=> {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword);

        // validation email
        // if(!/@gmail\.com$/.test(email)){
        //     return setError("email last charecter mustbe follow this syntax @gmail.com")
        // }
        // // validation password
        // if(password.length < 6){
        //     return setError("Password mustbe below 6 charecter")
        // }
        // if(password != confirmPassword){
        //     return setError("password and confirm password mustbe same hote hobe")
        // }
      
        // if(!/[@#$%&]/.test(password)){
        //     return setError("Password a akta special charecter hote hobe.")
        // }

        // if(!/\d{2,}$/.test(password)){
        //     return setError("Password er last 2 charecter number hote hobe.")
        // }

        setError("")

        registerUser(email, password)
        .then(res => {
            // setUser(res.user)
        })
        .catch(err => {
            // setError(err.message)
        })
    }



    return (
        <div className='w-[40%] border-2 mx-auto p-2 rounded-lg '>
            <form onSubmit={handleSubmit} className='w-[50%] mx-auto '> 
                <div>
                    <p>Name</p>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <p>Photo</p>
                    <input name='photo' type="text" placeholder="Photo" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <p>Email</p>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <p>Password</p>
                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input name='confirmPassword' type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <span className='text-red-600'>
                    {
                        error && <span>{error}</span>
                    }
                </span>
                <button className="btn btn-accent w-full mt-5">Register</button>

            </form>
        </div>
    );
};

export default Register;