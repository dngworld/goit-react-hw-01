import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  const result = items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <section>
      <table className={css.elements}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;
