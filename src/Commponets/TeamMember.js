import React, { Component } from "react";



class TeamMember extends Component {
   render(){
    return(
   <div className="col-sm">
<div className="card">
<div className="card-header">
<img style={{maxWidth:"100%", height:"250px"}} src={this.props.img} alt={this.props.name}/>
</div>
<div className="card-body">

<h3 style={{color:"#8B0000"}}>{this.props.name}</h3>
<b>{this.props.REALNAME}</b><br></br>
<b>{this.props.age}</b><br></br>
<b>{this.props.HEGHT}</b><br></br>
<b>{this.props.professions}</b>
</div>



</div>
   </div>
)
   }
}
export default TeamMember;