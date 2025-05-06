import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, bookId, bookName, author, review, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className="py-8 bg-gray-800 rounded-2xl">
                    <img className="h-[250px]"
                        src={image}
                        alt='image' />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-5">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-blue-900">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        <div >
                            <p className="p-2">Name : {bookName}</p>
                            <p className="p-2">Author : {author}</p>
                        </div>
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{review}</p>
                    <div className="divider divider-info"></div>
                    <div className="flex items-center">
                        <p >Category : {category}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;