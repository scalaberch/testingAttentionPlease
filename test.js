



var app = angular.module('meowApp', []);
app.controller('cat', function($scope, $http){
    $scope.tableData = [];

    $http.get("https://cwbbes.ourdesign.rocks/api/index.php/V1/cinemas").then(
        function successHandler(response){
            var data = response.data;
            console.log(data);

            //$scope.tableData = data;
            for(var i=0; i<data.length; i++){
                $scope.tableData.push(data[i].info);
            };
        }, 
        function errorHandler(response){
            console.log(response);
        }
    );
});
