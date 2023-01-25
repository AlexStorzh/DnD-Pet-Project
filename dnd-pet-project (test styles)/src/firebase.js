
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyCwgP7ilUyyhVmOXnkTIuboeVIWv5N9y7w",
//   authDomain: "dnd-pet-project.firebaseapp.com",
//   databaseURL: "https://dnd-pet-project-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "dnd-pet-project",
//   storageBucket: "dnd-pet-project.appspot.com",
//   messagingSenderId: "789821779299",
//   appId: "1:789821779299:web:336dc61d9849c10354f756",
//   measurementId: "G-JJCF8T1DJD"
// };

//  export const app = initializeApp(firebaseConfig);
//  const db = getDatabase();
//  const name = ref(db, 'users/' + '1' + '/username' );
//  onValue(name, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//  })
