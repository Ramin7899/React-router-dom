import { getBooks } from '../data/data';
import { Link, Outlet, NavLink, useSearchParams, useLocation } from 'react-router-dom';

const Books = () => {
    const books = getBooks()
    const location = useLocation();
    const [SearchParams, setSearchParams] = useSearchParams();

    return (
        <div className="App" style={{ display: "flex" }}>
            <nav style={{ borderLeft: "1px solid", padding: "1rem" }}>
                <input onChange={event => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter })
                    } else {
                        setSearchParams({})
                    }
                }}
                    value={SearchParams.get('filter') || ""} type="text" placeholder='جستوجو کتاب' />
                {

                    books.filter((book) => {
                        let filter = SearchParams.get('filter')
                        if (!filter) return true;
                        let name = book.name.toLowerCase()
                        return name.startsWith(filter.toLowerCase())
                    })

                        .map((book) => (
                            <NavLink style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: '1rem',
                                    color: isActive ? 'red' : 'black'
                                }
                            }} to={`/books/${book.number}${location.search}`} key={book.number}>
                                {book.name}
                            </NavLink>
                        ))
                }
            </nav>
            <Outlet />
        </div >
    )
}
export default Books
