export const BookCard = () => {
    return (
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
    );
};
