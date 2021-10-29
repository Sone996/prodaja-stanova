import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";

import Login from "./pages/shared/Login";
import AppLayout from "./layouts/AppLayout";

function App() {
  const queryCLient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="relative w-screen h-screen overflow-hidden flex">
      <QueryClientProvider client={queryCLient}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/">
              <AppLayout />
            </Route>
            {/* <ProtectedRoute
                path="*"
                component={AppLayout}
              ></ProtectedRoute> */}
            {/* <Route path="*" exact>
              <Redirect to={{ pathname: "/login" }} />
            </Route> */}
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
