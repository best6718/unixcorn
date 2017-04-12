// associate factory with angular module 
angular.module('myApp').factory('StudentFactory' , StudentFactory);

// creating the service 
function StudentFactory($http)  {
    
    return { //json data    property: function name
        getAllStudents:  getAllStudents,
        getOneStudent:   getOneStudent
    };
    
    function getAllStudents() {
        return $http.get('/api/students').then(done).catch(failed);
    }
    
    function getOneStudent(id) {
        return $http.get('/api/students/' + id).then(done).catch(failed);
    }
    
    function done(response)  {
        return response.data;   
    }
    
    function failed(error) {
        return error.statusText; 
    }
}