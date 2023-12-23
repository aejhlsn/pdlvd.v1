import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../components-css/profile_navigator.css';

export const Profile_Header = (props: any) => {
    return(
        <div className="header-f">
            <span className="header-name-prop" id="header-name"> Lorem Ipsum { props.pfName } </span>
            <a className="smore-prop" id="smore" href={ props.pfLink }> See More </a>
        </div>
    );
}