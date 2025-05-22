import { useState } from 'react';
import CommonInput from '../Components/CommonInput';
import '../Components/SignUpPage.scss';

export default function SignUpPage() {
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
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검사
    const newErrors = {};

    if (!/^[A-Za-z가-힣0-9]{2,8}$/.test(form.userName)) {
      newErrors.userName = '2~8자 사이 한글, 영문, 숫자만 사용 가능';
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = '이메일 형식을 확인해주세요';
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
      newErrors.password = '영문+숫자 포함 8자 이상 입력해주세요';
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('회원가입 완료!');
      // → 여기서 회원가입 요청 보내기
    }
  };

  return (
    <div className="flex">
      <div className="signup-container">
        <h2>회원가입</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <CommonInput
            label="이름"
            type="text"
            name="userName"
            value={form.userName}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
            errorMessage={errors.userName}
          />
          <CommonInput
            label="이메일"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요"
            errorMessage={errors.email}
          />
          <CommonInput
            label="비밀번호"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            errorMessage={errors.password}
          />
          <CommonInput
            label="비밀번호 확인"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력하세요"
            errorMessage={errors.confirmPassword}
          />
          <button className="signup-click" type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
