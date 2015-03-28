 angular
        .module('provaApp', [])
                	
        .controller('provaCtrl', ['$http', function($http){		 
		    
        		var vm=this;
        		vm.users = {};
		        
		        vm.ListRestEJB = function(){
		            $http.get(vm.url).success(function(respuesta){                
		                vm.users = respuesta;
		                console.log("OK DE GET");
		            });
		        }
		        
		        vm.AddRestEJB = function(){       
		        	
		        	var params = {
		        		name: vm.user.name,
		        		email: vm.user.email,
		        	};
		        	
		        	console.log("dintre addrestejb");		        	
		        	$http.post("http://localhost:8080/AngularProva/WSUserRest/addUser", vm.user)
		        		.success(function(){                
		                 console.log("OK DE POST");
		        		})
		        		.error(function(){                
		                 console.log("ERROR DE POST");
		        		});
		        }  
		      
         }]);
	
 
		 	        
	        
       
  
    
  
 
  
 

  