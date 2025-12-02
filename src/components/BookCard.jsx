import { useNavigate } from "react-router-dom";
export const BookCard = ({data}) => {
    const navigate = useNavigate();
    const handleKlik = (e)=>{
        const id = e.currentTarget.dataset.id;
        navigate(`/detail/${id}`)
    }

    return (
        <div className="book-card" onClick={handleKlik} data-id={data._id}>
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
