import { Link } from "react-router-dom"
import '../Components/Navbar.scss'

export default function NavBar () {
    return (
        <div className="navbar">
            <Link to="/" className="logo-link">
            <img className="pomelo" src="src/포멜로.png" alt="이미지"/>
            <span className="logo-text">포멜로무비</span>
            </Link>
            <input 
                type="text" 
                placeholder="검색어를 입력하세요." 
                className="input-text"
                />
            <div>
                <button className="login-btn">로그인</button>
                <button className="signup-btn">회원가입</button>
            </div>
        </div>
    )
}