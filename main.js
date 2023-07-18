
const firebaseConfig = {
  apiKey: "AIzaSyDkpvO3607by_Q7Vv7l6ZdglfDrQ6obZTU",
  authDomain: "testdb-ed707.firebaseapp.com",
  databaseURL: "https://testdb-ed707-default-rtdb.firebaseio.com",
  projectId: "testdb-ed707",
  storageBucket: "testdb-ed707.appspot.com",
  messagingSenderId: "966494035669",
  appId: "1:966494035669:web:41febbdcd20372f3b50c5c"
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var company = getInputVal('company');
  var movie = getInputVal('movie');
  seat = getInputVal('seat');
  ticket = getInputVal('ticket');
  date_time = getInputVal('date_time');

  saveMessage(name, company, email, phone, movie, seat, ticket,date_time);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, movie, seat, ticket,date_time){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    movie:movie,
    seat:seat,
    ticket:ticket,
    date_time:date_time,
  });
}