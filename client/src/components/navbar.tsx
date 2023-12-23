import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import '../components-css/navbar_css.css';
import '../components-css/messages.css';

import { ProfileMessages } from './messages';

export const NavBar = () => {
    return (
        <>
        <div className='navbar navbar-expand-lg mx-auto nvbr-custom col-lg-10'> 
            <div className="navbar-brand nvbrprop"> puds blvd </div> 
            <form className="input-group search-custom col-3 offset-1"> 
                <input className="form-control form-btn-custom" type="search"/>
                <button className="btn btn-btn-custom" type="submit"> Search </button>
            </form>
            <div className="buttons-group">
                <div className="nav-item dropdown"> {/* Notifications */}
                    <a className="nav-link btn-drpdown-custom" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                        <div className="btn-face"> N </div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className='dropdown-item' href="#"> Item 1 </a>
                        <a className='dropdown-item' href="#"> Item 1 </a>
                    </div>
                </div>
                <div className="nav-item dropdown m-btn-custom-1"> {/* Messages */}
                    <a className="nav-link btn-drpdown-custom" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                        <div className="btn-face"> M </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end m-prop container-fluid" aria-labelledby="navbarDropdownMenuLink">
                       <ProfileMessages/>
                    </div>
                </div>
                <div className="nav-item dropdown m-btn-custom-1"> {/* Settings */}
                    <a className="nav-link btn-drpdown-custom" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                        <div className="btn-face"> S </div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className='dropdown-item' href="#"> Item 1 </a>
                        <a className='dropdown-item' href="#"> Item 1 </a>
                    </div>
                </div>
            </div>
        </div>

        </>
    );


}