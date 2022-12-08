import React, { useEffect, useState } from 'react';
import info from '../../../assets/info-dark.png';
import styled from 'styled-components';
import { getAllUsers } from '../../api/users-api';
import { Button } from '../button';
import { Colors } from '../../styles/colors';
const Table = styled.table`font-family: arial, sans-serif;border-collapse: collapse; width: 100%;`;
const Th = styled.th`text-align: left;padding: 8px; margin: 0 1rem`;
const TABLE_HEADERS = ['Conexión', 'Nombre y apellidos', 'Nombre de usuario', 'Email', 'Móvil', ''];

const DashboardContent = () => {
  return (
    <div>
      <Button text={'+ Nuevo estudiante'} theme={{ color: Colors.white, bg: Colors.success }}/>
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
