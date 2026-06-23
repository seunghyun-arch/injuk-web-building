const SUPABASE_URL = 'https://yzqhwldrohbmtodmiinf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Uj3wq25mTepMh1m_qoOP2g_L5I6LXGL';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert("로그인 실패: " + error.message);
    } else {
        alert("로그인에 성공했습니다!");
        window.location.href = "page_home.html"; 
    }
}