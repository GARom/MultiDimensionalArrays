# Multidimensional Arrays

## Setup

- create a project in your DevLeague directory named "MultiDimensionalArrayGenerator"
- initialize a git repository in this project
- create a .gitignore file and add *node_modules* as an ignored path
- initialize an npm project named "MultiDimensionalArray"
- install any dependencies you need to run tests with mocha and chai
  - `npm i -g -D mocha`
  - `npm i -D chai`
- create a subdirectory called **test/**
- create a test file in the **test/** directory named **test-generator.js**
- create a test file in the **test/** directory named **test-counter.js**
- create a module file in the project directory named **MultiDimensionalArray.js**
- commit all your stub files
 
## References
- sample chai spec https://gist.github.com/theRemix/848d0c2e3224e783a021 
- expect/should api reference http://chaijs.com/api/bdd/
- running your tests in mocha http://mochajs.org/#usage

## Part 1
### The generator

- setup **test-generator.js** with tests to be run by mocha.
- before all tests, import the MultiDimensionalArray module
- describe the behavior of calling the **MultiDimensionalArray.generate_1d** method with no arguments, it should return an array (length 3) with random boolean values. ex:

````
[0,1,1]
````
- describe the behavior of calling the **MultiDimensionalArray.generate_1d** method with one argument, **4**. __generate_2d__ should return a single array (length 4) each containing a random boolean value. ex:

  ````
  [1,0,1,1]
  ````
- describe the behavior of calling the **MultiDimensionalArray.generate_1d** method with a single argument `amount` set to "potato", it should return an empty array

*******************************************************************************
- describe the behavior of calling the **MultiDimensionalArray.generate_2d** method with no arguments, it should return an array (length 3) each containing arrays (length 3) with random boolean values. ex:

  ````
  [  
    [0,1,0],  
    [1,1,0],  
    [0,1,1]  
  ]
  ````
- test that the resulting array has length 3, and has 3 array elements that each have length 3, and these elements may be of any boolean value.
- commit all your work
- describe the behavior of calling the **MultiDimensionalArray.generate_2d** method with one argument, **4**. __generate_2d__ should return an array (length 4) that has 4 array elements, each containing an array (length 3) with 3 random boolean value. ex:

  ````
   [  
    [0,1,0],  
    [1,1,0],  
    [1,1,1],  
    [0,1,1]  
  ]
  ````
- commit all your work
- describe the behavior of calling the **MultiDimensionalArray.generate_2d** method with two arguments: **5** and **4**. It should return an array (length 5) each containing arrays (length 4) with random boolean values. ex:

  ````
  [
    [1,0,1,1],  
    [0,1,0,0],  
    [1,1,0,1],  
    [0,0,0,1],  
    [0,1,1,1]  
  ]
  ````
- commit all your work
- describe the behavior of calling the **MultiDimensionalArray.generate_3d** method with three arguments: **3**, **4**, **5**. It should return an array (length 3) each containing arrays (length 4) each containing arrays (length 5) with random boolean values. ex:

  ````
  [  
    [  
      [1,0,1,0,0],  
      [0,1,0,0,1],  
      [1,1,0,1,1],  
      [0,0,0,0,1]  
    ],  
    [  
      [1,1,0,1,1],  
      [1,0,1,0,0],  
      [0,1,0,0,1],  
      [0,0,0,0,1]  
    ],  
    [  
      [1,0,1,0,0],  
      [1,1,0,1,1],  
      [0,0,0,0,1],  
      [0,1,0,0,1]  
    ]  
  ]
  ````
- commit all your work

## Part 2
### The counter

- setup **test-counter.js** with tests to be run by mocha.
- before all tests, import the MultiDimensionalArray module
- describe the behavior of calling the **MultiDimensionalArray.count** method with one argument, __sample_array__. It should return a number representing how many truthy values there are inside each array in __test_array__.
values. ex:

  ````
  var sample_array = [1,0,0,1,0,0,0,0,1];  
  MultiDimensionalArray.count(sample_array);  
  // should return 3  
  ````
- commit all your work

## Part 3
- run the tests, review the results

## Part 4
### The Implementation

- setup **MultiDimensionalArray.js** as a node module.
- implement a method named **generate_1d** so that the tests in test-generator.js pass
    - this method will accept up to 1 argument
    - this method will create a new array, and finally return this array
    - the first argument will represent the number of elements the array will contain
        - if there are no arguments passed in to **generate_1d** then this array will contain the default _3_ random boolean elements between (0|1) 
        - if there is only one argument passed in to **generate_1d** then this array will contain _n_ many random boolean elements between (0|1) 
- commit all your work

- implement a method named **generate_2d** so that the tests in test-generator.js pass
    - this method will accept up to 2 arguments
    - this method will create a new array, and finally return this array
    - the first argument will represent the number array elements the new array will contain
        - if there are no arguments passed in to **generate_2d** then this array will contain the default _3_ arrays, each with 3 random boolean values
        - if there is only one argument passed in to **generate_2d** then this array will contain _n_ many arrays, each with the default _3_ arrays containing random boolean elements between (0|1) 
    - the second argument will represent the amoount of random elements in each of the _first tier_ arrays  
- commit all your work

- implement a method named **generate_3d** so that the tests in test-generator.js pass
    - this method will accept up to 3 arguments
    - this method will create a new array, and finally return this array
    - the first argument will represent the number array elements the new array will contain (tier 1) (default to 3)
    - the second argument will represent the number array elements the first tier arrays will contain (tier 2) (default to 3) 
    - the third argument will represent the number random (0|1) elements the tier 2 arrays will contain (tier 3) (default to 3)
- commit all your work


- implement a method named **count** so that the tests in test-counter.js pass
    - this method will accept 1 argument
    - the first parameter accepts an **array**
    - this method will return the number of **truthy values** found in (any tier) of the **array**
- commit all your work