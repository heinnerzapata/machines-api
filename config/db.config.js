const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

module.exports = {
  url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`,
};
