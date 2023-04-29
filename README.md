This application allows users to access the New York Times API to read real-time articles and save them in Mongo for future reference.

The steps below lay out the approach taken when building this app:

Environments: MongoDB, NYT API, Postman, Vercel

1. Connect and pull data from NYT API via Postman.
2. Create React app with npx create-react-app and rfce.
3. Define the Mongoose schema/model for article.
4. Define the environments: localhost, MongoDB URI.
5. Define the express Router in the controllers folder.
6. Design and publish splash view with Bootstrap react and scroll capabilities.
7. Design and publish favorites view with Bootstrap react and scroll capabilities.
8. Add vercel json.