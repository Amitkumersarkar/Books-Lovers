import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDB";

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    // console.log(data, book, bookId, id);
    // destructing data
    const { bookId: currentId, image } = book;
    const handleAddToRead = (id) => {
        addToStoredReadList(id);
    }
    return (
        <div className="my-12">
            <h2>book details : {bookId}</h2>
            <img className="w-48" src={image} alt="" />
            <br />
            <button onClick={() => handleAddToRead(bookId)} className="btn btn-outline font-bold bg-blue-400 mr-4 ">Read</button>
            <button className="btn btn-outline font-bold bg-green-600">WishList</button>
        </div>
    );
};

export default BookDetail;