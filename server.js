var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");

//Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

//Root Resolver
var root = {
  message: () => `Hello World`
};

//Express server
var app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000, () =>
  console.log("Express GraphQl at localhost:4000/graphql")
);
