import { Routes, Route } from "react-router-dom";
import AdminLayout from './layout/AdminLayout'

const App = () => {
    return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />} />
    </Routes>
  );
}

export default App
