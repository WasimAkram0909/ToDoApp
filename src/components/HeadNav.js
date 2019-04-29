import React, { Component } from 'react';
import '../css/HeadNav.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CalenderIcon from '../assets/Calender.svg';
import AddTask from './addTask';
import Taskitem from './Taskitem';
import { Link } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import moment from 'moment';
import { SortByAction } from '../actions';

class HeadNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showCalendar: false,
      date: new Date()
    };
  }
  callMoment() {
    var thisIsMomentJs = moment().format('MM DD YYYY');
  }
  onSelectingOfDate = date => {
    let selectDate = moment(date).format('YYYY-MM-DD');
    this.props.SortByAction({
      selectDate,
      specificSort: this.props.specificSort
    });
    this.setState({
      showCalendar: false
    });
  };
  sortBy = () => {
    this.setState({
      showCalendar: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="HeadItemContainer">
          <p className="HeadNavTitle">{this.props.title}</p>
          <div className="HeadNavButtonsContainer">
            {this.props.showAdd ? (
              <div className="HeadNavbtnCntr">
                <Link
                  to="/dashboard/AddTask"
                  className="HeadNavbtnCntr linkTag"
                >
                  <i className="fa fa-plus white" />
                  <p
                    className="btntext btntxt2"
                    onClick={() => {
                      this.callMoment();
                    }}
                  >
                    Add Task
                  </p>
                </Link>
              </div>
            ) : (
              <div />
            )}

            {this.props.showSort ? (
              <div className="HeadNavbtnCntr" onClick={() => this.sortBy()}>
                <img className="icon" src={CalenderIcon} />
                <p className="btntext">Sort By</p>
              </div>
            ) : null}
          </div>
        </div>

        {this.state.showCalendar ? (
          <Calendar
            className="react-calender"
            onChange={this.onSelectingOfDate}
          />
        ) : null}
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
