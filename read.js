//Retrieve task names and their due dates of project: P4 which has some pending tasks

result=db.projects.find({project:"P4"},{"user.tasks.task_name":1,"user.tasks.due_on":1,_id:0});
print('Result for "retrieve task names and their due dates of project: P4 which has some pending tasks"');

while ( result.hasNext() ) {
   printjson( result.next() );
}


/* OUTPUT:
{
   "user" : [
		{
			"tasks" : [
				{
					"task_name" : "task10",
					"due_on" : ISODate("2018-08-11T07:00:00Z")
				}
			]
		},
      {
			"tasks" : [
				{
					"task_name" : "task9",
					"due_on" : ISODate("2018-11-09T08:00:00Z")
				}
			]
		},
*/

 //retrieve project names which has a particular section: QA

result=db.projects.find({"section.sectionName": "qa"},{"project":1,_id:0});
print('Result for "retrieve project names which hs a particular section: QA"');

while ( result.hasNext() ) {
   printjson( result.next() );
} 

/* OUTPUT:
{ "project" : "14" }
{ "project" : "50" }
{ "project" : "113" }
{ "project" : "25" }
*/

 // Retrieve list of tasks of projects under workspace 1

 result=db.projects.find({workspaceID:1},{"project":1,"user.tasks.task_name":1,_id:0});
 print('Result for "retrieve list of tasks of projects with under workspace 1"');

// Using the code from the "Write Scripts for the mongo Shell" tutorial from doc.mongodb.org
while ( result.hasNext() ) {
   printjson( result.next() );
}


/* OUTPUT:
{
	"project" : "94",
	"user" : [
   		{
			"tasks" : [
				{
					"task_name" : "task7"
				}
			]
		},
		{
			"tasks" : [
				{
					"task_name" : "task8"
				}
			]
		},
		{
			"tasks" : [
				{
					"task_name" : "task3"
				}
			]
		},
      			"tasks" : [
				{
					"task_name" : "task1"
				}
			]
		}
	]
}
{
	"project" : "45",
	"user" : [
		{
			"tasks" : [
				{
					"task_name" : "task10"
				}
			]
		},
      		{
			"tasks" : [
				{
					"task_name" : "task9"
				}
			]
		},
	]
}
*/