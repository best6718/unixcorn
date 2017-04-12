(function () {     // Building controllers for api http requests 

  // asssign controllers to myApp module 
  angular.module('myApp').controller('TestController', TestController);
  //angular.module('myApp').controller('FacController', FacController);
  //angular.module('myApp').controller('StuController', StuController);

  // function TestController() {
  //   var myModel = this;
  //   myModel.name = 'Test';
  
  // }
  // //make a http/api call to the server to the database to retrieve records
  // function FacController($http) {
    
  //   // for testing 
  //   var myModel = this;
  //   myModel.name = 'Faculty';
    
  //   $http.get('/api/faculty').then(function(response) {   // use .then instead of .success
  //       myModel.response = response;
       
  //     });
       
  // }
 
  // // Notice input parameter changes from $http to StudentFactory
  // function StuController(StudentFactory) {
      
  //     var vm = this; // controller  calls the service  
  //     StudentFactory.getAllStudents().then(function(response) { 
  //       vm.students = response; 
        
  //       });
  // }
  // // Notice input parameter changes from $http to StudentFactory
  // function StuController(StudentFactory) {
      
  //     var vm = this; // controller  calls the service  
  //     StudentFactory.getAllStudents().then(function(response) { 
  //       vm.students = response; 
        
  //       });
  // }
 
  // function GetOneStuController($routeParams, StudentFactory) {
      
  //     var vm = this;
  //     var id = $routeParams.id; 
  //     StudentFactory.getOneStudent(id).then(function(response) { 
  //       vm.student = response; 
        
  //       });
  // }
 
  // function GetOneFacController($http, $routeParams) {
  //   var vm = this;   // vm ViewModel variable 
    
  //   //console.log($routeParams);
    
  //   var id =  $routeParams.id; 
    
  //   $http.get('/api/faculty/' + id)
  //     .then(function(response) {  
  //       vm.faculty = response.data; 
       
  //     });
     
  //   //code to delete a record 
  //   vm.deleteFaculty = function() {
             
  //       $http.delete('/api/faculty/' + $routeParams.id)       
  //           .then(function(response) {  
  //               console.log(response.status);
  //               window.location = "#/allfaculty";   });
               
  //   }   
  // }
 
  // function AllFacController($http) {
    
  //   // for testing 
  //   var myModel = this;
  //   myModel.title = 'Faculty';
    
  //   $http.get('/api/faculty').then(function(response) {   // use .then instead of .success
  //       myModel.faculty = response.data;
       
  //     });
       
  // }
 
  // function AddFacController($http) {
  //   var vm = this;

  //   vm.addFaculty = function() {
        
  //       var postData = {
  //         name: vm.name,
  //         specialty: vm.specialty,
  //         institution: vm.institution
  //       };
    
  //       console.log(postData);
  //       $http.post('/api/faculty/', postData).then(function(response) {
  //               vm.newfaculty = response.data;
  //               console.log(response.status);
  //               window.location = "#/allfaculty";
  //     });
  // };
   
       
  // }
 
 
})();


// (function () {     // Building controllers for api http requests 

//   // asssign controllers to myApp module 
//   angular.module('myApp').controller('TestController', TestController);
  
//   angular.module('myApp').controller('FacController', FacController);
  
//   angular.module('myApp').controller('StuController', StuController);

//   function TestController() {
//     var myModel = this;
//     myModel.name = 'Test';
  
//   }
//   //make a http/api call to the server to the database to retrieve records
//   function FacController($http) {
    
//     // for testing 
//     var myModel = this;
//     myModel.name = 'Faculty';
    
//     $http.get('/api/faculty').then(function(response) {   // use .then instead of .success
//         myModel.response = response;
       
//       });
       
//   }
 
//   // Notice input parameter changes from $http to StudentFactory
//   function StuController(StudentFactory) {
      
//       var vm = this; // controller  calls the service  
//       StudentFactory.getAllStudents().then(function(response) { 
//         vm.students = response; 
        
//         });
//   }
//   // Notice input parameter changes from $http to StudentFactory
//   function StuController(StudentFactory) {
      
//       var vm = this; // controller  calls the service  
//       StudentFactory.getAllStudents().then(function(response) { 
//         vm.students = response; 
        
//         });
//   }
 
//   function GetOneStuController($routeParams, StudentFactory) {
      
//       var vm = this;
//       var id = $routeParams.id; 
//       StudentFactory.getOneStudent(id).then(function(response) { 
//         vm.student = response; 
        
//         });
//   }
 
//   function GetOneFacController($http, $routeParams) {
//     var vm = this;   // vm ViewModel variable 
    
//     //console.log($routeParams);
    
//     var id =  $routeParams.id; 
    
//     $http.get('/api/faculty/' + id)
//       .then(function(response) {  
//         vm.faculty = response.data; 
       
//       });
     
//     //code to delete a record 
//     vm.deleteFaculty = function() {
             
//         $http.delete('/api/faculty/' + $routeParams.id)       
//             .then(function(response) {  
//                 console.log(response.status);
//                 window.location = "#/allfaculty";   });
               
//     }   
//   }
 
//   function AllFacController($http) {
    
//     // for testing 
//     var myModel = this;
//     myModel.title = 'Faculty';
    
//     $http.get('/api/faculty').then(function(response) {   // use .then instead of .success
//         myModel.faculty = response.data;
       
//       });
       
//   }
 
//   function AddFacController($http) {
//     var vm = this;

//     vm.addFaculty = function() {
        
//         var postData = {
//           name: vm.name,
//           specialty: vm.specialty,
//           institution: vm.institution
//         };
    
//         console.log(postData);
//         $http.post('/api/faculty/', postData).then(function(response) {
//                 vm.newfaculty = response.data;
//                 console.log(response.status);
//                 window.location = "#/allfaculty";
//       });
//   };
   
       
//   }
 
 
// })();