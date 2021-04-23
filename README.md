# Filmaholic v2.0 🎞️
![](https://github.com/InjuMichorius/Filmaholic/blob/master/images/README%20images/READMECOVER.JPG)

Filmaholic is a school project I made that rates the suitability of movies based on it's audience using an API. The user can visit a movie, sort the movies (based on date, votes and alphabet) and search for a specific movie. This application is a continuation of my other project called Filmaholic.

[Click here for the live demo](readearr.herokuapp.com/)

# Table of Contents 🧭
1. [Goal](https://github.com/InjuMichorius/filmaholic-v2/blob/master/README.md#goal-)
2. [API](https://github.com/InjuMichorius/filmaholic-v2/blob/master/README.md#api-%EF%B8%8F)
3. [Getting started](https://github.com/InjuMichorius/filmaholic-v2/blob/master/README.md#getting-started-)
4. [Wishlist](https://github.com/InjuMichorius/filmaholic-v2/blob/master/README.md#feature-wishlist--backlog-)
5. [Practises](https://github.com/InjuMichorius/filmaholic-v2/blob/master/README.md#design-patterns-and-best-practices-)
6. [Packages](https://github.com/InjuMichorius/filmaholic-v2/blob/master/README.md#packages-used-)

# Goal 💪🏻
The goal of Filmaholic is to provide its audience with information about movies, so they can make a decision on what to watch. They can also search a movie to see other people's opinions. This application will show the overall rating of any movie using the The Movie DataBase API.

# API 🗂️
I made use of [The Movie DB API](https://www.themoviedb.org/) for this project.
The base endpoint is https://api.themoviedb.org/. All endpoints return either a JSON object or an array. The endpoints I use are popular and ID. This is the structure of one movie array:

```json
{
  "adult": false,
  "backdrop_path":"/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg"
  "genre_ids" [14,28,12],
  "id":458576,"original_language":"en",
  "original_title":"Monster Hunter",
  "overview":"A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity.",
  "popularity":3079.082,
  "poster_path":"/uwjaCH7PiWrkz7oWJ4fcL3xGrb0.jpg",
  "release_date":"2020-12-03",
  "title":"Monster Hunter",
  "video":false,
  "vote_average":7.3,
  "vote_count":869
}
```

The api url needs 3 things.
* The base URL (https://api.themoviedb.org/)
* The endpoint (popular)
* The API key (?api_key=0a00a0a0aaa0aa00a0000a0000a0a0a0)

The returning array will contain movies, which you can acces with result[0] up to result[20]. To acces more movies, you'll need to navigate to the next page.

# Getting started ✨
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Technical requirements
To run this project you'll need [Git](https://git-scm.com/downloads), [Nodejs](https://nodejs.org/en/download/) and any [code editor](https://code.visualstudio.com/download)

## 📥 Installing
### 1. Clone this repository 👯
Before we can get started, we'll need to clone this repository. We can do this by typing the following line of code in the terminal:
```bash
git clone https://github.com/InjuMichorius/filmaholic-v2.git
```
### 2. Install the packages 💻
First we need to install the used NPM packages.
```bash
npm install
```
### 3. Start developer environment 🎬
Now we can run our application, by running the following line of code in your terminal:
```bash
npm run dev
```

### 4. Navigate to localhost 🌐
Congratulations! If everything works, you should be able to see the application running in your browser. Please note that the port won't always be the same number.
```
http://localhost:3000
```

# Feature wishlist / backlog 👑
Below is a list of features I'd love to add to this application. The features are split up using the **M**o**SC**o**W** method.

**M** - Must haves
_These features are requirements for the end product_
- [x] Detail pages users can navigate to
- [x] Overview of all available rated movies
- [x] Some performance upgrades

**S** - Should haves
_These features are wanted, but not necessary for a usable product_
- [x] Option to sort movies by categories
- [x] Option to search for a specific movie
- [x] Service worker that gives feedback based on connection state
- [ ] Api call to all movies, instead of all popular movies

**C** - Could haves
_These features can be added if there is enough time to do so_
- [ ] Trailer of the selected movie
- [ ] More information, like casts and descriptions

**W** - Would haves
_These features can be added in the future_
- [ ] User database
- [ ] Ability to write reviews

# Design patterns and Best Practices 👩🏻‍💻
__Code standards are important__ when working on any project; your code stays *consistent* and is *readable* for everyone. I defined code standards for __HTML__, __CSS__ and __JS__ while working on this project.

## Javascript code standards
* Variables & functions are written in __camelCase__
* Promises are handled with __async functions__ using await
* I don't use var, only __const__ or __let__
* I put __spaces around operators__ ( = + - * / ) and after commas (exception for for loops)
* I use indentation with __TAB__
* I always end a statement with a __semi-colon;__
* Functions have their opening bracket on the __same line__ as the name, with 1 space in between
* I use __ES6 syntax__ where possible

## CSS code standards
* I try to avoid __!important__ as much as possible
* Layout/general styling is always __above__ more specific styling
* Selectors are not unnecessary __long__ nor __short__
* I use __CSS3 syntax__ where possible
* I avoid old display properties like float
* CSS Selectors must have a __space__ between the name and bracket

## HTML code standards
* I only use IDs when the element is present __once__ on a page and it's necessary for styling or Javascript
* I always write semantic HTML according to __W3C Validator__
* Divs are only used when __necessary__ for styling purposes
* Classes allow easy __re-usage__
* Indentation is always __clear__

# Packages used 📦
* [Express](https://www.npmjs.com/package/express) - Used to setup the server
* [Body-parser](https://www.npmjs.com/package/body-parser) - Used to refer to html elements
* [Ejs](https://www.npmjs.com/package/ejs) - Used for templating
* [Nodemon](https://www.npmjs.com/package/nodemon) - Used for auto refreshing the server

# License 🔐
This project is licensed under the MIT license by © Inju Michorius, 2021. See the [LISENCE.md](https://github.com/InjuMichorius/ReadEar/blob/master/LICENSE) file for details.
