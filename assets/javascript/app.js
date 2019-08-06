//Initialize Firebase first
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDS9IoLodMlQPexlR7eRykaxywaJK9TRa4",
    authDomain: "train-schedule-fc073.firebaseapp.com",
    databaseURL: "https://train-schedule-fc073.firebaseio.com",
    projectId: "train-schedule-fc073",
    storageBucket: "",
    messagingSenderId: "243969929826",
    appId: "1:243969929826:web:f58a0798da933449"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//variable created to reference the firebase database.
var database = firebase.database();

//TODO: on click function to add trains to the schedule based on the form field id's in my html
////grab user inputs
//////create local 'temp' object for holding employee data
////////push employee data to the database
//////////??alert box that train was added
////////////clear all the text-boxes

//TODO: upload train data to firebase

//TODO:
//User inputs the time the 1st train leaves as well as how often the train comes (frequency)
///Need to use the inputs above to calculate the next arrival time using the current time and the frequency of the train as well as time the first train comes.
////As well as use the difference of next arrival time less the last arrival time to calculate how many minutes away the next train is
/////some of this could be simple math and some will need moment.js




