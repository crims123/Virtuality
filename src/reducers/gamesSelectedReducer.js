export default function (state = {}, action){
   
    switch(action.type){
        case "GAMES_ID":
        return state = action.payload;
        default: return state;
    }
}
