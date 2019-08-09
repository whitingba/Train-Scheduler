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
    $('#addTrain').click(function (event) {
        event.preventDefault();

        //grab the value from the form field and trim and whitespace
        let trainName = $('#trainNameInput').val().trim();
        let destinationName = $('#destinationInput').val().trim();
        let trainTime = $('#trainTimeInput').val().trim();  //, "HH:mm").format();
        let frequencyTime = $('#frequencyInput').val().trim();



        //console.log(translateTime);

        //create local 'temp' object for holding train data and push data to firebase
        database.ref().push({

            name: trainName,
            destination: destinationName,
            time: trainTime,
            frequency: frequencyTime
        })

        alert("Train has been added to the schedule");

        //clear all the text-boxes upon submission
        $('#trainNameInput').val("");
        $('#destinationInput').val("");
        $('#trainTimeInput').val("");
        $('#frequencyInput').val("");
    });


});



//firebase event to add train to my html from firebase database
database.ref().on('child_added', function (childSnapshot) {
    // console.log(childSnapshot.val());

    //store the data into a variable
    let trainName = childSnapshot.val().name;
    // console.log(trainName);
    let destinationName = childSnapshot.val().destination;
    // console.log(destinationName);
    let trainTime = childSnapshot.val().time;
    //console.log("Train Time is: " + moment(trainTime, "HH:mm"));
    let frequencyTime = childSnapshot.val().frequency;
    // console.log(frequencyTime);


    // tried this first: let translateTime = moment(trainTime, "HH:mm").format("X") / 60; and my times were not accurate. Important to put the time back a year so that the original start time will always be before the current time
    let translateTime = moment(trainTime, "HH:mm").subtract(1, "years");
    // console.log(translateTime);
    //moment("HH:mm").format("X") / 60 - this is current time


    //let currentTime = moment();
    // console.log("Current Time: " + moment(currentTime).format("hh:mm"));

    //find the different in time 
    let timeDifference = moment().diff(moment(translateTime), "minutes");
    //   console.log("Difference in time: " + timeDifference);

    //find the remainder between the time difference and the frequency
    let remainder = timeDifference % frequencyTime;
    // console.log(remainder);

    //show the minutes until the next train arrives 
    let minutesAway = frequencyTime - remainder;
    //console.log("Minutes until next train: " + minutesAway);

    //this needs to show up in the table as 'next arrival'
    let nextTrainArrivesTime = moment().add(minutesAway, "minutes");
    let translateFinalTime = moment(nextTrainArrivesTime).format("hh:mm");
    // console.log("arrival time: " + translateFinalTime);

    // let translateTime = moment(trainTime).format("HH:mm");
    // console.log(translateTime)




    //create new rows and have data from firebase append to them
    let newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destinationName),
        $("<td>").text(frequencyTime),
        $("<td>").text(translateFinalTime),
        $("<td>").text(minutesAway)
    );

    $('#tableA > tbody').append(newRow);

});






