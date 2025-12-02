import {Outlet} from "react-router-dom";
import { Navbar } from "../components/NavbarDetail";
export default function DetailLayout() {
    return (
        <>
            <Navbar/>
            {/* Main Content */}
            <div className="container book-detail-container">
                {/* Back Button */}
                <a href="index.html" className="back-btn">
                    ← Kembali ke Beranda
                </a>
                {/* Book Cover & Info Section */}
                <Outlet/>
            </div>
        </>
    );
}
