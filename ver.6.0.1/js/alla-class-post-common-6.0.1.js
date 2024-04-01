// [함수 정의] 유저가이드 이미지 표시
let fnalla6GuideDivImagesInput = () => {
    let alla6GuideDivImages = document.querySelectorAll('.alla6GuideDiv img');
    alla6GuideDivImages.forEach(function (img) {
        img.setAttribute('src', 'https://tistory2.daumcdn.net/tistory/4700529/skin/images/Blog_Guide_Web.gif');
    });
}

// [함수 정의] 객관식 답안 클릭 이벤트
let fnalla6BasicTblInputsClick = () => {
    // 특정 클래스를 가진 테이블 내의 라디오 버튼들을 선택합니다.
    let alla6BasicTblInputsClick = document.querySelectorAll('table.alla6BasicTbl .alla6AnswerTr input[type="radio"]');
    // 각 라디오 버튼에 대해 반복합니다.
    alla6BasicTblInputsClick.forEach(function (input) {
        // 라디오 버튼에 클릭 이벤트를 추가합니다.
        input.addEventListener('click', function () {
            // 클릭된 라디오 버튼의 부모인 테이블 행(<tr>)을 선택합니다.
            let parentTr = this.parentElement.parentElement.parentElement;
            // 클릭된 행과 같은 레벨의 다른 테이블 행들을 선택합니다.
            let siblingsTrs = parentTr.parentElement.children;

            // 모든 형제 행들의 배경색을 초기화합니다.
            for (let i = 0; i < siblingsTrs.length; i++) {
                // 마지막 행인 경우 배경색을 변경하지 않습니다.
                if (siblingsTrs[i].classList.contains('alla6SolveTr')) {
                    continue;
                }
                if (siblingsTrs[i].classList.contains('alla6ExampleTr_Txt')) {
                    continue;
                }
                if (siblingsTrs[i].classList.contains('alla6ExampleTr_Img')) {
                    continue;
                }
                siblingsTrs[i].querySelector('td').style.backgroundColor = 'rgba(220, 220, 220, 0)';
            }
            // 클릭된 행의 배경색을 변경합니다.
            parentTr.querySelector('td').style.backgroundColor = 'rgba(220, 220, 220, 0.7)';
        });
    });
}

// [함수 정의] 문제 정답 수집 및 객체 생성 = { 문제번호 : 정답 }
let fnQuestionAnswers = () => {
    // 정답 부분 가져오기
    let answerText = document.querySelector('.alla6AnswerTableDiv table tbody tr:nth-child(2) td:nth-child(1)').textContent.trim();

    // 객체 생성
    let questionsAnswers = {};

    // 모든 .alla6QuestionNo 클래스를 가진 요소 선택
    let alla6QuestionNoElements = document.querySelectorAll('.alla6QuestionNo');

    // 각 요소의 내용을 배열에 담기
    alla6QuestionNoElements.forEach(function (element) {
        // 문제 번호 가져오기
        let questionNo = element.textContent.trim();
        // 숫자로 변환
        let questionNoNumeric = Number(questionNo);
        // 숫자로 변환 가능한 경우에만 처리
        if (!isNaN(questionNoNumeric)) {
            // 정답 부분에서 해당 문제 번호의 정답을 가져와서 객체에 저장
            let answer = answerText.charAt(questionNoNumeric - 1); // 정답 가져오기
            questionsAnswers[questionNo] = answer; // 객체에 저장
        }
    });

    return questionsAnswers;
};

