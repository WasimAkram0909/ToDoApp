import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';




class EditProfile extends React.Component {
    constructor(props){
        super(props)
    this.state={
        firstName:'',
        LastName:'',
    }
}
componentDidMount(){
    if(this.props.profileDetails[0]){
    this.setState({
      firstName:this.props['profileDetails'][0]['fullName'],
      LastName:this.props['profileDetails'][0]['familyName'],
    //   selectedFile:this.props['profileDetails'][0]['image'],
    })
  }}

  render() {
    return (
      <React.Fragment>
           {/* {this.props.profileDetails.map((profileData) => { */}
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
           {/* }) } */}
</React.Fragment>
    )
}
}
const myStateToProps = (state) => {
    console.log(state);
    console.log(state.profileData,'tsityn');
    return {
        profileDetails: state.profileData,
    };
};
export default withRouter(connect(myStateToProps)(EditProfile));