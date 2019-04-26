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
  console.log("hi");
  if(props.profileDetails[0] && state.editFlag === false){
  // console.log(props['profileDetails'][0]['image']);
    var profiledata={...state,
    FirstName:props['profileDetails'][0]['firstName'],
  LastName:props['profileDetails'][0]['lastName'],
  selectedFile:"data:image/png;base64,".concat(props['profileDetails'][0]['image'])
};
  return profiledata;
  // console.log(this.state.Firstname)
  }
  else if(state.editFlag === false){
      console.log("alert");
      // props.profileAction();
      return state;
    }
    else{
      return state;
    }
  return null;
  }

// componentDidMount(){
//   console.log("hi");
//   console.log(this.props.profileDetails)
//   // console.log(this.props['profileDetails'][0]['firstName']);
  
//   if(this.props.profileDetails[0]){
//     console.log(this.props['profileDetails'][0]['firstName']);
//   this.setState({
//     FirstName:this.props['profileDetails'][0]['firstName'],
//     LastName:this.props['profileDetails'][0]['lastName'],
//     selectedFile:this.props['profileDetails'][0]['image'],
//   })
//   console.log(this.state.Firstname)
// }
// else{
//   console.log("alert");
//   this.props.profileAction();
// }}
// }
  handleEdit=()=>{
    // this.props.history.push('/dashboard/Profile/EditProfile');
    this.setState({
      showComponent:false,
      editFlag:true
    })
  }
  handleCancel=()=>{
      // this.props.history.push('/dashboard/Profile');
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
        // console.log(e.target.files);
        var image=URL.createObjectURL(e.target.files[0]);
        console.log(image);
        this.setState({
          selectedFile:image
          // selectedFile:state.selectedFile.concat(image)
        });
        // console.log(image);
        // console.log(this.state.selectedFile);
      }
     }
     handleSave=()=>{
      // this.props.history.push('/dashboard/Profile');
      var firstname=this.state.FirstName;
      var lastname=this.state.LastName;
      var picture=this.state.selectedFile;
      var email=this.props['profileDetails'][0]['email'];
      console.log(lastname);

      var letters = /^[A-Za-z ]+$/;
      if(!(firstname.match(letters)))
      {
        // alert("Enter valid first name");
        document.getElementById('firstnameerror').style.visibility="visible"; 
      }
      if(!(lastname.match(letters)))
      {
        // alert("Enter valid last name");
        document.getElementById('lastnameerror').style.visibility="visible";
      }

      if((firstname.match(letters)) && (lastname.match(letters)))
      {
        this.props.EditProfile({firstname,lastname,picture,email})
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
      // console.log(this.state.FirstName);
    }
  
    handleLastName=(e)=>{
      var lname=e.target.value;
      this.setState({
        LastName:lname
      })
      // console.log(this.state.LastName);
    }
  render() {
    return (
     <div className="DontEditThisClass">         
        <HeadNav title="Profile" showSort={false}/>
     {this.props.profileDetails.map((profileData) => {

         return(
        <div className="MyProfile"> 
        <div className="profilePictureDiv">   
        <div className="ProfilePhotoMainDiv">   
        {/* <img className="ProfilePhoto" src="data:image/png;base64,(base 64 string)" alt="profile"/> */}
            <img className="ProfilePhoto" src={this.state.selectedFile} alt="profile"/>
            <br/></div> 
            <label for="files" className="EditProfile">Edit Profile</label>
  <input id="files" className="buttonHide" onChange={this.handleImage} type="file" required/>
        </div>
        <div className="ProfileDetails">
          {this.state.showComponent ? 
             <div className="ProfileName"> 
          <h2>
         {/* {profileData.firstName} {profileData.lastName} */}
          {this.state.FirstName}{this.state.LastName}
          </h2>
           <p className="Edit" onClick={this.handleEdit}>Edit</p>
           </div>:

          <div className="EditProfileName">
          <div>
          <label>First Name</label><br/>
            <input  className="inputfield" type="text" value={this.state.FirstName}
            //  ref={this.myRef}
            // contentEditable={true}
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
  console.log(state);
    console.log(state.allTasks.profile);
    // console.log(state.profileData,'tsityn');
    return {
        profileDetails: state.allTasks.profile,
    };
};
export default withRouter(connect(myStateToProps,{EditProfile,profileAction})(MyProfile));