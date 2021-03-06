import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)


import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: 'automation-bf410' })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

//db.settings({ timestampsInSnapshots: true })