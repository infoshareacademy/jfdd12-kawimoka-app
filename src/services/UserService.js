import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const fetchUser = () => {
  const currentUser = firebase.auth().currentUser
  let uid

  if (currentUser != null) {
    uid = currentUser.uid
  }

  const userRef = firebase.database().ref(`users/${uid}`)

  return userRef.once('value').then(snapshot => {
    const user = snapshot.val()

    return user
  })
}
