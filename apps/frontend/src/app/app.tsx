import styled from 'styled-components';
import { Route, Routes} from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import React from 'react';

const Wrapper = styled.div``;

export function App() {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={Dashboard()}
        />
      </Routes>
    </Wrapper>
  );
}

export default App;
