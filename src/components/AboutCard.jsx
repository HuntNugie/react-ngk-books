export const AboutCard = ({summary}) => {
    return (
        <div className="summary-section">
            <h2 className="summary-title">Tentang Buku</h2>
            <p className="summary-text">
              {summary}
            </p>
        </div>
    );
};
