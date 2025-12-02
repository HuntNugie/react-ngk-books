export const BookInfoCard = ({data}) => {
    return (
        <div className="book-info">
            <h1 className="book-title">{data.title}</h1>
            <p className="book-author">Oleh: {data.author.name || "kosong"}</p>
            <span className="book-category">{data.category.name}</span>
            <p className="book-price">Rp {data.details.price}</p>
            {/* Details Grid */}
            <div className="details-grid">
                <div className="detail-item">
                    <div className="detail-label">ISBN</div>
                    <div className="detail-value">-</div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">Jumlah Halaman</div>
                    <div className="detail-value">{data.details.total_pages}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">Ukuran</div>
                    <div className="detail-value">{data.details.size}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">Tanggal Terbit</div>
                    <div className="detail-value">{data.details.published_date}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">Format</div>
                    <div className="detail-value">{data.details.format}</div>
                </div>
            </div>
        </div>
    );
};
