let Weathers=[];
let currentIp="";
let currentIpOpj="";
const datte=new Date();
const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ];
let dayOne1=0;
let dayTwo2=0;
let dayThree3=0;

let mohab1 =datte.getDay();
let mohab2 =datte.getDay();
let mohab3 =datte.getDay();

function test1() {
  if (mohab1===6) {
    mohab1=-1;
  }

    dayOne1 = days[(mohab1+1)]
   

}
test1()

//  = days[(datte.getDay()+1)];
// if (dayOne1===7) {
//   dayOne1=0;
// } 

function test2() {
  if (mohab2===5) {
    mohab2=-2;
  }
  else if(mohab2===6){
    mohab2=-1;
  }

    dayTwo2 = days[(mohab2+2)]
}
test2()

// let dayTwo2 = days[(datte.getDay()+2)];
// if (dayTwo2===7) {
//   dayTwo2=0;
// } else if(dayTwo2===8){
//   dayTwo2=1;
// }

function test3() {
  if (mohab3===4) {
    mohab3=-3;
  }
  else if(mohab3===5){
    mohab3=-2;
  }
  else if(mohab3===6){
    mohab3=-1;
  }

    dayThree3 = days[(mohab3+3)]

  
}
test3()


// let dayThree3 = days[(datte.getDay()+3)];
// if (dayThree3===7) {
//   dayThree3=0;
//   console.log('0sssssssssss');
// } else if(dayThree3===8){
//   dayThree3=1;
//   console.log('2sssssssssss');
// }
//  else if(dayThree3===9){
//   dayThree3=2;
//   console.log('5sssssssssss');
// }


let currentDay=datte.getDate()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = months[datte.getMonth()];

let monday=currentDay+currentMonth;


let searchInput=document.querySelector('#search')
let submitBtn=document.querySelector('#submit')


let topLeft=document.querySelector('.top-left');
let middleLeft=document.querySelector('.middle-left');

let topMiddlle=document.querySelector('.top-middlle');
let middlleMiddlle=document.querySelector('.middlle-middlle');

let DayThreeTop=document.querySelector('#DayThreeTop');
let DayThreeMiddlle=document.querySelector('#DayThreeMiddlle');



function day1(){
  topLeft.innerHTML=`
  <h5 id="day-name" class="fw400-fs-14 me-auto">${dayOne1}</h5>
  <h5 id="date-name" class="fw400-fs-14 ms-auto">${monday}</h5>
  `
  middleLeft.innerHTML=`
  <h4 id="city-name">${Weathers.location.name}</h4>
  <div class="px-2 d-flex  mb-5">
  <h1 class="f700-fs-90 text-white" id="degree"><span id="the-degree">${Weathers.current.temp_c}</span><sub>o</sub>C</h1>
  <img class="ms-auto w-100" id="degree-img" src="${Weathers.current.condition.icon}" alt="">
  </div>
  <h5 class="fw300-fs-14">${Weathers.current.condition.text}</h5>
  <div class="d-flex ">
  <span class="me-4"><img src="Home/imeges/icon-umberella.png" alt=""> 20%</span>
  <span class="me-4"><img src="Home/imeges/icon-wind.png" alt=""> 18km/h</span>
  <span class="me-4"><img src="Home/imeges/icon-compass.png" alt=""> East</span>
  </div>
  `
}

function day2() {
  topMiddlle.innerHTML=`
  <div><h5 id="day2-name" class="fw400-fs-14 me-auto">${dayTwo2}</h5></div>
  `
  middlleMiddlle.innerHTML=`
  <div class="d-block"><img id="day2-img" src="${Weathers.forecast.forecastday[0].day.condition.icon}" alt=""></div>
              <div class="d-block mb-5">
              <h1 class="fw700-fs-24 text-white" id="degree"><span id="the-degree">${Weathers.forecast.forecastday[0].day.maxtemp_c}</span><sub>o</sub>C</h1>
                <h5>${Weathers.forecast.forecastday[0].day.mintemp_c}o</h5>
                <h4 class="fw300-fs-14">${Weathers.forecast.forecastday[0].day.condition.text}</h4>
              </div>
  `
}
function day3() {
  DayThreeTop.innerHTML=`
  <div><h5 id="day2-name" class="fw400-fs-14 me-auto">${dayThree3}</h5></div>
  `
  DayThreeMiddlle.innerHTML=`
  <div class="d-block"><img id="day2-img" src="${Weathers.forecast.forecastday[1].day.condition.icon}" alt=""></div>
              <div class="d-block mb-5">
              <h1 class="fw700-fs-24 text-white" id="degree"><span id="the-degree">${Weathers.forecast.forecastday[1].day.maxtemp_c}</span><sub>o</sub>C</h1>
                <h5>${Weathers.forecast.forecastday[1].day.mintemp_c}o</h5>
                <h4 class="fw300-fs-14">${Weathers.forecast.forecastday[1].day.condition.text}</h4>
              </div>
  `

}



submitBtn.addEventListener('click',function() {
    gett(searchInput.value);   
})
async function name() {
  await ip();
  await gett(currentIp);

}
name()


async function ip() {
  let x=await fetch(`https://apiip.net/api/check?&accessKey=2d43047c-b137-43f8-9676-5acd05e4d73f`);
  currentIpOpj=await x.json();
  currentIp=currentIpOpj.capital;

}



async function gett(cityName) {
   let x=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=210382e8ee844c0195592521240403&q=${cityName}&days=3`);
   Weathers=await x.json();
   day1();
   day2();
   day3();

}



function myContact() {
  location.href = "./Contact/contact.html";
}