
Coding conventions
------------------

* javascript is writed in "strict mode"
* 4 space for indentation
* eval() is evil
* code is linted with JSHint
* documentation is done with YUIDoc


* requireJS is used for importing external and internal libraries
* monument.js is used to import external libraries and app.js
* all internal libraries are imported from app.js

* localStorage is used for saving the application settings
* sessionStorage is used for caching geolocation and results


Naming conventions
------------------

* constants (if any) are uppercase -> MY_CONSTANT
* variables are lowercase -> variable
* no need to begin private variables with uderscore
* variables with multiple word use a middle underscore -> my_variable
* if using a parameter name from an external API as a variable stick to the API naming convention
* avoid global variables as more as possible, use localStorage or sessionStrorage instead
* no hungarian naming style

* functions and methods are lower camel case -> myFunction
* constructor functions are upper camel case -> MyConstructor
* private methods begin with an underscore -> _myPrivateMethod
* use double quoted strings


In case of doubt follow j-io conventions:
http://www.j-io.org/Javascript-Naming_Conventions
