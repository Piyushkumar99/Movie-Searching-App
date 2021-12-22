import "./Header.css";

const Header = () => {
    return (
        <div>
            <span className='header' onClick={() => window.scroll(0, 0)}>🎥 Popcorn Daze 🍿</span>
        </div>
    )
}

export default Header;
