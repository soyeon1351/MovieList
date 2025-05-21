import '../Components/LoginPage.scss'

export default function LoginPage() {

    return (
        <div className='flex'>
            <div className="login-container">
            <h2 className='login-text'>로그인</h2>
            <form className="login-form">
                <input type="email" placeholder="이메일" required />
                <input type="password" placeholder="비밀번호" required />
                <button type="submit" className="email-login-btn">이메일로 로그인</button>
            </form>

            <div className="divider">또는</div>

            <div className="social-buttons">
                <button className="kakao-btn">카카오로 로그인</button>
                <button className="google-btn">구글로 로그인</button>
            </div>
            </div>
        </div>
    );
}
