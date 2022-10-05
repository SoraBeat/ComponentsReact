import {
    ADD_FAV,
    DELETE_FAV
  } from "./actions";
  
  export const favListReducer = (state, action) => {
    switch (action.type) {
      case ADD_FAV: {
        const { favList } = state;
        const {movie}=action;
        return {...state,favList:[...favList,movie]}
      }

      case DELETE_FAV: {
        const { favList } = state;
        const {id}=action;
        const newList = favList.filter((item)=>{
            if(item.id!==id){
                return item
            }
        })
        return {...state,favList:newList}
      }
      default:
        return state;
    }
  };
  
  export const initialState = {
    favList: [],
  };
  