import { Link, useNavigate, useLocation } from "react-router-dom"
import '../Components/Navbar.scss'
import { useEffect, useState } from "react"
import useDebounce from "../Hooks/useDebounce"

export default function NavBar () {
    const [searchInput, setSearchInput] = useState("")
    const debouncedSearch = useDebounce(searchInput, 500)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(debouncedSearch) {
            navigate(`/search?query=${debouncedSearch}`)
        }
    },[debouncedSearch])

    useEffect(() => {
        if (location.pathname === "/") {
            setSearchInput("");
        }
    }, [location.pathname]);

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
                value={searchInput}
                onChange={(e)=>{
                    const searchValue = e.target.value
                    setSearchInput(searchValue)
                }}
                />
            <div>
                <button className="login-btn" onClick={()=>navigate('/login')}>로그인</button>
                <button className="signup-btn">회원가입</button>
            </div>
        </div>
    )
}