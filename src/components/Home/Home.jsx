import List from '/src/components/List/List';
import useFetch from '/src/hooks/useFetch';

const Home = () => {
    const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            { error && <h1>{ error }</h1> }
            { loading && <p>Loading...</p> }
            { blogs && <List blogs={blogs} title='All Blogs!' /> }
        </div>
    );
}
 
export default Home;