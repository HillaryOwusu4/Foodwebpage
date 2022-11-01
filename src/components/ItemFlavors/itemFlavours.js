import ItemCard from "./itemCard";

const ItemFlavours = () => {
    const Flavours = [{ percentage: '-25%', images: './images/pizz-removebg-preview.png', label: 'Pepronni Pizza', Add: 'Add', description: 'Description', Total: 'Total', width: 30, height: 40, BAG:635 ,amount:'Amount', price: 630, decreasedprice: 900,  percent: 25,icon: 1090,title:'Tecto', Largesizes:'Large Size',small:'Small Sizes' }, 
    { percentage: '-15%', images: './images/greeeeeeeeeen-removebg-preview (2).png', label: 'Neapolitan Pizza', Add: 'Add', description: 'Description', Total: 'Total', width: 30, height: 40, BAG:635 ,amount:'Amount', price: 630, decreasedprice: 900,  percent: 15,icon: 1090,title:'Tecto' },
    {percentage:'-35%',images:'./images/Tomamto-removebg-preview.png',label:'Sicilian Pizza', Add:'Add',description:'Description', Total:'Total',  width:30, height: 40,price:630, amount:'Amount', BAG:635 ,decreasedprice:900, percent: 35, icon:1090,title:'Tecto' },
    ]


    return (<div className="w-full flex h-full justify-center">
    {Flavours.map(item=>{
        console.log(Flavours)
        return(
            <div className="w-4/5 h-full ml-2 mr-2 bg-white shadow-lg shadow-gray-400">
                <ItemCard percentage={item.percentage} images={item.images} label={item.label} Add={item.Add} description={item.description} Total={item.Total} width={item.width} height={item.height} price={item.price} decreasedprice={item.decreasedprice} icon={item.icon} title={item.title}  Largesizes={item.Largesizes} small={item.small} amount={item.amount} Bag={item.BAG} percentages={item.percentage}/></div>
        )
    })}
    </div>);
}

export default ItemFlavours;