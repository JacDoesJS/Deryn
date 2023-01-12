### readme-top
<br />
<div align="center">

<h3 align="center">Scrabble Challenge - this time in Java!</h3>

  <p align="center">
    This is a repeat of a scrabble scoring challenge that was first written in javaScript.
    <br />
    <a href="https://github.com/JacDoesJS/scrabble-challenge-java.git"><strong>Explore the docs »</strong></a>
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
<ul>
<li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This was the first solo project I did in Java, during my time as a trainee Software Engineer as part of Digital Futures Academy. I had previously made a Scrabble scoring program in JavaScript. Here is the same program and now it's in Java!
<br>

### Review

As preparation for this first solo Java project I enjoyed pair programming with my fellow student Haider Idris. The results of that work can be found here - https://github.com/JacDoesJS/bobs-bagels-java-jac.git
It was a good experience to work with Haider as not only had he previously learned Java but he was also able to explain things clearly in a way that was extremeley beneficial to my understanding and progress.

If I were to do this again I would seek to:-
1) find a better way to store and then loop through the hashMap I created with an array of Characters for letters of the same score.
2) complete the extended criteria 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* IntelliJ - https://www.jetbrains.com/idea/download

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Maven
* IntelliJ - https://www.jetbrains.com/idea/download

### Installation

Clone the repo
   ```sh
   git clone https://github.com/JacDoesJS/scrabble-challenge-java.git
   ```
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## User Stories

<br>

>As a player
>
>If my input is ' ' or null
>
>I expect my score to be zero
<br>


| Objects        | Properties | Messages   | Output |
|----------------|------------|------------|--------|
| word           |            |            | @int   |
| scoreArrayList |            | getScore() | @int   |
<br>
1a test that an empty string input returns a score of zero  

1b test that a null input returns a score of zero  

<br>

>As a player  
> 
>When I make a scrabble word  
>
>I want to know what my word will score

<br>

| Objects        | Properties | Messages   | Output |
|----------------|------------|------------|--------|
| word           |            |            | @int   |
| scoreArrayList |            | getScore() | @int   |

<br>
2a test that 'a' scores 1  

2b test that 'f' scores 4  

2c test that 'not' scores 3  

2d test that ' ' scores zero    

2e test that 'street' scores 6

2f test that 'quirky' scores 22

2g test that scores correctly for case-insensitive words

<br>

>As a player
>When I play a tile on a double or triple letter
I want the bonus to be included in my score

| Objects        | Properties | Messages   | Output |
|----------------|------------|------------|--------|
| word           |            |            | @int   |
| scoreArrayList |            | getScore() | @int   |
<br>

3a test that a single-letter word is doubled
3b test that a two-letter word with one letter on a double letter tile is scored appropriately
3c test that a single-letter word is tripled
3d test that a two-letter word with one letter on a triple letter tile is scored appropriately

<br>

>As a player
When I play on a double or triple word score
I want my score to reflect this

| Objects        | Properties | Messages   | Output |
|----------------|------------|------------|--------|
| word           |            |            | @int   |
| scoreArrayList |            | getScore() | @int   |
<br>

4a test that a whole word is doubled
4b test that a whole word is tripled
4c test that a double word score word with a double letter scores accurately
4d test that a double word score word with a triple letter scores accurately
4e test that a triple word score word with a double letter score accurately
4f test that a triple word score word with a triple letter scores accurately



Given a word, compute the scrabble score for that word.

##### Letter Values

You'll need these:

| Letter                        | Value  |
| ----                          |  ----  |
| A, E, I, O, U, L, N, R, S, T  |     1  |
| D, G                          |     2  |
| B, C, M, P                    |     3  |
| F, H, V, W, Y                 |     4  |
| K                             |     5  |
| J, X                          |     8  |
| Q, Z                          |     10 |

Example
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

```
3 + 2x1 + 2x3 + 2 + 1
= 3 + 2 + 6 + 3
= 14
```

## Acceptance Criteria

```java

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
}
```

## Extended Acceptance Criteria
> Each `Scrabble` method should be no more than 5 lines and contain no more than 5 operations.

> You can play a double or a triple letter.

> You can play a double or a triple word.


<!-- CONTACT -->
## Contact

Jac McKeigue - jac.mckeigue@outlook.com

Project Link: [https://github.com/JacDoesJS/scrabble-challenge-java.git](https://github.com/JacDoesJS/airport-challenge.git)


</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
</br>

Thank you to Lucas Changas for all his help and encouragement.

Thank you to my wonderfully supportive cohort for their ongoing camaraderie and encouragement.

</br>  


This is a great README file template:

https://github.com/othneildrew/Best-README-Template

</br>



<p align="right">(<a href="#readme-top">back to top</a>)</p>