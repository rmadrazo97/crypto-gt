import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import './criptoTable.css';

const CriptoTable = () => {
  const [tableData, setTableData] = useState([]);
  const getTableData = async () => {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h,24h,7d'
    );
    setTableData(response.data);
  };
  useEffect(() => {
    getTableData();
  }, []);
  console.log('tableData', tableData);
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
        <table className="criptoTable-pc">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>1h%</th>
              <th>24h%</th>
              <th>7d%</th>
              <th>Market Cap</th>
              <th>Volume(24h)</th>
              <th>circulating Supply</th>
              <th>Last 7Days</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td>
                  <img width="30" src={item.image} alt="symbol" />
                  &nbsp;
                  {item.name}
                  &nbsp;
                  <span style={{ textTransform: 'uppercase', color: 'grey' }}>
                    {item.symbol}
                  </span>
                </td>
                <td>${item.current_price.toFixed(2)}</td>
                <td>
                  {item.price_change_percentage_1h_in_currency.toFixed(2)}
                </td>
                <td>{item.price_change_percentage_24h.toFixed(2)}</td>
                <td>
                  {item.price_change_percentage_7d_in_currency.toFixed(2)}
                </td>
                <td>{item.market_cap}</td>
                <td>{item.total_volume}</td>
                <td>
                  {item.circulating_supply}
                  &nbsp;
                  <span style={{ textTransform: 'uppercase' }}>
                    {item.symbol}
                  </span>
                </td>
                <td>
                  <Sparklines data={item.sparkline_in_7d.price}>
                    <SparklinesLine
                      style={{ stroke: '#4FBC88', fill: 'none' }}
                    />
                    <SparklinesSpots style={{ fill: '#4FBC88' }} />
                  </Sparklines>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="criptoTable-mobile">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>1h%</th>
              <th>24h</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td className="cripto-table-mobile-name">
                  <img width="30" src={item.image} alt="symbol" />
                  <span className="name-span">{item.name}</span>
                  <span className="symbol-span">{item.symbol}</span>
                </td>
                <td>${item.current_price.toFixed(2)}</td>
                <td>
                  {item.price_change_percentage_1h_in_currency.toFixed(2)}
                </td>
                <td>{item.price_change_percentage_24h.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CriptoTable;
