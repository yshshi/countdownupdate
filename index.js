let submit = document.getElementById("submit");
let resultDays = document.getElementById("tag1");
let resultHours = document.getElementById("tag2");
let resultMin = document.getElementById("tag3");
let resultSec = document.getElementById("tag4");


submit.addEventListener("click", () => {
    let givenDate = new Date(document.getElementById("date").value);
    console.log(givenDate);
      
    
    

    
function clock() {
    let currentDate = new Date();
    console.log(currentDate);
    const differenceTime = givenDate - currentDate;
    console.log(differenceTime);

    
    const totalSeconds = Math.floor(differenceTime / 1000);
    const remainingMilliseconds = differenceTime % 1000;
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(remainingMilliseconds / 1000) + totalSeconds % 60;

resultDays.value = days;
resultHours.value = hours;
resultMin.value = minutes;
resultSec.value = seconds;
}

clock();

setInterval(clock, 1000);

});
