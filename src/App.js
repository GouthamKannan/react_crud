import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import './static/sb-admin-2.min.css';
import './static/vendor/fontawesome-free/css/all.min.css';

import Sidebar from './components/sidebar';
import AdminTable from './components/admin_table';
import AddUser from './components/add_user';
import EditUser from './components/edit_user';
import ViewProfile from './components/view_profile';
import EditProfile from './components/edit_profile';
import Dashboard from './components/dashboard';



function App() {
  return (
    <div id="wrapper">
      <Router>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<AdminTable />} />
        <Route path="/edit-user/:key" element={<EditUser />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/profile/:id" element={<ViewProfile />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
