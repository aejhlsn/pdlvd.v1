import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './style.css';

import { NavBar } from "../../components/navbar";
import { Menu_NavBar } from '../../components/subnavbar_prof';
import { ProductItemFr } from '../../components/product_item';
import { Profile_Header } from '../../components/profile_navigator';

//to be edited 
import  headerphoto from "../../assets/header_photo.png";
import profilePhoto from "../../assets/profile_photo.png"

export const ProfilePage = () => {
    return (
    <div className="body-prop"> 
        <NavBar/>
        <div className="col-md-10 mx-auto">
            <div className="header-photo-container mx-auto" id="header-prop-photo"> 
                <img className="header-photo" src={ headerphoto } alt="profileHeader"/>
            </div>  
            <div className="row ppb-row-prop">
                <div className="ppb-profile-photo col-md-3"> 
                    <img className="prof-photo" src={ profilePhoto } alt="profilePhoto"/>
                </div>
                <div className="ppb-button-ed col-md-2"> 
                    <button className="button-profile-prop" id="button-profile-prop" type="button">
                        Edit Profile
                    </button>
                </div>  
            </div>
            <div className="nmrate-cont mx-auto">
                <div className="row p-name"> 
                    <span className="pr-name col-md-4" id="pr-name"> Lorem Ipsum Store </span>
                </div>
                <div className="us-name">
                    <a href="#" className="usr-name" id="usr-name"> @loremipsumstore </a>
                </div>
                <div className="pro-bio">
                    <span className='bio-prop' id="bio-prop"> Lorem ipsum dolor sit amet. Eum error cumque in consequatur incidunt et galisum repellat. Aut iusto animi id laboriosam distinctio ea dignissimos aperiam nam  </span>
                </div>
                <div className="row ff-info-row"> 
                    <span>
                        <a href="#" className="flwng-info-prop" id="flwng-info-prop"> <span className='ff-num'> 0 </span> <span className='fll-word'> Following </span> </a>
                        <span className='divi-prop' id="divi-prop"> &#183; </span>
                        <a href="#" className="fl-info-prop" id="fl-info-prop"> <span className='ff-num'> 0 </span>  <span className='fll-word'> Followers </span> </a>
                    </span>
                </div>
            </div>
        </div>
        <div className="p-body row col-md-10 mx-auto">
            <div className="aside-profile col-md-2">
                <Information_Socials/>
            </div>
            <></>
            <div className="col-md-9 side-2-prop">
                    <Menu_NavBar/>
                    <div className='header-menu-properties'>
                        <Profile_Header pfName="Specials" pfLink="#"/>   
                    </div>
                    <div className='itm-frm'>
                        <ProductItemFr/>
                        <ProductItemFr/>
                        <ProductItemFr/>
                        <ProductItemFr/>
                    </div>
                    <div className='header-menu-properties'>
                        <Profile_Header pfName="Menu" pfLink="#"/>   
                    </div>
                    <div className="menu-summ" id="menu-summ"> 
                        
                    </div>
                    <div className='header-menu-properties'>
                        <Profile_Header pfName="Picks" pfLink="#"/>   
                    </div>
                    <div className='itm-frm'>
                        <ProductItemFr/>
                        <ProductItemFr/>
                        <ProductItemFr/>
                        <ProductItemFr/>
                    </div>
            </div>
        </div>
    </div>);
};



const sample_data = [
    {
        social_media_name: "facebook",
        id: 1,
    },
    {
        social_media_name: "twitter",
        id: 2,
    },
    {
        social_media_name: "",
        id: 3
    }
]

export const Information_Socials = () => {

    // Put the content in the list 
    //  render the list 

    const socialItems = sample_data.map(socialLinks =>
        <div className="links" key={socialLinks.id}> {socialLinks.social_media_name} </div> 
        );


    return(
    <div className="social-media-information">
        <div className="row information-smd"> 
            <div className="s-links sl-prop"> {socialItems} </div>
        </div>
    </div>
    );
}




{/*

const information_sheet = [

    //insert if-else depending on the json name
    //if address is not equals to " " then put certain logo?


    { 
        address: "Sample Address Insert"
    },
    { 
        address: "Sample Address Insert"
    },
]

export const Information_proInfo = () => {

    const informationDetails = information_sheet.map(
        infosheet => <div className="info-sheet-re"> </div>

    );

    return(
        <div className="us-information col-md-2">
            <div className="inf-prop"> 
                <span className='inf-header' id="inf-header"> Information </span>
            </div>
            <div className="inf-bod row"> 
            </div>
            
        </div>
    )

}*/}