# Query-Optimization-and-Performance-Analysis

We have mappings of Project -> Employee as 1:1

It would have been meaningful to have Employee -belongs-> project mappings, but however the number of documents will not be reduced by altering.

So, we have a list of 2000 records of unique project id, mapped to users [user information] , project DOCUMENTS repeated in case there are more users associated with them.

{
    "name": 171,
    "project_id": 52,
    "section": {
        "section_id": 68,
        "section_name": "Hardware"
    },
    "user": {
        "email": "kayla22@king-bailey.net",
        "task": {
            "created_on": "1993-03-12",
            "due_on": "1993-12-26",
            "task_id": 9,
            "task_name": "task22"
        },
        "user_id": 1208,
        "user_name": "Jennifer King"
    },
    "workspace_id": 58
}

We couldn’t control the fact that unique project id will attach itself to the same name every time and belong to the same workspace id. 
So, we decided to leave the project name with some random number – because again there will be a mismatch of project ID and name.

Also, we didn’t want to structure in a way, that half the records have due on dates and half of them having completed on dates. It makes more sense to keep track of tasks which are not completed. [Removed the due date field when the project is completed]
Hence, we generated data for pending tasks associated with each user.

SCRIPTS:
read.js - 14 read queries
read_write.js - 7 read queries,7 write queries
aggregate.js - 5 queries
read_write_aggregate.js - 5 read, 5 write, 5 aggregate queries

PERFORMANCE:

Average for read.js: 0.184 s

real	0m0.183s
user	0m0.129s
sys	0m0.025s

real	0m0.200s
user	0m0.143s
sys	0m0.027s

real	0m0.170s
user	0m0.129s
sys	0m0.024s

Average for read_write.js: 0.421 s

real	0m0.492s           
user	0m0.274s
sys	0m0.054s

real	0m0.383s
user	0m0.251s
sys	0m0.042s

real	0m0.390s
user	0m0.265s
sys	0m0.047s

Average for aggregate.js : 0.264 s

real	0m0.288s
user	0m0.167s
sys	0m0.033s

real	0m0.252s
user	0m0.156s
sys	0m0.037s

real	0m0.252s
user	0m0.171s
sys	0m0.031s

Average for read_write_aggregate.js: 0.439 s

real	0m0.454s
user	0m0.294s
sys	0m0.048s

real	0m0.423s
user	0m0.282s
sys	0m0.047s

real	0m0.440s
user	0m0.293s
sys	0m0.050s

From the above averages, we can infer that write queries are generally costlier than read queries since read.js and read_write.js have a huge difference in their average execution time, inspite of having the same number of queries (14 reads vs 7 reads and 7 writes)

Also, we can tell that aggregate queries are much costlier than read and write queries since the execution time of aggregate.js (Holding just 5 aggregate queries) is almost twice when compared to read.js and half the execution time of read_write.js (Having 14 queries - which is almost thrice the number in aggregate.js)

We can also compare read_write_aggregate.js vs read_write.js which has almost equal number of queries - but the file which consists of aggregation queries have relatively larger execution time.

So the performance of queries in decreasing order: READ -> WRITE -> AGGREGATE

