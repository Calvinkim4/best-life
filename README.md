# best-life

# Project Description
-A fitness application to show the users daily calorie intake and log food eaten and weight lost/gained
Since there can be many functionality that can be added, we are going to focus on mvp using the moscow method.  <br />
-Mvp- the ability for users to sign in and log their daily calorie intake every time they eat or exercise and to see their progress.  <br />
-Pmvp- individual users can add certain foods to the database so other users don’t have to find out what foods have certain amount of calories <br />
 
# MVP
Login/registration <br />
Model- user’s username/email and password. create/update/delete? user <br />
View- login and registration form <br />
Controller- post username and password <br />

User statistics/goals <br />
Model- user’s weight. create/read/update weight <br />
View- login and registration form <br />
Controller- get/post/update weight <br />
 
User total daily intake <br />
Model- user’s total daily calorie intake, create/read/update daily intake <br />
View- total daily intake amount, date <br />
Controller- get/post/put total daily intake <br />
 
User food intake/exercise <br />
Model- food calorie intake, create/read/update/delete daily intake <br />
View- list of foods eaten/exercise performed and calories gained/lost <br />
Controller- get/post/put/delete food calorie/exercises <br />
 

# API Endpoints

USER <br />
{  <br />
  "id": 1,  <br />
  "username/email": "JohnSmith256346@fakemail.com", <br />
 "password": "ertekjegt533*", <br />
  "created_by": 0, <br />
  "created_at": "2018-12-14T15:37:11.578Z", <br />
  "updated_at": "2018-12-14T15:37:12.563Z", <br />
}

User Summary <br />
{  <br />
  "id": 1,  <br />
  "current_weight": 210, <br />
  "goal_weight": 180, <br />
  "calorie_limit": 1700, <br />
  "created_by": 0, <br />
  "created_at": "2018-12-14T15:37:11.578Z", <br />
  "updated_at": "2018-12-14T15:37:12.563Z", <br />
  "user_id: 1"
}
 
DAILY_CALORIE_INTAKE <br />
{ <br />
  "id": 1, <br />
  "total_amount": 1600, <br />
 "date": "2018-12-14", <br />
"weight": 190, <br />
  "created_by": 0, <br />
  "created_at": "2018-12-14T15:37:11.578Z", <br />
  "updated_at": "2018-12-14T15:37:12.563Z", <br />
  "user": 1 <br />
}
 
ENTRY <br />
{ <br />
  "id": 1, <br />
 "type": "banana", <br />
"calorie_amount": 100, <br />
  "created_by": 0, <br />
  "created_at": "2018-12-14T15:37:11.578Z", <br />
  "updated_at": "2018-12-14T15:37:12.563Z", <br />
  "daily_calorie_intake": 1 <br />
}

![alt text](wireframes/eod.png "eod")

![alt text](wireframes/login.png "login")
![alt text](wireframes/stats.png "stats")
![alt text](wireframes/journal.png "journal")


# Component Hierarchy
LoginPage
-> LoginForm
Dashboard
-> JournalEntry
   -> Food
   -> Exercise
   -> Total
   -> NewEntry
   -> UpdateJournal
-> Stats
   -> UpdateStats
 
Dependencies- none
