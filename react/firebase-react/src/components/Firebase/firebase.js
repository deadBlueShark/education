import app from 'firebase/compat/app'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyDNkL5RxOGiJplQ6ocyVBz-nL3pbrbgrP0',
  authDomain: 'fir-react-b1836.firebaseapp.com',
  databaseURL: 'https://fir-react-b1836-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'fir-react-b1836',
  storageBucket: '',
  messagingSenderId: '238626667755',
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
  }

  doCreateUserWithEmailAndPassword = async (email, password) => {
    return await this.auth.createUserWithEmailAndPassword(email, password)
  }

  doSignInWithEmailAndPassword = async (email, password) => {
    return await this.auth.signInWithEmailAndPassword(email, password)
  }

  doSignOut = () => this.auth.signOut()

  doPasswordReset = async email => await this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = async password => await this.auth.currentUser.updatePassword(password)
}

export default Firebase
