Edit
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)

------

## General info
This project is simple parking management with specified slots

-----

## Technologies
Project is created with:
* Node js
* NPM prompt.js 
* NPM jest (testing)

-----

## Setup
To run this project, install it locally using:

```
$ cd <to root of project>
```
#### To install dependencies and run automated tests
```
$ bin/setup
```
#### To run the app in interactive mode
```
$ bin/parking_lot
```
#### To run the app with text file containing commands
```
$ bin/parking_lot path/to/file.txt
```

----
## Features
APP is created with following feature:
* App can run in 
    - Interactive mode
    - A text file containing commands
* App can 
    - Create parking space with specified number of slots 
    - Park vehicle with reg number and colour 
    - Emptied the slot when vehicle leaves
* Following data can be retrived 
    - Reg. number of vehicle with specific color
    - Slot number of vehicle parked with specific reg Number
    - Slot numbers of vehicle parked with specific color

--------
