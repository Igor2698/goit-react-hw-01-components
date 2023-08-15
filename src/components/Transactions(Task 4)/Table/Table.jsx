import PropTypes from 'prop-types';
export const Table = ({ transactions, children }) => {
  return (
    <>
      {children}
      <tbody>
        {transactions.map(elem => (
          <tr key={elem.id}>
            <td>{elem.type}</td>
            <td>{elem.amount}</td>
            <td>{elem.currency}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
