

function TodoGenerator(state = [], action){
    switch(action.type){
        case 'ADD_TODO' :
        return [
            ...state,
           { 
            id: action.id,
            text:  action.text,
            completed: false
           }
        ]
        case 'DELETE_TODO' :
        return state.map((todo) =>
            // check id and delete it 
            (todo.id === action.id) ? {completed: !todo.completed} : todo) 
        default:
         return state
        }
    }

export default TodoGenerator;



