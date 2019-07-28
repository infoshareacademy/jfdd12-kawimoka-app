import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
}

export const signUp = formData => {
  if (formData.email === '' || formData.password === '' || formData.firstName === '') {
    return
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(formData.email, formData.password)
    .then(value => {
      firebase
        .database()
        .ref('users')
        .child(value.user.uid)
        .set({
          firstName: formData.firstName
        })

      firebase
        .database()
        .ref(`plan/${value.user.uid}/days`)
        .set([
          {
            date: '01-01-1991',
            meals: {
              breakfastId: 1,
              snackId: 1,
              lunchId: 1,
              dinnerId: 1
            }
          }
        ])
    })
}

export const signOut = () => {
  firebase.auth().signOut()
}
