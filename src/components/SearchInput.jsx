export const SearchInput = ({onKeyword}) => {
    var timer ;
    const handleKeyword = (e)=>{   
        clearTimeout(timer); 
        timer = setTimeout(()=>{        
            onKeyword(e.target.value)
        },500)
    }

    return (
        <div className="search-section">
            <div className="search-box">
                <input type="text" onChange={handleKeyword} placeholder="Cari judul buku atau nama penulis..." autoComplete="off" />
                <i className="fas fa-search" />
            </div>
        </div>
    );
};
