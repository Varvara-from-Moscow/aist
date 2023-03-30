import './ServicesNav.css'
import ServicesNavItem from './ServicesNavItem'

function ServicesNav({data}) {
    return (
            <ul className="servicesNav">
              {data.length > 0 && data.map((data)=> (
                <ServicesNavItem
                   key={data.id}
                   data={data}
                />
              ))}
            </ul>
    );
  }
  
  export default ServicesNav;