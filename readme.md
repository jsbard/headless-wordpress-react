# About This Theme

This is a headless WordPress configuration with a React frontend. It is meant to serve as a template to build out more complex projects and get you up and running quickly with a basic configuration. Currently included is a component that fetches and displays the default WordPress posts.

# Getting Started

This repository contains two main folders: `/frontend` with the React application, and `/public` with the WordPress installation.

This documentation guides you through setting up and running your project with [Local by Flywheel](https://localwp.com) to serve your WordPress backend. Exact configuration may vary depending on your local development environment.

This guide assumes you have [Local](https://localwp.com) and [Node.js and npm](https://nodejs.org) already installed on your machine.

## Create a new site in Local

Set up a simple local WordPress installation using Local.

![A dialogue showing the Local by Flywheel interface](https://github.com/jsbard/headless-wordpress-react/blob/main/readme-images/local-create.png)

## Clone the repository

Navigate to the root folder of your WordPress installation in your terminal. Then run:

`git clone (https://github.com/jsbard/headless-wordpress-react.git)`

![A screenshot of a terminal cloning the repository](https://github.com/jsbard/headless-wordpress-react/blob/main/readme-images/clone.png)

## Move the repository files into the root directory of your Local installation

After cloning, if you run `ls -la`, you should see the repository with the `app/`, `conf/`, and `logs/` directories.

Replace the contents of the `app/` directory:

`rm -rf app/*`\
`mv -f headless-wordpress-react/* app/`\
`rm -rf headless-wordpress-react`

![A screenshot of a terminal moving the repository files](https://github.com/jsbard/headless-wordpress-react/blob/main/readme-images/move-site.png)

Now, navigate to `app/frontend`:

`cd app/frontend`

Install the necessary Node dependencies:

`npm install`

## Configure wp-config.php

#### You may not have to complete this step. Check if your wp-config.php file exists and is configured correctly. If so, great! You can move to the next step.

Since you deleted the local one, you will need to create and edit `/app/public/wp-config.php` with the database information for your Local server. 

In most cases, you can copy and paste `/app/public/wp-config-sample.php` into a new file in the same directory called `wp-config.php`. The Local database credentials are usually as follows:

```php
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
```

## Start the Backend

As this is a headless setup, the backend is decoupled from the frontend and runs on a separate server. Start the backend by clicking "Start Site" in Local.

![A screenshot of the Local by Flywheel interface showing the headless WordPress site options](https://github.com/jsbard/headless-wordpress-react/blob/main/readme-images/start-backend.png)

## Start the Frontend

Navigate to `/your-local-site-directory/app/frontend` in your terminal and run:

`npm start`

A browser window should open with your site up and running. Have fun!

