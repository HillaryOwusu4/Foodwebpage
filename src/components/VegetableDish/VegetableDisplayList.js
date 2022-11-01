
const VegetableDisplayList = ({lable,ingrediente,src,price,title,amount}) => {
    return ( <div className=" min-w-[31%] h-[94%] mr-6 shadow-[-2px_6px_10px_2px_rgba(220,220,220)]">
        <div className="w-full h-[50%] ">
            <div className="w-full h-[80%] flex justify-center items-center">
                <img src={src} alt="" className="w-[75%]  h-[85%]" />
            </div>
            <div className="w-full h-[20%] flex justify-center items-center font-bold text-[23px]">{lable}</div>
        </div>
        <div className="w-full h-[50%] flex flex-col justify-center items-center">
<div className="w-[90%] h-[60%] border-b border-gray-200 ">
    <span className=" text-sm">{title}</span>
    <div className="italic text-[16px]">{ingrediente}</div>
</div>
<div className="w-[90%] h-[40%] ">
    <div className="w-full h-[35%]  flex  items-center ">{`${price} rp`}</div>
    <div className="w-full flex justify-between items-start h-[65%]">
        <span className="text-xl font-bold mt-2 text-lime-600">{`${amount} py6.`}</span>
        <button className="rounded-full w-[60%] h-[58%] bg-orange-600 text-lg text-orange-50 ">Select</button>
    </div>
</div>
        </div>
    </div> );
}
 
export default VegetableDisplayList;