import React from 'react';



function Header(props) {
    const { getSearch, handleOnchange, search } = props
    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li className="cart"><a href="#">Cart</a></li>
                    </ul>
                </nav>
                <form className="search-form" onSubmit={getSearch}>
                    <input className="search-bar" type="text" onChange={handleOnchange} value={search} placeholder="Search"></input>
                    <button type="submit" className="btn btn-primary icon"></button>
                </form>
            </div>
        </>
    );
}

export default Header;