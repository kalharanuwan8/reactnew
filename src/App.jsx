import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'
import Homepage from './home';
import Registernew from './registernew';
import Sos from './sos';
import WalletReloadPage from './reloadpage';
import EditUserDetails from './editinfo';
import MyProfile from './myprofile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element ={<Homepage/>}/>
          <Route path="/register" element={<Registernew />} />
          <Route path="/sos" element={<Sos />} />
          <Route path="/reload" element={<WalletReloadPage />} />
          <Route path="/editinfo" element={<EditUserDetails />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
