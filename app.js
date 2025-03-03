// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = []; // Array of friends to be added

function addFriend(){

    let inputFriend = document.getElementById("friend");

    if(inputFriend.value !=""){ //check if the input is not empty
        friends.push(inputFriend.value);//add the friend to the array
        clearInput(inputFriend);//clear the input field
        console.log("Friend added successfully"); // log the success message
        console.log(friends); // log the array of friends
    } 
    else{
        alert("Please enter a valid name");
    }
}

function clearInput(input){
   input.value = "";
}