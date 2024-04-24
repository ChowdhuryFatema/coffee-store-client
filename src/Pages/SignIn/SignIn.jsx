import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user)

            const user = {
                email,
                lastLoggedAt: result.user?.metadata?.lastSignInTime,
            }

            // update last logged at in the database
            fetch(`https://coffee-store-server-pi-jade.vercel.app/user`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        })
        .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="hero min-h-[80vh]">
                <div className="hero-content flex flex-col justify-center items-center">
                    <div className="card w-full shadow-2xl bg-white border">
                        <form onSubmit={handleSignIn} className="card-body">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn; 