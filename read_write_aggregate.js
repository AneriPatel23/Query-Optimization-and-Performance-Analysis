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

 // Updating the email of an employee with name and project ID

db.projects.update({"project_id": 55,"user.user_name" : "Anna Stokes"}, {$set: {"user.email":"astokes@yahoo.com"}});

result = db.projects.find({"project_id": 55,"user.user_name" : "Anna Stokes"},{_id:0});

print('Result after Updating the email of employee');

while(result.hasNext()){
printjson(result.next());
}

//Updating the workspace ID to which a particular project belongs to   

db.projects.updateMany({"project_id": 98}, {$set: {"workspace_id":202}});

result = db.projects.find({"project_id": 98},{_id:0});

print('Result after Updating the workspace ID of the project ID - 98');

while(result.hasNext()){
printjson(result.next());
}

//Updating the status of a task - Removing the due on field

db.projects.update({"project_id": 92,"user.task.task_id":97}, {$unset: {"user.task.due_on":1}});

result = db.projects.find({"project_id": 92,"user.task.task_id":97},{_id:0});

print('Result after Updating the status of the task - Removing Due on');

while(result.hasNext()){
printjson(result.next());
}

//Updating the name of the employee using employee ID and project ID - since values can be redundant here

db.projects.update({"project_id": 6,"user.user_id": 61}, {$set: {"user.user_name":"Tracy Johnson"}});

result = db.projects.find({"project_id": 6,"user.user_id": 61},{_id:0});

print('Result after Updating the last name of the employee');

while(result.hasNext()){
printjson(result.next());
}

// Updating the email of an employee with name and project ID

db.projects.update({"project_id": 55,"user.user_name" : "Anna Stokes"}, {$set: {"user.email":"astokes@yahoo.com"}});

result = db.projects.find({"project_id": 55,"user.user_name" : "Anna Stokes"},{_id:0});

print('Result after Updating the email of employee');

while(result.hasNext()){
printjson(result.next());
}

conn = new Mongo();
db = conn.getDB("pid");

//Count the number of projects under each workspace ID

result = db.projects.aggregate({
  
    $group: {
        _id : "$workspace_id",
        total: {$sum:1}
    }
});

print('Result after aggregating the Projects under each workspace ID');

while(result.hasNext()){
printjson(result.next());
}

//Number of Projects under the below section/department

result = db.projects.aggregate({
  
    $group: {
        _id : "$section.section_name",
        total: {$sum:1}
    }
});

print('Result after aggregating the Projects under each workspace ID');

while(result.hasNext()){
printjson(result.next());
}

// Number of tasks under each project - each project is mapped to a task

result = db.projects.aggregate({
  
    $group: {
        _id : "$project_id",
        total: {$sum:1}
    }
});

print('Result after aggregating the tasks under each Project ID');

while(result.hasNext()){
printjson(result.next());
}

//Number of Projects under the below section/department

result = db.projects.aggregate({
  
    $group: {
        _id : "$section.section_name",
        total: {$sum:1}
    }
});

print('Result after aggregating the Projects under each workspace ID');

while(result.hasNext()){
printjson(result.next());
}

// Number of tasks under each project - each project is mapped to a task

result = db.projects.aggregate({
  
    $group: {
        _id : "$project_id",
        total: {$sum:1}
    }
});

print('Result after aggregating the tasks under each Project ID');

while(result.hasNext()){
printjson(result.next());
}

//Count the number of projects under each workspace ID

result = db.projects.aggregate({
  
    $group: {
        _id : "$workspace_id",
        total: {$sum:1}
    }
});

print('Result after aggregating the Projects under each workspace ID');

while(result.hasNext()){
printjson(result.next());
}

//Number of Projects under the below section/department

result = db.projects.aggregate({
  
    $group: {
        _id : "$section.section_name",
        total: {$sum:1}
    }
});

print('Result after aggregating the Projects under each workspace ID');

while(result.hasNext()){
printjson(result.next());
}

// Number of tasks under each project - each project is mapped to a task

result = db.projects.aggregate({
  
    $group: {
        _id : "$project_id",
        total: {$sum:1}
    }
});

print('Result after aggregating the tasks under each Project ID');

while(result.hasNext()){
printjson(result.next());
}

//Count the number of projects under each workspace ID

result = db.projects.aggregate({
  
    $group: {
        _id : "$workspace_id",
        total: {$sum:1}
    }
});

print('Result after aggregating the Projects under each workspace ID');

while(result.hasNext()){
printjson(result.next());
}

// Number of tasks under each project - each project is mapped to a task

result = db.projects.aggregate({
  
    $group: {
        _id : "$project_id",
        total: {$sum:1}
    }
});

print('Result after aggregating the tasks under each Project ID');

while(result.hasNext()){
printjson(result.next());
}
