## 🛠️ 주요 기능

| 기능 | 설명 |
|------|------|
| 🎬 메인 페이지 | TMDB에서 받아온 인기 영화 리스트 출력 |
| 📄 상세 페이지 | 영화 클릭 시 해당 영화의 정보(포스터, 줄거리, 평점 등) 상세 표시 |
| 🔍 검색 기능 | NavBar에서 영화 제목 검색 시 실시간으로 결과 출력 (Debounce 적용) |
| 📝 회원가입 | Supabase 연동, 이메일/비밀번호, 사용자명 입력 후 가입 가능 |
| 🔐 로그인 | 이메일/비밀번호 기반 로그인 구현 |
| ☁️ Oauth 로그인 | 카카오 로그인 구현 (추후 구글도 확장 가능) |
| 🧾 유저 정보 관리 | 로그인 성공 시 유저 정보를 LocalStorage에 저장 |
| 🔄 로그인 상태 유지 | 로그인 시 NavBar에 로그인 → 로그아웃으로 변경 |
| 🚀 배포 | (예: Vercel, Netlify 등) |

---

## ⚙️ 사용 기술 스택

- **Frontend**: React, React Router, SCSS, Tailwind (선택 시)
- **API**: [TMDB API](https://developer.themoviedb.org/docs)
- **Auth & DB**: [Supabase](https://supabase.com/)
- **기타**: Debounce Hook, LocalStorage, Context API

---

## 🖥️ 설치 및 실행

```bash
git clone https://github.com/yourusername/pomelo-movie.git
cd pomelo-movie
npm install
npm run dev
```

---

## 🔑 .env 설정

---

## 📸 화면 예시
<img width="1000" alt="스크린샷 2025-05-27 오전 2 45 30" src="https://github.com/user-attachments/assets/c76ec2ff-af5d-4685-baca-889c3a80cdf4" />
<img width="1000" alt="스크린샷 2025-05-27 오전 2 45 38" src="https://github.com/user-attachments/assets/b882b4e4-e155-4026-931b-c4ad6eaef274" />
