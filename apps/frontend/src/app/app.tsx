import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import { dashboard } from './pages/dashboard';

const Wrapper = styled.div``;

export function App() {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={dashboard()}
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </Wrapper>
  );
}

export default App;
