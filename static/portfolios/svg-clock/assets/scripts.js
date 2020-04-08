const svg = document.querySelector('svg');
const seconds = document.querySelector('.seconds, .pin');
const pin = document.querySelector('.pin');
const html = document.querySelector('html');
const brand = document.querySelector('.brand');

const now = new Date();
const then = new Date();

const secs = now.getSeconds();
const mins = now.getMinutes();
const hours = now.getHours();

const dayTime = 8;
const nightTime = 18;


if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/portfolio/clock/sw.js', { scope: '/portfolio/clock/' })
      .then(function(registration) {
            console.log('Service Worker Registered');
      });

    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
  }
  
  
let deferredPrompt; // Allows to show the install prompt
let installer;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log("beforeinstallprompt fired");
    if (installer === undefined) {
        installer = document.getElementById("installer");
        console.log('installer found');
    }
    // Show the setup button
    installer.style.display = "inline";
    installer.style.opacity = "1";
    installer.disabled = false;
    console.log('installer element shown');
});  

function installApp() {
    // Show the prompt
    console.log('show prompt');
    deferredPrompt.prompt();
    installer.disabled = true;
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA setup accepted');
                // hide our user interface that shows our A2HS button
                installer.style.display = 'none';
            } else {
                console.log('PWA setup rejected');
            }
            deferredPrompt = null;
        });
}
  

function setDate() {

  //   console.log('Refresh @ ', dayTime + ':00 Plus Refresh @ ' + nightTime + ':00');
  // Auto Dark Theme at night
  if (hours < dayTime || hours >= nightTime) {
    svg.style.stroke = '#161616'
    svg.style.fill = '#565350'
    seconds.style.stroke = '#580000'
    pin.style.stroke = '#580000'
    html.style.background = '#565350'
    brand.style.fill = '#171717'
  }

  svg.style.setProperty('--start-seconds', secs);
  svg.style.setProperty('--start-minutes', mins);
  svg.style.setProperty('--start-hours', hours % 12);

}


function reloadPage(hr, ms, sc) {
    if(hours > hr ||
       (hours == hr && mins > ms) ||
        hours == hr && mins == ms && secs >= sc) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hr);
    then.setMinutes(ms);
    then.setSeconds(sc);

    let timeout = (then.getTime() - now.getTime());
    setTimeout(function() { 
        location.reload(true);
    }, timeout);
}

setDate();
// console.log('Current Hour: ', hours + ':00');
reloadPage(dayTime,0,1); // 07,0,0
reloadPage(nightTime,0,1); // 18,0,0