const initState = {
    isAuth:false,
};

const AuthReducer = (state = initState,action)=>{
    const {type} = action;
    switch (type){
        case "ADD":{
            return {...state,isAuth :!state.isAuth};
        }
        default:
            return state;
    }
}
export {AuthReducer};