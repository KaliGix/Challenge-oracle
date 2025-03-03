// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = []; // Array of friends to be added

function addFriend(){

    let inputFriend = document.getElementById("friend");

    if(inputFriend.value !=""){ //check if the input is not empty
        
        friends.push(inputFriend.value);//add the friend to the array
        inputFriend.value = ""; //clear the input field
        console.log("Friend added successfully"); // log the success message
        console.log(friends); // log the array of friends
        return;
    } 
    else{
        alert("Please enter a valid name");
        return;
    }
}
// Function to draw a friend randomly
function drawFriend(){

    if(friends.length > 0){ //check if the array is not empty

        let randomFriend = Math.floor(Math.random() * friends.length);// get a random friend from the array
        let friendWinner = friends[randomFriend]; // get the name of the winner
        document.querySelector('#result').innerHTML = friendWinner; // display the name of the winner
        console.log(friendWinner);
    }
    else {
        alert("Please add a friend first");
        return;
    }
}
