var displayDate = () => {
    let allDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let myDate = new Date();
    let day = myDate.getDay();
    let month = myDate.getMonth();
    let year = myDate.getFullYear();
    let myDay = "";
    let myMonth = "";
    // days
    for (let i = 0; i < allDay.length; i++) {
        switch (day) {
            case i:
                myDay = allDay[i];
                break;
        }
    }
    // Month 
    for (let j = 0; j < allMonths.length; j++) {
        switch (month) {
            case j:
                myMonth = allMonths[j];
                break;
        }
    }
    // result
    document.querySelector("h1").innerHTML = myDay + " / " + myMonth + " / " + year;
}
displayDate();