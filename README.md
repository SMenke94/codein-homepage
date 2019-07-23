# SECRET AF
#### URL: https://codein.berlin
#### Repository: https://github.com/SMenke94/codein-homepage
For repository rights contact the repository owner (:octocat:: SMenke94 - Saskia Menke)

&nbsp;


# For Developers
## Stack
 * React.js(16.8.6)

&nbsp;

## Development
### Getting started
You do not need any environment variables to run the application.
To build the frontend simply run
```
$ npm install
$ npm start
```

## Deployment
To deploy the website simply run
```
$ npm run build
$ aws s3 sync ./build s3://codein.berlin
```

You will also need run an invalidation in cloudfront.

&nbsp;

Happy Coding :penguin:
