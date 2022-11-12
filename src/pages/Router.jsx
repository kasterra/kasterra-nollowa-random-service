import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import Main from "./Main";
import Question from "./Question";
import Result from "./Result";
import Loading from "./Loading";

function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="/loading" element={<Loading />}/>
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}

export default Routes;
