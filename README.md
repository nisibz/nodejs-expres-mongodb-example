# Node express mongodb

This is a project for teaching my intern at my company.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` : port number

`MONGODB_URI` : The URI for connecting to MongoDB Atlas would typically look something like this:

```
mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<database>
```

You will need to replace the following placeholders with your own information:

- `<username>` : Your MongoDB Atlas username
- `<password>` : Your MongoDB Atlas password
- `<clustername>` : The name of your MongoDB Atlas cluster
- `<database>` : The name of the database you want to connect to

Make sure to remove the angle brackets ("<", ">") when inserting your own information.

## Run Locally

Clone the project

```bash
  git clone https://github.com/nisibz/nodejs-expres-mongodb-example.git
```

Go to the project directory

```bash
  cd nodejs-expres-mongodb-example
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
