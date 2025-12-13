    import React from 'react';
    import { HashRouter, Routes, Route } from 'react-router-dom';
    import HomePage from './Home';
    import Proj2 from './Proj2';
    import Proj3 from './Proj3';
    import Proj4 from './Proj4';
    import Proj5 from './Proj5';

    function App() {
      return (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Proj5 />} />
          </Routes>
        </HashRouter>
      );
    }

    export default App;


    /*import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import Proj2 from './Proj2';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proj2" element={<Proj2 />} />
      </Routes>
    </HashRouter>
  );
}


    export default App;*/