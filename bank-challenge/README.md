### readme-top
<h3 align="center">BANK-CHALLENGE</h3>
  <p align="center">
    A great challenge!
    <br />
    <a href="https://github.com/JacDoesJS/airport-challenge.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

</br>
<!-- ABOUT THE PROJECT -->  

## About The Project

A banking project created using test driven development and Jasmine npm test, applying principles of OOD.
This is my first solo test-driven project using Jasmine.
This is my first example of writing loosely-coupled code following the principles of encapsulation.  


</br>

## Review
Attempting to incorporate a lot of new theory and programming knowledge was initially incredibly challenging and ultimately thoroughly satisfying. I am really keen to make another project now, following similar principles, in order to reinforce my learning. 

If I were to do this again, I would seek to:-
1. incorporate some error handling.
2. find a more elegant way to print out the statement table
3. add a conditional method to check that the amount to be paid in is greater than 1
4. add a conditional method to check that there are sufficient funds in the account to make a withdrawal  
   
I would love to attach this to a frontend user interface and think I almost know how to do it - which surely is close enough to give it a try!

</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>

## Criteria
The criteria for the project are as follows:-

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>

## User Stories  
These were developed from the criteria given above...  


>As a user  
when I make a deposit of 1000 on 10-01-2012  
I want the details to be stored so they can be printed on my bank statement  

<br/>

```
| Objects | Properties    | Messages | Output           |
| ------- | ------------- | -------- | ---------------- |
| account | credit amount | credit() | @number, @string |
```
1a. test that amount added  
  
1b. test that type of transaction is recorded  

1c. test that date in correct format  
 
1d. test that balance is updated  

1e. test that balance, type, and amount are stored in statementArray  

<br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>


>As a user
when I make a withdrawal of a 500 on 14th January 2012  
I want the details to be stored so they can be printed on my bank statement

```
| Objects   | Properties               | Messages | Output           |
| --------- | ------------------------ | -------- | ---------------- |
| account   | @ARRAY[@number, @string] | debit()  | @number, @string |
| statement | @ARRAY[@number, @string] |          | @number, @string |
```

2. test that amount is correctly stored on statementArray  
  
<br/>

>As a user  
To see the running balance of my account  
I want my transactions to update my balance so I can see how much money I have left

```
| Objects   | Properties               | Messages     | Output           |
| --------- | ------------------------ | ------------ | ---------------- |
| account   | @ARRAY[@number, @string] | debit()      | @number, @string |
| statement | @ARRAY[@number, @string] | getBalance() | @number, @string |
```

1. test that updated amount is debited from account balance and stored in array
<br>

<br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>

>As a user  
To keep track of my finances  
I want to be able to print my statement

```
| Objects   | Properties               | Messages            | Output  |
| --------- | ------------------------ | ------------------- | ------- |
| account   | @ARRAY[@number, @string] | getStatementArray() |         |
| statement | @ARRAY[@number, @string] | printSatement()     | @object |
```

4a. test that printStatement is called  

4b. test that table headings are printed  

4c. test that amounts are rounded to 2 decimal places  

4d. test that dates are in correct order  
</br>

### Built With

* [https://www.javascript.com/]
* [https://jasmine.github.io/]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up this project locally.

### Prerequisites

Things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JacDoesJS/airport-challenge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Jac McKeigue - jac.mckeigue@outlook.com

Project Link: [https://github.com/JacDoesJS/airport-challenge.git](https://github.com/JacDoesJS/airport-challenge.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

</br>

Thank you to Lucas Changas for all his help and encouragement which meant I could actually get started with this project.  

Thank you to my wonderfully supportive cohort for the many messages of encouragement we all shared.  

</br>  


This is a great README file template:  

https://github.com/othneildrew/Best-README-Template  

</br>

Further resources, consulted for help with applying CSS formatting to console log statements:-  

https://pxpx.co.uk/blog/advanced-console-logging-styling/  

https://levelup.gitconnected.com/add-styles-and-formatting-to-your-console-log-messages-in-javascript-5f14819b1c5d



<p align="right">(<a href="#readme-top">back to top</a>)</p>


