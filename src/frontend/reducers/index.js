const reducer = (state, action) =>{
    switch(action.type){

        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload
            }

        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload
            }

        case 'LOGIN_REQUEST':
            return{
                ...state,
                user: action.payload
            }
        
        case 'DELETE_FAVORITE':
            return{
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }

        case 'SET_FAVORITE':
            return{
                ...state,
                myList: [...state.myList, action.payload]
            }
        
        default:
            return state;
        
    }
}

export {reducer};