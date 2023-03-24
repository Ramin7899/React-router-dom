import { useParams, useNavigate,useLocation } from "react-router-dom";
import { getBook, deleteBook } from '../data/data';

const Book = () => {

    const params = useParams()
    const book = getBook(parseInt(params.bookId))
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <main style={{ padding: "1rem", width: '100%' }}>
            <h2>
                قیمت کل {`${book.amount} تومان`}
            </h2>
            <p>
                {book.name}
                {" "}
                کد
                {" "}

                {book.number}
            </p>
            <p>
                تاریخ انتشار:
                {" "}
                {book.due}
            </p>
            <button onClick={() => {
                deleteBook(book.number);
                navigate('/books' + location.search)
            }}>
                حذف کتاب
            </button>
        </main>
    )
}
export default Book 