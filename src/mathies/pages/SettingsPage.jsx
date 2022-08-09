import { Title } from '../components';
import { MathLayout } from '../layout/MathLayout';

export const SettingsPage = () => {
  return (
    <MathLayout>
      <section className="about section">
        <div className="container">
          <Title text='Ajustas' />
        </div>
      </section>
    </MathLayout>
  )
}

