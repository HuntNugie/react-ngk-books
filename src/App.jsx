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
                <div className="search-section">
                    <div className="search-box">
                        <input type="text" placeholder="Cari judul buku atau nama penulis..." autoComplete="off" />
                        <i className="fas fa-search" />
                    </div>
                </div>
                {/* Books Container */}
                <div className="books-container">
                    {/* Removed dynamic book rendering - add your books here */}
                    <div className="book-card">
                        <div className="book-image">
                            <img
                                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop"
                                alt="Laskar Pelangi"
                            />
                        </div>
                        <div className="book-info">
                            <h5 className="book-title">Laskar Pelangi</h5>
                            <p className="book-author">
                                <i className="fas fa-pen-fancy" />
                                Andrea Hirata
                            </p>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-image">
                            <img
                                src="https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=500&fit=crop"
                                alt="Bumi"
                            />
                        </div>
                        <div className="book-info">
                            <h5 className="book-title">Bumi</h5>
                            <p className="book-author">
                                <i className="fas fa-pen-fancy" />
                                Tere Liye
                            </p>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-image">
                            <img
                                src="https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=400&h=500&fit=crop"
                                alt="Pulang"
                            />
                        </div>
                        <div className="book-info">
                            <h5 className="book-title">Pulang</h5>
                            <p className="book-author">
                                <i className="fas fa-pen-fancy" />
                                Leila S. Chudori
                            </p>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-image">
                            <img
                                src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=500&fit=crop"
                                alt="Filosofi Kopi"
                            />
                        </div>
                        <div className="book-info">
                            <h5 className="book-title">Filosofi Kopi</h5>
                            <p className="book-author">
                                <i className="fas fa-pen-fancy" />
                                Dee Lestari
                            </p>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-image">
                            <img
                                src="https://images.unsplash.com/photo-1527482797697-8795b1a55a45?w=400&h=500&fit=crop"
                                alt="Negeri Para Bedebah"
                            />
                        </div>
                        <div className="book-info">
                            <h5 className="book-title">Negeri Para Bedebah</h5>
                            <p className="book-author">
                                <i className="fas fa-pen-fancy" />
                                Tere Liye
                            </p>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-image">
                            <img
                                src="https://images.unsplash.com/photo-1524614635684-ecceb4a1b85d?w=400&h=500&fit=crop"
                                alt="Petualangan Sherlock Holmes"
                            />
                        </div>
                        <div className="book-info">
                            <h5 className="book-title">Petualangan Sherlock Holmes</h5>
                            <p className="book-author">
                                <i className="fas fa-pen-fancy" />
                                Arthur Conan Doyle
                            </p>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-image">
                            <img
                                src="https://images.unsplash.com/photo-1506744038566-a3a7f57efd51?w=400&h=500&fit=crop"
                                alt="Sang Pemimpi"
                            />
                        </div>
                        <div className="book-info">
                            <h5 className="book-title">Sang Pemimpi</h5>
                            <p className="book-author">
                                <i className="fas fa-pen-fancy" />
                                Andrea Hirata
                            </p>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-image">
                            <img
                                src="https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=500&fit=crop"
                                alt="Cantik Itu Luka"
                            />
                        </div>
                        <div className="book-info">
                            <h5 className="book-title">Cantik Itu Luka</h5>
                            <p className="book-author">
                                <i className="fas fa-pen-fancy" />
                                Eka Kurniawan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
