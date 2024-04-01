// [함수 정의] 유저가이드 이미지 표시
let fnAllaGuideDivImagesInput = () => {
    let allaGuideDivImages = document.querySelectorAll('.allaGuideDiv img');
    allaGuideDivImages.forEach(function(img) {
        img.setAttribute('src', 'https://tistory2.daumcdn.net/tistory/4700529/skin/images/Blog_Guide_Web.gif');
    });
}

// [함수 정의] 객관식 답안 클릭 이벤트
let fnAllaBasicTblInputsClick = () => {
    let allaBasicTblInputsClick = document.querySelectorAll('table.allaBasicTbl .allaAnswerTr input[type="radio"]');
    allaBasicTblInputsClick.forEach(function(input) {
        input.addEventListener('click', function() {
            // .allaAnswerTr / backgroundColor:gray / on
            let parentTr = this.parentElement.parentElement.parentElement;
            let siblingsTrs = parentTr.parentElement.children;
            for (let i = 0; i < siblingsTrs.length; i++) {
                siblingsTrs[i].querySelector('td').style.backgroundColor = 'rgba(220, 220, 220, 0)';
            }
            parentTr.querySelector('td').style.backgroundColor = 'rgba(220, 220, 220, 0.7)';
        });
    });
}

// [함수 정의] 객체 생성 = { 문제번호 : 정답 }
let fnQuestionAnswers = () => {
    // 정답 부분 가져오기
    let answerText = document.querySelector('.allaTitleTbl tbody tr:nth-child(6) td:nth-child(2)').textContent.trim();

    // 객체 생성
    let questionsAnswers = {};

    // 모든 .allaQuestionNo 클래스를 가진 요소 선택
    let allaQuestionNoElements = document.querySelectorAll('.allaQuestionNo');

    // 각 요소의 내용을 배열에 담기
    allaQuestionNoElements.forEach(function(element) {
        let questionNo = element.textContent.trim(); // 문제 번호 가져오기
        let questionNoNumeric = Number(questionNo); // 숫자로 변환
        if (!isNaN(questionNoNumeric)) { // 숫자로 변환 가능한 경우에만 처리
            // 정답 부분에서 해당 문제 번호의 정답을 가져와서 객체에 저장
            let answer = answerText.charAt(questionNoNumeric - 1); // 정답 가져오기
            questionsAnswers[questionNo] = answer; // 객체에 저장
        }
    });

    // 결과 확인
    // console.log(questionsAnswers);
    return questionsAnswers;
};

// [함수 정의] 객체 생성 = { 문제번호 : 선택답안 }
let fnSelectedAnswers = (item, objSelectedAnswers) => {
    // 문제 번호 추출
    let questionNo = item.getAttribute('name').replace('question-', '');
    // 문제 번호를 숫자로 변환하여 확인
    let questionNoNumeric = parseInt(questionNo);
    if (!isNaN(questionNoNumeric)) { // 숫자로 변환 가능한 경우에만 처리
        // 선택된 답안 값 가져오기
        let answerValue = item.value;
        // 기존 객체에 값이 있는지 확인 후 추가
        if (!objSelectedAnswers.hasOwnProperty(questionNo)) {
            objSelectedAnswers[questionNo] = answerValue;
        } else {
            // 기존에 값이 있으면 해당 키의 값을 업데이트
            objSelectedAnswers[questionNo] = answerValue;
        }
        // 결과 확인
        // console.log(objSelectedAnswers);
    }

    // 선택된 답안 객체를 리턴합니다.
    return objSelectedAnswers;
};

// [함수 정의] 채점 기능
let fnCheckAnswers = (objQuestionAnswers, objSelectedAnswers) => {
    let objCheckedAnswers = {};

    // 모든 .allaQuestionNo 클래스를 가진 요소 선택
    let allaQuestionNoElements = document.querySelectorAll('.allaQuestionNo');

    // 각 요소의 내용을 배열에 담기
    allaQuestionNoElements.forEach(function(element) {
        let questionNo = element.textContent.trim(); // 문제 번호 가져오기
        let questionNoNumeric = Number(questionNo); // 숫자로 변환
        if (!isNaN(questionNoNumeric)) { // 숫자로 변환 가능한 경우에만 처리
            // 유효 문제 번호 키마다 N값 설정
            let tempAnswer = 'N';
            objCheckedAnswers[questionNo] = tempAnswer; // 객체에 저장
        }
        // objQuestionAnswers와 objSelectedAnswers의 키를 기준으로 값을 비교하여 objCheckedAnswers 객체 생성
        for (let questionNo in objQuestionAnswers) {
            // objQuestionAnswers와 objSelectedAnswers의 키가 일치하고 값도 일치하는지 확인
            if (objQuestionAnswers.hasOwnProperty(questionNo) && objSelectedAnswers.hasOwnProperty(questionNo)) {
                // 값이 동일한 경우 'O', 동일하지 않은 경우 'X'로 objCheckedAnswers 객체에 저장
                objCheckedAnswers[questionNo] = objQuestionAnswers[questionNo] === objSelectedAnswers[questionNo] ? 'O' : 'X';
            }
        }
    });

    // 결과 확인
    console.log(objCheckedAnswers);
    return objCheckedAnswers;
}


document.addEventListener('DOMContentLoaded', function() {
    // 유저가이드 이미지 표시
    fnAllaGuideDivImagesInput();

    // 객관식 답안 클릭 이벤트
    fnAllaBasicTblInputsClick();

    // 문제답안 객체 생성 = { 문제번호 : 정답 }
    let objQuestionAnswers = fnQuestionAnswers();
    console.log(objQuestionAnswers);
    

    // 선택답안 객체 생성 = { 문제번호 : 선택답안 }
    let allaBasicTblInputs = document.querySelectorAll('table.allaBasicTbl .allaAnswerTr input[type="radio"]');
    let objSelectedAnswers = {};
    allaBasicTblInputs.forEach(function(input) {
        input.addEventListener('click', function() {
            objSelectedAnswers = fnSelectedAnswers(this, objSelectedAnswers);
            console.log(objSelectedAnswers)
        });
    });
    
    // 문제별 체점버튼
    // allaCheckTr의 모든 버튼 요소를 가져옴
    let checkButtons = document.querySelectorAll('.allaCheckTr button');

    // 각 버튼에 대해 클릭 이벤트 리스너 등록
    checkButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            fnCheckAnswers(objQuestionAnswers, objSelectedAnswers);
        });
    });


});






// category 파라미터 삭제 코드
Array.prototype.slice.call(document.querySelectorAll('a'))
    .filter(function(el) {
        return el.href.match(/\/[0-9]+\?category/gi);
    })
    .forEach(function(el) {
        el.href = el.href.replace(/\?category.*/, '');
    });