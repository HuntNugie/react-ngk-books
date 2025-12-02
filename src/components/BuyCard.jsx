export const BuyCard = ({buy}) => {
    return (
        <>
            <div className="buy-section">
                <h3>Beli Buku</h3>
                {buy.map((el)=>{
                    return (<a href={el.url} className="buy-link">
                    {el.store}
                </a>)
                })}
            </div>
        </>
    );
};
