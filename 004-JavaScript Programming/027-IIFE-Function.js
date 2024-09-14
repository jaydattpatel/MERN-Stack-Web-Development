/*
author : Jaydatt Patel
IIFE (Immediately Invoked Function Expression )
You can crete anonymous private function and can use to execute function directly without giving name or variable and it is defined in brakets. It can not access outside.

syntax:   
(function() {}
)()

*/

console.log('------------1-------------');
(function () {
    console.log('IIFE function');
})();

console.log('------------2-------------');
(function (a, b) {
    console.log(a ** b);
})(4, 2);
  
console.log('------------3-------------');
const user = (
    //creating IIFE private function that can not access outside.
    function () {
    const userData = {
        userName: 'John',
        userAge: 20,
    };

    function getName() {
        console.log(userData.userName);
    }

    function updateAge(age) {
        console.log(userData.userAge + age);
    }

    return { getName, updateAge };
})();

console.log(user);
console.log(user.userData);
user.getName();
user.updateAge(3);
  
console.log('------------4-------------');
var counter = (
    function () {
    var count = 0;
    return {
        increment: function () {
        count++;
        },
        getCount: function () {
        return count;
        },
    };
})();
counter.increment();
counter.increment();
console.log(counter.getCount());


console.log('------------5-------------');

function main(){
  
    const userAuth = (
        function(){
        	let users = [];
            
            function checkCredentials (username,password){
                let flag = false;
                for(let obj of users){
                    if(obj['username']===username)
                        flag = true;
                }
                return flag;
            }
        
            function registerUser (username,password){
            	if(checkCredentials(username,password)){
            	    return `The user is already registered`
            	}
            	users.push({'username' : username, 'password' : password})
            	return  `The user have been added to the registeredUser array`; 
        	}
            
                function show () {
        		    console.log(users);
                    // for(let obj of users)
                    //     console.log(obj['username'], obj['password'])
    			};
            
            return {registerUser,checkCredentials,show};      
        }
        
    )();
      
  console.log(userAuth.registerUser("user1","password123"));
  console.log(userAuth.registerUser("user1","password123"));
   userAuth.show();

  return userAuth;
}

main(); //calling main