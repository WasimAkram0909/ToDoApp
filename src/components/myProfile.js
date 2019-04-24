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
       selectedFile: null ,
       editFlag:false
    }
  this.myRef=React.createRef()
}
static getDerivedStateFromProps(props,state) {
  console.log("hi");
  if(props.profileDetails[0] && state.editFlag === false){
  console.log(props['profileDetails'][0]['firstName']);
  // this.setState({
    var profiledata={...state,
    FirstName:props['profileDetails'][0]['firstName'],
  LastName:props['profileDetails'][0]['lastName'],
  selectedFile:props['profileDetails'][0]['image']};
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
  // console.log(state.Firstname);
  
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
// if(handleEdit){
//   this.props.history.push('/dashboard/Profile/EditProfile');
// }
// else{

// }
  handleEdit=()=>{
    // console.log("edit");
  
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
        LastName:this.props.profileDetails[0].lastName
    })
  }

  handleImage=(e)=>{
    // console.log("onchnge");
    // onImageChange = (event) => {
      if (e.target.files && e.target.files[0]) {
        var image=URL.createObjectURL(e.target.files[0])
        this.setState({
          selectedFile:image
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
        <HeadNav title="Profile"/>
     {this.props.profileDetails.map((profileData) => {

         return(
        <div className="MyProfile"> 
        <div className="profilePictureDiv">   
        <div className="ProfilePhotoMainDiv">   
            <img className="ProfilePhoto" src={this.state.selectedFile} alt="profile"/><br/></div> 
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