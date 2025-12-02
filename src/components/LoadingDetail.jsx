export const LoadingDetail = () => {
    return (
        <>
            {/* Loading Skeleton */}
            <div className="book-cover-section">
                {/* Book Cover Skeleton */}
                <div className="book-cover">
                    <div className="skeleton-cover shimmer" />
                </div>
                {/* Book Info Skeleton */}
                <div className="book-info">
                    <div className="skeleton-title shimmer" />
                    <div className="skeleton-author shimmer" />
                    <div className="skeleton-category shimmer" />
                    <div className="skeleton-price shimmer" />
                    {/* Details Grid Skeleton */}
                    <div className="details-grid">
                        <div className="detail-item">
                            <div className="skeleton-label shimmer" />
                            <div className="skeleton-value shimmer" />
                        </div>
                        <div className="detail-item">
                            <div className="skeleton-label shimmer" />
                            <div className="skeleton-value shimmer" />
                        </div>
                        <div className="detail-item">
                            <div className="skeleton-label shimmer" />
                            <div className="skeleton-value shimmer" />
                        </div>
                        <div className="detail-item">
                            <div className="skeleton-label shimmer" />
                            <div className="skeleton-value shimmer" />
                        </div>
                        <div className="detail-item">
                            <div className="skeleton-label shimmer" />
                            <div className="skeleton-value shimmer" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Summary Section Skeleton */}
            <div className="summary-section">
                <div className="skeleton-summary-title shimmer" />
                <div className="skeleton-summary-line shimmer" />
                <div className="skeleton-summary-line shimmer" />
                <div className="skeleton-summary-line shimmer" style={{width: "80%"}} />
            </div>
            {/* Tags Section Skeleton */}
            <div className="tags-section">
                <div className="skeleton-tags-title shimmer" />
                <div className="tags-container">
                    <div className="skeleton-tag shimmer" />
                    <div className="skeleton-tag shimmer" />
                    <div className="skeleton-tag shimmer" />
                    <div className="skeleton-tag shimmer" />
                    <div className="skeleton-tag shimmer" />
                </div>
            </div>
            {/* Buy Section Skeleton */}
            <div className="buy-section">
                <div className="skeleton-buy-title shimmer" />
                <div className="skeleton-buy-link shimmer" />
            </div>
        </>
    );
};
