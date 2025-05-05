
const Book = ({ book }) => {
    const { image, bookName, author, review, tags } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-6">
            <figure className="py-8 bg-gray-800 rounded-2xl">
                <img className="h-[250px]"
                    src={image}
                    alt='image' />
            </figure>
            <div className="card-body">
                <div className="flex justify-center gap-5">
                    {
                        tags.map(tag => <button className="btn btn-xs bg-pink-900">{tag}</button>)
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
                {/* <div className="divider"></div> */}
            </div>
        </div>
    );
};

export default Book;