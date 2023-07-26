## Description

    Project to receive a csv file from users, and extract the information from it and store it in the sqlite database. name, city, country, favorite_sport



## Installation

```bash
$ npm install

OR

$ yarn dev
```



## ENDPOINT

      http://localhost:3000/updatefile {
        this route is for you to send the csv file and the name of the key "file". it will store the data in the database. A test file already exists in the project with the name "FileTest.csv". you can use it to test, because the application only accepts csv in this column model.
        NOTE: DO NOT ATTEMPT TO ENTER A CSV TWICE. THE APPLICATION HAS ERROR HANDLING FOR REPEATED CSV. USE CLEAR ROUTE BEFORE ENTERING AGAIN
        Example: http://localhost:3000/updatefile
      }  

    http://localhost:3000/?q=tableForSearch {
        here you pass a parameter in which it will go to the database and will return all the data of the column name that you passed, that is, in this parameter it only accepts valid names of each column
        Example: http://localhost:3000/?q=city
    }

    http://localhost:3000/?q=tableForSearch&name=nameElementOfDataBase {
        here you pass the name of the table, and the name of the element you want to look for in it, if the element exists, it will return all the data from the database. i.e. Otherwise, it will return an error.
        Example: http://localhost:3000/?q=city&name=New York
    }

    http://localhost:3000/clear {
        here you need to use it whenever you insert another csv, otherwise the data from the old one will mix with the new file, that is, always clean it before inserting a new one
        Example: http://localhost:3000/clear
    }


## Test

   ```bash
$ npm run test

OR

$ yarn test
```   



## Docker 

    RUN: docker build -t uploud:1.0.0 .
    RUN: docker run -d -p 3000:3000 uploud:1.0.0

    