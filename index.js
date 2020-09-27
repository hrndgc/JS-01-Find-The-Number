/*
1) Arka planda random bir sayı tutulacak
2) Kullanıcıdan sayı alınacak
3) Kullanıcıdan alınaan sayı kontrol edilecek
    3.1 Sayı tahminden büyükse "Sayı büyük"
    3.2 Sayı tahminden küçükse "Sayı küçük"
    3.3 Sayı eşitse oyunu bitir
**/

let guess_count = 0;
const random_number = Math.floor(Math.random() * 100 + 1);

document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function (event) {
    if (event.keyCode === 13)
        checkNumber()
});

function checkNumber(){
    
    let userInputElement = document.querySelector("#nr_game");
    let answerLabelElement = document.querySelector("#answer");
    let guessLabelElement = document.querySelector("#count_it");

    

    if(userInputElement.value == random_number){
        alert("You are the winner! Guess time: " + ++guess_count);

        const choice = confirm("Game again?");

        if(choice){
            guess_count = 0;
            random_number = Math.floor(Math.random() * 100 + 1);
            answerLabelElement.innerText = "";
        } else{
            alert("Thanks for playing!");
            answerLabelElement.innerText = "Best guess time: " + guess_count;
            guessLabelElement.innerText = "";
        }

    }
    else if(userInputElement.value == ""){
        answerLabelElement.innerText = "Enter a number!"
    }
    
    else if(userInputElement.value == " "){
        answerLabelElement.innerText = "Enter a number!"
    }
    else if(userInputElement.value > random_number){
        guess_count++;
        guessLabelElement.innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a smaller number!"
    }
    else if(userInputElement.value < random_number){       
        guess_count++;
        guessLabelElement.innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a higher number!"
    }
    else if(isNaN(userInputElement.value)){
        answerLabelElement.innerText = "It's not a number!"
    }
    userInputElement.focus();
    userInputElement.value = "";
}
