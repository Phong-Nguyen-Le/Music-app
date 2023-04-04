import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/Home/components/Body/DetailPage/DetailPage";
import Shop from "./pages/Shop";
import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment } from "react";
import AuthProvider from "./components/Context/AuthProvider";

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <route.component />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
