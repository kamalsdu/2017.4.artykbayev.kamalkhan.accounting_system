angular.module('MyApp')
    .controller('LeadAddCtrl', ['$sessionStorage','$http','$scope','$state','$rootScope',function($sessionStorage,$http,$scope,$state,$rootScope) {
        console.log("Lead addition Controller");
        console.log("Check token");
        console.log($sessionStorage.userToken);
        console.log($sessionStorage.personId);

        $scope.leadTypeList = ('Налоги Счет-фактура Коммуналка').split(' ').map(function (state) { return { abbrev: state }; });

        $scope.add_lead = function(){
            var data = {
                'leadid' : "",
                'name':$scope.name,
                'type':$scope.leadType,
                'managerid':'891652226169095',
                'clientid':'0',
                'status':'none',
                'isaccepted':'false'
            };
            console.log(data);

            $http.post("http://localhost:8080/sdu/api/lead/save",data, {
                headers: {
                    'Content-Type': "x-www-form-urlencoded"
                }
            }).then(function(response){
                console.log("======DATA FROM RESPONSE======");
                console.log(response.data);
                var res = response.data.split("\"")[1];
                if(res == 'added'){
                    alert("Your lead successfully added into list and wait accept from admin");
                }
            });
        }
    }]);
