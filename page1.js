let text, content;
function love8ball() {
    let ranNum = Math.floor(Math.random() * 8) + 1;
    if (ranNum === 1) {
        text = document.getElementById("inputtext");
        text.innerHTML = "Of Course I love you!";
    } else if (ranNum === 2) {
        text = document.getElementById("inputtext");
        text.innerHTML = "Hmm, I love you to the moon and back again";
    } else if (ranNum === 3) {
        text = document.getElementById("inputtext");
        text.innerHTML = "I adore you";
    } else if (ranNum === 4) {
        text = document.getElementById("inputtext");
        text.innerHTML = "I'm crazy about you";
    } else if (ranNum === 5) {
        text = document.getElementById("inputtext");
        text.innerHTML = "I'm yours";
    } else if (ranNum === 6) {
        text = document.getElementById("inputtext");
        text.innerHTML = "What did the volcano say to the mountain? I lava you!"
    } else if (ranNum === 7) {
        document.getElementById("inputtext").textContent = "You take my breath away"
    } else if (ranNum === 8) {
        text = document.getElementById("inputtext");
        text.innerHTML = "I love you so so much!";
    }
    
}
let Anniversary, label, mybday, meeting, title, aDay, aMonth, aYear, mDay, mMonth, mYear, bDay, bMonth, bYear, elem1, elem2, elem3;

function passwords() {
aDay = document.getElementById("aDay").value;
aMonth = document.getElementById("aMonth").value;
aYear = document.getElementById("aYear").value;
mDay = document.getElementById("mDay").value;
mMonth = document.getElementById("mMonth").value;
mYear = document.getElementById("mYear").value;
bDay = document.getElementById("bDay").value;
bMonth = document.getElementById("bMonth").value;
bYear = document.getElementById("bYear").value;
Anniversary = "" + aDay.toString() + aMonth.toString() + aYear.toString();
meeting = "" + mDay.toString() + mMonth.toString() + mYear.toString();
mybday = "" + bDay.toString() + bMonth.toString() + bYear.toString();

    if (Anniversary === '16102022' && meeting === '18092022' && mybday === '21012004') {
        title = document.getElementById("Title");
        title.innerHTML = "Happy first anniversary darling, I love you lots!"
        label = document.getElementById("label");
        label.innerHTML = "These are my favourite pictures taken whilst we were together";
        elem1 = document.createElement("img");
        elem1.src = "file:///Users/michael/repos/one-year/imgs/us-at-her-bday.jpeg";
        elem1.setAttribute("height", "1000");
        elem1.setAttribute("width", "1000");
        document.getElementById("img-one").appendChild(elem1);
        elem2 = document.createElement("img");
        elem2.src = "file:///Users/michael/repos/one-year/imgs/her.jpeg";
        elem2.setAttribute("height", "1000");
        elem2.setAttribute("width", "1000");
        document.getElementById("img-two").appendChild(elem2);
        elem3 = document.createElement("img");
        elem3.src = "file:///Users/michael/repos/one-year/imgs/us-at-mine.jpeg";
        elem3.setAttribute("height", "1000");
        elem3.setAttribute("width", "1000");
        document.getElementById("img-three").appendChild(elem3);
        
        
        
    }

}