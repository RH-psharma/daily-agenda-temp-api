var express = require('express');
var moment = require('moment');
//test
var app = express();

// var appHelpers = {};
app.use(express.static(__dirname + '/static'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//to get list of all timezons
app.get('/store-opening-hours', function(req, res, next) {

   var storeOpeningHours = [
    {date: "2018-09-02", start_time: "9AM", end_time:"6PM"},
    {date: "2018-09-03", start_time: "9AM", end_time:"6PM"},
    {date: "2018-09-04", start_time: "9AM", end_time:"6PM"},
    {date: "2018-09-05", start_time: "9AM", end_time:"6PM"},
    {date: "2018-09-06", start_time: "8AM", end_time:"6PM"},
    {date: "2018-09-07", start_time: "9AM", end_time:"6PM"},
    {date: "2018-09-08", start_time: "9AM", end_time:"6PM"}
];
  
  res.send({
   "msg": "Store data",
   "success": true,
   "storeHours": storeOpeningHours
  });
});

app.get('/daily-agenda/:date', (req, res) => {
    let date = moment(req.params.date).format('YYYY-MM-DD');
    
    var dailyDate = [
        { "start_date": `${date} 09:00`, "end_date": `${date} 12:00`, "draggable":false, "resizeable": false, "text":"FL", "section_id":20 },
        { "start_date": `${date} 12:00`, "end_date": `${date} 12:30`, "draggable":false, "resizeable": false,"text":"MB", "section_id":20 },
        { "start_date": `${date} 12:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"CC", "section_id":20},
        { "start_date": `${date} 16:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"TB", "section_id":20},
        { "start_date": `${date} 10:00`, "end_date": `${date} 14:00`, "draggable":false, "resizeable": false,"text":"FL", "section_id":40},
        { "start_date": `${date} 14:00`, "end_date": `${date} 15:30`, "draggable":false, "resizeable": false,"text":"GH", "section_id":40},
        { "start_date": `${date} 15:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"MB", "section_id":40},
        { "start_date": `${date} 16:00`, "end_date": `${date} 17:00`, "draggable":false, "resizeable": false,"text":"CG", "section_id":40},
        { "start_date": `${date} 17:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"INTV", "section_id":40},
        { "start_date": `${date} 18:00`, "end_date": `${date} 19:00`, "draggable":false, "resizeable": false,"text":"EDU", "section_id":40},
        { "start_date": `${date} 12:00`, "end_date": `${date} 14:00`, "draggable":false, "resizeable": false, "text":"FL", "section_id":50},
        { "start_date": `${date} 14:00`, "end_date": `${date} 14:30`, "draggable":false, "resizeable": false, "text":"MB", "section_id":50},
        { "start_date": `${date} 14:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false, "text":"CUR", "section_id":50},
        { "start_date": `${date} 16:30`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false, "text":"CS", "section_id":50},
        { "start_date": `${date} 18:30`, "end_date": `${date} 21:00`, "draggable":false, "resizeable": false, "text":"HK", "section_id":50},
        { "start_date": `${date} 08:00`, "end_date": `${date} 12:00`,"text":"HK","draggable":false, "resizeable": false, "text":"FAC", "section_id":60},
        { "start_date": `${date} 12:00`, "end_date": `${date} 12:30`,"draggable":false, "resizeable": false, "text":"MB", "section_id":60},
        { "start_date": `${date} 12:30`, "end_date": `${date} 16:00`,"draggable":false, "resizeable": false, "text":"CO", "section_id":60},
        { "start_date": `${date} 16:00`, "end_date": `${date} 17:00`,"draggable":false, "resizeable": false, "text":"CD", "section_id":60},
        { "start_date": `${date} 09:00`, "end_date": `${date} 11:00`,"draggable":false, "resizeable": false, "text":"DEL", "section_id":80},
        { "start_date": `${date} 12:00`, "end_date": `${date} 14:00`,"draggable":false, "resizeable": false, "text":"HV", "section_id":80},
        { "start_date": `${date} 14:00`, "end_date": `${date} 14:30`,"draggable":false, "resizeable": false, "text":"MB", "section_id":80},
        { "start_date": `${date} 14:30`, "end_date": `${date} 16:30`,"draggable":false, "resizeable": false, "text":"INST", "section_id":80},
        { "start_date": `${date} 16:30`, "end_date": `${date} 17:00`,"draggable":false, "resizeable": false, "text":"DD", "section_id":80},
        { "start_date": `${date} 17:00`, "end_date": `${date} 18:00`,"draggable":false, "resizeable": false, "text":"CD", "section_id":80},
      
        { "start_date": `${date} 09:00`, "end_date": `${date} 12:00`, "draggable":false, "resizeable": false, "text":"IG", "section_id":100},
    { "start_date": `${date} 12:00`, "end_date": `${date} 12:30`, "draggable":false, "resizeable": false,"text":"MB", "section_id":100},
    { "start_date": `${date} 12:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"DD", "section_id":100},
    { "start_date": `${date} 16:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"HV", "section_id":100},

    { "start_date": `${date} 09:00`, "end_date": `${date} 12:00`, "draggable":false, "resizeable": false, "text":"DD", "section_id":110},
    { "start_date": `${date} 12:00`, "end_date": `${date} 12:30`, "draggable":false, "resizeable": false,"text":"MB", "section_id":110},
    { "start_date": `${date} 12:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"DD", "section_id":110},
    { "start_date": `${date} 16:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"DD", "section_id":110},

    { "start_date": `${date} 09:00`, "end_date": `${date} 10:00`, "draggable":false, "resizeable": false, "text":"HV", "section_id":120},
    { "start_date": `${date} 10:00`, "end_date": `${date} 12:00`, "draggable":false, "resizeable": false, "text":"DD", "section_id":120},
    { "start_date": `${date} 12:00`, "end_date": `${date} 12:30`, "draggable":false, "resizeable": false,"text":"MB", "section_id":120},
    { "start_date": `${date} 12:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"DD", "section_id":120},
    { "start_date": `${date} 16:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"DD", "section_id":120},

    { "start_date": `${date} 09:00`, "end_date": `${date} 10:00`, "draggable":false, "resizeable": false, "text":"INST", "section_id":130},
    { "start_date": `${date} 10:00`, "end_date": `${date} 12:00`, "draggable":false, "resizeable": false, "text":"DD", "section_id":130},
    { "start_date": `${date} 12:00`, "end_date": `${date} 12:30`, "draggable":false, "resizeable": false,"text":"MB", "section_id":130},
    { "start_date": `${date} 12:30`, "end_date": `${date} 14:00`, "draggable":false, "resizeable": false,"text":"DEL", "section_id":130},
    { "start_date": `${date} 14:00`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"DEL", "section_id":130},
    { "start_date": `${date} 16:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"DD", "section_id":130},
    
    ];
  
  var onLeaveId = [20,30];
  
  res.send({
   "msg": "daily data",
   "success": true,
   "data": dailyDate,
   "onLeaveId":onLeaveId
  });
})
//to get list of all timezons
app.get('/storesList/5b5032c4c810db21943ff058', function(req, res, next) {

  var storeArray  = [
    { id: 11, name: 'Melrose', type: "gallery" },
    { id: 12, name: 'West Hollywood', type: "outlet" },
    { id: 13, name: 'Santa Monica', type: "gallery" },
    { id: 14, name: 'East Hollywood', type: "gallery" }
  ];
  
  res.send({
   "msg": "Store data",
   "success": true,
   "stores": storeArray
  });
});

//to employees list
app.get('/associates/11/:type', function(req, res, next) {
  if(req.params.type == "weekly") {
     var timing = "40";
     } else {
     var timing = "10:30AM-6:30PM";
     }
  var empArray  = [
{key:3, label:"Leadership", open:true, children: [
  {key:20, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Elizabethhhhhhhhhhh,Taylorrrrrrrrrrrrrrrrrrrrrrrrr,${timing}`},
{key:40, label:`https://semantic-ui.com/images/avatar/large/elliot.jpg,John,Doe,${timing}`},
{key:50, label:`https://semantic-ui.com/images/avatar2/large/kristy.png,Kristy,Miller,${timing}`},
{key:60, label:`https://semantic-ui.com/images/avatar2/large/molly.png,Linda,Brown,${timing}`},
{key:70, label:`https://semantic-ui.com/images/avatar/large/elliot.jpg,George,Luca,${timing}`},
{key:80, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,${timing}`},
{key:90, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,${timing}`}
      ]},
      {key:4, label:"Design Experience", open: true, children: [
        {key:100, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,William,Moss,${timing}`},
{key:110, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,David,${timing}`}
      ]},
      {key:5, label:"Design Atelier", open: true, children: [
        {key:120, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Bob,Moss,${timing}`},
{key:130, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Mike,Fossey,${timing}`}
      ]},
      {key:6, label:"Trade", open: true, children: [
        {key:140, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Ross,Moss,${timing}`},
{key:150, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Diana,Fossey,${timing}`}
      ]},
      {key:7, label:"Client Services", open: true, children: [
        {key:160, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Ketty,Moss,${timing}`},
{key:170, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Blessy,Fossey,${timing}`}
      ]},
      {key:8, label:"Support", open: true, children: [
        {key:180, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Jobin,Moss,${timing}`},
{key:190, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Jerry,Fossey,${timing}`}
      ]},
      {key:9, label:"Curating", open: true, children: [
        {key:200, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,${timing}`},
{key:210, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,${timing}`}
      ]},
    {key:10, label:"Faciliies", open: true, children: [
        {key:200, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,${timing}`},
{key:210, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,${timing}`}
      ]}
    ];

  res.send({
   "msg": "Store data",
   "success": true,
   "employees": empArray
  });
});


//to employees list
app.get('/associates/12', function(req, res, next) {

  var empArray  = [
     
{key:2, label:"Field Leader", open: true, children: [
{key:80, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:90, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,John,Doe,40"}
]},
{key:3, label:"Leadership", open:true, children: [
{key:20, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Elizabeth,Taylor,40"},
{key:40, label:"https://semantic-ui.com/images/avatar/large/elliot.jpg,John,Williams,40"},
{key:50, label:"https://semantic-ui.com/images/avatar2/large/kristy.png,Kristy,Miller,32"},
{key:60, label:"https://semantic-ui.com/images/avatar2/large/molly.png,Linda,Brown,40"},
{key:70, label:"https://semantic-ui.com/images/avatar/large/elliot.jpg,George,Luca,40"}
      ]},
      {key:4, label:"Floor Coverage", open: true, children: [
        {key:100, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:110, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:5, label:"Design Team", open: true, children: [
        {key:120, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:130, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:6, label:"Trade Team", open: true, children: [
        {key:140, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:150, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:7, label:"Support Team", open: true, children: [
        {key:160, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:170, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:8, label:"Curating Team", open: true, children: [
        {key:180, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:190, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:9, label:"Facilities Team", open: true, children: [
        {key:200, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:210, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]}
    ];

  res.send({
   "msg": "Store data",
   "success": true,
   "employees": empArray
  });
});

//get events
app.get('/get-wekly-events', function(req, res, next) {

var weeklyEvents  = [
      
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"sick", section_id:40},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9:30AM - 6:30PM", section_id:50},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"vacation", section_id:60},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:70},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:80},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM,O-8PM - 11PM", section_id:90},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:100},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"temporary", section_id:110},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:120},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:130},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:140},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:150},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:160},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:170},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:180},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:190},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:200},
      { start_date: "2018-09-02 00:00", end_date: "2018-09-02 24:00", text:"9AM - 6PM", section_id:210},


      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:20},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"temporary", section_id:40},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:50},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:60},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:70},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:80},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM,P-8PM - 11PM", section_id:90},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:100},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:110},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:120},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:130},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:140},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:150},
      { start_date: "2018-09-04  00:00", end_date: "2018-09-04  24:00", text:"9AM - 6PM", section_id:160},


      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:20},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"sick", section_id:40},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:50},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"vacation", section_id:60},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:70},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:80},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM,P-8PM - 11PM", section_id:90},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"temporary", section_id:110},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:120},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:130},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:140},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:150},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:160},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:170},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:180},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:190},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:200},
      { start_date: "2018-09-05 00:00", end_date: "2018-09-05 24:00", text:"9AM - 6PM", section_id:210},

      { start_date: "2018-09-07 00:00", end_date: "2018-09-07 24:00", text:"9AM - 6PM", section_id:20},
      { start_date: "2018-09-07 00:00", end_date: "2018-09-07 24:00", text:"sick", section_id:40},
      { start_date: "2018-09-07 00:00", end_date: "2018-09-07 24:00", text:"9AM - 6PM", section_id:50},
      { start_date: "2018-09-07 00:00", end_date: "2018-09-07 24:00", text:"vacation", section_id:60},
      { start_date: "2018-09-07 00:00", end_date: "2018-09-07 24:00", text:"9AM - 6PM", section_id:70},
      { start_date: "2018-09-07 00:00", end_date: "2018-09-07 24:00", text:"9AM - 6PM", section_id:80},
      { start_date: "2018-09-07 00:00", end_date: "2018-09-07 24:00", text:"9AM - 6PM,P-8PM - 11PM", section_id:90},
    { start_date: "2018-09-07 00:00", end_date: "2018-09-07 24:00", text:"temporary", section_id:110},
];

  res.send({
   "msg": "Weekly event",
   "success": true,
   "weeklyEvents": weeklyEvents
  });
});


//error api
app.get('/error-occured', function(req, res, next) {

  res.send({
   "msg": "Something went wrong while getting weekly schedule. Please try again.",
   "success": false,
   "stores": []
  });
});

//profile page
app.get('/profile-details', function(req, res, next) {

  var profileArray  = {
    id: 11,
    first_name: "Kumudini",
    last_name: "Sahu",
    alias_name: "KS",
    profile_pic: "https://semantic-ui.com/images/avatar2/large/molly.png",
    designation: "Field Leader"
  }

  res.send({
   "msg": "Profile data",
   "success": true,
   "stores": profileArray
  });
});

app.listen(process.env.PORT || 8000);
