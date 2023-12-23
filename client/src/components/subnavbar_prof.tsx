import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../components-css/subnavbar_prof.css';


export const Menu_NavBar = () => {
    return(
        <div>
            <div className='navbar navbar-expand-lg nav-prop-2'> 
                <div className="navi-group">
                        <div className="navbar-nav"> 
                            <div className='nav-item p-4'> 
                                <a className="home-btn btn-c-schm" href="#"> Home </a>
                            </div>
                            <div className='nav-item p-4'> 
                                <a className="menu-btn btn-c-schm" href="#"> Menu </a>  
                            </div>
                            <div className='nav-item p-4'> 
                                <a className="up-btn btn-c-schm" href="#"> Updates </a>  
                            </div>
                            <div className='nav-item p-4'> 
                                <a className="rvw-btn btn-c-schm" href="#"> Review </a> 
                            </div>
                        </div> 
                </div>  
            </div>
        </div>
    );


}