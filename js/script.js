// This was created by Bryhim4code == github
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e){
var x = e.pageX;
var y = e.pageY;

cursor.style.left = x + "px";
cursor.style.top = y + "px";
})

// Mouse Follow


const text = document.querySelector('.rotate-text h1');
text.innerHTML = text.innerHTML.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 12.4}deg)">${char}</span>`
).join("")





