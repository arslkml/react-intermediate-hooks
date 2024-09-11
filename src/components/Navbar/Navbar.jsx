const Navbar = () => {
    return ( 
        <nav className={'p-20 flex items-center max-w-xl my-0 mx-auto border-b-2 border-white'}>
            <h1 className={'text-pink font-bold text-3xl'}>Arsal</h1>
            <div className={'ml-auto'} >
                <a href="/" className={'font-semibold text-lg ml-4 p-2 hover:text-pink-500 transition-all'}>Home</a>
                <a href="/contact" className={'font-semibold text-lg ml-4 p-2 hover:text-pink-500 transition-all'}>Contact</a>
                <a href="/about" className={'font-semibold text-lg ml-4 p-2 text-white bg-pink-600 rounded-lg'}>About</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
