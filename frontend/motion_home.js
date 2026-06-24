const SUPABASE_URL = 'https://yzqhwldrohbmtodmiinf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Uj3wq25mTepMh1m_qoOP2g_L5I6LXGL';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function handleUserIconClick() {
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
        window.location.href = "page_mypage.html";
    } else {
        window.location.href = "page_login.html";
    }
}