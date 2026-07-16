![c633c20ede82f0e0ced7d570dbe3a1f3](https://user-images.githubusercontent.com/70382532/138322189-2db8df52-9dcb-40a0-88a8-c365466bd33d.gif)



# ✈️ Airport Logbook — Ground Operations Flight Management System

<p align="center">

<b>Personal Airport Operations Dashboard</b><br>
Built with pure HTML + CSS + Vanilla JavaScript<br>
No Backend • LocalStorage • Offline Ready

</p>


<p align="center">

<img src="https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5">
<img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3">
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript">
<img src="https://img.shields.io/badge/Backend-none-green?style=for-the-badge">
<img src="https://img.shields.io/badge/Storage-localStorage-purple?style=for-the-badge">
<img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge">

</p>


---

## ✈️ Overview


**Airport Logbook** is a frontend-only airport operations management application designed for recording and tracking daily flight handling information.

The project replaces manual Excel-based tracking with a modern browser application.

It allows ground operations staff to:

- Create daily flight schedules
- Manage multiple flights per day
- Record operational data
- Track passenger and baggage information
- Store flight timing information
- Edit and delete individual flights
- Work completely offline


All data is stored locally in the browser using:

```
localStorage API
```

No backend.
No database.
No server required.


---

# 🚀 Main Features


## 📅 Interactive Calendar


Monthly calendar interface:

- Navigate between months
- Select any date
- View scheduled flights
- Highlight days with data
- Quick access to daily operations


Example:


```
July 15


✈ Flight 1
✈ Flight 2
✈ Flight 3
✈ Flight 4

Flights: 12
```


---


# 🛫 Daily Flight Scheduler


Before starting work, create the expected number of flights.


Example:


```
How many flights today?

[ 12 ]

CREATE
```


Automatically generates:


```
✈ Flight 1
✈ Flight 2
✈ Flight 3
...
✈ Flight 12
```


Each flight starts empty and can be completed during operations.


---


# 🗂 Multiple Flights Per Day


One date can contain unlimited flights.


Example:


```
15 July 2026


✈ Flight 1
   3F378
   A320
   180 Pax


✈ Flight 2
   3F393
   A321
   192 Pax


✈ Flight 3
   Empty
```


---

# 📝 Flight Information Management


Each flight supports:


### Flight Information

- Flight Number
- Aircraft Type
- CMD


### Passenger Data

- Pax
- No Show
- Board


### Baggage

- Bag


### Special Services

- WCHR
- INAD
- PETC


### Delay Information

- Delay Code


### Fuel

- Fuel Quantity
- Fuel Time


### Aircraft Timeline

- Landing Time
- Chocks
- Bag Load
- Passenger Boarding
- Door Closed



---

# 💾 Data Persistence


All information is saved automatically:


```
Browser
   |
   |
localStorage
   |
   |
Airport Logbook Data
```


Storage example:


```javascript
{
 "2026-07-15":[

   {
    "number":"Flight 1",
    "flight":"3F378",
    "aircraft":"A320",
    "pax":"180"
   },

   {
    "number":"Flight 2",
    "flight":"",
    "aircraft":""
   }

 ]
}
```


---

# 🪟 Modal System


The application uses dynamic modal windows:


Features:

- Create daily schedule modal
- Flight editing modal
- Add new flight
- Edit existing flight
- Delete individual flight
- Delete whole day


Modal behavior:

✅ Close button only  
✅ Prevent accidental closing  
✅ Nested workflow support


---

# 🎨 UI / UX Features


Modern glass interface:

- Glassmorphism design
- Animated background
- Smooth transitions
- Responsive layout
- Mobile friendly
- Dark interface


Designed for:

- Desktop
- Tablet
- Mobile devices


---

# 🏗 Project Architecture


```
airport-logbook/

│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── assets/
│
└── README.md

```


---

# 🛠 Tech Stack


## Frontend

- HTML5
- CSS3
- Vanilla JavaScript


## Browser APIs


- LocalStorage API
- DOM API
- Date API


## No Dependencies


No:

❌ React  
❌ Vue  
❌ Angular  
❌ Bootstrap  
❌ Backend


Pure JavaScript architecture.


---

# 🧪 Testing Checklist


- [x] Create daily flights
- [x] Generate multiple empty flights
- [x] Add flight information
- [x] Edit existing flight
- [x] Delete single flight
- [x] Delete full day
- [x] Refresh browser and keep data
- [x] Navigate calendar months
- [x] Multiple flights on one date


---

# 🚀 Run Locally


## Option 1 — Simple


Download project:


```
git clone https://github.com/username/airport-logbook.git
```


Open:


```
index.html
```


---


## Option 2 — VS Code


Install:

```
Live Server Extension
```


Then:


```
Right click index.html

Open with Live Server
```


---


# 📦 Data Storage


Current storage key:


```
airportFlights
```


Example:


```javascript
localStorage.getItem(
"airportFlights"
)
```


---

# 🔮 Future Roadmap


## Version 2


Planned improvements:


### 📊 Reports

- Daily operation reports
- Monthly statistics
- Delay analysis


### 📄 Excel Integration

- Export XLSX
- Import Excel
- Automatic templates


### 🔎 Search

- Search by flight number
- Search by aircraft
- Search by date


### 👥 User System

- Multiple operators
- Authentication
- Cloud synchronization


### 📱 PWA

- Install as mobile application
- Offline mode
- Push notifications


---

# 🎯 Project Goal


The goal of Airport Logbook is to transform manual operational tracking into a faster, cleaner and more reliable digital workflow.


Built for real airport ground handling scenarios.


---

# 👨‍💻 Author


**Mushegh Avetisyan**


Full-Stack Developer


GitHub:

https://github.com/mushexavetisyan


---

# 📄 License


MIT License
