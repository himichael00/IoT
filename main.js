const endpoint = "http://192.168.1.28";

function getMainRoomLed() {
    fetch(endpoint + "/mainroom", {
        method:"GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledMainroom.style.backgroundColor = "#FFDA1A";
            mainroomLedImage.src = "./assets/led-on.png";
        } else{
            ledMainroom.style.backgroundColor = "#0051BA";
            mainroomLedImage.src = "./assets/led-off.png";
        }
    });
}

function getBedRoomLed() {
    fetch(endpoint + "/bedroom", {
        method:"GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledBedroom.style.backgroundColor = "#FFDA1A";
            bedroomLedImage.src = "./assets/led-on.png";
        } else{
            ledBedroom.style.backgroundColor = "#0051BA";
            bedroomLedImage.src = "./assets/led-off.png";
        }
    });
}

function getDeskSetupLed() {
    fetch(endpoint + "/desksetuproom", {
        method:"GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledDesksetup.style.backgroundColor = "#FFDA1A";
            desksetupLedImage.src = "./assets/led-on.png";
        } else{
            ledDesksetup.style.backgroundColor = "#0051BA";
            desksetupLedImage.src = "./assets/led-off.png";
        }
    });
}

function setMainRoomLed() {
    fetch(endpoint + "/mainroom", {
        method:"POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setBedRoomLed() {
    fetch(endpoint + "/bedroom", {
        method:"POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setDeskSetupLed() {
    fetch(endpoint + "/desksetuproom", {
        method:"POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setCornerPlaceLed() {
    ledCornerplace.style.backgroundColor = "#FFDA1A";
    cornerplaceLedImage.src = "./assets/led-on.png";
}

getMainRoomLed();
getBedRoomLed();
getDeskSetupLed();