import React from "react"
import "./marker.css"
class Marker extends React.Component{
    handleclick=()=>{
        this.props.handleClick(this.props.stadium)
    };
     
   render(){
       return <div className="marker" onClick={this.handleclick} >{this.props.text}</div>
   }
}
export default Marker;