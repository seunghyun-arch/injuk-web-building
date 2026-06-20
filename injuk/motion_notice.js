// notice.js 파일 내용 전체 교체

// 1. 기존 데이터 배열
const notices = [
    { id: 3, type: '공지', title: '개완 리뉴얼 및 입점소식', author: '관리자', views: 29, date: '2026.05.20 14:33' },
    { id: 2, type: '공지', title: '홈페이지 업데이트', author: '관리자', views: 65, date: '2026.04.09 18:41' },
    { id: 1, type: '공지', title: '공지사항', author: '관리자', views: 449, date: '2025.01.25 23:24' }
];

// 💡 2. 가상의 로그인 유저 정보 설정 (테스트용)
// 팩트 체크: 이 이메일을 일반 이메일(예: 'user@test.com')로 바꾸면 등록 버튼이 감쪽같이 사라집니다!
const currentUserEmail = 'noir1979'; 
const adminEmail = 'noir1979'; // 관리자 고정 이메일

// DOM 요소들 가져오기
const noticeListContainer = document.getElementById('noticeList');
const adminArea = document.getElementById('adminArea');
const writeFormContainer = document.getElementById('writeFormContainer');

// 3. 공지사항 목록 그리기 함수
function renderNotices(dataArray) {
    noticeListContainer.innerHTML = '';
    for (const notice of dataArray) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${notice.type}</td>
            <td class="title"><a href="notice_detail.html?id=${notice.id}">${notice.title}</a></td>
            <td>${notice.author}</td>
            <td>${notice.views}</td>
            <td>${notice.date}</td>
        `;
        noticeListContainer.appendChild(tr);
    }
}

// 💡 4. 관리자 권한 검사 및 버튼 조건부 렌더링 함수
function checkAdminPermission() {
    if (currentUserEmail === adminEmail) {
        // 관리자가 맞다면 adminArea 공간에 버튼 HTML을 동적으로 삽입합니다.
        adminArea.innerHTML = `
            <button type="button" id="writeOpenBtn" style="padding: 12px 30px; background: transparent; border: 1px solid #000; font-family: 'Noto Serif KR', serif; cursor: pointer; transition: all 0.3s;">
                공지 등록하기
            </button>
        `;

        // 방금 만든 버튼에 클릭 이벤트 달기 (글쓰기 폼 토글)
        document.getElementById('writeOpenBtn').addEventListener('click', () => {
            if (writeFormContainer.style.display === 'none') {
                writeFormContainer.style.display = 'block';
            } else {
                writeFormContainer.style.display = 'none';
            }
        });
    }
}

// 💡 5. 실제 새 게시글을 배열에 추가하는 로직
function setupPostSubmission() {
    const submitPostBtn = document.getElementById('submitPostBtn');
    const newTitleInput = document.getElementById('newTitle');
    const newContentInput = document.getElementById('newContent');

    submitPostBtn.addEventListener('click', () => {
        const titleText = newTitleInput.value.trim();
        const contentText = newContentInput.value.trim();

        if (!titleText || !contentText) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }

        // 현재 날짜와 시간 구하기
        const now = new Date();
        const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        // 1. 새 데이터 객체 생성
        const newPost = {
            id: notices.length + 1,
            type: '공지',
            title: titleText,
            author: '관리자',
            views: 0,
            date: formattedDate
        };

        // 2. 기존 배열의 맨 앞에 추가 (unshift)
        notices.unshift(newPost);

        // 3. 화면에 표를 다시 그리기 (Re-rendering)
        renderNotices(notices);

        // 4. 입력창 비우고 폼 숨기기
        newTitleInput.value = '';
        newContentInput.value = '';
        writeFormContainer.style.display = 'none';

        alert('새 공지사항이 등록되었습니다.');
    });
}

// --- 초기 실행 ---
renderNotices(notices);      // 1. 표 그리기
checkAdminPermission();      // 2. 관리자면 버튼 띄우기
setupPostSubmission();       // 3. 글쓰기 제출 기능 활성화