import { NavLink, Link } from 'react-router-dom'

function NavBar(){
    return (
        <>
            <Link to="/">
                <img src="marvel-logo.png" alt="marvel logo" height="100" />
            </Link>
            <nav>
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                <NavLink to="/characters" activeClassName="active">BrowseCharacters</NavLink>    
                <NavLink to="/comics" activeClassName="active">Comics</NavLink>
            </nav>
        </>
    )
}

export default NavBar;