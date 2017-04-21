angular.module('myApp', []);

var MyController = function($scope){
    $scope.name = "world!";
    $scope.visible = false;
    $scope.showMe = false;
    
    
        $scope.transportation = [
        {transport : "Walk"},
        {transport : "Car"},
        {transport : "Bike"}
    ];
    
    $scope.amOrPm = [
        {timeAMPM : "AM"},
        {timeAMPM : "PM"}
    ];
    
    $scope.times = [
        {time: '1:00', hour : 1, minutes : 00},
        {time: '1:15', hour : 1, minutes : 15},
        {time: '1:30', hour : 1, minutes : 30},
        {time: '1:45', hour : 1, minutes : 45},
        {time: '2:00', hour : 2, minutes : 00},
        {time: '2:15', hour : 2, minutes : 15},
        {time: '2:30', hour : 2, minutes : 30},
        {time: '2:45', hour : 2, minutes : 45},
        {time: '3:00', hour : 3, minutes : 00},
        {time: '3:15', hour : 3, minutes : 15},
        {time: '3:30', hour : 3, minutes : 30},
        {time: '3:45', hour : 3, minutes : 45},
        {time: '4:00', hour : 4, minutes : 00},
        {time: '4:15', hour : 4, minutes : 15},
        {time: '4:30', hour : 4, minutes : 30},
        {time: '4:45', hour : 4, minutes : 45},
        {time: '5:00', hour : 5, minutes : 00},
        {time: '5:15', hour : 5, minutes : 15},
        {time: '5:30', hour : 5, minutes : 30},
        {time: '5:45', hour : 5, minutes : 45},
        {time: '6:00', hour : 6, minutes : 00},
        {time: '6:15', hour : 6, minutes : 15},
        {time: '6:30', hour : 6, minutes : 30},
        {time: '6:45', hour : 6, minutes : 45},
        {time: '7:00', hour : 7, minutes : 00},
        {time: '7:15', hour : 7, minutes : 15},
        {time: '7:30', hour : 7, minutes : 30},
        {time: '7:45', hour : 7, minutes : 45},
        {time: '8:00', hour : 8, minutes : 00},
        {time: '8:15', hour : 8, minutes : 15},
        {time: '8:30', hour : 8, minutes : 30},
        {time: '8:45', hour : 8, minutes : 45},
        {time: '9:00', hour : 9, minutes : 00},
        {time: '9:15', hour : 9, minutes : 15},
        {time: '9:30', hour : 9, minutes : 30},
        {time: '9:45', hour : 9, minutes : 45},
        {time: '10:00', hour : 10, minutes : 00},
        {time: '10:15', hour : 10, minutes : 15},
        {time: '10:30', hour : 10, minutes : 30},
        {time: '10:45', hour : 10, minutes : 45},
        {time: '11:00', hour : 11, minutes : 00},
        {time: '11:15', hour : 11, minutes : 15},
        {time: '11:30', hour : 11, minutes : 30},
        {time: '11:45', hour : 11, minutes : 45},
        {time: '12:00', hour : 12, minutes : 00},
        {time: '12:15', hour : 12, minutes : 15},
        {time: '12:30', hour : 12, minutes : 30},
        {time: '12:45', hour : 12, minutes : 45}

    ];
    
    
    $scope.resultsForPlanner = function(){
    //INFORMATION TAKEN FROM RADIO BUTTONS     
        //Specifying the price -> specify the travel method
        if($scope.opr2 =='vol1'){ // This is for when looking for cheap stuff
                 //$scope.opr1.ng-checked ==true
           if($scope.opr3 == 'vol1'){
               $scope.msg =  "Looking for cheap activities in a short walk";
                       // return true;
           }else if($scope.opr3 == 'vol2'){
               $scope.msg =  "Looking for cheap activities in a short drive";
                          //return true;
           }else{
                $scope.msg =  "Looking for cheap activities in a long drive";
                          //return $scope.test1;
                $scope.visible = false;
            }
        }else if ($scope.opr2 =='vol2'){// This is for when looking for reasonable stuff
            if($scope.opr3 == 'vol1'){
              $scope.msg =  "Looking for resonable priced activities in a short walk";
            }else if($scope.opr3 == 'vol2'){
                $scope.msg = "Looking for resonable priced activities in a short drive";
            }else{
                 $scope.msg = "Looking for resonable priced activities in a long drive";
            }                                                        
        }else if($scope.opr2 =='vol3'){ // This is for when looking for expensive stuff
            if($scope.opr3 == 'vol1'){
                $scope.msg = "Looking for expensive activities in a short walk";
            }else if($scope.opr3 == 'vol2'){
                $scope.msg = "Looking for expensive activities in a short drive";
            }else{
                $scope.msg = "Looking for expensive activities in a long drive";
            }                                                                    
        }else{
            $scope.mgs = "Please try again";   
        }
        

       
    };
    
    $scope.problem2 = function(){
        if($scope.min.length == 3 ){
            $scope.visible = true;    
                return true;
        }else{
                return false;
        }
    };//problem 1 
        
    $scope.visible = true; 
    $scope.disableSpan = function(thingy){
        if(thingy == true){
            $scope.visible = false; 
        }else{
            $scope.visible = false; 
        }
        return $scope.visible;
    }; 
        
    $scope.signUP = function($scope){
        $scope.user = 'John Doe';
        $scope.email = 'john.doe@gmail.com';
        $scope.password1 = '1234';
        $scope.password2 = '1234';
    };
    
    $scope.logIn = function($scope){
        $scope.user = 'John Doe';
        $scope.password = '1234';
    };
};




//MODAL THING FROM https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//END OF MODAL












angular
    .module('myApp')
    .controller('MyController', MyController);
