import './ServicesNav.css'

function ServicesNavItem({data}) {
    return (
      <li className="servicesNav__item">{data.name}</li>
    );
  }
  
  export default ServicesNavItem;