importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js')

firebase.initializeApp({
    messagingSenderId: "770682615953"
})

const initMessaging = firebase.messaging()