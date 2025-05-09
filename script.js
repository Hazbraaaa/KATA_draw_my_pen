// init variables

const penCalendar = {
    september: 10,
    october: 9,
    november: 8,
    december: 7,
    january: 6,
    febuary: 5,
    march: 4,
    april: 3,
    may: 2,
    june: 1,
};

const fullRubberMonths = [
    "september",
    "october",
    "november",
    "december",
    "january",
    "febuary"
]

// init functions

function drawLead() {
    console.log(" /\\ \n/__\\");
}

function drawBody(month) {
    for (i = 0 ; i < penCalendar[month]; i++) {
        console.log("||||");
    }
    console.log("|__|");
}

function drawRubber(month) {
    if (fullRubberMonths.includes(month)) {
        console.log("|  |");
    }
    console.log("|__|");
}

function drawMyPen(month) {
    if (!penCalendar.hasOwnProperty(month)) {
        console.log("Are you sure you have school ?");
        return;
    }
    console.log(`My pen in ${month} is :`)
    drawLead();
    drawBody(month);
    drawRubber(month);
}


// execute code

drawMyPen('september');
drawMyPen('febuary');
drawMyPen('march');
drawMyPen('june');