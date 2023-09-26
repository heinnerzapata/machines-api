const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

module.exports = {
  //url: `mongodb+srv://heinnerzapata1991:gabdOOxEDcrC3Zvd@machines01.ubpmwpq.mongodb.net/?retryWrites=true&w=majority`,
  url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`,
};
