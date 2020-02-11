
///////////////
// SELECTORS //
///////////////

//ALERT SELECTORS

const closingButton = document.querySelector('.x-button');
const alertDiv = document.querySelector('.alert');

//NOTIFICATIONS SELECTORS

const bellIcon = document.querySelector('.bell-icon');
const notifDropdown = document.querySelector('#notification-dropdown');
const notifChild = document.querySelectorAll('#notification-dropdown div');
const notifP = document.querySelectorAll('#notification-dropdown div p');
const notifX = document.querySelectorAll('.x-button-notif');
const bellBadge = document.querySelector('.badge');
const notXLength = notifX.length;
let notifCount = 0;

//TRAFFIC CHART SELETORS

const timeSwitch = document.querySelector('.time-switch')
const times = document.querySelectorAll('.time-switch label')
const trafficContainer = document.querySelector('.traffic-container script');
const hourlyTraffic = document.querySelector('.hourly-traffic')
const dailyTraffic = document.querySelector('.daily-traffic')
const weeklyTraffic = document.querySelector('.weekly-traffic')
const monthlyTraffic = document.querySelector('.monthly-traffic')


// MESSAGES FORM SELECTORS

const formName = document.querySelector('.contact-form input');
const formText = document.querySelector('.contact-form textarea');
const formButton = document.querySelector('.contact-form button');
const formDiv = document.querySelector('.contact-form');
const formOverlay = document.querySelector('.overlay');
const formOverlayButton = document.querySelector('.overlay button');

//AUTOCOMPLETE

const autocompleteWindow = document.querySelector('#autocomplete');
const autocompletePersons = document.querySelectorAll('#autocomplete p');



//SETTING LOCAL STORAGE VALUE

