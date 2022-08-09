import { Title } from '../components';
import { MathLayout } from '../layout/MathLayout';

export const ProfilePage = () => {
  return (
    <MathLayout>
      <section className="about section">
        <div className="container">
          <Title text='Mi Perfil' />
        </div>
      </section>
    </MathLayout>
  )
}

