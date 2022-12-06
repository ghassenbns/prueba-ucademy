import React, { useEffect, useState } from 'react';
import info from '../../assets/info-dark.png';
import styled from 'styled-components';
import { getAllUsers } from '../api/users-api';
const Table = styled.table`font-family: arial, sans-serif;border-collapse: collapse; width: 100%;`;
const Th = styled.th`text-align: left;padding: 8px; margin: 0 1rem`;
const TABLE_HEADERS = ['Conexión', 'Nombre y apellidos', 'Nombre de usuario', 'Email', 'Móvil', ''];

const DashboardContent = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    const fetchUsers = async () => {
      const result = await getAllUsers();
    };
    fetchUsers()}, []);
  return (
    <div>
      <button> + Nuevo estudiante</button>
      <Table>
        <thead>
        <tr>
          {TABLE_HEADERS.map((header, index) => {
            return <Th key={index}>{header}</Th>;
          })}
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td><img src={info} alt='info'/></td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardContent;
