import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../components-css/messages.css'

import hunter from '../assets/hunter.jpg';

export const ProfileMessages = () => {

    return(
        <div className='msg-prop'>
            <div className='msg-header'> 
                <header className='m-header' id='m-header'> Messages </header>
            </div>
            <div className='msgs-contner'>
                <div className='prop'>
                    <MessageRender/>
                </div>
            </div>
            <div className="m-btn-container">
                <button className="m-btn-prop" id="m-btn-prop"> View More </button>
            </div>
        </div>
    );

}

const MessageRender = () => {
    
    const renderedMsg =
        message_data.map((mdata, index) => 
            <div key={index}>
                <div className={mdata.status === true ? 'msg-proper-op' : 'msg-proper-uop'}>
                    <div>
                        <img className='msg-unopened' src={ mdata.user_image }/>
                    </div>
                    <div className='msg-content-prop'>
                        <div className='msgr-details'>
                            <span className={mdata.status === true ? 'm-name-op' : 'm-name-uop' }> {mdata.message_user} </span>
                            <span className={mdata.status === true ? 'm-time-op' : 'm-time-uop' }> {mdata.message_time}</span>
                        </div>
                        <div className={mdata.status === true ? 'm-content-op' : 'm-content-uop'}>
                            {mdata.message_content}
                        </div>
                    </div>
                </div>
            </div>
    );
    
    return (<> {renderedMsg} </>);
}


const message_data = [
    {
        status: false,
        user_image: hunter,
        message_user: "Lorem User",
        message_time: "12:00",
        message_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        status: false,
        user_image: hunter,
        message_user: "Lorem User",
        message_time: "13:00",
        message_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        status: false,
        user_image: hunter,
        message_user: "Lorem User",
        message_time: "13:00",
        message_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        status: true,
        user_image: hunter,
        message_user: "Lorem User",
        message_time: "13:00",
        message_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        status: true,
        user_image: hunter,
        message_user: "Lorem User",
        message_time: "13:00",
        message_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        status: true,
        user_image: hunter,
        message_user: "Lorem User",
        message_time: "13:00",
        message_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
]


