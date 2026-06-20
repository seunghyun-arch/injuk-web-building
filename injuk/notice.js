// 1. 임시 공지사항 데이터 (나중에는 서버에서 이 배열을 통째로 받아옵니다)
const notices = [
    { id: 3, type: '공지', title: '개완 리뉴얼 및 입점소식', author: '관리자', views: 29, date: '2026.05.20 14:33' },
    { id: 2, type: '공지', title: '홈페이지 업데이트', author: '관리자', views: 65, date: '2026.04.09 18:41' },
    { id: 1, type: '공지', title: '공지사항', author: '관리자', views: 449, date: '2025.01.25 23:24' }
];

// 2. HTML에서 공지사항 목록이 들어갈 빈 공간(tbody) 찾기
const noticeListContainer = document.getElementById('noticeList');

// 3. 데이터를 바탕으로 HTML 코드 덩어리를 만들어내는 함수
function renderNotices(dataArray) {
    // 기존에 있던 내용을 싹 지웁니다 (검색 기능 등을 위해)
    noticeListContainer.innerHTML = '';

    // 배열에 있는 데이터 개수만큼 반복합니다 (for...of 문)
    for (const notice of dataArray) {
        
        // 표의 한 줄(tr) 요소 만들기
        const tr = document.createElement('tr');
        
        // 백틱(`)을 사용하면 HTML 코드 안에 변수(${notice.title} 등)를 쉽게 쏙쏙 끼워넣을 수 있습니다!
        tr.innerHTML = `
            <td>${notice.type}</td>
            <td class="title">
                <a href="notice_detail.html?id=${notice.id}">${notice.title}</a>
            </td>
            <td>${notice.author}</td>
            <td>${notice.views}</td>
            <td>${notice.date}</td>
        `;

        // 만들어진 한 줄을 화면 빈 공간에 추가
        noticeListContainer.appendChild(tr);
    }
}

// 4. 페이지가 로딩되자마자 전체 목록 그리기 함수 실행
renderNotices(notices);