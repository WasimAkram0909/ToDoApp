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
      firstName:'',
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
  this.setState({
    firstName:this.props['profileDetails'][0]['fullName'],
    LastName:this.props['profileDetails'][0]['familyName'],
    selectedFile:this.props['profileDetails'][0]['image'],
  })
}}
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
  handleImage=(e)=>{
    // onImageChange = (event) => {
      if (e.target.files && e.target.files[0]) {
        this.setState({
          selectedFile: URL.createObjectURL(e.target.files[0])
        });
      }
     }

  render() {
    return (
     <div className="DontEditThisClass">         
        <HeadNav title="Profile"/>
     {this.props.profileDetails.map((profileData) => {
         return(
        <div className="MyProfile"> 
        <div className="profilePictureDiv">       
            <img className="ProfilePhoto" src={this.state.selectedFile} alt="profile"/><br/>
            {/* <input type="file" onChange={this.handleImage}/> */}
            <label for="files" className="EditProfile">Edit Profile</label>
  <input id="files" className="buttonHide" onChange={this.handleImage} type="file"/>
        </div>
        <div className="ProfileDetails">
          {this.state.showComponent ? 
             <div className="ProfileName"> 
          <h2>{profileData.fullName}</h2>
           <p className="Edit" onClick={this.handleEdit}>Edit</p></div>:

          <div className="EditProfileName">
          <div>
          <label>First Name</label><br/>
            <input  className="inputfield" type="text" value={this.state.firstName}
            //  ref={this.myRef}
            // contentEditable={true}
            //  onChange={this.handleInput}
             />
            </div>
            <div>
          <label>Last Name</label><br/>
            <input className="inputfield" type="text" value={this.state.LastName}
            onChange={this.handleInput}/>
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