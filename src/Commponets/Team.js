import React, { Component } from "react";
import MemberInfo from "./MemberInfo";
import TeamMember from "./TeamMember";


class Team extends Component{
  constructor(){
    super()
    this.state = {
        MemberInfo : MemberInfo,
        members :[],
        counter:0,
    }
    this.clickEvent= this.clickEvent.bind(this)
    }
    clickEvent(){
        if(this.state.counter < this.state.MemberInfo.length){
      this.state.members.push(this.state.MemberInfo[this.state.counter]);
      this.setState(function(prevstate){
        return {counter:prevstate.counter +1 }
      });
      
     this.newMembers = this.state.members.map(member=>{
return <TeamMember 
        key={member.id}
         img={member.img}
         name={member.name}
         REALNAME={member.REALNAME}
         age={member.age}
         HEGHT={member.HEGHT}
         professions={member.professions}
         />;

      })
    }}



render(){
    return(
        <div className="row">
       
            <button className="btn btn-primary "
             onClick={this.clickEvent}>click to see the cast</button>
           
          {this.newMembers}
       
         </div> 
    )
}

  
}
    
      
export default Team;