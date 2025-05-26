import { useState } from 'react';
import { useSupabaseAuth } from '../supabase'; // signUp 함수가 들어있는 커스텀 훅
import '../Components/SignUpPage.scss';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const { signUp } = useSupabaseAuth();
  const navigate = useNavigate()

  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // 이름: 2~8자 한글, 숫자, 영어
    if (!/^[A-Za-z가-힣0-9]{2,8}$/.test(form.userName)) {
      newErrors.userName = '2~8자 사이 한글, 영문, 숫자만 사용 가능';
    }
    // 이메일 형식 검사
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = '이메일 형식을 확인해주세요';
    }
    // 비밀번호: 영문+숫자 8자리 이상
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
      newErrors.password = '영문+숫자 포함 8자 이상 입력해주세요';
    }
    // 비밀번호 확인 일치 여부
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 유효성 검사 통과 시 회원가입 요청
      try {
        const { data, error } = await signUp({
          email: form.email,
          password: form.password,
          userName: form.userName,
        });

        if (error) {
          alert(`회원가입 실패: ${error.message}`);
        } else {
          alert('회원가입 완료!');
          navigate("/");// 필요하면 로그인 페이지 이동 코드 추가
        }
      } catch (err) {
        alert('회원가입 중 오류가 발생했습니다.');
        console.error(err);
      }
    }
  };

  return (
    <div className="flex">
      <div className="signup-container">
        <h2>회원가입</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="이름"
            value={form.userName}
            onChange={handleChange}
          />
          {errors.userName && <p className="error-msg">{errors.userName}</p>}

          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-msg">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error-msg">{errors.confirmPassword}</p>
          )}

          <button className="signup-click" type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
