import { Tag } from "./Tag";

export const TagCard = () => {
    return (
        <div className="tags-section">
            <h3 className="tags-title">Kategori &amp; Tag</h3>
            <div className="tags-container">
                <Tag/>
            </div>
        </div>
    );
};
