import './EquipmentList.css'
import pic from '../../images/1crozniza.png'


function EquipmentList() {

    return (
        <div>
            <ul className="equipmentList">
                <li className="equipmentList__item">
                    <img src={pic} className="equipmentList__item-pic"></img>
                    <div className="equipmentList__item-wrapper">
                        <h3 className="equipmentList__item-title">1С:Розница (базовая)</h3>
                        <div className="equipmentList__item-star-container">
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                        </div>
                    </div>

                    <div src={pic} className="equipmentList__item-wrapper">      
                        <p className="equipmentList__item-price">3600 р.</p>
                        <div className="equipmentList__item-bag">
                          <div className="equipmentList__item-bag-container"></div>
                          <div className="equipmentList__item-increament"></div>
                        </div>
                    </div>
                </li>

                <li className="equipmentList__item">
                    <img src={pic} className="equipmentList__item-pic"></img>
                    <div className="equipmentList__item-wrapper">
                        <h3 className="equipmentList__item-title">1С:Розница (базовая)</h3>
                        <div className="equipmentList__item-star-container"></div>
                    </div>

                    <div className="equipmentList__item-wrapper">      
                        <p className="equipmentList__item-price">3600 р.</p>
                        <div className="equipmentList__item-bag">
                          <div className="equipmentList__item-bag-container"></div>
                          <div className="equipmentList__item-increament"></div>
                        </div>
                    </div>
                </li>

                <li className="equipmentList__item">
                    <img src={pic} className="equipmentList__item-pic"></img>
                    <div className="equipmentList__item-wrapper">
                        <h3 className="equipmentList__item-title">1С:Розница (базовая)</h3>
                        <div className="equipmentList__item-star-container"></div>
                    </div>

                    <div className="equipmentList__item-wrapper">      
                        <p className="equipmentList__item-price">3600 р.</p>
                        <div className="equipmentList__item-bag">
                          <div className="equipmentList__item-bag-container"></div>
                          <div className="equipmentList__item-increament"></div>
                        </div>
                    </div>
                </li>

                <li className="equipmentList__item">
                    <img src={pic} className="equipmentList__item-pic"></img>
                    <div className="equipmentList__item-wrapper">
                        <h3 className="equipmentList__item-title">1С:Розница (базовая)</h3>
                        <div className="equipmentList__item-star-container"></div>
                    </div>

                    <div className="equipmentList__item-wrapper">      
                        <p className="equipmentList__item-price">3600 р.</p>
                        <div className="equipmentList__item-bag">
                          <div className="equipmentList__item-bag-container"></div>
                          <div className="equipmentList__item-increament"></div>
                        </div>
                    </div>
                </li>

                <li className="equipmentList__item">
                    <img src={pic} className="equipmentList__item-pic"></img>
                    <div className="equipmentList__item-wrapper">
                        <h3 className="equipmentList__item-title">1С:Розница (базовая)</h3>
                        <div className="equipmentList__item-star-container"></div>
                    </div>

                    <div className="equipmentList__item-wrapper">      
                        <p className="equipmentList__item-price">3600 р.</p>
                        <div className="equipmentList__item-bag">
                          <div className="equipmentList__item-bag-container"></div>
                          <div className="equipmentList__item-increament"></div>
                        </div>
                    </div>
                </li>

                <li className="equipmentList__item">
                    <img src={pic} className="equipmentList__item-pic"></img>
                    <div className="equipmentList__item-wrapper">
                        <h3 className="equipmentList__item-title">1С:Розница (базовая)</h3>
                        <div className="equipmentList__item-star-container"></div>
                    </div>

                    <div className="equipmentList__item-wrapper">      
                        <p className="equipmentList__item-price">3600 р.</p>
                        <div className="equipmentList__item-bag">
                          <div className="equipmentList__item-bag-container"></div>
                          <div className="equipmentList__item-increament"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
  }
  
  export default EquipmentList;