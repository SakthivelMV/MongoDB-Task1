// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors

// Find all the topics and tasks which are thought in the month of October
// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
// Find all the company drives and students who are appeared for the placement.
// Find the number of problems solved by the user in codekata
// Find all the mentors with who has the mentee's count more than 15
// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020


1.Designing a DB:
1.1 Users:
use users
switched to db users
> show collections
users
> db.users.insertMany([
... {
...     id: 1,
...     username: "Sakthi",
...     course: "MERN",
...     status: "active",
...     email: "sakthi122@gmail.com",
...     age: 26,
...     code_id: 1111,
...
... },
... {
...     id: 2,
...     username: "Karthikeyan",
...     course: "MERN",
...     status: "active",
...     email: "karthiken22@gmail.com",
...     age: 29,
...     code_id: 2211,
...
... },
... {
...     id: 3,
...     username: "Lakshmi",
...     course: "MERN",
...     status: "active",
...     email: "lakshmigovind@gmail.com",
...     age: 24,
...     code_id: 7111,
... },
... {
...     id: 4,
...     username: "Shafreen",
...     course: "MERN",
...     status: "active",
...     email: "shafreen12@gmail.com",
...     age: 26,
...     code_id: 1811,
... },
... {
...     id: 5,
...     username: "Revathi",
...     course: "MERN",
...     status: "active",
...     email: "revathis17@gmail.com",
...     age: 22,
...     code_id: 2411,
... },
... {
...     id: 6,
...     username: "Sushmitha",
...     course: "MERN",
...     status: "active",
...     email: "susu@yahoo.com",
...     age: 26,
...     code_id: 785411,
...
... }
... ])


2. Codekata:

use codekata
switched to db codekata
> db.codekata.insertMany([
...         {
...             id: 1,
...             task: "JS",
...             topic: "arrays",
...             submission_id: 11,
...             submissions: 26545222,
...         },
...         {
...             id: 2,
...             task: "python",
...             topic: "input/output",
...             submission_id: 22,
...             submissions: 4554224,
...         },
...         {
...             id: 3,
...             task: "Java",
...             topic: "Looping",
...             submission_id: 44,
...             submissions: 4747522,
...         },
...         {
...             id: 4,
...             task: "Typesript",
...             topic: "DS",
...             submission_id: 77,
...             submissions: 147222,
...         }
...         ]
... )

3. Attendance:
use attendance
switched to db attendance
> db.attendance.insertMany([
...     {
...         id:1,
...         student:"Sakthi",
...         percentage:100,
...         task:"yes",
...         numofprob:50
...     },
...     {
...         id:2,
...         student:"karthikeyan",
...         percentage:100,
...         task:"yes",
...         numofprob:51
...     },
...     {
...         id:3,
...         student:"Lakshmi",
...         percentage:100,
...         task:"yes",
...         numofprob:47
...     },
...     {
...         id:4,
...         student:"shafreen",
...         percentage:97,
...         task:"no",
...         numofprob:24
...     },
...     {
...         id:1,
...         student:"Revathi",
...         percentage:87,
...         task:"yes",
...         numofprob:31
...     },
...     {
...         id:1,
...         student:"Sushmitha",
...         percentage:99,
...         task:"no",
...         numofprob:57
...     }
... ])

4. Topics & Tasks 
use topicstasks
switched to db topicstasks
> db.topicstasks.insertMany([
...     {
...         id:1,
...         topic_id:3,
...         topic_name:"React Basics",
...         task_id:31,
...         task_name:"refrence",
...         month:"Aug",
...         date:15,
...         year:2023
...    },
...    {
...     id:2,
...     topic_id:4,
...     topic_name:"Props",
...     task_id:41,
...     task_name:"destructure",
...     month:"Aug",
...     date:10,
...     year:2023
... },
... {
...     id:3,
...     topic_id:5,
...     topic_name:"Conditional Rendering",
...     task_id:51,
...     task_name:"use ternary operator",
...     month:"Sep",
...     date:22,
...     year:2023
... },
... {
...     id:4,
...     topic_id:6,
...     topic_name:"States part 1",
...     task_id:61,
...     task_name:"increase count",
...     month:"sep",
...     date:5,
...     year:2023
... },
... {
...     id:5,
...     topic_id:7,
...     topic_name:"states part 2",
...     task_id:71,
...     task_name:"props vs state",
...     month:"Oct",
...     date:20,
...     year:2023
... },
... {
...     id:6,
...     topic_id:8,
...     topic_name:"UseEffect",
...     task_id:81,
...     task_name:"destructure",
...     month:"Oct",
...     date:25,
...     year:2023
... }
... ])


