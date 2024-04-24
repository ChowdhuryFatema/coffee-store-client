import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const Home = () => {

    const coffees =  useLoaderData();
    const [allCoffee, setAllCoffee] = useState(coffees)

    return (
        <div className="max-w-6xl mx-auto px-5">
            <h2>home {coffees.length}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                allCoffee.map(coffee => <CoffeeCard 
                    key={coffee._id}
                    coffee={coffee}
                    allCoffee={allCoffee}
                    setAllCoffee={setAllCoffee}></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Home;