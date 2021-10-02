import { LOGIN, LOGOUT } from "./authConstants";
import { auth, db, provider, storage } from "../config/firebase";

export const login = (userAuth) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: userAuth,
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch({
          type: LOGIN,
          payload: payload.user,
        });
      })
      .catch((err) => alert(err.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        dispatch(login(userAuth));
      } else {
        dispatch(logout());
      }
    });
  };
}

export function createPostApi(post) {
  return (dispatch) => {
    if (post.image !== "") {
      const upload = storage.ref(`images/${post.image.name}`).put(post.image);
      upload.on(
        "state_changes",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("posts").add({
            user: {
              name: post.user.displayName,
              email: post.user.email,
              photoURL: post.user.photoURL,
            },
            video: post.video,
            sharedImage: downloadURL,
            description: post.description,
            timestamp: post.timestamp,
          });
        }
      );
    } else if (post.video) {
      db.collection("posts").add({
        user: {
          name: post.user.displayName,
          email: post.user.email,
          photoURL: post.user.photoURL,
        },
        video: post.video,
        sharedImage: "",
        description: post.description,
        timestamp: post.timestamp,
      });
    } else {
      db.collection("posts").add({
        user: {
          name: post.user.displayName,
          email: post.user.email,
          photoURL: post.user.photoURL,
        },
        video: "",
        sharedImage: "",
        description: post.description,
        timestamp: post.timestamp,
      });
    }
  };
}
