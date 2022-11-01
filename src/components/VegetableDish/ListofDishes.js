const DishesList = ({variety}) => {

    const  varietyOffoods = [{
        name:'Pizza', icons:<i class="fa-solid fa-pizza-slice"></i>
    },{
        name:'Rice', icons:<i class="fa-solid fa-bowl-rice"></i>
    },{
        name:'Burger ' , icons:<i class="fa-solid fa-burger"></i>
    },{
        name:'Cake', icons:<i class="fa-solid fa-cake-candles"></i>
    },{
        name:'drinks', icons:<i class="fa-solid fa-martini-glass-citrus"></i>
    }]
    console.log(varietyOffoods)
    return ( <div className="w-full h-full bg-white">
        <div className="w-full flex justify-center items-center text-2xl text-orange-900 font-bold h-2/5">
            <span className="">{variety}</span>
        </div>
        <div className="w-full h-3/5 flex justify-center ">
            <div className="w-3/5 h-full flex ">
                {varietyOffoods.map(foods=>{
                return( <div className="w-full flex justify-center h-full">
                    <div className=" w-4/5 h-full rounded-sm flex-col flex border-2 items-center hover:border-orange-500 justify-center">
                    <div className="text-3xl text-orange-600 mb-1">{foods.icons}</div>
                    <div className="text-sm text-gray-500">{foods.name}</div>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    </div> );
}
 
export default DishesList;