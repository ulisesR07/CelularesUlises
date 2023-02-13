import { initializeApp } from "firebase/app";



const firebaseConfig = {

    apiKey: "AIzaSyBC-TmcQcdUhHOBrfBGBlRPyNn93MofX8w",

    authDomain: "todocel-165cd.firebaseapp.com",

    projectId: "todocel-165cd",

    storageBucket: "todocel-165cd.appspot.com",

   
};

const app = initializeApp(firebaseConfig);



export const getFireStoreApp = () => {
    return app
}


