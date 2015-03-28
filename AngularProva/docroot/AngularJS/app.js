 angular
        .module('provaApp', [])
        
        .controller('provaCtrl', ['$http', controladorLista]);
 		.controller('AddCtrl', ['$http', controladorAdd]);
 
	    function controladorLista($http){
	        var vm=this;
	        vm.person = {};
	        
	        vm.ListRestEJB = function(){
	            $http.get(vm.url).success(function(respuesta){                
	                vm.users = respuesta;
	            });
	        }
	        
	        vm.AddRestEJB = function(){	            
	        	$http.post("http://localhost:8080/AngularProva1/WSUserRest/addUser", vm.person)
	        		.success(function(res){                
	                console.log(res);
	            });
	        }      
	        
	    }
	    
	   
	    function controladorAdd($http){
	        var add=this;
	        add.person = {};
	        	        	        
	        add.AddRestEJB = function(){	            
	        	$http.post("http://localhost:8080/AngularProva1/WSUserRest/addUser", add.person)
	        		.success(function(res){                
	                console.log(res);
	            });
	        }      
	        
	    }    
      
	    
	        
	        
	        
       
  
    
  
 
  
 

  