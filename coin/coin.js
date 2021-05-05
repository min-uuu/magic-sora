function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}

var items = ['그래.', '나쁘지 않아.', '지금 당장.', '완전 똑똑한데?', '그거 괜찮다.', '무조건.', '할 만 한데?', '꼭 해 이건.',
    '안 돼.', '아마 아닐 거야.', '멈춰!', '그건 아닌데.', '선 넘네.', '좀 아니야.', '너무 별로야.', '맘에 안 들어.',
    '너는 이미 답을 알고 있어.', '너의 마음을 따라가.', '다시 한 번 말해봐.', '잘 안 들렸어.', '후화할 선택하지 마', '둘 다.',
    '너는 랄로가 아니야.', '도지 만원 간다고.', '비트 1억 간다고.', '그걸 왜 그렇게 하냐.', '돈이 복사가 된다고.', '돈이 삭제가 된다고.',
    '첫째, 손해를 보지 않는다.', '남자는 역배지.', '코인은 질병이야.', '지구 숏 할래?', '다음은 음봉임.', '아무튼 그건 아님.', '올인.', '그거 말고 도지 사.', '2017 어게인'];

const sora = document.getElementById("sora");
const text = document.getElementById("text");

var answer
function clickSora() {
    answer = random_item(items)
    text.innerHTML = answer
    console.log(answer)
}

sora.addEventListener("click", clickSora);
