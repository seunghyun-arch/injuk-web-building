// 1. 가상의 장바구니 데이터 
// (나중에는 상세 페이지에서 장바구니 버튼을 누를 때마다 이 배열에 데이터가 추가되게 만듭니다)
const cartItems = [
    {
        id: 1,
        name: "cup & plate for coffee",
        option: "컵 단품",
        price: 32000,
        quantity: 2,
        imgUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80"
    },
    {
        id: 2,
        name: "오늘의 한 잔",
        option: "선택 안함",
        price: 32000,
        quantity: 1,
        imgUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80"
    }
]; 
// 💡 이 배열을 싹 지우고 const cartItems = []; 로 만들면 알아서 비어있는 화면이 뜹니다.

const cartCountEl = document.getElementById('cartCount');
const emptyCartMsg = document.getElementById('emptyCartMsg');
const cartContent = document.getElementById('cartContent');
const cartItemList = document.getElementById('cartItemList');
const totalPriceEl = document.getElementById('totalPrice');
const shippingFeeEl = document.getElementById('shippingFee');
const finalPriceEl = document.getElementById('finalPrice');

function formatPrice(price) {
    return price.toLocaleString('ko-KR');
}

function renderCart() {
    // 1. 헤더 장바구니 숫자 동기화
    cartCountEl.textContent = cartItems.length;

    // 2. 아이템 개수에 따른 화면 토글(Toggle)
    if (cartItems.length === 0) {
        emptyCartMsg.style.display = 'flex';
        cartContent.style.display = 'none';
        return; // 데이터가 없으면 여기서 함수 끝내기
    } else {
        emptyCartMsg.style.display = 'none';
        cartContent.style.display = 'flex';
    }

    // 3. 아이템 리스트 HTML 생성
    cartItemList.innerHTML = '';
    let productTotal = 0; // 총 상품금액 계산용 변수

    for (const item of cartItems) {
        const itemTotal = item.price * item.quantity;
        productTotal += itemTotal; // 누적 합산

        const itemHtml = `
            <div class="cart-item">
                <img src="${item.imgUrl}" alt="${item.name}">
                <div class="item-details">
                    <div class="item-title">${item.name}</div>
                    <div class="item-option">옵션: ${item.option} | 수량: ${item.quantity}개</div>
                    <div class="item-price">${formatPrice(itemTotal)}원</div>
                </div>
                <button class="remove-btn">✕</button>
            </div>
        `;
        cartItemList.innerHTML += itemHtml;
    }

    // 4. 배송비 및 최종 결제 금액 계산 로직
    // 조건: 총 상품금액이 10만원 이상이면 배송비 0원, 아니면 4000원
    const shipping = productTotal >= 100000 ? 0 : 4000;
    const final = productTotal + shipping;

    // 5. 계산된 금액 화면에 쏘아주기
    totalPriceEl.textContent = `${formatPrice(productTotal)}원`;
    shippingFeeEl.textContent = `${formatPrice(shipping)}원`;
    finalPriceEl.textContent = `${formatPrice(final)}원`;
}

// 화면 로딩 시 함수 실행
renderCart();