const settingsNotifSwitch = document.querySelector('.notif-switch');
let settingsNotifSwitchValue ="off";
const settingsPublicSwitch = document.querySelector('.public-switch');
let settingsPublicSwitchValue ="off";
const settingsTimeZone = document.querySelector('.settings-buttons select');
const saveBtn = document.querySelector('.save-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const settingsForm = document.querySelector('.settings-form');



/////////////////////////////
// TRAFFIC CHART SWITCHING //
/////////////////////////////
        
        hourlyTraffic.style.display = '';
        dailyTraffic.style.display = 'none';
        weeklyTraffic.style.display = 'none';
        monthlyTraffic.style.display = 'none';


timeSwitch.addEventListener('click', (e) => {

    let time = e.target.textContent;
    // sessionStorage.setItem('timeSwitch', e.target.textContent);
    
    if(time.toLowerCase().includes('day')){
        // sessionStorage.setItem('timeSwitch', 'Day');
        dailyTraffic.style.display = '';
        hourlyTraffic.style.display = 'none';
        weeklyTraffic.style.display = 'none';
        monthlyTraffic.style.display = 'none';
    } else if(time.toLowerCase().includes('week')){
        // sessionStorage.setItem('timeSwitch', 'Week');
        weeklyTraffic.style.display = '';
        hourlyTraffic.style.display = 'none';
        dailyTraffic.style.display = 'none';
        monthlyTraffic.style.display = 'none';
    } else if(time.toLowerCase().includes('hour')){
        // sessionStorage.setItem('timeSwitch', 'Hour');
        hourlyTraffic.style.display = '';
        dailyTraffic.style.display = 'none';
        weeklyTraffic.style.display = 'none';
        monthlyTraffic.style.display = 'none';
    } else if(time.toLowerCase().includes('month')){
        // sessionStorage.setItem('timeSwitch', 'Month');
        monthlyTraffic.style.display = '';
        hourlyTraffic.style.display = 'none';
        dailyTraffic.style.display = 'none';
        weeklyTraffic.style.display = 'none';
    }
    console.log(time)
})

///////////////////
// ALERT CLOSING //
///////////////////

closingButton.addEventListener('click', () =>{
    alertDiv.style.display = 'none';
})


/////////////////////////////////
// NOTIFICATIONS FUNCTIONALITY //
/////////////////////////////////

//opening dropdown

bellIcon.addEventListener('click', () =>{
    notifDropdown.style.display = 'flex';
    notifDropdown.className = "visible";
    for(let i=0; i<notifChild.length; i++){
        notifChild[i].classList.add("visible");
        notifP[i].classList.add("visible");
        notifX[i].classList.add("visible");
    }
})

//closing notifications

for(let i=0; i<3; i++) {
    notifX[i].addEventListener('click', (e) =>{
        e.target.parentNode.style.display = 'none';
        notifCount++;
        if(notifCount === notifX.length){
            bellBadge.style.display = 'none';
        }
    })
}

//closing dropdown

    document.addEventListener('click', (e) =>{
        const clicked = e.target.className;
        if(clicked.includes('visible') != true){
            notifDropdown.className = 'hidden';
            notifDropdown.style.display = 'none';
            
            for(let i=0; i<notifChild.length; i++){
                notifChild[i].classList.remove("visible");
                notifP[i].classList.remove("visible");
                notifX[i].classList.remove("visible");
            }
        }
    })
/////////////////////////////////////////
// EVENT LISTENER FOR FORM VALIDATION  //
/////////////////////////////////////////

    formButton.addEventListener('click', (e) => {
        if(formName.value.length === 0 || formText.value.length === 0){
            e.preventDefault()
            if(formName.value.length === 0){
                formName.setAttribute('placeholder', 'Please fill this field!')
                formName.classList.add('fail')
                formName.style.backgroundColor = 'rgba(249, 124, 124, 0.5)'
            }
            if(formText.value.length === 0){
                formText.setAttribute('placeholder', 'Please fill this field!')
                formText.classList.add('fail')
                formText.style.backgroundColor = 'rgba(249, 124, 124, 0.5)'
            }
        }else {
            sessionStorage.setItem('message', 'sent');
        }
    })

//////////////////////////
// CONFIRMATION WINDOW  //
//////////////////////////

//confirmation display

    let formValidation = sessionStorage.getItem('message')
    if(formValidation === 'sent') {
        formOverlay.style.display = 'flex';
        formDiv.style.display = 'none';
    }

//confirmation closing

    formOverlayButton.addEventListener('click', () => {
        formOverlay.style.display = 'none';
        formDiv.style.display = 'flex';
        sessionStorage.setItem('message','notSent');
    })


/////////////////////
// SETTINGS SAVING //
/////////////////////

    settingsNotifSwitch.addEventListener('click', () =>{
        if(settingsNotifSwitch.classList.length == 1){
            settingsNotifSwitch.classList.add('on');
            settingsNotifSwitchValue = "on"
        } else if(settingsNotifSwitch.classList.length > 1){
            settingsNotifSwitch.classList.remove('on');
            settingsNotifSwitchValue = "off"
        }
    })

    settingsPublicSwitch.addEventListener('click', () =>{
        if(settingsPublicSwitch.classList.length == 1){
            settingsPublicSwitch.classList.add('on');
            settingsPublicSwitchValue = "on"
        } else if(settingsPublicSwitch.classList.length > 1){
            settingsPublicSwitch.classList.remove('on');
            settingsPublicSwitchValue = "off"
        }
    })

    saveBtn.addEventListener('click', (e) => {
        if(e.target === saveBtn )
        sessionStorage.setItem('Send notifications', settingsNotifSwitchValue);
        sessionStorage.setItem('Set profile to public', settingsPublicSwitchValue);
        sessionStorage.setItem('Time zone', settingsTimeZone.value);
        e.preventDefault();
    })

    cancelBtn.addEventListener('click', () => {
        sessionStorage.setItem('Send notifications', '');
        sessionStorage.setItem('Set profile to public', '');
        sessionStorage.setItem('Time zone', '');
        settingsForm.reset()

    })

//////////////////
// AUTOCOMPLETE //
//////////////////
    autocompleteWindow.className = 'hide';

    formName.addEventListener('click', () => {
        autocompleteWindow.style.display = 'flex';
        autocompleteWindow.className = 'show';
    })

    for(let i=0; i <= autocompletePersons.length; i++) {
        autocompleteWindow.addEventListener('click', (e) => {
            if(e.target.className == 'hint'){
                formName.value = e.target.textContent
                autocompleteWindow.className = 'hide'
                autocompleteWindow.style.display = 'none';
            }
        })
    }

    
    formName.addEventListener('keyup', ()=>{
        const searchVal = formName.value.toLowerCase();
        
        for(i=0; i<autocompletePersons.length; i++){
            const persons = autocompletePersons[i].textContent.toLowerCase();
            if(persons.includes(searchVal) != true){
                autocompletePersons[i].style.display = 'none';
            }else {
                autocompletePersons[i].style.display = '';
            }
        }
    })



    