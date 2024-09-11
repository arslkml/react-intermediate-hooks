const List = ({ blogs, title }) => {
    return (
        <div className={''}>
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className={'px-3 py-4 mx-5 m-2 border-b-2 hover:shadow-md'} key={blog.id}>
                    <h2 className={'text-xl text-red-400 mb-2'}>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>By: {blog.author}</p>
                </div>
            ))}      
        </div>
    );
}

export default List;