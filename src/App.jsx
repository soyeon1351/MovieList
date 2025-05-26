import { Routes, Route } from "react-router-dom";
import MovieList from "./Components/MovieLIst.jsx";
import MovieDetail from "./Components/MovieDetail.jsx";
import Layout from "./Components/Layout.jsx";
import MovieSearch from "./Components/MovieSearch.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import SignUpPage from "./Components/SignUpPage.jsx";
import { useSupabaseAuth } from "./supabase";
import { useEffect } from "react";
import { useUser } from "./supabase/context/UserContext.jsx"

function AppContent() {
  const { getUserInfo } = useSupabaseAuth();
  const { setUser } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getUserInfo(); // localStorage에서 가져옴
      if (userInfo?.user) {
        setUser(userInfo.user); // 전역 상태에 저장
      }
    };
    fetchUser();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/search" element={<MovieSearch />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
      <AppContent />
  );
}
