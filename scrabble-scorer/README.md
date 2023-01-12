### readme-top
<h3 align="center">SCRABBLE-CHALLENGE</h3>
  <p align="center">
      <br />
    <a href="https://github.com/JacDoesJS/Digital-Futures/tree/main/scrabble-scorer"><strong>Explore the docs »</strong></a>
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
        <li><a href="#review">Review</a></li>
      </ul>
    </li>
        <li><a href="#installation">Installation</a></li>
    <li><a href="#criteria">Criteria</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  
  </ol>
</details>

</br>
<!-- ABOUT THE PROJECT -->  

## About The Project

My very first project in Java. We had already made a Scrabble scoring app in JavaScript as preparatory work prior to the beginning of the academy and it was fascinating to get do this again in a different language.


</br>

## Review
While the logic largely works the same way, the different syntax, remembering the types and the semi-colons were challenging initially. Working in IntelliJ is quite a treat though given that it does a lot of the work for you!
I would have liked to have separated some of the helper methods into separate files to make this more loosely coupled. As ever, I would also like to add a front end so that any user could put in a word, maybe have a dictionary function to check it's valid and then return the score.

</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>

## Criteria
Given a word, compute the scrabble score for that word.  


Letter Values
You'll need these:
<br>

Letter	Value
A, E, I, O, U, L, N, R, S, T	1  

D, G	2  

B, C, M, P	3  

F, H, V, W, Y	4 

K	5  

J, X	8  

Q, Z	10  

Example "cabbage" should be scored as worth 14 points:
<br>

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:
<br>
3 + 2x1 + 2x3 + 2 + 1
= 3 + 2 + 6 + 3
= 14

## Acceptance Criteria
class ScrabbleRunner {

   public static void main(String[] args) {  
   
      Scrabble scrabble = new Scrabble("");
      scrabble.score();   // => 0

      scrabble = new Scrabble(null);
      scrabble.score();   // => 0

      scrabble = new Scrabble("a");
      scrabble.score(); // => 1

      scrabble = new Scrabble("f");
      scrabble.score(); // => 4

      scrabble = new Scrabble("street");
      scrabble.score(); // =>, 6

      scrabble = new Scrabble("quirky");
      scrabble.score(); // => 22

      scrabble = new Scrabble("OXYPHENBUTAZONE");
      scrabble.score(); // => 41
     
     
}  
<br>
Extended Acceptance Criteria
Each Scrabble method should be no more than 5 lines and contain no more than 5 operations.

You can play a double or a triple letter.

You can play a double or a triple word.
<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

  
## Installation

Clone the repo
   ```sh
   git clone https://github.com/JacDoesJS/Digital-Futures/tree/main/scrabble-scorer
   
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Jac McKeigue - jac.mckeigue@outlook.com

Project Link: [scrabble](https://github.com/JacDoesJS/Digital-Futures/tree/main/scrabble-scorer))

<p align="right">(<a href="#readme-top">back to top</a>)</p>




This is a great README file template:  

https://github.com/othneildrew/Best-README-Template  

</br>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


