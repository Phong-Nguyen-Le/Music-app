import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment } from "react";
import AuthProvider from "./components/Context/AuthProvider";
import { PrivateRoute } from "./routes/routes";
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Router>
            <ToastContainer />
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
                        <Route element={<PrivateRoute />}>
                            {privateRoutes.map((route, index) => {
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
                        </Route>
                    </Routes>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