// [함수 정의] 문제 선택답안 수집 및 객체 생성 = { 문제번호 : 선택답안 }
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

    // 모든 .alla6QuestionNo 클래스를 가진 요소 선택
    let alla6QuestionNoElements = document.querySelectorAll('.alla6QuestionNo');

    // 각 요소의 내용을 배열에 담기
    alla6QuestionNoElements.forEach(function (element) {
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
            // 값이 동일한 경우 'O', 동일하지 않은 경우 'X'로 objCheckedAnswers 객체에 저장
            let qa = objQuestionAnswers[questionNo];
            let sa = objSelectedAnswers[questionNo];

            // [함수 정의] 채점 빨간팬
            let fnCheckRedPen = () => {
                for (let questionNo in objCheckedAnswers) {
                    let tableId = 'alla6BasicTbl' + questionNo;
                    let tableAddr = document.getElementById(tableId);
                    let checkResult = objCheckedAnswers[questionNo];
                    if (tableAddr) {
                        switch (checkResult) {
                            case 'O':
                                tableAddr.style.backgroundImage = 'url(https://tistory1.daumcdn.net/tistory/4700529/skin/images/check-O.png)';
                                break;
                            case 'X':
                                tableAddr.style.backgroundImage = 'url(https://tistory2.daumcdn.net/tistory/4700529/skin/images/check-X.png)';
                                break;
                            default:
                                tableAddr.style.backgroundImage = 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-V.png)';
                        }
                        tableAddr.style.backgroundRepeat = 'no-repeat';
                        tableAddr.style.backgroundSize = '7.0em';
                        tableAddr.style.backgroundPosition = 'top left';
                    }
                }
            };

            if (qa === sa) {
                objCheckedAnswers[questionNo] = 'O';
                fnCheckRedPen();
            } else {
                switch (qa) {
                    case 'A':
                        objCheckedAnswers[questionNo] = (sa === '1' || sa === '2') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'B':
                        objCheckedAnswers[questionNo] = (sa === '1' || sa === '3') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'C':
                        objCheckedAnswers[questionNo] = (sa === '1' || sa === '4') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'D':
                        objCheckedAnswers[questionNo] = (sa === '2' || sa === '3') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'E':
                        objCheckedAnswers[questionNo] = (sa === '2' || sa === '4') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'F':
                        objCheckedAnswers[questionNo] = (sa === '3' || sa === '4') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'G':
                        objCheckedAnswers[questionNo] = (sa === '1' || sa === '2' || sa === '3') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'H':
                        objCheckedAnswers[questionNo] = (sa === '1' || sa === '2' || sa === '4') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'I':
                        objCheckedAnswers[questionNo] = (sa === '1' || sa === '3' || sa === '4') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'J':
                        objCheckedAnswers[questionNo] = (sa === '2' || sa === '3' || sa === '4') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    case 'K':
                        objCheckedAnswers[questionNo] = (sa === '1' || sa === '2' || sa === '3' || sa === '4') ? 'O' : 'X';
                        fnCheckRedPen();
                        break;
                    default:
                        objCheckedAnswers[questionNo] = 'X';
                        fnCheckRedPen();
                }
            }
            // if (objQuestionAnswers.hasOwnProperty(questionNo) && objSelectedAnswers.hasOwnProperty(questionNo)) {
            // }
        }
    });

    // 결과 확인
    // console.log(objCheckedAnswers);
    return objCheckedAnswers;
}


document.addEventListener('DOMContentLoaded', function () {
    // 유저가이드 이미지 표시
    fnalla6GuideDivImagesInput();

    // 객관식 답안 클릭 이벤트
    fnalla6BasicTblInputsClick();

    // 문제답안 객체 생성 = { 문제번호 : 정답 }
    let objQuestionAnswers = fnQuestionAnswers();

    // 선택답안 객체 생성 = { 문제번호 : 선택답안 }
    let alla6BasicTblInputs = document.querySelectorAll('table.alla6BasicTbl .alla6AnswerTr input[type="radio"]');
    let objSelectedAnswers = {};
    alla6BasicTblInputs.forEach(function (input) {
        input.addEventListener('click', function () {
            objSelectedAnswers = fnSelectedAnswers(this, objSelectedAnswers);
        });
    });

    // 문제별 체점 버튼
    // 버튼 요소를 가져옴
    let checkButtons = document.querySelectorAll('.alla6CheckTr button');

    // 버튼 클릭 이벤트 리스너 등록
    checkButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            fnCheckAnswers(objQuestionAnswers, objSelectedAnswers);
        });
    });

    // 전체 채점 버튼
    // 버튼 요소 가져옴
    let allCheckButton = document.querySelectorAll('.alla6CheckTbl td button')[0];
    // 버튼 클릭 이벤트 리스너 등록
    allCheckButton.addEventListener('click', function () {
        // 채점하기
        fnCheckAnswers(objQuestionAnswers, objSelectedAnswers);
        // 다시채점 버튼 활성화
        let openCheckButtons = document.querySelectorAll('.alla6CheckTr button');
        openCheckButtons.forEach(function (button) {
            button.style.display = 'inline-block';
        });
        // 해설영역 활성화
        let openSolves = document.querySelectorAll('.alla6BasicTbl .alla6SolveTr td');
        openSolves.forEach(function (solve) {
            solve.style.display = 'block';
        });
        // 첫번째 문제 영역으로 스크롤업
        let firstalla6BasicTbl = document.querySelector('table.alla6BasicTbl');
        firstalla6BasicTbl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // 바디 최상단 영역으로 스크롤업
        let bodyTop = document.querySelector('html');
        bodyTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

});






// 티스토리 카테고리 파라미터 삭제 코드
Array.prototype.slice.call(document.querySelectorAll('a'))
    .filter(function (el) {
        return el.href.match(/\/[0-9]+\?category/gi);
    })
    .forEach(function (el) {
        el.href = el.href.replace(/\?category.*/, '');
    });