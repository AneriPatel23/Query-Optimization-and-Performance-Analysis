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

