import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export const NavBar = () => {

    const navigate = useNavigate ();

    const {user,logOut} = useContext(AuthContext);
    const onLogOut = () => {
        
        logOut()
        navigate('/login', {replace: true});
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                      className={({isActive})=>`nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                   <span className="nav-item nav-link text-primary">
                        {user?.name}
                   </span>

                   <button
                        className="nav-item nav-link btn"
                        onClick={onLogOut}
                   >
                        Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}