console.log('js');


let friendsApp = angular.module ('friendsApp', []);

friendsApp.controller('FriendsController', ['$http', function($http){
console.log('FC');
let vm= this;

    vm.messagesArray = [];

    vm.postPost = function(){
        console.log('in postPost');
        let newPost = {
            user: vm.userIn,
            post: vm.postIn
        }
        console.log('newPost is:', newPost);
        
        $http({
            method: 'POST',
            url: '/messages',
            data: newPost
        }).then(function(response){
            vm.getPosts();
            vm.userIn = '';
            vm.postIn = '';
        }).catch(function(error){
            console.log('error getting post response:', error);
            
        })
    }

    vm.getPosts = function(){
        console.log('in getPosts');
        $http({
            method: 'GET',
            url: '/messages',
        }).then(function(response){
            vm.messagesArray = response.data;
            console.log('vm.messagesArray is', vm.messagesArray);
            
        }).catch(function(error){
            console.log('error GETTING posts:', error);
            
        })
    }
    vm.getPosts();
}])