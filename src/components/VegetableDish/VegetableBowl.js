import VegetableDisplay from "./VegetableDisplay";
const Vegetablelist = () => {

    return (<div className="w-full h-full flex justify-center relative">
        <img src="./images/파프리카_효능_10가지-removebg-preview.png" alt="images" className="absolute left-[-25rem] top-[20rem]" />
        <img src="./images/whatjpg-removebg-preview.png" alt="leave" className="absolute left-[67rem] top-[-16.5rem] w-1/5 h-1/5" />
        <div className="w-4/5 h-full flex ">
            <div className="w-12 h-full  text-3xl flex justify-center items-center text-white">
                <div className="w-4/5 flex justify-center items-center h-12 bg-orange-500 "><i class="fa-solid fa-angle-left"></i></div>
            </div>
            <div className="w-88 h-[94%]">
                <VegetableDisplay />
            </div>
            <div className="w-12 h-full  text-3xl flex justify-center items-center text-white">
                <div className="w-4/5 flex justify-center items-center h-12 bg-orange-500 "><i class="fa-solid fa-angle-left"></i></div>
            </div>
        </div>
    </div>);
}

export default Vegetablelist;