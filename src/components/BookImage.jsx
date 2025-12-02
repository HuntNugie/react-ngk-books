export const BookImage = ({url}) => {
    return (
        <div className="book-cover">
            <img
                src={url}
                alt="berhasil"
                className="book-cover-img"
            />
        </div>
    );
};
