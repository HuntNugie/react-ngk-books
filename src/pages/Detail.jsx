import { AboutCard } from "../components/AboutCard";
import { BookImage } from "../components/BookImage";
import { BookInfoCard } from "../components/BookInfoCard";
import { BuyCard } from "../components/BuyCard";
import { TagCard } from "../components/TagCard";

export default function Detail() {
    return (
        <>
            <div className="book-cover-section">
                {/* Book Cover */}
                <BookImage/>
                {/* Book Info */}
               <BookInfoCard/>
            </div>
            {/* Summary Section */}
           <AboutCard/>
            {/* Tags Section */}
            <TagCard/>
             {/* Buy Section */}
          <BuyCard/>
        </>
    );
}
