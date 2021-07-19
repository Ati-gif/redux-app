// REDUCER -> is a just a PURE function that takes two arguments
// state and an action,  action is an object that we generally have a
//type key, may or may not have also..

//PURE FUNCTION -> doesnt have side effect, it doesn't mutate/change anything
// in the function

// THIS FUNCTION HAS A SIDE EFFECT, IS NOT A PURE FUNCTION
// let arr = [1,2,3]
// somefunc = (a) => { return a.pop()}
// x =  somefunc(arr)
// console.log(a)  => 3
// console.log(arr)  => [1,2]

// THIS FUNCTION HAS NO SIDE EFFECT, IS A PURE FUNCTION
// let arr = [1,2,3]
// somefunc = (a) => { return a[2]}
// x =  somefunc(arr)
// console.log(a)  => 3
// console.log(arr)  => [1,2,3]

// PURE THAT RETURNS A NEW STATE(DOESN"T MUTATE ORIGNAL STATE)
// const genericReduxReducer = (state, action) => {
//   switch(action.type){
//     case"ACTION1":
//        return newState
//     default:
//       state
//   }
// };

const todos = (
  state = [
    { id: -2, name: "default 1", complete: true },
    { id: -1, name: "default 2", complete: false },
  ],
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.id);

    case "TOGGLE_TODO":
      return state.map((t) =>
        t.id === action.id ? { ...t, complete: !t.complete } : t
      );
    default:
      return state;
  }
};

export default todos;
