import React from 'react';
import {connect} from 'react-redux';
// import {ToDoAll} from '../actions';

class AllTasks extends React.Component{
    render(){
        console.log(this.props.cards);
        return(
            <div>
            {this.props.cards.map((tasks,i)=>{
                // key={i}
                return(
                <p>{tasks.Task}</p>)
            })
            }
            </div>
        );
    }
}
const myStateToProps = (state) => {
    console.log(state.allTasks.Task);
    return {
      cards: state.allTasks.Task
    }
  }
export default connect(myStateToProps)(AllTasks);