conn = new Mongo();
db = conn.getDB("pid");

//Retrieving email IDs of users working under a particular project - 86
result=db.projects.find({"project_id": 86},{_id:0, "user.email":1});

print('Result for "Listing the email IDs of employees working under a particular project - 86"');

while ( result.hasNext() ) {
   printjson( result.next() );
}

//Retrieving users associated with a particular project

result=db.projects.find({project_id: 52},{_id:0,"user.user_name":1});

print('Result for "Users working for project with unique ID : 52"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

//Retrieving names of HR representatives of various projects

result=db.projects.find({"section.section_name": "HR"},{_id:0,"user.user_name":1});

print('Result for "HR representatives in various projects"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

//Retrieving names of people working uner the sofware department and their associated task information

result=db.projects.find({"section.section_name": "Software"},{_id:0,"user.task":1,"user.user_name":1});

print('Result for "Employees working under the software department with their pending tasks"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

//Retrieving various projects listed under a particular workspace ID - along with the departments/sections

result=db.projects.find({"workspace_id": 68},{_id:0,"project_id":1, "section":1});

print('Result for "Various projects listed under a particular workspace ID: 68 and their departments"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

//Retrieving information relevant to a particular employee ID

result=db.projects.find({"user.user_id": 1660,"section.section_name" : "Software"},{});

print('Result for "Information relevant to a particular employee"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

//Retrieving tasks which are due - under a particular project

result=db.projects.find({"project_id": 38},{_id:0,"user.task.task_name":1,"user.task.due_on":1});

print('Result for "Pending tasks under a particular project - 38"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

 //Retrieving email IDs of users working under a particular project - 49
result=db.projects.find({"project_id": 49},{_id:0, "user.email":1});

print('Result for "Listing the email IDs of employees working under a particular project - 49 "');

while ( result.hasNext() ) {
   printjson( result.next() );
}

//Retrieving users associated with a particular project

result=db.projects.find({project_id: 25},{_id:0,"user.user_name":1});

print('Result for "Users working for project with unique ID : 25"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

 //Retrieving names of employees working under the Finance section/department

result=db.projects.find({"section.section_name": "Finance"},{_id:0,"user.user_name":1});

print('Result for "Finance Department Employee List"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

 //Retrieving names of people working in Testing and their associated task information

result=db.projects.find({"section.section_name": "Testing"},{_id:0,"user.task":1,"user.user_name":1});

print('Result for "Employees working under the software department with their pending tasks"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

 //Retrieving various projects listed under a particular workspace ID - along with the departments/sections

result=db.projects.find({"workspace_id": 43},{_id:0,"project_id":1, "section":1});

print('Result for "Various projects listed under a particular workspace ID: 43 and their departments"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

 //Retrieving tasks which are due - under a particular project

result=db.projects.find({"project_id": 47},{_id:0,"user.task.task_name":1,"user.task.due_on":1});

print('Result for "Pending tasks under a particular project - 47"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

 //Retrieving information relevant to a particular employee ID working in a particular project

result=db.projects.find({"user.user_id": 598,"project_id" : 47},{});

print('Result for "Information relevant to a particular employee"');

while ( result.hasNext() ) {
    printjson( result.next() );
 }

 
