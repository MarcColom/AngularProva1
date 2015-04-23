 angular
        .module('provaApp', [])
                	
.controller('provaCtrl', ['$http', function($http){		 
		    
        		var vm=this;
        		vm.users = {};        		
        		
        	    $http.get("http://localhost:8080/AngularProva/WSUserRest/listAllUsers").success(function(respuesta){                
        	 		  vm.users = respuesta;		              
        	    });		
		        
		        vm.AddRestEJB = function(){       
		        			        	
		        	var params = {
		        		name: vm.user.name,		        		
		        		email: vm.user.email		        		
		        	};	        	
		        			        	
		        	$http.post("http://localhost:8080/AngularProva/WSUserRest/addUser", params)
		        		.success(function(){                
		                 console.log("OK DE POST");
		        		})
		        		.error(function(){                
		                 console.log("ERROR DE POST");
		        		});
		           	
		        	vm.users.push(vm.user);
		        	vm.user = {};
		        	$scope.userForm.$setPristine();
		        }  
		      
         }]);
 
 
 .controller('contactCtrl', function(){		 
	    
				var ct=this;
				ct.contacts = {};        		
				        	    
				
		     
		     	ct.sendContact = function(){	     	
		        			        	
		     	 ct.contact = {};
		        } 
         
	}); 
	
 
		 	        
	        
       
  
    
  
 
  
 

  