
import './Solutions.css'
import Solutions from './Solutions'

function SolutionsList({complects, handleSaveGood}) {

  /*let description = complects.description.split('\r\n-')*/
    

  return (
      <section className="solutions">
        <h2 className="solutions__title">Автоматизация под ключ</h2>
        <ul className="solutions__offer-container">
        {complects.length > 0 && complects.map((item)=> (
              <Solutions
                key={item.id}
                data={item}
                onSolution={handleSaveGood}
              />
        ))}
        </ul>
      </section>
  );
}

export default SolutionsList;