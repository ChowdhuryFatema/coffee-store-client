import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        createUser(email, password)
        .then(result => {
            console.log(result)
            form.reset();

            const createdAt = result.user?.metadata?.creationTime;
            const user = {email, createdAt: createdAt}

            fetch('https://coffee-store-server-pi-jade.vercel.app/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Sign Up Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        })
        .catch(error => {
            console.log(error.message)
        })

    }

    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex flex-col justify-center items-center">
                <div className="card w-full shadow-2xl border">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;