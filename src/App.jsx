import { BookCard } from "./components/BookCard";
import { SearchInput } from "./components/SearchInput";

function App() {
    return (
        <>
            {/* Header */}
            <div className="header">
                <div className="container">
                    <h1>📚 NGK BOOK</h1>
                    <p>Literasi itu penting</p>
                </div>
            </div>
            {/* Main Content */}
            <div className="container">
                {/* Search Section */}
              <SearchInput/>
                {/* Books Container */}
                <div className="books-container">
                    {/* Removed dynamic book rendering - add your books here */}
                   <BookCard/>
                </div>
            </div>
        </>
    );
}

export default App;
