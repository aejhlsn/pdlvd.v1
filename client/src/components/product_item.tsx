import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../components-css/product_item.css';



export const ProductItemFr = () => {
    return(
        <div className='item-w-lbl'>
            <div className='item-frame-prop'>
                <div className="item-1"> hello </div>
                <div className="item-feature"> feature </div>
            </div>
            <div className="prod-name" id="prod-name"> Lorem Ipsum Product </div>
            <div className='prod-price' id="prod-price"> Php. 100.00 </div>
        </div>
    );
}