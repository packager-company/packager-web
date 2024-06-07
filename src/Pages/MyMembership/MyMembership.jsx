import React from 'react';
import './styles.css';
import MembershipCard from './components/MembershipCard';

const MyMembership = () => {
  return (
    <div className="membership-container">
      <h1>MEMBRESIAS</h1>
      <p>
        Inicia sin más excusas. Todos nuestros paquetes mensuales incluyen todas las disciplinas y todos los horarios, 
        así podrás entrenar las veces que quieras, el tiempo necesario, en los horarios que mejor se acomoden a ti.
      </p>
      <div className="cards-container">
        <MembershipCard title="Mensual" price="$100 MXN" discount="15%" />
        <MembershipCard title="Anual" price="$400 MXN" discount="25%" />
      </div>
    </div>
  );
};

export default MyMembership;
