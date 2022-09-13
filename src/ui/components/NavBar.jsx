import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { SelectPublisher } from '../../heroes/components/SelectPublisher';
import { startLogout } from '../../store/auth/thunks';

// TODO: Primera Tarea: En el componente Navbar.jsx agregar la clase active utilizando el callback que ofrecen los NavLinks de react-router-dom en su atributo className.
import { useSelector } from "react-redux";

export const Navbar = () => {


    const isActive = ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`
    
    const dispatch = useDispatch();

    const onLogout = ()=>{
        dispatch(startLogout());
    }

    const { displayName } = useSelector( state => state.auth )
        

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <SelectPublisher/>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={isActive} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
 
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className="nav-item nav-link text-primary">
                        { displayName }
                   </span>
                   <button 
                        className='btn nav-item nav-link'
                        onClick={onLogout}
                   > 
                        Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}