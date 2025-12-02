import {useEffect, useState} from "react";
import {AboutCard} from "../components/AboutCard";
import {BookImage} from "../components/BookImage";
import {BookInfoCard} from "../components/BookInfoCard";
import {BuyCard} from "../components/BuyCard";
import {TagCard} from "../components/TagCard";
import {useParams} from "react-router-dom";
import axios from "axios";
import {LoadingDetail} from "../components/LoadingDetail";
export default function Detail() {
    const api = import.meta.env.VITE_API_URL;
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const request = async () => {
            const res = await axios.get(`${api}?_id=${id}`);
            const data = res.data;
            setDetail(data);
            setLoading(false);
        };
        request();
    }, []);

    return (
        <>
            {loading ? (
                <LoadingDetail />
            ) : (
                <>
                    <div className="book-cover-section">
                        {/* Book Cover */}
                        <BookImage url={detail.cover_image} />
                        {/* Book Info */}
                        <BookInfoCard data={detail} />
                    </div>
                    {/* Summary Section */}
                    <AboutCard summary={detail.summary} />
                    {/* Tags Section */}
                    <TagCard tags={detail.tags} />
                    {/* Buy Section */}
                    <BuyCard buy={detail.buy_links} />
                </>
            )}
        </>
    );
}
