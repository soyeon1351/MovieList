import { useState } from "react";
import { useSupabaseAuth } from "../supabase/auth/index";
import "../Components/LoginPage.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../supabase/context/UserContext"
import { useContext } from "react";

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, getUserInfo, loginWithKakao } = useSupabaseAuth(); // 여기서 login 함수 사용
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserContext); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = "이메일 형식을 확인해주세요";
    }
    if (form.password.length < 6) {
      newErrors.password = "비밀번호를 6자 이상 입력해주세요";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      await login(form); // 로그인
      const userInfo = await getUserInfo(); // 👈 유저 정보 가져오기
      if (userInfo?.user) {
        setUser(userInfo.user);                 // 👈 전역 상태에 유저 저장
      }
      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error.message);
      alert("이메일 또는 비밀번호를 확인해주세요");
    }
  };

  const handleKakaoLogin = async () => {
    try {
      const redirectUrl = `http://localhost:5173/`; // 로그인 성공 후 돌아올 URL 지정 (현재 사이트 기준)
      await loginWithKakao(redirectUrl);
    } catch (error) {
      console.error("카카오 로그인 실패:", error.message);
    }
  };



  return (
    <div className="flex">
      <div className="login-container">
        <h2 className="login-text">로그인</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.password && (<p className="error-message">{errors.email}</p>)}

          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleChange}
              required
            />
            {errors.password && (<p className="error-message">{errors.password}</p>)}
          </div>
          <button type="submit" className="email-login-btn">
            이메일로 로그인
          </button>
        </form>

        <div className="divider">또는</div>

        <div className="social-buttons">
          <button className="kakao-btn" onClick={handleKakaoLogin}>카카오로 로그인</button>
          <button className="google-btn">구글로 로그인</button>
        </div>
      </div>
    </div>
  );
}
