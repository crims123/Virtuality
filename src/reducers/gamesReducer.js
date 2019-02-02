export default function (state = [], action){
   
    switch(action.type){
        case "MOUNT_GAMES":
        return state = action.payload 
        default: return state;
    }
}

