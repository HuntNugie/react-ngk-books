export const BookCard = ({data}) => {
    return (
        <div className="book-card">
            <div className="book-image">
                <img
                    src={data.cover_image}
                    alt="Laskar Pelangi"
                />
            </div>
            <div className="book-info">
                <h5 className="book-title">{data.title}</h5>
                <p className="book-author">
                    <i className="fas fa-pen-fancy" />
                   {data.author.name}
                </p>
            </div>
        </div>
    );
};
