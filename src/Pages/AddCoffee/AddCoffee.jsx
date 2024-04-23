import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, taste, category, details, photo}

        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId> 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }

    return (
        <div className="max-w-6xl mx-auto px-5">
            <div className="bg-[#F4F3F0] p-10 rounded">
                <div className="w-1/2 mx-auto my-5 text-center space-y-5">
                    <h2 className="text-4xl font-bold">Add New Coffee</h2>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-3">
                            <span className="text-xl font-semibold">Name</span> <br />
                            <input className="w-full p-3 rounded outline-none" type="text" name="name" placeholder="Enter coffee name" />
                        </div>
                        <div className="space-y-3">
                            <span className="text-xl font-semibold">Chef</span> <br />
                            <input className="w-full p-3 rounded outline-none" type="text" name="chef" placeholder="Enter coffee chef" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <div className="space-y-3">
                            <span className="text-xl font-semibold">Supplier</span> <br />
                            <input className="w-full p-3 rounded outline-none" type="text" name="supplier" placeholder="Enter coffee supplier" />
                        </div>
                        <div className="space-y-3">
                            <span className="text-xl font-semibold">Taste</span> <br />
                            <input className="w-full p-3 rounded outline-none" type="text" name="taste" placeholder="Enter coffee Taste" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <div className="space-y-3">
                            <span className="text-xl font-semibold">Category</span> <br />
                            <input className="w-full p-3 rounded outline-none" type="text" name="category" placeholder="Enter coffee Category" />
                        </div>
                        <div className="space-y-3">
                            <span className="text-xl font-semibold">Details</span> <br />
                            <input className="w-full p-3 rounded outline-none" type="text" name="details" placeholder="Enter coffee Details" />
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <div className="space-y-3">
                            <span className="text-xl font-semibold">Photo</span> <br />
                            <input className="w-full p-3 rounded outline-none" type="text" name="photo" placeholder="Enter coffee Photo" />
                        </div>
                    </div>

                    <button className="btn w-full bg-[#D2B48C] hover:bg-[#ebbf85] mt-10">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;