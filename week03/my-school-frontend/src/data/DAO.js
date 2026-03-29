class DAO{
    constructor() {
        this.baseUrl = "http://localhost:3001";
    }

    // generic function to GET data
    async fetchRoutines(url) {
        const fullUrl = this.baseUrl + url;
        let result = null;
        await fetch(fullUrl)
            .then((res) => res.json(),
                (reject) => console.log(reject.message))
            .then((parsedJson) => result = parsedJson);
        return result;
    }

    async readClasses(){
        return this.fetchRoutines("/classes/list");
    }

    async readStudents(idClass){
        return this.fetchRoutines("/students/class/" + parseInt(idClass));
    }

    async readSubjects(){
        return this.fetchRoutines("/subjects/list");
    }

}

module.exports.DAO = DAO;