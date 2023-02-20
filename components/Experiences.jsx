import React from 'react';

function Experiences() {
  return (
    <div className="section_diego_flex">
      <div>
        <p> Nuestras Habitaciones</p>
        <h3>Conoce tu nueva experiencia</h3>
        <p> Habitaciones tematicas, ambiente calido y una experiencia unica.</p>
      </div>

      <div className="section_diego_flex_grid">
        <div className="grid_1">
          <p>Clasica</p>
        </div>

        <div className="grid_2">
          <p> Romantico</p>
        </div>

        <div className="grid_3">
          <p>Comoda</p>
        </div>

        <div className="grid_4">
          <p>Fiestera</p>
        </div>

        <div className="grid_5">
          <p>Rockera</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;