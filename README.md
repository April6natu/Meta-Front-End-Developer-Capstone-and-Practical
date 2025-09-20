# Little Lemon Restaurant Reservation App

This project is a React-based web application for Little Lemon, a Mediterranean restaurant. It allows users to explore the restaurant, view daily specials, and make table reservations online.

## Features

- **Interactive Homepage:** Welcoming introduction, restaurant story, and today's specials with images and booking buttons.
- **Header with Logo:** Displays the Little Lemon logo and navigation links.
- **Booking System:** Users can reserve a table by filling out a form with their details.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Accessible:** Uses semantic HTML and ARIA attributes for better accessibility.

## Project Structure

```
src/
│── App.js       # Main app component with routing
│── index.js     # Entry point
│── index.css    # Global styles
│
├── pages/
│   ├── HomePage.js      # Homepage with specials and booking links
│   └── BookingPage.js   # Booking form page
│
├── components/
│   ├── Header.js        # Logo and navigation
│   ├── Nav.js           # Navigation bar
│   ├── Footer.js        # Footer section
│   ├── BookingForm.js   # Reservation form
│   └── BookingSlot.js   # (Optional) Booking slot display
│
├── assets/
│   ├── little-lemon-logo.png
│   ├── greek-salad.jpg
│   ├── lemon-garlic-salmon.jpg
│   └── bruschetta.jpg
```

## How to Use

1. **Install dependencies:**
	```sh
	npm install
	```
2. **Start the development server:**
	```sh
	npm start
	```
3. **Visit the app:** Open [http://localhost:3000](http://localhost:3000) in your browser.

## Booking a Table

- Click "Reserve a Table" on the homepage or in the navigation.
- Fill out your name, date, time, and number of guests.
- Submit the form to confirm your reservation.

## Technologies Used

- React
- React Router
- CSS

## Credits

Created as part of the Meta Front-End Developer Capstone and Practical course.
src/
│── App.js       <-- will hold the lifted state / reducer
│── index.js
│── index.css
│
├── pages/
│   ├── HomePage.js
│   └── BookingPage.js
│
├── components/
│   ├── Nav.js
│   ├── Footer.js
│   └── BookingForm.js
