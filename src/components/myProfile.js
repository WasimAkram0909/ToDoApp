import React from 'react';
import SideMenu from './sideMenu';
import '../css/myProfile.css';
import HeadNav from './HeadNav';
import ProfileEmail from '../assets/Profile Email.svg';
import ProfilePhone from '../assets/Profile Phone.svg';
import { connect } from 'react-redux';
import {withRouter,Link} from "react-router-dom";
import {EditProfile,profileAction} from '../actions';


class MyProfile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showComponent:true,
      FirstName:'',
      LastName:'',
       selectedFile: "data:image/png;base64,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" ,
       editFlag:false
    }
  this.myRef=React.createRef()
}
static getDerivedStateFromProps(props,state) {
  console.log("hi");
  if(props.profileDetails[0] && state.editFlag === false){
  console.log(props['profileDetails'][0]['image']);
    var profiledata={...state,
    FirstName:props['profileDetails'][0]['firstName'],
  LastName:props['profileDetails'][0]['lastName'],
  // selectedFile:props['profileDetails'][0]['image']
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
        });
        // console.log(image);
        console.log(this.state.selectedFile);
      }
     }
     handleSave=()=>{
      // this.props.history.push('/dashboard/Profile');
      var firstname=this.state.FirstName;
      var lastname=this.state.LastName;
      var picture=this.state.selectedFile;
      var email=this.props['profileDetails'][0]['email']
      console.log(picture, "picture");
     
      // console.log({firstname,lastname});
      this.props.EditProfile({firstname,lastname,picture,email})
      this.setState({
        showComponent:true,
      })
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
            {/* <input type="file" onChange={this.handleImage}/> */}
            <label for="files" className="EditProfile">Edit Profile</label>
  <input id="files" className="buttonHide" onChange={this.handleImage} type="file"/>
        </div>
        <div className="ProfileDetails">
          {this.state.showComponent ? 
             <div className="ProfileName"> 
          <h2>
         {/* {profileData.firstName} {profileData.lastName} */}
          {this.state.FirstName} {this.state.LastName}
          </h2>
           {/* <Link to="/dashboard/Profile/EditProfile"> */}
           <p className="Edit" onClick={this.handleEdit}>Edit</p>
           {/* </Link> */}
           </div>:

          <div className="EditProfileName">
          <div>
          <label>First Name</label><br/>
            <input  className="inputfield" type="text" value={this.state.FirstName}
            //  ref={this.myRef}
            // contentEditable={true}
             onChange={this.handleFirstName}
             />
            </div>
            <div>
          <label>Last Name</label><br/>
            <input className="inputfield" type="text" value={this.state.LastName}
            onChange={this.handleLastName}/>
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
const myStateToProps = (state) => {
  console.log(state);
    console.log(state.allTasks.profile);
    // console.log(state.profileData,'tsityn');
    return {
        profileDetails: state.allTasks.profile,
    };
};
export default withRouter(connect(myStateToProps,{EditProfile,profileAction})(MyProfile));