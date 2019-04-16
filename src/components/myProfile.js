import React from 'react';
import SideMenu from './sideMenu';
import '../css/myProfile.css';
import HeadNav from './HeadNav';
import ProfileEmail from '../assets/Profile Email.svg';
import ProfilePhone from '../assets/Profile Phone.svg';
import { connect } from 'react-redux';


class MyProfile extends React.Component {
  constructor(props){
    super(props)
  this.state={
    showComponent:true,
    firstName:this.props.profileDetails,
  }
  this.myRef=React.createRef()
}
  handleEdit=()=>{
    console.log("edit");
    this.setState({
      showComponent:false,
    })
  }
  handleCancel=()=>{
    this.setState({
      showComponent:true,
    })
  }
  handleSave=()=>{
    console.log('save');
  //  var abc=this.myRef.current.value;
  //  console.log(abc);
  }
  handleInput=(e)=>{
    var abc=e.target.value;
   console.log(abc);
    

  }
  render() {
    console.log(this.props.profileDetails[0]);
    
    return (
     <div className="DontEditThisClass">         
        <HeadNav/>
     {this.props.profileDetails.map((profileData) => {
         return(
        <div className="MyProfile"> 
        <div className="profile">       
            <div className="ProfilePhoto">
            <img className="ProfilePhoto2" src={profileData.image} alt="profile"/>
            </div>
          <p className="Edit">Edit Profile</p>
        </div>
        <div className="subdiv">
         
          {this.state.showComponent ? 
             <div className="ProfileName"> 
          <h2>{profileData.fullName}</h2>
           <p className="Edit" onClick={this.handleEdit}>Edit</p></div>:

          <div className="EditProfileName">
          <div>
          <label>First Name</label><br/>
            <input  className="inputfield" type="text" value={profileData.fullName}
            //  ref={this.myRef}
            // contentEditable={true}
             onChange={this.handleInput}
             />
            </div>
            <div>
          <label>Last Name</label><br/>
            <input className="inputfield" type="text" placeholder={profileData.familyName}/>
            <div className="EditButtons">
              <p className="Edit" onClick={this.handleCancel}>Cancel</p>
              <p className="Edit"  onClick={this.handleSave}>Save</p>
            </div>
            </div>
            
          </div>
        }
           <div className="ProfileDetails">
           <div  className="ProfileEmail">
            <img className="Icons" src={ProfileEmail} alt="logo"/>
            <p className="contactDetails">{profileData.email}</p>
            </div>
           
            <div  className="ProfilePhone">
            <img  className="Icons" src={ProfilePhone} alt="logo"/>
            <p className="contactDetails">9876543210</p>
           </div> 
            </div>

          </div>
         
     </div>)})}
    </div>
      );
  }
}
const myStateToProps = (state) => {
    console.log(state);
    console.log(state.profileData,'tsityn');
    return {
        profileDetails: state.profileData,
    };
};
export default connect(myStateToProps)(MyProfile);