import ComponentB from './ComponentB'

let ComponentA=()=> {
    let total=500;
    let groceries={name:"Dhal",quantity:"5kg",price:500};

    return<div>
        <h2>This is componentA</h2>
        <h4>Total_Price={total}</h4>
        <ComponentB 
        Message={"Groceries shopping"} Total_Price={total}
         Items={groceries} />
          
    </div>
    
}
export default ComponentA
