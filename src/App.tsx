import {BrowserRouter as Router} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";

import apolloClient from "./apollo/client";
import {LoginPage} from "./pages/login";

const App = () => (
    <Router>
      <ApolloProvider client={apolloClient}>
        <LoginPage loading={false} />
      </ApolloProvider>
    </Router>
  );

export default App;
