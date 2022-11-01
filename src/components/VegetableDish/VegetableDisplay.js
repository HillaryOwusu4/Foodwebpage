import VegetableDisplayList from "./VegetableDisplayList";

const VegetableDisplay = () => {
       const VegetarienFood = [{
        src:'./images/0d3b08c0-ed92-4bf9-a380-d8ef3ee6dfc3-removebg-preview.png',lable:'leafy green',ingrediente:'Leafy greens,Almonds, walnuts,Leafy greens, asparagus, broccoli, tomatoes, carrots,, oranges asparagus, broccoli, tomatoes, carrots,, oranges, melons, pears, peaches',title:'Coctab:', price:200,amount:170
       },{
        src:'./images/0a95818d-fb0f-441e-a576-6cb41f5d0e85-removebg-preview (1).png',lable:'Flexitarian',ingrediente:'Quinoa,Leafy greens, asparagus, broccoli, tomatoes, carrots,, oranges, melons, pears, peaches barley, buckwheat, rice, oats,Lentils, beans, ', title:'Coctab:',price:200,amount:180
       },{
        src:'./images/减肥餐__eat_clean_healthy-removebg-preview.png',lable:'Pescatarian',ingrediente:' Almonds, walnuts,Leafy greens, asparagus, broccoli, tomatoes, carrots,, oranges, melons, pears, peaches cashews, chestnuts,Flaxseeds, chia and hem',title:'Coctab:', price:200,amount:210
       },]
    return ( <div className="w-full flex justify-between items-end h-full">

{
    VegetarienFood.map(item=>{
        return(
        <VegetableDisplayList title={item.title} lable={item.lable} ingrediente={item.ingrediente} src={item.src} price={item.price} amount={item.amount} />
        )
    })
}

    </div> );
}
 
export default VegetableDisplay;