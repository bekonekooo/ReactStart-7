In this project I will try to fetch some fake data and show it to the user in some dropdowns each time user clicks dropdown my
app will fetch data of that dropdown for optimal internet usage.

1) API server setup
 first we change our package.json file and add to Scripts this part =["start:server": "json-server --watch db.json --port 3005",]
 2) I m going to use async tunk functions for data fetching and second part ı mgonna use redux query tool kit for data fetching.
 3) I used pending accepted and fullfilled one thruw  extra reducers
 4) Inside of userlist we need to access isloading data and error Im going to useSelector hook for it
5) Now I need to Implement the adding and deleting users with new thunks
6) After all the set up is done . Now I will create the expandablepanel comp and add logic


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm start:server`

for activating our json server for datas

The page will reload when you make changes.\
You may also see any lint errors in the console.



