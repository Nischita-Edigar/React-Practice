let ComponentB=(props)=> {
    return<div><h2>This is ComponentB</h2>
    <pre>{JSON.stringify(props)}</pre>
    <h4>Item Name:{props.Items.name}</h4>
    <h4>Item Quantity:{props.Items.quantity}</h4>
    <h4>Item Price:{props.Items.price}</h4>
      
    </div>
    
}
export default ComponentB
