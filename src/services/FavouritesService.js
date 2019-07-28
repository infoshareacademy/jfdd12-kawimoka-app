import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const sendFavourites = favourites => {
  if (favourites === '') {
    return
  }

  const currentUser = firebase.auth().currentUser
  let userId
  if (currentUser != null) {
    userId = currentUser.uid
  }

  firebase
    .database()
    .ref(`favourites/${userId}`)
    .set(favourites)
}

export const fetchFavourites = (callback, uid) => {
  const favouritesRef = firebase.database().ref(`favourites/${uid}`)

  favouritesRef.on('value', snapshot => {
    const favourites = snapshot.val()
    if (favourites !== null) {
      callback(favourites)
    } else {
      callback({})
    }
  })

  return favouritesRef
}
