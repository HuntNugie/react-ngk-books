import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-custom">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        📚 NGK BOOK
                    </Link>
                </div>
            </nav>
        </>
    );
};
