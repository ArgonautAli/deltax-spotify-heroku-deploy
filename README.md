# Spotify2App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Server & Storage

JSON REST API is used to store song details & artist details

To run the JSON Server use this command:

json-server --watch db.json

### Styling & UI

Bootstrap (overall styling & responsiveness)
ng-bootstrap (add artist modal)


#### Routing

Routing is enabled to navigate different components

There basically 4 components 
1. Main app component
2. Navbar component
3. Top Song component
4. Add song component
5. Shared Service component


##### Component explanation

1. Main App Component:
Main component that displays all other component with routing
Shows navbar component at top 
Then router outlet to show other component 
Top song module is made default path of router outlet by setting path as empty.

2. Navbar Component
Contains route to homepage and has search bar to search songs

3. Top Song Component:
Shows heading as 'Top Song' and a dynamic bootstrap table that uses methods from shared service to get & delete data from APIs.

4. Add Song Component:
Uses form from boostrap and binds data to SongDataObj which is updated to POST API of JSON Server
It takes 
    1. Song Name
    2. Artist Name
    3. Artwork
    4. Release Date
    5. Rating 

Also contains Add Artist Modal:
That works similar to Add Song but data is uploaded to Comments API of JSON Server
It takes
    1. Artist Name
    2. Artist DOB
    3. Artist BIO