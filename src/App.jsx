import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailLayout from "./layouts/DetailLayout";
import Detail from "./pages/Detail";
import Index from "./pages/Index";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* untuk detail */}
                <Route element={<DetailLayout />}>
                    <Route path="/detail/:id" element={<Detail />} />
                </Route>
                <Route path="/" element={<Index/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
