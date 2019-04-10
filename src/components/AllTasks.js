import React from 'react';
import {connect} from 'react-redux';
// import {ToDoAll} from '../actions';

class AllTasks extends React.Component{
    render(){
        console.log(this.props.cards.Task);
        return(
            <div>
            {this.props.cards.map((tasks)=>{
                return(
                <p>{tasks}</p>)
            })
            }
            </div>
        );
    }
}
const myStateToProps = (state) => {
    console.log(state.allTasks);
    return {
      cards: state.allTasks.Task
    }
  }

export default connect(myStateToProps)(AllTasks);