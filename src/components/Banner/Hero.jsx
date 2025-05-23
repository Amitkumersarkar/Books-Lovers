import '../../../public/books.jpg';
const Hero = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <img 
                    src="books.jpg"
                    className="w-full rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;