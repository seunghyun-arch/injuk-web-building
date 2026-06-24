const SUPABASE_URL = 'https://yzqhwldrohbmtodmiinf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Uj3wq25mTepMh1m_qoOP2g_L5I6LXGL';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadMyInfo() {
    const { data: { user }, error } = await supabaseClient.auth.getUser();

    if (!user || error) {
        alert("로그인 정보가 만료되었습니다. 다시 로그인해주세요.");
        window.location.href = "page_login.html";
        return;
    }

    document.getElementById("myEmail").value = user.email;
    document.getElementById("myName").value = user.user_metadata.name;

    const myPhone = user.user_metadata.phone;
    if (myPhone) {
        const phoneParts = myPhone.split('-');
        if (phoneParts.length === 3) {
            document.getElementById("phone1").value = phoneParts[0];
            document.getElementById("phone2").value = phoneParts[1];
            document.getElementById("phone3").value = phoneParts[2];
        }
    }
}

loadMyInfo();