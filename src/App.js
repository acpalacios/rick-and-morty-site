import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@chakra-ui/core";
import List from "./components/list";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Switch>
            <Route exact path="/" component={List}></Route>
          </Switch>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  );
};

export default App;
