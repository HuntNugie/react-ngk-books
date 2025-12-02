export const BookInfoCard = () => {
    return (
        <div className="book-info">
            <h1 className="book-title">7 Tips Sukses Kinclong Cari Kerja di Luar Negeri</h1>
            <p className="book-author">Oleh: Yulita Wibowo</p>
            <span className="book-category">Self-Improvement</span>
            <p className="book-price">Rp 130,000</p>
            {/* Details Grid */}
            <div className="details-grid">
                <div className="detail-item">
                    <div className="detail-label">ISBN</div>
                    <div className="detail-value">-</div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">Jumlah Halaman</div>
                    <div className="detail-value">231 pages</div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">Ukuran</div>
                    <div className="detail-value">13,5 x 20 cm</div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">Tanggal Terbit</div>
                    <div className="detail-value">31 May 2023</div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">Format</div>
                    <div className="detail-value">Soft Cover</div>
                </div>
            </div>
        </div>
    );
};
