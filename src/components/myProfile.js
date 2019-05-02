import React from 'react';
import SideMenu from './sideMenu';
import '../css/myProfile.css';
import HeadNav from './HeadNav';
import ProfileEmail from '../assets/Profile Email.svg';
import ProfilePhone from '../assets/Profile Phone.svg';
import { connect } from 'react-redux';
import {withRouter,Link} from "react-router-dom";
import {EditProfile,profileAction} from '../actions';
import PropTypes from 'prop-types';

class MyProfile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showComponent:true,
      FirstName:'',
      LastName:'',
       selectedFile: "" ,
       editFlag:false
    }
  this.myRef=React.createRef()
}
static getDerivedStateFromProps(props,state) {
  if(props.profileDetails[0] && state.editFlag === false){
    var profiledata={...state,
    FirstName:props['profileDetails'][0]['firstName'],
    LastName:props['profileDetails'][0]['lastName'],
    selectedFile:"data:image/png;base64,".concat(props['profileDetails'][0]['image'])
};
  return profiledata;
  }
  else if(state.editFlag === false){
      return state;
    }
    else{
      return state;
    }
  return null;
  }
  handleEdit=()=>{
    this.setState({
      showComponent:false,
      editFlag:true
    })
  }
  handleCancel=()=>{
    this.setState({
      showComponent:true,
        FirstName: this.props.profileDetails[0].firstName,
        LastName:this.props.profileDetails[0].lastName,
        selectedFile:this.props['profileDetails'][0]['image']
    })
  }
  handleImage=(e)=>{
    console.log("onchnge");
      if (e.target.files && e.target.files[0]) {
        var image=URL.createObjectURL(e.target.files[0]);
        // console.log(image);
        this.setState({
          selectedFile:image
          // selectedFile:state.selectedFile.concat(image)
        });
        console.log(image);
        // console.log(this.state.selectedFile);
      }
     }
     handleSave=()=>{
      var firstname=this.state.FirstName;
      var lastname=this.state.LastName;
      var picture=this.state.selectedFile;
      console.log(picture);
      // var email=this.props['profileDetails'][0]['email'];
      var token=this.props.token;
      var letters = /^[A-Za-z ]+$/;
      if(!(firstname.match(letters)))
      {
        document.getElementById('firstnameerror').style.display="block"; 
      }
      if(!(lastname.match(letters)))
      {
        document.getElementById('lastnameerror').style.display="block";
      }
      if((firstname.match(letters)) && (lastname.match(letters)))
      {
        this.props.EditProfile({firstname,lastname,picture,token})
        this.setState({
          showComponent:true,
        })
      }
    }
    handleFirstName=(e)=>{
      var fname=e.target.value;
      this.setState({
      FirstName: fname
      })
    }
    handleLastName=(e)=>{
      var lname=e.target.value;
      this.setState({
        LastName:lname
      })
    }
  render() {
    return (
     <div className="DontEditThisClass">         
        <HeadNav title="Profile" showSort={false}/>
     {this.props.profileDetails.map((profileData,i) => {

         return(
        <div className="MyProfile" key={i}> 
        <div className="profilePictureDiv">   
        <div className="ProfilePhotoMainDiv">   
        {/* <img className="ProfilePhoto" src="data:image/png;base64,(base 64 string)" alt="profile"/> */}
            <img className="ProfilePhoto" src={this.state.selectedFile} alt="profile"/>
            <br/></div> 
            <label  className="EditProfile">Edit Profile</label>
  <input  className="buttonHide" onChange={this.handleImage} type="file" required/>
        </div>
        <div className="ProfileDetails">
          {this.state.showComponent ? 
             <div className="ProfileName"> 
          <h2>
          {this.state.FirstName}{this.state.LastName}
          </h2>
           <p className="Edit" onClick={this.handleEdit}>Edit</p>
           </div>:

          <div className="EditProfileName">
          <div>
          <label>First Name</label><br/>
            <input  className="inputfield" type="text" value={this.state.FirstName}
             onChange={this.handleFirstName}
             />
             <p className="errorText" id ="firstnameerror">Please enter only alphabets</p>
            </div>
            <div>
          <label>Last Name</label><br/>
            <input className="inputfield" type="text" value={this.state.LastName}
            onChange={this.handleLastName}/>
            <p className="errorText" id="lastnameerror">Please enter only alphabets</p>
            <div className="EditButtons">
              <p className="CancelButtons" onClick={this.handleCancel}>Cancel</p>
              <p className="SaveButtons"  onClick={this.handleSave}>Save</p>
            </div>
            </div>
          </div>
        }
           <div className="Profilecontent">
           <div  className="ProfileEmail">
            <img className="Icons" src={ProfileEmail} alt="logo"/>
            <p className="contactDetails">
            {profileData.email}
            </p>
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
MyProfile.propTypes={
  FirstName:PropTypes.string,
  LastName:PropTypes.string
}
const myStateToProps = (state) => {
  // console.log(state);
    // console.log(state.allTasks.profile);
    // console.log(state.profileData,'tsityn');
    return {
        profileDetails: state.allTasks.profile,
        token: state.allTasks.accessToken,
        
    };
};
export default withRouter(connect(myStateToProps,{EditProfile,profileAction})(MyProfile));