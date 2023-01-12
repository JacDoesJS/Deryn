### readme-top

<br />
<div align="center">

<h1 align="center">Chitter Challenge</h1>

  <p align="center">
    A twitter clone that will allow users to post messages to a public wall.
    <br />
    <a href="https://github.com/JacDoesJS/Digital-Futures/edit/main/chitter-challenge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>

<p align="center">
<img src="WhatsApp Image 2023-01-12 at 16.26.07.jpeg" height= 400px alt="chitter app screenshot showing chitter bird logo and a list of peeps">
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
<ul>
<li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#component-hierarchy">Component Hierarchy</a></li>
    <li><a href="#review">Review</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This was my first ever full-stack project, made during my time as a trainee Software Engineer as part of Digital Futures Academy. We worked on a few preparatory projects / exercises:-
* Frontend - single page React app with Guardian api 
* Database - MongoDB exercises using Postman, Compass, Mongosh
* Backend - Rock, Paper, Scissors, Lizard, Spock project in JavaScript using Node.js and Express

There were numerous stages to the development of this project:-
1. create wireframes - see bit.ly/3u8KhTX
2. create component hierarchy - see bit.ly/3u8KhTX
   all the following steps were developed in a test-driven way
3. make a simple version using just 2 pieces of static data via a JSON server
4. work on the styling and add more data - mobile first, for responsiveness
5. make a mongoose schema - and create a database
6. test routes in Postman and then connect to Mongodb cloud Atlas database
7. upgrade this to incorporate all the data elements required
8. set up routes folder and server
9.  join the two together
10. lots of integration testing
11. build login system - with enormous thanks to Ed Wright, whose demo code was invaluable for this
12. consider adding additional functionality
13. complete documentation
  
  <br>

## Review  

I learned an awful lot, the hard way, about how not to set up a full-stack React project when I began this Chitter challenge. Initially I started by creating a server and a back end. Following some advice from my instructor it seemed more logical to begin by create by building the client side and rendering that using static data from a .json file. There was a gap of a few days between restarting with the front end. I somehow overlooked the fact that the back end was already there. Things were not neatly divided into front and back end folders at this point. Everything ended up in a mess requiring much thought and kind assistance from my instructors. Unfortunately it was not salvageable as most of the dependencies were cross-pollinated between front and back end and so I had to start again. 

This kind of thing feels like a rite of passage in much the same way that warping your weaving loom back-to-front happens to most beginners at some point, myself being no exception. You only do these things once!

The difference in my understanding and confidence 10 days into this project is staggering. I am noticing this trend with every project: things start slowly and take a lot of effort. Sometimes reaching the first hurdle can take a day or two. By the last couple of days of working on it, I can smash out big chunks of functionality much quicker, in a most satisfying way. It very much reminds of my time writing large-scale music compositions for my PhD. I would always reach a point where I felt like I was Queen of my kingdom and was totally intimately acquainted with the project. Whatever anyone needed / wanted to know or whatever my PhD supervisor queried, I knew exactly where it was, how it got there, why it was there, what it needed to do next, and how I would like to improve it. 

Having never made a full-stack React app before and owing to time constraints, it wasn't possible to make a small-scale prototype practice project. I'm very pleased with myself that I have built a full-stack app from scratch for the first time. Next time I will be able to write more tests before the code.

Improvements  

* Make the user experience more fluent for the login process
* add functionality to check if user is logged in before allowing log out
* more testing
* amend schema to show user name and user handle on peeps
* add file-uploader to add profile pictures
* adjust testing numbers in documentation to match reality


<br>



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* React
* Node Package Manager
* Axios
* Mongoose and MongoDB
* Dotenv
* Cors
* Body-parser


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br>

### Installation

install Node.js
Clone the repo
   ```sh
   git clone https://github.com/JacDoesJS/Digital-Futures/edit/main/chitter-challenge
   ```
npm install from each package.json in integrated terminal  

in terminal from backend.json, npm start to start server  

in terminal from frontend.json, npm start to start react app - and wait, and it should automatically take you to the browser

Testing
frontend tests run with Jest which is built in to react  
backend tests run with mocha, chai and chai-http
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>


## User Stories  
a note about test numbers:-  
single digit numbers are for static data  
double digit numbers are for data server from the database  


```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter  
```
1a test that a peep from static data is rendered

11a.a test server is connected

11a test that an added peep is stored in the Database  

11b async test the POST request  

11c async test the GET request and check peep is returned from Database with name, message, id, date & time

<br>

```
As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order   
```  

2a test the correct number of Peeps are rendered from the mock data   

2b test that the Peeps are in the correct order  

22c test correct number of Peeps rendered from Database  

22d async test the GET request from database
<br>

```
As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made  
``` 
<br>

```
As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter  
```
<br>

```
As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter
``` 
<br>

```
As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```
<br>

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```



<br>
<br>




</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>

## Component Hierarchy  

see bit.ly/3u8KhTX


<br>
<br>

<!-- CONTACT -->
## Contact

Jac McKeigue - jac.mckeigue@outlook.com

Project Link: [Chitter Challenge](https://github.com/JacDoesJS/Digital-Futures/edit/main/chitter-challenge)


</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
</br>

Thanks to...



* Lucas Changas for absolutely rescuing me when I had made a big rookie error. I learned a lot on that day!
  
* Ed Wright for his excellent login demo code and for helping me organise my folders into frontend and backend and fixing my errors - thank you!  

* Simon Cobb for his never-wavering belief in my abilities and continuing encouragement

* my cohort: what a wonderfully capable and hard-working group of lovely people!


</br>  

Here's a great set of tutorials for the MERN stack:  
https://youtu.be/98BzS5Oz5E4  

This is an extremely useful resource for flexbox:  
https://css-tricks.com/snippets/css/a-guide-to-flexbox/  

This is a great README file template:
https://github.com/othneildrew/Best-README-Template

</br>



<p align="right">(<a href="#readme-top">back to top</a>)</p>
