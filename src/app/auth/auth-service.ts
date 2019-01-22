import * as firease from 'firebase';

export class AuthService {
  signup(name: string, password: string) {
    firease.auth().createUserWithEmailAndPassword(name, password)
      .catch((error) => {
        console.log(error);
      });
  }

  signin(name: string, password: string) {
    firease.auth().signInWithEmailAndPassword(name, password).then((respons) => {
      console.log(respons);
    }).catch((error) => {
      console.log(error);
    })
  }
}
