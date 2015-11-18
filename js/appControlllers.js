    // Module Defining angularjs application.
    var app = angular.module('MyApp', []);
    // Controller function and passing $http service and $scope special object.
            app.controller('CommentsController', function($scope, $http) {
        	       //We use $http to comunicate with a Webservice - JSON format 
                     $http.get("http://www.w3schools.com/angular/customers.php")
                     .success(function (response) 
        	            {     //bind the response to the view
                               $scope.names = response.records;

                         });
               });


            app.controller('CarsController', function($scope) {
        	     //here we store Cars data Model
                 $scope.cars = [
                 {model:'Toyota',type:'Pickup',year:"2006",make:"Vits",image:"https://i.ytimg.com/vi/g6Rcy9DbcQY/maxresdefault.jpg"},

                 {model:'Mazda',type:'Pickup',year:"2006",make:"Suff",image:"http://dreamatico.com/data_images/car/car-1.jpg"},

                 {model:'Toyota',type:'Lorry',year:"2003",make:"Canter",image:"http://www.disney.co.uk/sites/default/files/styles/retina-reduction/public/Cars/GENERIC/Section%20Listings/ICE/msf_cars_ice_lst_characters.jpg"},

                 {model:'Toyota',type:'Pickup',year:"2007",make:"Vits",image:"https://s-media-cache-ak0.pinimg.com/originals/8c/5f/15/8c5f156f1324c03360d691a6ba733a2a.jpg"},

                 {model:'Mitsubish',type:'Canter',year:"2014",make:"Vits",image:"http://www.stuff.co.nz/content/dam/images/1/6/w/k/4/z/image.gallery.galleryLandscape.600x400.16popk.png/1442273612437.jpg"}];

           });




            //We handle the form submit action - pasing form data to an online API.
            app.controller('userController', function($scope, $http) {
		     //initialize an empty object-
		     $scope.user = {};
             //check button click
		     $scope.formSubmit = function()
		     {
             console.log($scope.user);
			       //Call Your Node API
                    $http.post('/some url',
                         $scope.user)

                    .success(function(response)//success
                    {  
                      console.log("Server Found");
                })

                    .error(function(response) //error
                    {
                     console.log("Server Not Found");
               });      
              };     
        });
//TODO ;
//handle response
//delete $http
//