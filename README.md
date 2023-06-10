📝 **NOTE** Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Week 1 Assignment: Flixster

Submitted by: **Alejandro Irizarry Negron**

Estimated time spent: **20** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### Core Features

- [X] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [X] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [X] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [X] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [X] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### Stretch Features

- [ ] Deploy website using GitHub Pages.
- [ ] Allow user to view more details about a movie within a popup.
- [X] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [X] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video


![Imgur](https://imgur.com/JipRGK1)



### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I believe the labs were very helpful for completing the assignment, especially lab 3 which taught us about how to use APIs with JavaScript. I believe one of the features most people, incluiding myself, weren't able to successfull solve straight ahead, was poster_image fetching. I knew I had to use the "path" of the image in order to load the poster images in the movie grid, but I did not know how to find the base url where the images were located. It wasn't properly explained in the lessons nor course instructions, how to find it.

Add your response here

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

if I had more time, I would make my layout more compact, add more advanced css elements to make it look more appealing, add an image substitute to those movies that didn't have poster images and add some fo the stretch features. Nonethelesss, I'm pretty satisfied with how my work turned out.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

On my project demo, I received positive feedback on how I explained my project with my thought of process. The website funcionality performed perfectly during the demo. I noticed that my peers added an image to those movies that didn't have a poster image path. I thought that was pretty convenient since having an empty slot is inconvenient.

### Open-source libraries used

- Add any links to open-source libraries used in your project.
https://developer.themoviedb.org/reference/movie-now-playing-list
https://developer.themoviedb.org/reference/search-movie

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

- Kennedy Parks (scholar from cohort 1)
