/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, setAllCoffee, allCoffee }) => {
    const { _id, name, chef, supplier, taste, photo } = coffee;

    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-pi-jade.vercel.app/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }

                        const remaining = allCoffee.filter(c => c._id !== _id);
                        setAllCoffee(remaining)
                        
                    })

            }
        });


    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img className="p-5 w-40 h-40" src={photo} alt="Movie" />
            </figure>
            <div className="flex justify-between w-full gap-5 items-center">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{chef}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y">
                        <button className="btn join-item">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;