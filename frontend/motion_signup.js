async function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://127.0.0.1:8000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const result = await response.json();
        
        if (response.ok) {
            alert(result.message);
            window.location.href = "page_login.html"; // 가입 성공 시 로그인 페이지로 이동
        } else {
            alert("가입 실패: " + JSON.stringify(result));
        }
    } catch (error) {
        console.error("통신 에러:", error);
        alert("서버와 연결할 수 없습니다.");
    }
}