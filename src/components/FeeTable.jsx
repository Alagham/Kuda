
import styled from 'styled-components';
import Kuda from "../assets/nav-logo.png"

const FeeTable = () => {
    return (
        <TableContainer>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th><h2>Other Banks</h2></th>
                        <th><img id="" src={Kuda} alt="" /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Transfer Fee</td>
                        <td>Up to ₦50 plus V.A.T.</td>
                        <td>25 free transfers every month</td>
                    </tr>
                    <tr>
                        <td>Card Delivery</td>
                        <td>🤨</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Card Maintenance Fee</td>
                        <td>Up to ₦50 per quarter</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Alerts</td>
                        <td>Charge for SMS alerts</td>
                        <td>Free instant notifications</td>
                    </tr>
                    <tr>
                        <td>Annual Interest</td>
                        <td>4%</td>
                        <td>Up to 15%</td>
                    </tr>
                    <tr>
                        <td>Bill Payment Fee</td>
                        <td>Up to ₦100 per bill</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Instant Reversals</td>
                        <td>😏</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Maintenance</td>
                        <td>Yes</td>
                        <td>No</td>
                    </tr>
                </tbody>
            </table>
        </TableContainer>
    );
};

export default FeeTable;

const TableContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 1em;

    table {
        width: 100%;
        border-collapse:collapse;
        text-align: left;
        font-family: Arial, sans-serif;
    }

    th, td {
        padding: 15px;
        /* border: 1px solid #ddd; */
    }

    th {
       color:#40196d;
        font-weight: bold;
         padding:0px;
        img{
            width:120px;
        }
    }

    tr {
        border: 1px solid #ddd;
    }
`;
