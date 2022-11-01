const Navbar = () => {
    const items = [{home:'H0ME',product:'PRODUCT',features:'FEATURES',blog:'OUR BLOG',search:'SEARCH'}]
    return (<div className="w-full h-15 cursor-pointer shadow-md shadow-gray-200 flex justify-center">
        <div className="w-4/5 h-full flex ">
            <div className="w-1/5 h-full flex items-center">
                <img src="./images/logossss__2_-removebg-preview.png" className="h-12  contrast-150" alt="logo" />
            </div>
            <div className="w-4/5 h-full cursor-pointer text-sm font-bold">
              {
                items.map(item=>{
                    return(<div className="w-full items-center h-full justify-around flex ">
                        <div className=" hover:text-orange-600">{item.home}</div>
                        <div className=" hover:text-orange-600">{item.product}</div>
                        <div className=" hover:text-orange-600">{item.features}</div>
                        <div className=" hover:text-orange-600">{item.blog}</div>
                        <div className=" hover:text-orange-600">{item.search}</div>
                    </div>
                        )
                })
              }
            </div>
            <div className="w-1/5 h-full flex">
                <div className="w-3/5 flex items-center h-full">
                <div className="w-6 flex justify-center items-center text-orange-600 h-6 border border-orange-600 rounded-full"><i class="fa-solid fa-user"></i></div>
                    <div className="w-50 flex ml-2 flex-col justify-center  h-full">
               <span className="italic text-sm font-extrabold text-orange-500">BONNET</span>
               <span className="text-ext  mt-[-5px] ">Is a very good resturant</span>
               </div>
                </div>
                <div className="w-2/5 h-full bg-orange-400 flex justify-center items-center relative">
                    <img src="./images/shopping-cart (4).png" className="w-50 h-50 " alt="cart" />
                    <div className="absolute items-center justify-center flex w-5 h-5 rounded-full text-xs text-white top-4 right-3 bg-green-600">0</div>
                </div>
            </div>
        </div>
    </div>);
}

export default Navbar;