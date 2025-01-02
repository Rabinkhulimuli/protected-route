
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./component/layout";
import About from "./component/about";
import ContextProvider from "./component/contextProvider";
import Login from "./component/login";
import Special from "./component/special";
import ProtectedRoute from "./component/protectedRoute";
import Home from "./component/home";
function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route  path="/special" element={<Special/>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
