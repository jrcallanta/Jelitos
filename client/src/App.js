import { Routes, Route } from "react-router-dom";
import { createPortal } from "react-dom";

import NavBar from "./components/NavBar/NavBar.js";
import MainPage from "./pages/main/MainPage.js";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ContactPage from "./pages/contact/ContactPage";

import { useAppLogic } from "./_AppLogic.js";
import "./styles/css/App.css";

function App() {
    useAppLogic();

    return (
        <>
            <NavBar />
            <div className={"App"}>
                {createPortal(
                    <NavBar fixed={true} />,
                    document.getElementById("overlay-root")
                )}

                <div className={"App__content"}>
                    <Routes>
                        <Route path='/'>
                            <Route path='' element={<MainPage />} />
                            <Route path='projects'>
                                <Route
                                    path=':id/*'
                                    element={<ProjectsPage showModal />}
                                >
                                    <Route
                                        path=':version/*'
                                        element={<ProjectsPage showModal />}
                                    />
                                    <Route
                                        path=''
                                        element={<ProjectsPage showModal />}
                                    />
                                    <Route
                                        path='*'
                                        element={<ProjectsPage showModal />}
                                    />
                                </Route>

                                <Route path='' element={<ProjectsPage />} />
                                <Route path='*' element={<ProjectsPage />} />
                            </Route>

                            <Route path='contact'>
                                <Route path='' element={<ContactPage />} />
                                <Route path='*' element={<ContactPage />} />
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
