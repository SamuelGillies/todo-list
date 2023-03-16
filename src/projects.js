export default class myProject {
    constructor(project, tasks) {
        this.project = project; 
        this.tasks = tasks; 
    }

    setProject(project) {
        this.project = project; 
    }

    getProject() {
        return this.project;
    }

    setTasks(tasks) {
        this.tasks = tasks; 
    }

    getTasks() {
        return this.tasks;
    }
};