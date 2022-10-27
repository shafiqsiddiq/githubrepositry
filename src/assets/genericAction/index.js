function getTodayDate() {
    var today = new Date();
    return today;
}
function getPreviousDate(date, interval) {
    const toDate = new Date(date);
    const fromDate = new Date(toDate);
    fromDate.setDate(fromDate.getDate() - interval);
    return fromDate; 
}
function getNextDate(date, interval) {
    const toDate = new Date(date);
    const fromDate = new Date(toDate);
    fromDate.setDate(fromDate.getDate() + interval);
    return fromDate;
}
function monthOfYearAsString(monthIndex) {
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][monthIndex];
}
function dayOfWeekAsString(dayIndex) {
    return ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][dayIndex];
}
function fullMonthOfYearAsString(monthIndex) {
    return ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex];
}
function getDateInFormat(date) {
    var dateToChange = new Date(date);
    var month = dateToChange.getMonth();
    var date_ = dateToChange.getDate();
    var year = dateToChange.getFullYear();
    return `${month + 1} / ${date_} / ${year}`;
}
function convertBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
function getInitialName(name) {
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
        initials =
            nameSplit[0].substring(0, 1) +
            nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
    } else return;
    return initials.toUpperCase();
};
function createImageFromInitials(size, name, color) {
    if (name == null) return;
    name = getInitialName(name)
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = canvas.height = size
    context.fillStyle = "#ffffff"
    context.fillRect(0, 0, size, size)
    context.fillStyle = `${color}50`
    context.fillRect(0, 0, size, size)
    context.fillStyle = color;
    context.textBaseline = 'middle'
    context.textAlign = 'center'
    context.font = `${size / 2}px Roboto`
    context.fillText(name, (size / 2), (size / 2))
    return canvas.toDataURL()
};
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function listOfNextYears(number) {
    let expYearArray = [];
    for (let i = 0; i <= number; i++) {
        expYearArray.push((new Date().getFullYear() + (i)))
    }
    return expYearArray;
}
function listOfMonths() {
    return [
        {
            id: 0,
            value: 1,
            month: "January"
        },
        {
            id: 1,
            value: 2,
            month: "Feburary"
        },
        {
            id: 2,
            value: 3,
            month: "March"
        },
        {
            id: 3,
            value: 4,
            month: "April"
        },
        {
            id: 4,
            value: 5,
            month: "May"
        },
        {
            id: 5,
            value: 6,
            month: "June"
        },
        {
            id: 6,
            value: 7,
            month: "July"
        },
        {
            id: 7,
            value: 8,
            month: "August"
        },
        {
            id: 8,
            value: 9,
            month: "September"
        },
        {
            id: 9,
            value: 10,
            month: "October"
        },
        {
            id: 10,
            value: 11,
            month: "November"
        },
        {
            id: 11,
            value: 12,
            month: "December"
        }
    ]
}
function expiryDateCheck(expiryDate) {
    var GivenDate = expiryDate;
    var CurrentDate = new Date();
    GivenDate = new Date(GivenDate);
    if (GivenDate > CurrentDate) {
        return true
    } else {
        return false
    }
}
function dateDifference(createdDate) {
    var date1 = new Date(createdDate);
    var date2 = new Date();
    var diffDays = date2.getDate() - date1.getDate();
    if (diffDays < 0) {
        diffDays = diffDays * -1
    }
    return diffDays
}
function getCountryTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
}
function allMonthList() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
function subscriptionData(subscription, data) {
    let monthList = allMonthList()
    let dataArray = [];
    let value = 0;
    switch (subscription) {
        case "free":
            while (value <= 11) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].month === monthList[value]) {
                        dataArray.push(data[i].freeCount)
                    }
                }
                value++;
            }
            return dataArray;
        case "gold":
            while (value <= 11) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].month === monthList[value]) {
                        dataArray.push(data[i].goldCount)
                    }
                }
                value++;
            }
            return dataArray;
        case "diamond":
            while (value <= 11) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].month === monthList[value]) {
                        dataArray.push(data[i].diamondCount)
                    }
                }
                value++;
            }
            return dataArray;
        default:
            dataArray = [];
    }
}
function landlordTenantByMonthData(role, data) {
    let monthList = allMonthList()
    let dataArray = [];
    let value = 0;
    switch (role) {
        case "landlord":
            while (value <= 11) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].month === monthList[value]) {
                        dataArray.push(data[i].landlordCount)
                    }
                }
                value++;
            }
            return dataArray;
        case "tenant":
            while (value <= 11) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].month === monthList[value]) {
                        dataArray.push(data[i].tenantCount)
                    }
                }
                value++;
            }
            return dataArray;
        default:
            dataArray = [];
    }
}
function dataByState(data) {
    let stateData = []
    for (let i = 0; i < data.length; i++) {
        stateData.push({
            name: data[i].state,
            y: data[i].userCount
        });
    }
    return stateData;
}
function alertDialog(msg, yesFunc, params) {
    return (
        window.confirm(msg) && yesFunc(params)
    )
}
export {
    getTodayDate,
    getPreviousDate,
    getNextDate,
    monthOfYearAsString,
    dayOfWeekAsString,
    getInitialName,
    getDateInFormat,
    convertBase64,
    createImageFromInitials,
    getRandomColor,
    listOfNextYears,
    listOfMonths,
    expiryDateCheck,
    fullMonthOfYearAsString,
    dateDifference,
    getCountryTimeZone,
    subscriptionData,
    allMonthList,
    landlordTenantByMonthData,
    dataByState,
    alertDialog
}