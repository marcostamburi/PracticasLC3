import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {
  const total = netIncomes.reduce((acc, { income }) => acc + income, 0);
  const avgIncome = (total / netIncomes.length).toFixed(3);
  const netIncomesMapped = netIncomes.map((brand) => (
    <tr key={brand.brand}>
      <td>{brand.brand}</td>
      <td>{brand.income}</td>
    </tr>
  ));

  //Lo puse asi porque se me acomodaba feo
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {netIncomesMapped}
          <tr>
            <td>
              <p>Average:{avgIncome} </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.array,
};

export default Table;
