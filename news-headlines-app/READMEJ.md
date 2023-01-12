### readme-top

<br />
<div align="center">

<h1 align="center">News-Summary-Challenge</h1>

  <p align="center">
    A single page application in React displaying up-to-date news stories and images from the Guardian website.
    <br />
    <a href="https://github.com/JacDoesJS/news-summary-challenge.git"><strong>Explore the docs »</strong></a>
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
    <li><a href="#component-hierarchy">Component Hierarchy</a></li>
    <li><a href="#review">Review</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This was my first ever React project, made during my time as a trainee Software Engineer as part of Digital Futures Academy. After working through some example exercises it was exciting to be let loose on React. I very much want to do more of this.

There were three stages to the development of this project  

1) Initially, I started by shaping the page: creating the Header and Footer components and then went on to retrieve the sample data I required from a JSON file, passing it into my components as props. The Header and Footer were snapshot tested and I also tested that the correct number of articles and images were being rendered. Next week we will be learning about how to test asynchronous calls, to enable greater testing coverage.
   
2) As an intermediary stage, I set up a JSON server to access the sample data, by means of a useEffect hook. 
   
3) Finally it was reasonably straightforward[^1] to add a unique key from the Guardian to the .env file and successfully connect my application to the Guardian website, in order to draw today's news stories. Although it wasn't in the criteria, being a creative person who values the principles of copyright, I felt it was vital to add an attribution to the Guardian. As a Mancunian and proud member of the tofu-eating, Guardian-reading wokerati, the Guardian is my kind of news and it's only right that their work is credited, if I'm getting the benefit of it in my application.
   <br>

[^1] I wrote the code fine but had a strange protocol error and after numerous pairs of eyes looking at my project and several fellow students making suggestions, hurrah for my instructor Ed Wright who noticed that my .env file was not in the project root folder. In my defence I would point out that my mature eyes (granted not helped by inexperience) find reading the folder view in Visual Studio Code a little challenging. If I make things large enough to be able to read then the whole project folder no longer fits on the screen and it's hard to see what's nested where.
  
Two things immediately spring to mind to help avoid similar problems in the future.   

1. I will endeavour to take greater care, when creating files, to put them in the right place to begin with. Of course, ease of use will develop with more experience.
2. As I will not always be working on projects I have created and humans do make mistakes, I am further strengthened in my resolve to learn as much as possible so that I can be a part of the drive to make tech more accessible. This incorporates all kinds of aims including better screen readability. 
3. (yes I've gone a bit Monty Python now) I really need some better reading glasses.
  
<br>

## Review  


I would absolutely love to make more things in React. This feels like just the beginning of exciting possibilities. It was great to be able to combine so many things we have learned into one project. Here I have incorporated elements of TDD, OOP, React, Javascript, hooks, HTTP requests and promises, my first web API, JSON, HTML, and CSS.

Further projects will help to extend my understanding of how data flows between components using props. 

Ideally the code for the full article would be in a separate component and I would use React Routing to render either the headline or the full story on the page. It would be even better if the article were broken up into paragraphs for easier readability.

As extension possibilities for this, it would be good to offer a login option with customisable news categories. I like the idea that users could tailor their news individually as I for one could quite happily live without ever seeing an article about football whereas another user may prefer to only see sports news.



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Visual Studio Code
* React
* Node Package Manager


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br>

### Installation

Clone the repo
   ```sh
   git clone https://github.com/JacDoesJS/news-summary-challenge.git
   ```
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>


## User Stories

<br>

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

1a test that the Header renders correctly - snapshot test  

1b test that the Footer renders correctly - snapshot test  

1c test that the correct number of headlines render from the mockNewsData.json file


<br>

```
As a busy politician 
So that I have something nice to look at 
I can see a relevant picture to illustrate each news article when I browse headlines
```

2a test that the correct number of images render from the mockNewsData.json file

<br>
<br>


## Extended Criteria

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

I have almost done this - I have included a 'full article' link to click on.  

<br>


```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```
The headline is a link.  

<br>

```
As a busy politician  
Just in case my laptop breaks  
I can read the site comfortably on my phone
```

In the developer tools in the browser, I checked the responsiveness of the layout on all devices to ensure readability.

</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</br>

## Component Hierarchy  

<img src="src\Components\images\hierarchy.jpg" width=500 alt="component hierarchy diagram and model">    

<br>
<br>

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

Thanks to...

* Freshta Ibrahim for helping me to understand a little bit more about React 

* Lucas Changas for all his help and encouragement 

* my wonderfully supportive, and now very tired cohort, for their ongoing support and encouragement

</br>  


This is a great README file template:

https://github.com/othneildrew/Best-README-Template

</br>



<p align="right">(<a href="#readme-top">back to top</a>)</p>