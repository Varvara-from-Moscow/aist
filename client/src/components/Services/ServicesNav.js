import './ServicesNav.css'
import ServicesNavItem from './ServicesNavItem'

function ServicesNav({ data, services, handleChoseCategory }) {

    return (
            <ul className="servicesNav">
              {data.length > 0 && data.map((data)=> (
                <ServicesNavItem
                   key={data.id}
                   data={data}
                   handleChoseCategory={handleChoseCategory}
                   services={services}
                />
              ))}
            </ul>
    );
  }
  
  export default ServicesNav;