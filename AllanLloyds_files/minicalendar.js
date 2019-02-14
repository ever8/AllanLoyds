// window.onload = function(){
//     var d = new Date();
//     var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//     var month = d.getMonth();   //0-11
//     var year = d.getFullYear(); //2014
//     var first_date = month_name[month] + " " + 1 + " " + year;
//     //September 1 2014
//     var tmp = new Date(first_date).toDateString();
//     //Mon Sep 01 2014 ...
//     var first_day = tmp.substring(0, 3);    //Mon
//     var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//     var day_no = day_name.indexOf(first_day);   //1
//     var days = new Date(year, month+1, 0).getDate();    //30
//     //Tue Sep 30 2014 ...
//     var calendar = get_calendar(day_no, days);
//     document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
//     document.getElementById("calendar-dates").appendChild(calendar);
// }
// function next() {
//     year = (month === 11) ? year + 1 : year;
//     month = (month + 1) % 12;
//     var calendar = get_calendar(day_no, days);
// }
//
// function previous() {
//     year = (month === 0) ? year - 1 : year;
//     month = (month === 0) ? 11 : month - 1;
//     var calendar = get_calendar(day_no, days);
// }
// function get_calendar(day_no, days){
//     var table = document.createElement('table');
//     var tr = document.createElement('tr');
//
//     //row for the day letters
//     for(var c=0; c<=6; c++){
//         var td = document.createElement('td');
//         td.innerHTML = "SMTWTFS"[c];
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
//
//     //create 2nd row
//     tr = document.createElement('tr');
//     var c;
//     for(c=0; c<=6; c++){
//         if(c == day_no){
//             break;
//         }
//         var td = document.createElement('td');
//         td.innerHTML = "";
//         tr.appendChild(td);
//     }
//
//     var count = 1;
//     for(; c<=6; c++){
//         var td = document.createElement('td');
//         td.innerHTML = count;
//         count++;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
//
//     //rest of the date rows
//     for(var r=3; r<=7; r++){
//         tr = document.createElement('tr');
//         for(var c=0; c<=6; c++){
//             if(count > days){
//                 table.appendChild(tr);
//                 return table;
//             }
//             var td = document.createElement('td');
//             td.innerHTML = count;
//             count++;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// 	return table;
// }


// new !!!

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}



let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
// let selectYear = document.getElementById("year");
// let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");

showCalendar(currentMonth, currentYear);




// function jump() {
//     currentYear = parseInt(selectYear.value);
//     currentMonth = parseInt(selectMonth.value);
//     showCalendar(currentMonth, currentYear);
// }

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    // selectYear.value = year;
    // selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}
