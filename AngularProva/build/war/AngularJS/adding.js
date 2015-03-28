angular
        .module('addApp', [])
        
        .controller('AddCtrl', ['$http', controladorAdd]);

	    function controladorAdd($http){
	        var add=this;
	        add.person = {};
	        	        	        
	        add.AddRestEJB = function(){	            
	        	$http.post("http://localhost:8080/AngularProva/WSUserRest/addUser", add.person)
	        		.success(function(res){                
	                console.log(res);
	            });
	        }      
	        
	    }    
      
	    
	        
	        
	   