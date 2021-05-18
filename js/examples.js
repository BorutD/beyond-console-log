// console.log(console);

// 1. console.assert

/* const loggedIn = false;
console.assert(loggedIn, 'User not logged in'); */

// 2. console.log({braces})

/* const foo = 'foo';
const bar = 'bar';
const baz = 'baz';
console.log({foo, bar, baz}); */

// 3. console.table()

/* const foo = 'foo';
const bar = 'bar';
const baz = 'baz';

const users = [
  {
    id: 1,
    username: 'John',
    age: 23,
    joined: '04-12-2019'
  }, {
    id: 2,
    username: 'Mia',
    age: 21,
    joined: '04-12-2020'
  }, {
    id: 3,
    username: 'Brad',
    age: 29,
    joined: '04-12-2015'
  }
];

console.table(users); */

// 4. console.group() // groupCollapsed()

/* for (let i = 0; i < 10; i++) {
  console.groupCollapsed('Please work');
  
  console.group('How about now');
} */

// Note, if you log same statement one after another it will group itself, however if you break the streak with a different log, it won't group it.
// groupCollapsed() will collapse the logs by default, unlike group()

// 5. console.dir()

/* const httpool = {
  address: 'Tacenska',
  numberOfEmployees: 50,
  field: 'Online advertisement'
};

console.dir(httpool);
console.log(httpool); */

// 6. console.count()

/* let clicks = 0;
for (let i = 0; i < 10; i++) {
  clicks++;
}
console.log(clicks); */

/* console.count('clicks');
console.count('clicks');
console.count('clicks'); */

// 7. console.time()

/* console.time();

for (let i = 0; i < 10000; i++) {
  const random = Math.random();
}

console.timeLog(); */

// 8. console.trace()

/* function bottom() {
  
  function top() {
    console.trace('Who called upon me?')
  }
  
  top();
}

bottom(); */

// 9. console.log(pretty colours)

/* console.log('%c Javascript is the best!!! ', 'color: yellow; font-weight: bold; background-color: red; font-size: 20px;'); */

// 10. console.info()

/* var myObj = {
  firstname : "John",
  lastname : "Doe"
};
console.info(myObj); */

// Take another look at this, to see what is the difference compared to log().

// 11. console.profile()

/* function profileTest(callback) {      
  let i = 0;
  
  let work = setInterval(function() {
      if(i == 3) {
         callback();
         clearInterval(work);        
         return;     
      }
      console.log('Doing some work..');
      i = i + 1;
  }, 1000);     
}

console.profile("profileTest()");
profileTest(function(){
  console.profileEnd();
}); */
