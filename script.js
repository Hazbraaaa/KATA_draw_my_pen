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


// init functions

function drawMyPen(month) {
    console.log(" /\\ \n/__\\");


    if (penCalendar.hasOwnProperty(month)) {
        for (i = 0 ; i < penCalendar[month] ; i++) {
            console.log("||||");
        }
    }

    console.log("|__|");

    if (!(month === 'march' || month === 'april' || month === 'may' || month === 'june')) {
        console.log("|  |");
    }

    console.log("|__|");
}


// execute code

drawMyPen('september');
drawMyPen('febuary');
drawMyPen('march');
drawMyPen('june');