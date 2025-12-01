import { useEffect, useState } from "react";
import { BookCard } from "./components/BookCard";
import { SearchInput } from "./components/SearchInput";
import axios from "axios";
function App() {
 const [book,setBook] = useState({
    books : [],
    pagination : {}
 });
  const api = import.meta.env.VITE_API_URL;
  useEffect(()=>{
    const request = async()=>{
      const res = await axios.get(`${api}`);
      const data = res.data;
      setBook(data)
    }
    request();
  },[])
    return (
        <>
            {/* Header */}
            <div className="header">
                <div className="container">
                    <h1>📚 NGK BOOK</h1>
                    <p>Literasi itu penting</p>
                </div>
            </div>
            {/* Main Content */}
            <div className="container">
                {/* Search Section */}
              <SearchInput/>
                {/* Books Container */}
                <div className="books-container">
                    {/* Removed dynamic book rendering - add your books here */}
                   {book.books.map((el,index)=>{
                    return (<BookCard key={index} data={el}/>)
                   })}
                </div>
            </div>
        </>
    );
}

export default App;
