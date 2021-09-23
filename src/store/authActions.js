// import { auth } from "../config/firebase";
import { LOGIN, LOGOUT } from "./authConstants"

// export const register = (newUser) => {
//     return (dispatch) => {
//         auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
//             .then(userAuth => {
//                 userAuth.user.updateProfile({
//                     displayName: newUser.name,
//                     photoURL: newUser.profilePic
//                 }).then(() => {
//                     dispatch({ 
//                         type: LOGIN, 
//                         payload: {
//                             uid: userAuth.user.uid,
//                             name: userAuth.user.displayName,
//                             profilePic: userAuth.user.photoURL || '', 
//                             email: userAuth.user.email,
//                         }
//                     })
//                 })
//             }).catch(error => alert(error));
//     };
// };

export const login = (user) => {
    return(dispatch) => {
        dispatch({ 
            type: LOGIN, 
            payload: {
                uid: user.uid,
                name: user.displayName ? user.displayName : '',
                profilePic: user.photoURL ? user.photoURL : '', 
                email: user.email,
            }
        })
    }
}

export const logout = () => {
    return(dispatch) => {
        dispatch({
            type: LOGOUT
        });
    }
};
