import React from 'react';
import './styles.css';

const Records = () => (
    <div className="page-container">
        <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>INSTANTE</th>
                    <th>NOME</th>
                    <th>IDADE</th>
                    <th>PLATAFORMA</th>
                    <th>GÊNERO</th>
                    <th>TÍTULO DO GAME</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2020/08/2020</td>
                    <td>Washington Soares</td>
                    <td>25</td>
                    <td>XBOX</td>
                    <td>Ação - Aventura</td>
                    <td>The Last of Us</td>
                </tr>
                <tr>
                    <td>2020/08/2020</td>
                    <td>Washington Soares</td>
                    <td>25</td>
                    <td>XBOX</td>
                    <td>Ação - Aventura</td>
                    <td>The Last of Us</td>
                </tr>
                <tr>
                    <td>2020/08/2020</td>
                    <td>Washington Soares</td>
                    <td>25</td>
                    <td>XBOX</td>
                    <td>Ação - Aventura</td>
                    <td>The Last of Us</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Records;
