import React from 'react';
import SideMenu from './sideMenu';
import '../css/myProfile.css';
import HeadNav from './HeadNav';
import ProfileEmail from '../assets/Profile Email.svg';
import ProfilePhone from '../assets/Profile Phone.svg';
import { connect } from 'react-redux';
import {withRouter,Link} from "react-router-dom";
import {EditProfile} from '../actions';


class MyProfile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showComponent:true,
      FirstName:'',
      LastName:'',
       selectedFile: null 
    }
  //   if(this.props.profileDetails[0]){
  // this.state={
    
  //   // showComponent:true,
    
  //   firstName:this.props['profileDetails'][0]['fullName'],
  //   LastName:this.props['profileDetails'][0]['familyName'],
  //   } 
  // }
  this.myRef=React.createRef()
}
componentDidMount(){
  if(this.props.profileDetails[0]){
    // console.log(this.props['profileDetails'][0]['data']['image']);
  this.setState({
    FirstName:this.props['profileDetails'][0]['data']['firstName'],
    LastName:this.props['profileDetails'][0]['data']['lastName'],
    selectedFile:this.props['profileDetails'][0]['data']['image'],
  })
  console.log(this.state.Firstname)
}}
// if(handleEdit){
//   this.props.history.push('/dashboard/Profile/EditProfile');
// }
// else{

// }
  handleEdit=()=>{
    // console.log("edit");
  
    this.props.history.push('/dashboard/Profile/EditProfile');
    this.setState({
      showComponent:false,
    })
    
    // if( this.state.showComponent){
    //   this.props.history.push('/dashboard/Profile/EditProfile');
    //   this.setState({
    //     showComponent:false,
    //   })
    // }
    // else if(this.state.showComponent==false){
    //   this.setState({
    //     showComponent:true,
    //   })
    //   this.props.history.push('/dashboard/Profile');
      
    //   // alert('hi');
      
    // }
  }
  handleCancel=()=>{
      this.props.history.push('/dashboard/Profile');
    this.setState({
      showComponent:true,
    })
  }

  handleImage=(e)=>{
    console.log("onchnge");
    // onImageChange = (event) => {
      if (e.target.files && e.target.files[0]) {
        var image=URL.createObjectURL(e.target.files[0])
        this.setState({
          selectedFile:image
        });
        console.log(image);
        console.log(this.state.selectedFile);
      }
     
     }

     handleSave=()=>{
      this.props.history.push('/dashboard/Profile');
       
      var firstname=this.state.FirstName;
      var lastname=this.state.LastName;
      var picture=this.state.selectedFile;
      var email=this.props['profileDetails'][0]['data']['email']
      console.log(picture, "picture");
     
      console.log({firstname,lastname});
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
      console.log(this.state.FirstName);
    }
  
    handleLastName=(e)=>{
      var lname=e.target.value;
      this.setState({
        LastName:lname
      })
      console.log(this.state.LastName);
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
          {profileData.data.firstName} 
          {/* {profileData.data.lastName} */}
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
            {/* {profileData.data.email} */}
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
    console.log(state.allTasks.profile);
    // console.log(state.profileData,'tsityn');
    return {
        profileDetails: state.allTasks.profile,
    };
};
export default withRouter(connect(myStateToProps,{EditProfile})(MyProfile));