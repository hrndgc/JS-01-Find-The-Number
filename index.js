let number = Math.floor(Math.random() * 100) + 1;
let counter = 0;

document.getElementById("check").addEventListener("click",function() {
        let num = document.getElementById("nr_game").value;
        
        counter++;
        document.getElementById("count").innerHTML= ("This is your " + counter + ". try.");

        if (num == number) {
            alert("Congratulation! You are the winner! This is your " + counter + ". try.");
            // document.getElementById("answer").innerHTML = ("You are right!")
            
            let new_game = confirm("Do you wanna play again??");
            if (new_game == true){
                number = Math.floor(Math.random() * 100) + 1;
                counter = 0;
                document.getElementById("answer").innerHTML = ("");
                document.getElementById("count").innerHTML= ("");
            } else {
                document.getElementById("count").innerHTML= ("");
                document.getElementById("answer").innerHTML = ("");
                alert("Thanks for playing. See you later!!!")
            }

        } else if (num > number) {
            // counter ++;
            document.getElementById("answer").innerHTML = ("A lower number please! ");
        } else if (num < number) {
            // counter++;
            document.getElementById("answer").innerHTML = ("A higher number please! ");
        } else if(isNaN(num)) {
            counter --;
            document.getElementById("answer").innerHTML = ("Are you sure that this is a number?");
        }
        document.getElementById("nr_game").value='';   // Oyun bittikten sonra input icini sifirliyor..
        document.getElementById("nr_game").focus();   // input u focusluyor..
    }
)