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

$(document).ready(function () {
    //on click function to add trains to the schedule based on the form field id's in my html
    $("#addTrain").click(function (event) {
        event.preventDefault();

        //grab the value from the form field and trim and whitespace
        let trainName = $('#trainNameInput').val().trim();
        let destinationName = $('#destinationInput').val().trim();
        let trainTime = $('#trainTimeInput').val().trim(); //FIXME: will I need a moment function on this one???
        let frequencyTime = $('#frequencyInput').val().trim();


        //create local 'temp' object for holding train data and push data to firebase
        database.ref().set({

            name: trainName,
            destination: destinationName,
            time: trainTime,
            frequency: frequencyTime
        })

        alert("Train has been added to the schedule");

        //clear all the text-boxes
        $('#trainNameInput').val("");
        $('#destinationInput').val("");
        $('#trainTimeInput').val("");
        $('#frequencyInput').val("");
    });
});





//TODO: upload train data to firebase

//TODO:
//User inputs the time the 1st train leaves as well as how often the train comes (frequency)
///Need to use the inputs above to calculate the next arrival time using the current time and the frequency of the train as well as time the first train comes.
////As well as use the difference of next arrival time less the last arrival time to calculate how many minutes away the next train is
/////some of this could be simple math and some will need moment.js




