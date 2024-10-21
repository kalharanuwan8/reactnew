import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Loginpage';
import Homepage from './home';
import Registernew from './registernew';
import Sos from './sos';
import WalletReloadPage from './reloadpage';
import EditUserDetails from './editinfo';
import MyProfile from './myprofile';
import BusManagement from './busmanagement';
import Notification from './notification';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element ={<Homepage/>}/>
          <Route path="/register" element={<Registernew />} />
          <Route path="/sos" element={<Sos />} />
          <Route path="/busmanagement" element={<BusManagement/>}/>
          <Route path="/reload" element={<WalletReloadPage />} />
          <Route path="/editinfo" element={<EditUserDetails />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
