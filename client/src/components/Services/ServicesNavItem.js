import './ServicesNav.css'

function ServicesNavItem({data, services, handleChoseCategory}) {

  function getFiterProduct() {
    handleChoseCategory(services, data.slug)
  }

    return (
      <li className="servicesNav__item">
        <button className="servicesNav__item-btn" onClick={getFiterProduct}>{data.name}</button>
      </li>
    );
  }
  
  export default ServicesNavItem;