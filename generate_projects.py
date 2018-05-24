from faker import Factory
import json
from math import floor
# functions to generate random values
from random import expovariate, normalvariate, choice, randint, random, shuffle

# Faker random value generator
generator = Factory.create()

# dict to save used store names
used_storenames = {}

# Output files
store_file = None

class Object:
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)
    
class user(object):
    def __init__(self, user_name, user_id, email, task):
        self.user_name = user_name
        self.user_id = user_id
        self.email = email
        self.task=task

    def __str__(self):
        '''
        Return JSON string for entire store document,
        compatible with mongoimport
        '''
        storedict = {}
        storedict["user_name"] = self.user_name
        storedict["user_id"] = self.user_id
        storedict["email"] = self.email
        return json.dumps(storedict)

class task(object):
    def __init__(self, task_id, task_name, created_on, due_on):
        self.task_id = task_id
        self.task_name = task_name
        self.created_on=created_on
        self.due_on=due_on;

class section(object):
    def __init__(self, section_id, section_name):
        self.section_id = section_id
        self.section_name = section_name
        
class project(object):
    def __init__(self, name, project_id, workspace_id, user, section):
        self.name = name
        self.project_id = project_id
        self.workspace_id = workspace_id
        self.user=user
        self.section=section

        
    def __str__(self):
        '''
        Return JSON string for entire store document,
        compatible with mongoimport
        '''
        me = Object()
        me.name=self.name
        me.project_id=self.project_id
        me.workspace_id=self.workspace_id
        me.user=Object()
        me.user.user_name=self.user.user_name
        me.user.user_id=self.user.user_id
        me.user.email=self.user.email
        me.user.task=Object()
        me.user.task.task_name=self.user.task.task_name
        me.user.task.task_id=self.user.task.task_id
        me.user.task.created_on=self.user.task.created_on
        me.user.task.due_on=self.user.task.due_on;
        me.section=Object()
        me.section.section_id=self.section.section_id
        me.section.section_name=self.section.section_name
        
        return me.toJSON()
     
def gen_project_name():
    '''
    Generate a random restaurant name
    '''
    pnames= ("0")
    pnames = list(pnames)
    for i in range(1,201):
        pnames.insert(i,i)
    pnames = tuple(pnames)
    print(pnames)
    name = choice(pnames)
    return name
    
def gen_project_id():
    '''
    Generate cost rating, an integer rating
    '''
    pid= ("1")
    j=1
    pid = list(pid)
    for i in range(2,101):
        pid.insert(j,i)
    pid = tuple(pid)
    print(pid)
    projectId = choice(pid)
    return projectId

def gen_workspace_id():
    '''
    Generate a random list of categories
    '''
    wid= ("1")
    j=1
    wid = list(wid)
    for i in range(2,101):
        wid.insert(j,i)
    wid = tuple(wid)
    print(wid)
    workspaceId = choice(wid)
    return workspaceId

def gen_user_id():
    return randint(1,2000)

def gen_task_id():
    return randint(1,100)

def gen_section_id():
    return randint(1,1000)

def gen_task_name():
    taskNames=("task1","task2","task3","task4","task5","task6","task7","task8","task9","task10",
               "task11","task12","task13","task14","task15","task16","task17","task18","task19","task20",
               "task21","task22","task23","task24","task25","task26","task27","task28","task29","task30",
               "task31","task32","task33","task34","task35","task36","task37","task38","task39","task40",
               "task41","task42","task43","task44","task45","task46","task47","task48","task49","task50",
               "task51","task52","task53","task54","task55","task56","task57","task58","task59","task60",
               "task61","task62","task63","task64","task65","task66","task67","task68","task69","task70",
               "task71","task72","task73","task74","task75","task76","task77","task78","task79","task80",
               "task81","task82","task83","task84","task85","task86","task87","task88","task89","task90",
               "task91","task92","task93","task94","task95","task96","task97","task98","task99","task100")
    return choice(taskNames)

def gen_section_name():
    sectionNames=("QA","Testing","Development","Hardware","Software","Finance","Marketing","HR","Deployment","Data Management","Database Administration")
    return choice(sectionNames)
    
def gen_single_task():
    #created=generator.past_datetime("-30d", None)
    #due=generator.date_time_this_decade(True,False,None)
    new_task = task(gen_task_id(),
                    gen_task_name(),
                    generator.date(),
                    generator.date())

    return new_task

def generate_single_project():
    ''' Generate fields for one store
    '''    
    new_project = project(gen_project_name(),
                       gen_project_id(),
                       gen_workspace_id(),
                       generate_single_user(),
                       generate_single_section())
    store_file.write(str(new_project) + '\n')
    return new_project

def generate_single_section():
    ''' Generate fields for one store
    '''    
    new_section = section(gen_section_id(),
                       gen_section_name())
    return new_section
   
def generate_single_user():
    ''' Generate fields for one store
    '''    
    new_user = user(generator.name(),
                    gen_user_id(),
                    generator.email(),
                    gen_single_task())
   # store_file.write(str(new_user) + '\n')
    return new_user
   
def generate_projects(num_projects):
    '''
    Generate store records
    '''
    for store_index in range(num_projects):
        generate_single_project()
    store_file.close()
        
if __name__ == '__main__':
    import sys
    store_file = open('C:/Users/Aneri Patel/Documents/stores.json', 'w')

    if len(sys.argv) == 1:
        to_generate = 2000
    else:
        to_generate = int(sys.argv[1])
    generate_projects(to_generate)
            
