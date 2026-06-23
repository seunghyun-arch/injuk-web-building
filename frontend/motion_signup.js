//수파베이스 설정
const SUPABASE_URL = 'https://yzqhwldrohbmtodmiinf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Uj3wq25mTepMh1m_qoOP2g_L5I6LXGL';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const name = document.getElementById("name").value;

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                phone: phone,
                name: name,
            }
        }
    });

    if (error) {
        alert("가입 실패: " + error.message);
    } else {
        alert("회원가입 완료");
        window.location.href = "page_login.html";
    }
}