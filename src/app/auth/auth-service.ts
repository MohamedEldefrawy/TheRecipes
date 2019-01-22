import * as firease from 'firebase';

export class AuthService {
  signup(name: string, password: string) {
    firease.auth().createUserWithEmailAndPassword(name, password)
      .catch((error) => {
        console.log(error);
      });
  }
}
