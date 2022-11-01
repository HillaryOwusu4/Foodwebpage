import ItemFlavours from "../ItemFlavors/itemFlavours";

const Itemlist = () => {

    return (<div className=" w-full bg-Banner flex justify-center h-34">
        <div className="w-4/5 h-70 flex ">
            <div className="w-12 h-full text-3xl flex justify-center items-center text-white"><div className="w-4/5 flex justify-center items-center h-12 bg-orange-500 "><i class="fa-solid fa-angle-left"></i></div></div>
            <div className="w-82 h-full ">
                <div className="w-full h-15 flex justify-center items-center font-bold text-xl">Pizza Flavours</div>
                <div className="w-full h-75  ">
                    <ItemFlavours/>
                </div>
            </div>
            <div className="w-12 h-full text-3xl flex justify-center items-center text-white"><div className="w-4/5 flex justify-center items-center h-12 bg-orange-500 "><i class="fa-solid fa-angle-right"></i></div></div>
        </div>
    </div>);
}

export default Itemlist;