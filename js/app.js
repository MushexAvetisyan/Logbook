// ======================================================
// Airport Logbook
// app.js
// ======================================================

const statusButtons =
    document.querySelectorAll(".status-btn");

const statusInput =
    document.getElementById("status");

const createDailyFlights =
    document.getElementById("createDailyFlights");


const createFlightsModal =
    document.getElementById("createFlightsModal");


const closeCreateModal =
    document.getElementById("closeCreateModal");


const createFlightsButton =
    document.getElementById("createFlightsButton");


const flightAmount =
    document.getElementById("flightAmount");

const flightList =
    document.getElementById("flightList");


const addFlight =
    document.getElementById("addFlight");


let editingFlightIndex=null;

let currentDate = new Date();

let selectedDate = null;


// Storage

let flights = JSON.parse(
    localStorage.getItem("airportFlights")
) || {};



// Elements

const calendarDays = document.getElementById("calendarDays");

const monthYear = document.getElementById("monthYear");

const modal = document.getElementById("modal");

const modalDate = document.getElementById("modalDate");

const closeModal = document.getElementById("closeModal");

const form = document.getElementById("flightForm");

const deleteBtn = document.getElementById("deleteData");

const prevMonth = document.getElementById("prevMonth");

const nextMonth = document.getElementById("nextMonth");



// ===============================
// Calendar
// ===============================


