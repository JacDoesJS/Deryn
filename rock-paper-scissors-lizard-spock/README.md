### readme-top

<br />
<div align="center">

<h1 align="center">Rock, Paper, Scissors Challenge</h1>

  <p align="center">
    A Rock, Paper, Scissors game to play on the web, built using React and Express:
    <br />
    <a href="https://github.com/JacDoesJS/Digital-Futures/tree/main/rock-paper-scissors-lizard-spock"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>

 <p align="center">
<img src="A.png" height = 300px alt="login screenshot">   <img src="B.png" height = 300px alt="choose weapon screenshot">    <img src="C.png" height=300px alt="result of battle screenshot">
</p>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
  <li> <a href="#description">Description</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
<ul>
<li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#review">Review</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>  
<br>
<br>

<!-- DESCRIPTION -->
### Description
A first foray into the backend, made during my time as a trainee software engineer at the Digital Futures Training Academy. We learned about this in less than a week, whilst simultaneously working on serveral other things. I had previously written some rock, paper, scissors code which I was able to refactor and make more concise, due to my now much more advanced knowledge and experience. That code can be found here - https://github.com/JacDoesJS/rock-paper.git


<!-- ABOUT THE PROJECT -->
### About The Project
I was tasked with providing a Rock, Paper, Scissors game to play on the web, with the following user stories: 

(DFAT - Digital Futures Academy team member)  
<br>

### User Stories
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game
```
1a test that server is connected  

1b test that player name is added

<br>

```
As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```
2a test that each button registers the correct weapon  

2b test that player's weapon choice is stored  

2c test that computer weapon random choice method is called  
<br>

3a test that the result is a draw when both choose the same weapon  

3b test that a win is returned when appropriate  

3c test that a different win scenario follows the game rules  
<br>

4a test a POST request on the game route  

4b test a GET request on the game route  

4c test a POST request on the winner route  

4d test a GET request on the winner route  

4e test a POST request on the again route  

4f test a GET request on the again route  

<br>

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared

<br>

## Review  

As ever, I really want to do more of this. Coming from a music background, I know only too well that practice builds skills and confidence. We are moving onto a full-stack project next so I will get the chance to attach frontend React components and a database to this new backend knowledge. 

It was fun to upgrade the game to include lizard and Spock (see accreditation below). This project didn't have a frontend focus but I would have liked to have had the time to make the user interface more aesthetically pleasing. It would be good to make it into a 2-player game, with a scoring system.  

Am array of win conditions would help to reduce long checkWinner() function in the Battle class.

<br>



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Visual Studio Code
* Express.js backend framework for Node
* Node Package Manager


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br>

### Installation

Clone the repo
   ```sh
   git clone https://github.com/JacDoesJS/Digital-Futures/tree/main/rock-paper-scissors-lizard-spock
   ```
install the dependencies:  

* nodemon
* express
* initialise the project as an npm project
* ejs



<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>


<!-- CONTACT -->
## Contact

Jac McKeigue - jac.mckeigue@outlook.com

Project Link: [Rock Paper Scissors Lizard Spock](https://github.com/JacDoesJS/Digital-Futures/tree/main/rock-paper-scissors-lizard-spock)


</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
</br>

Thanks to...

* Extra thanks to Lucas Changas for helping me to understand the sequence of events: you render a page, the user inputs some data, a little worker takes that data and prepares it (and maybe stores some of it in locals), and sends it on a route, and then uses it to render a new page, and repeat... Lucas is a great coach and I am hugely thankful he could help me to fix my code, as this was the first time I had done anything like this.  
  
* Thanks to Simon Cobb at 13th on the left Productions Limited for his ongoing support and many words of wisdom about JavaScript.  
https://www.linkedin.com/in/simoncobb/

* my wonderfully supportive cohort - thanks for all those thoughtful little messages of encouragement. We are nearly at the end of this amazing ride through the academy.

</br>  

Rock, Paper, Scissors, Lizard, Spock rules can be found here:  
https://en.wikipedia.org/wiki/Rock_paper_scissors#Additional_weapons

Here's how I learned to add CSS in Node.js: 
https://raddy.dev/blog/nodejs-setup-with-html-css-js-ejs/

Here's how I learned to display images in HTML and Node.js:  
https://stackoverflow.com/questions/21235696/display-images-in-html-nodejs


This is a great README file template:  
https://github.com/othneildrew/Best-README-Template

</br>



<p align="right">(<a href="#readme-top">back to top</a>)</p>
