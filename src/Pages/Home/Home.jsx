import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


const Home = () => {

    const coffees =  useLoaderData();

    return (
        <div className="max-w-6xl mx-auto px-5">
            <h2>home {coffees.length}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                coffees.map(coffee => <CoffeeCard 
                    key={coffee._id}
                    coffee={coffee}></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Home;