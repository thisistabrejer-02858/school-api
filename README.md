# School API (Node.js + MySQL)

## Overview
This project provides APIs to add schools and fetch schools sorted by proximity to a user’s location.

## Features
- Add new schools
- Fetch schools sorted by distance
- Input validation
- Clean architecture

## Tech Stack
- Node.js
- Express.js
- MySQL

## API Endpoints

### Add School
POST /api/schools/addSchool

Body:
{
  "name": "School Name",
  "address": "City",
  "latitude": 28.7,
  "longitude": 77.1
}

### List Schools
GET /api/schools/listSchools?latitude=28.7&longitude=77.1

## How to Run
1. Clone repo
2. Run `npm install`
3. Setup `.env`
4. Run `npx nodemon server.js`

## Author
Tabrej Ansari