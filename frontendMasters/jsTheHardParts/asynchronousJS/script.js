/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');

console.log('I am at the beginning of the code');
function declareTimeout() {
  console.log('I am in the setTimeout callback function');
}

setTimeout(declareTimeout, 0);




console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');

function printAtInterval() {
  console.log('Interval Hello!');
}

setTimeout( clearInterval, 10000, setInterval(printAtInterval, 2000) );

/* function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
setTimeout(clearAllIntervals, 10000);
console.log('End of Challenge 2'); */
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');

function everyXsecsForYsecs(func, interval, time) {

  for(let i = 0; i < time / interval; i++) {
    setTimeout(func, interval * 1000)
  }
}

function sayHowdy() {
  console.log('Howdy');
}

everyXsecsForYsecs(sayHowdy, 1, 5);

console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');

function eachItem(arr, cb) {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

let delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i) {
  setTimeout(function() { console.log(`Printing element ${ i }`) }, delayTime);
}

eachItem(delays, delayLog);

console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');

function changeColor() {
  if(document.body.style.background === 'rgb(221, 238, 255)') {
    document.body.style.background = 'rgb(255, 238, 221)';
  } else {
    document.body.style.background = 'rgb(221, 238, 255)';
  }
}

const activateButton = document.getElementById("activate");
const colorButton = document.getElementById("color");

activateButton.addEventListener('click', function() {
  console.log('Clicked #1');
  colorButton.addEventListener('click', function() {
    console.log('Clicked #2');
    changeColor();
  });
});

document.body.style.background = "#def";
console.log('End of Challenge 5');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
let dataReceived;

function ajaxSimulate(id, callback) {
  let database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(callback(database[id]), 0);
}

function storeData(data) {
  dataReceived = data;
  console.log(dataReceived);
}

ajaxSimulate(1, storeData);


console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');

const request = new XMLHttpRequest();

request.open('Get', 'https://rest.bandsintown.com/artists/Maroon%205?app_id=jshp');
request.send();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let response = request.responseText;
    setImage(JSON.parse(response));
  }

};

function setImage(data) {
  $("#ch2").append("<img src='" + data.image_url + "'/>");
}

console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');

const request = new XMLHttpRequest();

request.open('Get', 'https://rest.bandsintown.com/artists/Maroon%205/events?app_id=jshp&date=upcoming');
request.send();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let response = request.responseText;
    showEvents(JSON.parse(response));
  }

};

function showEvents(data) {
  for (let i = 0; i < data.length; i++) {
    $("#ch3").append("<li>" + data[i].venue.name +"</li>");
  }

}

console.log('End of Challenge 8');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');

const request = new XMLHttpRequest();

request.open('Get', 'https://rest.bandsintown.com/artists/Kelly%20Clarkson/events?app_id=jshp&date=upcoming');
request.send();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let response = request.responseText;
    showEvents(JSON.parse(response));
  }

};

function showEvents(data) {
  for (let i = 0; i < data.length; i++) {
    if(data[i].venue.country === "United States") {
      $("#ch4").append("<li>" + data[i].venue.name +"</li>");
    }

  }

}

console.log('End of Challenge 9');
// */// (do not alter this line)


