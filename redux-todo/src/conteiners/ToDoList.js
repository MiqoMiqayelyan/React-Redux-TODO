import React from 'react';
import { connect } from 'react-redux';
import addToDo from '../actions/addToDo';
import  deleteToDo from '../actions/deleteToDo';

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newItem: ''
        }

    }
    //  get input value 
    getValue = (e) => {
        let value = e.target.value;
       
        this.setState({
            newItem: value
        })    
    }

   render(){
    return(
        <div className='todolist'>
            <form>
                <input type="text"  value={this.state.newItem} onChange={this.getValue}/>
                <button onClick={(e)=> {
                        e.preventDefault();
                        this.props.addToDo(this.state.newItem);
                        this.setState({
                              newItem: ''  // clear input value after onclick
                        });
                }}>Add</button>

            </form>
            
            
            <ul>
                 {this.props.todo.map( (item) => 
                  item.completed === false &&   // delete empty li 
                <li key={item.id} onClick={() => {
                    this.props.deleteToDo(item.id)
                 }}>{item.text}</li>)
                }
            </ul>
        </div>
    );
    }
    
  };


const mapStateToProps = (state) => {
    return {
    todo: state.todo 
    
    };
  };

const mapDispatchtoProps = (dispatch) => {
    return {
        addToDo: (value) => { 
           dispatch(addToDo(value))
            
        },
        deleteToDo: (id) => {
            dispatch(deleteToDo(id))
        }
        
    }
}


export default connect(mapStateToProps,mapDispatchtoProps)(ToDoList);