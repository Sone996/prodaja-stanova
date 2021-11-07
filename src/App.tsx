import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import "./App.scss";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Login from "./pages/shared/Login";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  const queryCLient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
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
            <ProtectedRoute path="*" component={AppLayout}></ProtectedRoute>
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
