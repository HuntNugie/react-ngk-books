export const SearchInput = () => {
    return (
        <div className="search-section">
            <div className="search-box">
                <input type="text" placeholder="Cari judul buku atau nama penulis..." autoComplete="off" />
                <i className="fas fa-search" />
            </div>
        </div>
    );
};
