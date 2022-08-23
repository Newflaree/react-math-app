import { Title, UnitCard } from '../components';
import { MathLayout } from '../layout/MathLayout';
// Test Data
// TODO: Remove this when connected to the server
import { testItem } from '../../data/provisional-data';

export const MathPage = () => {

  return (
    <MathLayout>
      <section className="about section">
        <div className="container">
          <Title text='Inicio' />

          <div className='row'>
            {
              testItem.map( item => (
                <UnitCard 
                  key={ item.id }
                  title={ item.testTitle }
                  desc={ item.testDesc }
                  icon={ item.testIcon }
                />
              ))
            }
          </div>
        </div>
      </section>
    </MathLayout>
  )
}
