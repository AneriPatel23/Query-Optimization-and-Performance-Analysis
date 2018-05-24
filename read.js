//Retrieve task names and their due dates of project: P4 which has some pending tasks

result=db.projects.find({project:"P4"},{"user.tasks.task_name":1,"user.tasks.due_on":1,_id:0});
print('Result for "retrieve task names and their due dates of project: P4 which has some pending tasks"');

while ( result.hasNext() ) {
   printjson( result.next() );
}


 //retrieve project names which has a particular section: QA

result=db.projects.find({"section.sectionName": "qa"},{"project":1,_id:0});
print('Result for "retrieve project names which hs a particular section: QA"');

while ( result.hasNext() ) {
   printjson( result.next() );
} 

 // Retrieve list of tasks of projects under workspace 1

 result=db.projects.find({workspaceID:1},{"project":1,"user.tasks.task_name":1,_id:0});
 print('Result for "retrieve list of tasks of projects with under workspace 1"');

// Using the code from the "Write Scripts for the mongo Shell" tutorial from doc.mongodb.org
while ( result.hasNext() ) {
   printjson( result.next() );
}

