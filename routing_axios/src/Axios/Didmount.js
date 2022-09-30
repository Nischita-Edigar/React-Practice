import React, { Component } from 'react'
import Axios from 'axios'

export class Didmount extends Component {
    state={
        photos :[]
    }
    componentDidMount=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>{
            this.setState({photos:response.data})
        })
        .catch()
    }
  render() {
    return (
      <div>

       <h1>Photo component</h1>
       <table className='table table-hover'>
        <thead>
            <tr><th>ID</th>
                <th>Image Name</th>
                <th>Image</th>
                </tr>
                
            
            </thead>
        <tbody>{this.state.photos.length>0?<>
        {this.state.photos.map((photo)=>{
            return<tr key={photo.id}>
            <td>{photo.id}</td>
            <td>{photo.title}</td>
            <td><img src={photo.thumbnailUrl} alt='thumbnail '/></td>
        </tr>

        })}
        
        </>:null}

        </tbody>
       </table>
        
      </div>
    )
  }
}

export default Didmount
