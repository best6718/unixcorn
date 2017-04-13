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
        {time: '1:30', hour : 1, minutes : 30},
        {time: '2:00', hour : 2, minutes : 00},
        {time: '2:30', hour : 2, minutes : 30},
        {time: '3:00', hour : 3, minutes : 00},
        {time: '3:30', hour : 3, minutes : 30},
        {time: '4:00', hour : 4, minutes : 00},
        {time: '4:30', hour : 4, minutes : 30},
        {time: '5:00', hour : 5, minutes : 00},
        {time: '5:30', hour : 5, minutes : 30},
        {time: '10:30', hour : 10, minutes : 30},
        {time: '11:00', hour : 11, minutes : 00},
        {time: '11:30', hour : 11, minutes : 30},
        {time: '12:00', hour : 12, minutes : 00},
        {time: '12:30', hour : 12, minutes : 30},
        {time: '12:00', hour : 12, minutes : 00}
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
        }//problem 1 
        
        $scope.visible = true; 
        $scope.disableSpan = function(thingy){
            
            if(thingy == true){
                $scope.visible = false; 
                
            }
            else{
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
};


angular
    .module('myApp')
    .controller('MyController', MyController);
