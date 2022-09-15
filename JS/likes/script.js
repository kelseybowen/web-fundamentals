var counts = [0, 0, 0];
var countElement0 = document.querySelector("#count0");
var countElement1 = document.querySelector("#count1");
var countElement2 = document.querySelector("#count2");

function add1(position) {
    counts[position]++;
    countElement0.innerText = counts[0] + " like(s)";
    countElement1.innerText = counts[1] + " like(s)";
    countElement2.innerText = counts[2] + " like(s)";
}