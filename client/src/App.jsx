import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout";
import Auth from "./components/pages/Auth";
import Home from "./components/pages/Home";
import RoomDetails from "./components/pages/RoomDetails";
import { userLoggedIn } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const { phone } = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      const user = JSON.parse(localStorage.getItem("auth"));
      dispatch(
        userLoggedIn({
          name: user.name,
          phone: Number(user.phone),
          id: user.id,
        })
      );
    }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let links = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:id" element={<RoomDetails />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  if (phone)
    links = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  return (
    loaded && (
      <Router>
        <Layout>{links}</Layout>
      </Router>
    )
  );
}

export default App;
