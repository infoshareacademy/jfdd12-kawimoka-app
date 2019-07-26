import firebase from 'firebase'
import { mapObjectToArray } from '../utils/mapObjectToArray'
import moment from 'moment'

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

export const fetchPlan = callback => {
  const currentUser = firebase.auth().currentUser
  let userId
  if (currentUser != null) {
    userId = currentUser.uid
  }

  const planRef = firebase.database().ref(`plan/${userId}`)

  planRef.on('value', snapshot => {
    const value = snapshot.val()
    const plan = mapObjectToArray(value)
    callback(plan)
  })

  return planRef
}
