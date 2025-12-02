import { Tag } from "./Tag";

export const TagCard = ({tags}) => {
    return (
        <div className="tags-section">
            <h3 className="tags-title">Kategori &amp; Tag</h3>
            <div className="tags-container">
                {tags.map((el,index)=>{
                    return <Tag key={index} data={el} />
                })}
            </div>
        </div>
    );
};
