import React from 'react';
import SideMenu from './sideMenu';
import '../css/myProfile.css';
import HeadNav from './HeadNav';
import ProfileEmail from '../assets/Profile Email.svg';
import ProfilePhone from '../assets/Profile Phone.svg';
import { connect } from 'react-redux';




class MyProfile extends React.Component {
  render() {
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
          <div className="ProfileName"> 
         <h2>{profileData.fullName}</h2>
         <p className="Edit">Edit</p>
          </div>
           <div className="ProfileDetails">
           <div  className="ProfileEmail">
            <img className="Icons" src={ProfileEmail} alt="logo"/>
            <p className="contactDetails">{profileData.email}</p>
            </div>
           
            <div  className="ProfilePhone">
            <img  className="Icons" src={ProfilePhone} alt="logo"/>
            <p className="contactDetails">9784698948</p>
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