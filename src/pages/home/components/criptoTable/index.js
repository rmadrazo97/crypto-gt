import React from 'react';
import './criptoTable.css';

const CriptoTable = () => {
  return (
    <div className="criptoTable-wrapper">
      <div className="inner-wrapper">
        <p className="criptoTable-text1">
          Precios de Criptomonedas hoy por capitalización de mercado
        </p>
        <p className="criptoTable-text2">
          La capitalización del mercado criptográfico mundial es de 1,08
          billones de dólares, una disminución del 2,85 % con respecto al último
          día.
        </p>
        <table className="criptoTable-mobile">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>1h%</th>
              <th>24h</th>
            </tr>
          </thead>
          {/* <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr> */}
        </table>
      </div>
    </div>
  );
};

export default CriptoTable;
