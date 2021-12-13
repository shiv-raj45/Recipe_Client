
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Start the server
 
You have two servers for this  application:
* JSON server
* Express.js server

JSON server is running on `http://localhost:5000` whereas express js is running on  `http://localhost:4000`.All the datas regarding application are placed inside this database.

To run JSON server go to directory where your react app is located and run 
` npx json-server --watch Data/db.json --port 5000 ` 

In order to start express.js server go to terminal and change directery to Server by `cd Server` and then then run 
`npm start`.You should see message of server port.

After that you should be able to run your application on  
`http://localhost:3000`