function renderCalendar(){


    calendarDays.innerHTML="";


    let year=currentDate.getFullYear();

    let month=currentDate.getMonth();



    let firstDay=new Date(
        year,
        month,
        1
    ).getDay();



    let daysInMonth=new Date(
        year,
        month+1,
        0
    ).getDate();



    let monthName=currentDate.toLocaleString(
        "en-US",
        {
            month:"long"
        }
    );


    monthYear.textContent=
        `${monthName} ${year}`;



    // Monday start

    firstDay =
        firstDay===0 ? 6 : firstDay-1;



    for(let i=0;i<firstDay;i++){


        let empty=document.createElement("div");

        empty.className="day empty";

        calendarDays.appendChild(empty);


    }



    for(let day=1;day<=daysInMonth;day++){


        let cell=document.createElement("div");

        cell.className="day";


        let number=document.createElement("div");

        number.className="day-number";

        number.textContent=day;


        cell.appendChild(number);



        let dateKey=
            `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;



        // today

        let today=new Date();


        if(
            day===today.getDate() &&
            month===today.getMonth() &&
            year===today.getFullYear()
        ){

            cell.classList.add("today");

        }



        // saved data

        if(flights[dateKey]){


            cell.classList.add("has-data");


            let preview=document.createElement("div");


            preview.className="flight-preview";


            let count=flights[dateKey].length;


            let firstFlight=
                flights[dateKey][0].flight || "";



            preview.innerHTML=
                `


    Flights:
    ${count}

    `;


            cell.appendChild(preview);


        }



        cell.onclick=()=>{

            openModal(dateKey);

        };



        calendarDays.appendChild(cell);


    }


}



// ===============================
// Modal
// ===============================


function openModal(date){


    selectedDate=date;


    modalDate.textContent=
        date;


    editingFlightIndex=null;


    clearForm();


    renderFlightList();



    modal.classList.add("active");


}

function renderFlightList(){


    flightList.innerHTML="";



    let dayFlights =
        flights[selectedDate] || [];



    dayFlights.forEach((flight,index)=>{


        let card=document.createElement("div");


        card.className="flight-card";


        card.innerHTML=

            `
<strong>
✈ ${flight.flight || "Flight Data"}
</strong>

`;



        card.onclick=function(){


            loadFlight(index);


        };



        flightList.appendChild(card);


    });


}

addFlight.onclick=function(){


    clearForm();


    editingFlightIndex=null;


    form.scrollIntoView({
        behavior:"smooth"
    });


}

function loadFlight(index){


    editingFlightIndex=index;


    let flight=
        flights[selectedDate][index];



    Object.keys(flight).forEach(key=>{


        let input=
            document.getElementById(key);



        if(input){

            input.value=flight[key];

        }


    });

    if(flight.status){

        statusButtons.forEach(btn=>{

            btn.classList.remove("active");

            if(btn.dataset.status===flight.status){

                btn.classList.add("active");

            }

        });

        statusInput.value = flight.status;

    }


    form.scrollIntoView({
        behavior:"smooth"
    });


}




function close(){

    modal.classList.remove("active");

}



closeModal.addEventListener(
    "click",
    ()=>{

        modal.classList.remove("active");

    }
);



// ===============================
// Form
// ===============================



form.addEventListener(
    "submit",
    function(e){


        e.preventDefault();



        let data={};



        let inputs=form.querySelectorAll("input");



        inputs.forEach(input=>{


            data[input.id]=input.value;


        });



        if(!flights[selectedDate]){

            flights[selectedDate]=[];

        }


        if(editingFlightIndex===null){


            flights[selectedDate].push(data);


        }
        else{


            flights[selectedDate][editingFlightIndex]=data;


        }



        localStorage.setItem(
            "airportFlights",
            JSON.stringify(flights)
        );



        close();


        renderCalendar();
        renderFlightList();


        showToast(
            "Saved successfully"
        );


    });

function showDayFlights(date){


    let list=flights[date];


    if(!list)
        return;



    console.log(
        "Flights:",
        list
    );


}





// ===============================
// Delete
// ===============================


deleteBtn.onclick=function(){


    if(!selectedDate)
        return;



    delete flights[selectedDate];



    localStorage.setItem(
        "airportFlights",
        JSON.stringify(flights)
    );



    close();


    renderCalendar();
    renderFlightList();


    showToast(
        "Day deleted"
    );


};







// ===============================
// Clear form
// ===============================


function clearForm(){


    let inputs=
        form.querySelectorAll("input");


    inputs.forEach(input=>{

        input.value="";

    });

    statusInput.value = "Scheduled";

    statusButtons.forEach(btn=>{

        btn.classList.remove("active");

        if(btn.dataset.status==="Scheduled"){

            btn.classList.add("active");

        }

    });


}




// ===============================
// Month buttons
// ===============================


prevMonth.onclick=function(){


    currentDate.setMonth(
        currentDate.getMonth()-1
    );


    renderCalendar();
    renderFlightList();

};



nextMonth.onclick=function(){


    currentDate.setMonth(
        currentDate.getMonth()+1
    );


    renderCalendar();
    renderFlightList();

};




// ===============================
// Toast
// ===============================


function showToast(text){


    let toast=document.createElement("div");


    toast.className="toast";


    toast.textContent=text;


    document.body.appendChild(toast);



    setTimeout(()=>{


        toast.remove();


    },2500);


}





// Start

renderCalendar();
renderFlightList();

const deleteFlight =
    document.getElementById("deleteFlight");



deleteFlight.onclick=function(){


    if(editingFlightIndex===null)
        return;



    flights[selectedDate]
        .splice(editingFlightIndex,1);



    if(flights[selectedDate].length===0){

        delete flights[selectedDate];

    }



    localStorage.setItem(
        "airportFlights",
        JSON.stringify(flights)
    );



    clearForm();

    editingFlightIndex=null;


    renderFlightList();

    renderCalendar();


    showToast(
        "Flight deleted"
    );


}

createDailyFlights.onclick=function(){


    modal.classList.remove("active");


    createFlightsModal.classList.add("active");


}

closeCreateModal.onclick=function(){


    createFlightsModal.classList.remove(
        "active"
    );


    modal.classList.add("active");


}

createFlightsButton.onclick=function(){



    let amount =
        Number(
            flightAmount.value
        );



    if(!amount || amount<=0){

        showToast(
            "Enter flights number"
        );

        return;

    }



    if(!flights[selectedDate]){


        flights[selectedDate]=[];

    }



    for(
        let i=1;
        i<=amount;
        i++
    ){



        flights[selectedDate].push({


            id:Date.now()+i,


            number:
                `Flight ${i}`,


            flight:"",

            aircraft:"",

            cmd:"",

            pax:"",

            noshow:"",

            board:"",

            bag:"",

            delay:"",

            wchr:"",

            inad:"",

            petc:"",

            fuel:"",

            fueltime:"",

            land:"",

            chocks:"",

            bagload:"",

            passboard:"",

            passboardend:"",

            doorclosed:""


        });


    }



    localStorage.setItem(

        "airportFlights",

        JSON.stringify(flights)

    );



    createFlightsModal.classList.remove(
        "active"
    );



    renderFlightList();


    renderCalendar();


    showToast(

        amount+
        " flights created"

    );



}


statusButtons.forEach(button=>{

    button.onclick=function(){

        statusButtons.forEach(btn=>
            btn.classList.remove("active")
        );

        this.classList.add("active");

        statusInput.value =
            this.dataset.status;

    };

});