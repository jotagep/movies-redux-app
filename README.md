
## Redflix (React / Redux)

DEMO: [WEB](https://redflix.netlify.app/)

Webapp created using React and Redux that allows you to discover popular movies. 
All data has been powered by [The Movie Database API](https://developers.themoviedb.org/3/)

**Tech stack**: React, Redux(Toolkit), Typescript, Scss modules, Tailwind
### Development

Install the dependencies

```bash
$ yarn
```

And once all dependencias has been installed you can start the server
```bash
$  yarn start
```

### Folder structure

This project is organized following a "feature folder" structure:

* **/api**: fetching functions and TS Interfaces for TMDB Api
* **/app**: Main `<App>` componet and rootStore
* **/componets**: Component shared by pages
* **/feautures**
  * **/PopularMovies**: Components for the Popular Movies page &reducer
  * **/SearchMovies**: Components for Search Bar & reducer
  * **/FavoriteMovies**: Components for Favorite page & reducer
  * **/SelectedMovies**: Components for Selected Movie page & reducer
* **/utils**: shared functions
* **/hooks**: custom react hooks

I have decided to use redux toolkit, slices & hooks over traditional method, because i have not so much time to code this weekend. I know that maybe can affect to perfomance and have a problems with re-renders, but less boilerplate is an advantage in a case like this.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*
