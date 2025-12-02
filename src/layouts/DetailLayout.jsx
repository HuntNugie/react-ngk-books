import {Link, Outlet} from "react-router-dom";
import { Navbar } from "../components/NavbarDetail";
export default function DetailLayout() {
    return (
        <>
            <Navbar/>
            {/* Main Content */}
            <div className="container book-detail-container">
                {/* Back Button */}
                <Link to="/" className="back-btn">
                    ← Kembali ke Beranda
                </Link>
                {/* Book Cover & Info Section */}
                <Outlet/>
            </div>
        </>
    );
}
