
import React from "react";
class Cart extends React.Component{
    state={Name:"Adiscend M Running Shoes For Men  (Black)",
    image:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/w/6/e/9-gb2406-9-adidas-cblack-dovgry-magbei-original-imaggfa6hppashzu.jpeg?q=70",
    qty:1,
    price:1399}
    plushandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    minushandler=()=>{
        if(this.state.qty===0){
            this.setState({qty:0})
            alert("Quantity cant receed 0")
        }
        else{
            this.setState({qty:this.state.qty-1})

        }
        
    }
    render(){
        return<div className="container">
            <div className="row">
                <div className="col">
                    <table  className="table  p-5 table-hover ">
                        <thead className="bg-primary">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Quantity</th>
                                <th>Product Price</th>

                            </tr>
                            
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>{this.state.Name}</td>
                                <td><img src={this.state.image} alt="shoes" height="200" width="300"></img></td>
                                <td><button  className="btn "onClick={this.minushandler}>&minus;</button>&nbsp;{this.state.qty}&nbsp;<button onClick={this.plushandler} className="btn ">+</button></td>
                                <td>{this.state.price*this.state.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    }
}
export default Cart