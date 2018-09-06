let nextToDoId = 0 ;


const addToDo = text => ({
    type: "ADD_TODO",
    id: nextToDoId++,
    text: text

});


export default addToDo;