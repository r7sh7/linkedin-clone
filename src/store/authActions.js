import { auth } from "../config/firebase"
import { LOGIN } from "./authConstants"

export const register = (newUser) => {
    return(dispatch) => {
        auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: newUser.name,
                    photoURL: newUser.profilePic
                })
            }).then(() => {
                dispatch({ type: LOGIN, payload: newUser})
            })
    }
}