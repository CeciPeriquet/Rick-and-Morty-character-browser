![poster-rick-and-morty](https://user-images.githubusercontent.com/112966265/207709401-8419dcd0-701f-4f88-9217-df148f913bba.png)

# Rick and Morty character browser with React

Hi there, Im Ceci and this is my React final exercisse from the Web Development Bootcamp I'm studying at Adalab.

We had to develope a web application to **filter** characters from _Rick & Morty tv serie_.

For this website I'm getting all data from [this API](https://rickandmortyapi.com/documentation/#get-all-characters) with a fetch. As you can see, the characters are ordered alphabetically even when the API have the main characters on top.

<img width="1476" alt="1-rickandmorty-characterbrowser-ceciperiquet-landing" src="https://user-images.githubusercontent.com/112966265/207666204-0036fb76-0653-43ff-8372-ff1962d6a058.png">

We had to show 20 characters in our list, so I decided to pick the url for the first page, as the documentation said there were 20 in each page (lucky me).

## Filters

You can either filter by name (with a regular input)

<img width="931" alt="3-rickandmorty-characterbrowser-ceciperiquet-searchbyname" src="https://user-images.githubusercontent.com/112966265/207666213-860898b9-63db-4b52-8cb1-50edd26aa651.png">

...by species (with two checkbox options):

<img width="1353" alt="5-rickandmorty-characterbrowser-ceciperiquet-searchbyspecies" src="https://user-images.githubusercontent.com/112966265/207666217-04ec109d-5c3b-47d8-88e2-81cbc73f3954.png">

..and also by status (using a select to choose between dead, alive or unknown):

<img width="526" alt="6-rickandmorty-characterbrowser-ceciperiquet-select" src="https://user-images.githubusercontent.com/112966265/207666220-d0760cdc-f68b-4f6c-a713-786943116f08.png">

## Reset

I also decided to add a reset button to remove everything from all filters, even the information from the LocalStorage (that is actually saving the search input information). Hitting "Squanq to reset" button will restart everything as it was when you opened the website.

## Error messages

In adittion, if you type an incorrect search,or try to access to the character page with a wrong url, an error message will come out (it´s an Not Found Component, that shows different messages in each case).

## <img width="527" alt="4-rickandmorty-characterbrowser-ceciperiquet-search-error" src="https://user-images.githubusercontent.com/112966265/207666215-46e880c2-ecc3-4073-be14-139322911a5a.png">

## Card Detail

Once you click to a card, you go to a different route and different component.
As you can see, the species info from API y programmed to show an icon instead of text (it shows either people or an ufo when they're alien).
I almost forgot!
This url is "shareable", you can try it for yourself =)

![7-rickandmorty-characterbrowser-ceciperiquet-carddetail](https://user-images.githubusercontent.com/112966265/207666221-7a6d7371-5c1f-4058-a076-fa9c9d008e0f.png)

I added a go back button that uses `window.history.back()` instead of a regular `Link`:

![9-rickandmorty-characterbrowser-ceciperiquet-backbutton](https://user-images.githubusercontent.com/112966265/207666225-99de3a8d-3b52-429d-ac62-b2a497b1c6e6.png)

## Fully Responsive

The whole website is fully responsive.
![2-rickandmorty-characterbrowser-ceciperiquet-landing-mobile](https://user-images.githubusercontent.com/112966265/207666210-bc52fbd2-009f-484c-a1ca-ecd089a76ab8.png)

![8-rickandmorty-characterbrowser-ceciperiquet-carddetail-mobile](https://user-images.githubusercontent.com/112966265/207666222-e515ba77-3abc-42fe-968d-892faf946547.png)

I also added a link on the header to go to the landing page, cause people (I) just do that, click to the logo whenever you're lost.

## Technologies

The project was made with React and Sass, and each component has his own style files.

## To run this project

- Firs of all, you need to download and install Node.js. You can get it [here](https://nodejs.org/es/download/).
  Clone or download the repository in your computer.
- Install the dependencies in the local node_modules folder. By default, npm install will install all modules listed as dependencies in package.json.

`npm install`

- Install React

`npm install -g create-react-app`

- Install React Router component

`npm install --save react-router-dom`

- Install Sass

`npm install node-sass`

- Finally to run the app in local host, type:

`npm start`

And don't forget to have fun!
