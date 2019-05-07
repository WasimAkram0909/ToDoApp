import React, { Component } from 'react';
import '../css/HeadNav.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CalenderIcon from '../assets/Calender.svg';
import { Link } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import moment from 'moment';
import { SortByAction } from '../actions';
import plusIcon from  "../assets/plusIcon.png"

class HeadNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showCalendar: false,
      date: new Date()
    };
  }
  onSelectingOfDate = date => {
    let selectDate = moment(date).format('YYYY-MM-DD');
    this.props.SortByAction({
      selectDate,
    });
    this.setState({
      showCalendar: false
    });
  };
  sortBy = () => {
    this.setState({
      showCalendar: (this.state.showCalendar?false:true)
    });
  };

  render() {
    return (
      <React.Fragment>
        
        <div className={`HeadItemContainer`}>
          <p className="HeadNavTitle">{this.props.title}</p>
          <div className="HeadNavButtonsContainer">
            {this.props.showAdd ? (
              <div className="HeadNavbtnCntr">
                <Link
                  to="/dashboard/AddTask"
                  className="HeadNavbtnCntr linkTag"
                >
                  {/* <i className="fa fa-plus white" /> */}
                  <img src={plusIcon} alt="plus Icon" className="white"/>
                  <p className="btntext btntxt2">Add Task</p>
                </Link>
              </div>
            ) : (
              <div />
            )}

            {this.props.showSort? 
              <div className={`HeadNavbtnCntr `} onClick={() => this.sortBy()}>
                <img className="icon" src={CalenderIcon} />
                <p className="btntext">Sort By</p>
              </div>:<div></div>}
          
          </div>
                 
        {this.state.showCalendar ? (
          <div className={ `calenderClass_headNav supportClass `} >
          <Calendar
            className="calenderClass_headNav"
            onChange={this.onSelectingOfDate}
          />
          </div>
        ) : null
        
         }
        </div>

       
        
      </React.Fragment>
    );
  }
}
const myStateToProps = state => {
  return {
    SideMenuData: state.SideMenuReducer,
    sortDate: state.allTasks.sortDate
  };
};

export default withRouter(
  connect(
    myStateToProps,
    { SortByAction }
  )(HeadNav)
);
