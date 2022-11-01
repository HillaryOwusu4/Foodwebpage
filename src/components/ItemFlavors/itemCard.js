const ItemCard = (probs) => {
    return (<div className="w-full h-full">
        <div className="w-full relative h-55">
            <div className="w-full flex  justify-center items-center h-4/5">
                <img src={probs.images} alt="" className="w-52  contrast-125 p-2" />
                <div className="absolute w-24 flex justify-center items-center font-bold text-3xl text-lime-100 h-11 top-7 right-0 bg-lime-600">{probs.percentage}</div>
            </div>
            <div className="w-full h-1/5 font-bold text-lg flex justify-center items-center ">{probs.label}</div>
        </div>
        <div className="w-full flex justify-center h-48">
            <div className="w-90 h-full ">
                <div className="w-full h-25">
                    <span>{`${probs.title}:`}</span>
                    <div className=" w-full h-4/5 flex justify-between bg-slate-50">
                        <button className=" w-40 h-4/5 rounded-sm text-green-100 bg-lime-600">{probs.description}</button>
                        <button className=" w-40 h-4/5  rounded-sm bg-gray-300">{probs.amount}</button>
                    </div>
                </div>
                <div className="w-full h-25 flex ">
                    <div className="w-60 h-full flex items-center ">
                    <div className="w-1/5 h-3/5 border-2 border-gray-200 flex justify-center items-center text-gray-300 rounded-sm"><i class="fa-sharp fa-solid fa-chevron-down"></i></div>
                    <div className="w-17 flex justify-around ml-2 items-center h-full">
                   <div className="text-orange-400 mr-1 text-xl"> <i class="fa-regular fa-clock"></i> </div>
                    <span className="text-gray-700">
                        {`${probs.width} cm`}
                    </span>
                    </div>
                    <div className="w-2/5 flex justify-center items-center h-full">
                    <div className="text-orange-500 mr-1 text-xl"> <i class="fa-solid fa-bag-shopping"></i> </div>
                    <span className="text-gray-700">
                        {`${probs.Bag} rp`}
                    </span>
                    </div>
                    </div>
                    <div className=" w-21 h-full flex justify-center items-center font-bold">{`${probs.price} py6.`}</div>
                </div>
                <div className="w-full h-25 flex">
                <div className="w-60 h-full flex items-center ">
                    <div className="w-1/5 h-3/5 border-2 border-gray-200 flex justify-center items-center text-gray-300 rounded-sm"></div>
                    <div className="w-17 flex justify-around ml-2 items-center h-full">
                   <div className="text-orange-400 mr-1 text-xl"> <i class="fa-regular fa-clock"></i> </div>
                    <span className="text-gray-700">
                        {`${probs.height} cm`}
                    </span>
                    </div>
                    <div className="w-2/5 flex justify-center items-center h-full">
                    <div className="text-orange-500 mr-1 text-xl"> <i class="fa-solid fa-bag-shopping"></i> </div>
                    <span className="text-gray-700">
                        {`${probs.icon} rp`}
                    </span>
                    </div>
                    </div>
                    <div className=" w-21 h-full flex justify-center items-center font-bold">{`${probs.decreasedprice} py6.`}</div>
                </div>
                <div className="w-full h-25 flex justify-around items-center">
                    <span className="text-lime-600 font-bold text-2xl">{`${probs.price} py6.`}</span>
                    <button className="bg-orange-500 text-green-100 font-bold rounded-full w-2/4 h-4/5">AddItem</button>
                </div>

            </div>
        </div>
    </div>);
}

export default ItemCard;