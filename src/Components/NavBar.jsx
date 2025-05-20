import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <div>
            <Link to="/">포멜로무비</Link>
            <input type="text"/>
            <div>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        </div>
    )
}