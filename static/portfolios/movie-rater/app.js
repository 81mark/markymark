const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const moviesList = document.querySelector('#movies-list');
const totalStarsOutput = document.querySelector('#total-stars');
const alertCtrl = document.querySelector('ion-alert-controller');
const starIcon = ' <ion-icon name="star" color="warning"></ion-icon>';

let totalStars = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};


confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim() <= 0 ||
        enteredAmount.trim() > 5
    ) {

        alertCtrl
        .create({
            header: 'Invalid input',
            message: 'Please enter a valid movie name and number rating! Remeber only 1 to 5 are allowed', 
            buttons: ['Okay']
        })
        .then(alert => {
            alert.present();
        });
        return;
    }
    console.log
    (
        '%c Movie Rater Simple App: ' , 'color: blue;',
        '\n This is a simple Movie rater with basic validation and error checking. ',
        '\n Really just a simple Ionic4 vanilla JS app. ', 
        '\n It can be PWA or Android or ios or all 3 from the same code base and responsive.' 
    );

    const newItem = document.createElement('ion-item');
    
    newItem.innerHTML = 
    '<span class="enteredReason">' +
     enteredReason + '</span> &nbsp; ' +
    '<span class="stars">' +
    starIcon.repeat(enteredAmount) +
    '</span>';

    moviesList.appendChild(newItem);

    clear();
});

cancelBtn.addEventListener('click', clear);