5. Company Drives

use company
switched to db company
> db.company.insertMany([
...     {
...         id:1,
...         name:"Apple",
...         date:"1-oct-2022",
...         students:"Sakthi,Revathi",
... },
... {
...     id:2,
...     name:"Facebook",
...     date:"4-Sep-2022",
...     students:"nil",
... },
... {
...     id:3,
...     name:"Google",
...     date:"8-oct-2022",
...     students:"Shafreen",
... },
... {
...     id:1,
...     name:"TCS",
...     date:"25-Dec-2022",
...     students:"Karthikeyan",
... }
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("64c5118214ded725f9ee9bf5"),
                ObjectId("64c5118214ded725f9ee9bf6"),
                ObjectId("64c5118214ded725f9ee9bf7"),
                ObjectId("64c5118214ded725f9ee9bf8")
        ]
}



6. mentors

use mentors
switched to db mentors
> db.mentors.insertMany([
...     {
...         id:1,
...         name:"Jagan",
...         mentee:24,
...         specialist:"JavaScript"
...     },
...     {
...         id:2,
...         name:"Chandrika",
...         mentee:54,
...         specialist:"MongoDB"
...     },
...     {
...         id:3,
...         name:"Jaya",
...         mentee:74,
...         specialist:"Backend"
...     },
...     {
...         id:4,
...         name:"Sumathi",
...         mentee:2,
...         specialist:"HTMT,CSS"
...     }
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("64c5126914ded725f9ee9bf9"),
                ObjectId("64c5126914ded725f9ee9bfa"),
                ObjectId("64c5126914ded725f9ee9bfb"),
                ObjectId("64c5126914ded725f9ee9bfc")
        ]
}


7.Find all the topics and tasks which are thought in the month of October:
db.topicstasks.find({month:"Oct"}).pretty()
{
        "_id" : ObjectId("64c50ed914ded725f9ee9bf3"),
        "id" : 5,
        "topic_id" : 7,
        "topic_name" : "states part 2",
        "task_id" : 71,
        "task_name" : "props vs state",
        "month" : "Oct",
        "date" : 20,
        "year" : 2023
}
{
        "_id" : ObjectId("64c50ed914ded725f9ee9bf4"),
        "id" : 6,
        "topic_id" : 8,
        "topic_name" : "UseEffect",
        "task_id" : 81,
        "task_name" : "destructure",
        "month" : "Oct",
        "date" : 25,
        "year" : 2023
}

8.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

company.find({
    created_at: {
        $gte: ISODate("2022-10-30T00:00:00.000Z"),
        $lt: ISODate("2022-10-15T00:00:00.000Z")
    }
})


9.Find all the company drives and students who are not appeared for the placement.

> db.company.find({students:"nil"})

10. Find the number of problems solved by the user in codekata:

> db.codekata.find({submissions:{$lt:15000}}).pretty()


11.Find all the mentors with who has the mentee's count more than 15

db.mentors.find({mentee:{$gte:15}})
{ "_id" : ObjectId("64c5126914ded725f9ee9bf9"), "id" : 1, "name" : "Jagan", "mentee" : 24, "specialist" : "JavaScript" }
{ "_id" : ObjectId("64c5126914ded725f9ee9bfa"), "id" : 2, "name" : "Chandrika", "mentee" : 54, "specialist" : "MongoDB" }
{ "_id" : ObjectId("64c5126914ded725f9ee9bfb"), "id" : 3, "name" : "Jaya", "mentee" : 74, "specialist" : "Backend" }
>

