import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, push, set, get, query } from "firebase/database";

export async function add(user, deed) {
  const oRef = await push(
    ref(
      getDatabase(),
      'users/' + user.uid + '/todos'
    ) // maybe later try 'users/'$user.uid'/todos'
  );
  await set(oRef, deed);
  const oSnapshot = await get(query(oRef));
  const oDeed = oSnapshot.val();
  oDeed.key = oRef.key;
  return oDeed;
}

export async function login(email, password) {
  try {
    const oUC = signInWithEmailAndPassword(getAuth(), email, password);
    return oUC.user;
  }
  catch (error) {
    return error.code;
  }
}

export async function logout() {
  await signOut(getAuth());
}

export async function register(email, password) {
  try {
    const oUC = await createUserWithEmailAndPassword(getAuth(), email, password);
    return oUC.user;
  }
  catch (error) {
    return error.code;
  }
}
