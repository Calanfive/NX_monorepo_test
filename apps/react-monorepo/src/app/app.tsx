// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { Air } from '@react-monorepo/air';
import { Water } from '@react-monorepo/water';
import { Ground } from '@react-monorepo/ground';
import { Bio } from '@react-monorepo/bio';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/air" element={<Air />}></Route>
      <Route path="/water" element={<Water />}></Route>
      <Route path="/ground" element={<Ground />}></Route>
      <Route path="/bio" element={<Bio />}></Route>
    </Routes>
  );
}

export default App;
