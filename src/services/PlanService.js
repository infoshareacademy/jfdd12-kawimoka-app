import firebase from 'firebase'
import { mapObjectToArray } from '../utils/mapObjectToArray'

export const sendPlan = plan => {
  if (plan === '') {
    return
  }

  const currentUser = firebase.auth().currentUser
  let userId
  if (currentUser != null) {
    userId = currentUser.uid
  }

  firebase
    .database()
    .ref(`plan/${userId}`)
    .set(plan)
}

export const fetchPlan = (callback, uid) => {
  const planRef = firebase.database().ref(`plan/${uid}`)

  planRef.on('value', snapshot => {
    const plan = snapshot.val()
    if (plan !== null) {
      callback(plan)
    } else {
      callback({})
    }
  })

  return planRef
}
