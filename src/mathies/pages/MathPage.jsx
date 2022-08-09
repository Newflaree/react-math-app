import { Title } from '../components';
import { MathLayout } from '../layout/MathLayout';

export const MathPage = () => {
  return (
    <MathLayout>
      <section className="about section">
        <div className="container">
          <Title text='Inicio' />
        </div>
      </section>
    </MathLayout>
  )
}
