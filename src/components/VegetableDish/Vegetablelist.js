import DishesList from "./ListofDishes";
import Vegetablelist from "./VegetableBowl";
const VegetableFood = () => {
    return (<div className="w-full h-21">

        <div className="w-full h-1/5 bg-red-500">
            <DishesList variety='Variety of Dishes' />
        </div>
        <div className="w-full h-4/5">
            <Vegetablelist />
        </div>

    </div>);
}

export default VegetableFood;