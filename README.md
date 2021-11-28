# # Countdownah ```1.0```
*Custom countdown website*

BETA:       https://countdownah.herokuapp.com/
RELEASE:    https://cowntdownah.davegabe.it/

## Features

- **Create sharable countdown**:     Choose a name, a date and create your countdown.
- **Responsive**:           Better user experience from any device.

## Future Improvements

- **Public vs private countdowns(?)**

## Setup (without docker)

- Clone repo
- Install dependencies
- Create a mongodb
- Create .env file with:
    - DB_HOST= url db    (ex. *address*:*port*/*database*)
    - DB_USER= user db
    - DB_PASS= password db
- That's it. Now ```npm start``` and you'll find it at *localhost:2728*

## Setup (with docker)

- Pull using docker ```docker pull davegabe/countdownah```
- Create a mongodb
- Prepare the following variables for the next step:
    - DB_HOST= url db    (ex. *address*:*port*/*database*)
    - DB_USER= user db
    - DB_PASS= password db
- Run the image using ```docker run -d -it -e DB_HOST="yourvalue" -e DB_USER="yourvalue" -e DB_PASS="yourvalue" -p 2728:2728 davegabe/countdownah``` and you'll find it at *localhost:2728*
