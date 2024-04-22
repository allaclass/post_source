// 제  목 : alla-post-common-6.0.1.js
// 작성일 : 2024.04.02 (edit: jquery to javascript)
// 작성자 : 김현수

// [함수 정의] 채점 빨간팬
let fnCheckRedPen = (questionNo, checkResult) => {
  let tableId = 'alla6BasicTbl' + questionNo;
  let tableAddr = document.getElementById(tableId);
  // console.log('checkResult: ', checkResult);
  if (tableAddr) {
    switch (checkResult) {
      case 'O':
        tableAddr.style.backgroundImage = 'url(https://tistory1.daumcdn.net/tistory/4700529/skin/images/check-O.png)';
        break;
      case 'X':
        tableAddr.style.backgroundImage = 'url(https://tistory2.daumcdn.net/tistory/4700529/skin/images/check-X.png)';
        break;
      case 'N':
        // tableAddr.style.backgroundImage = 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-V.png)';
        break;
      default:
      // tableAddr.style.backgroundImage = 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-V.png)';
    }
    tableAddr.style.backgroundRepeat = 'no-repeat';
    tableAddr.style.backgroundSize = '7.0em';
    tableAddr.style.backgroundPosition = 'top left';
  }
};

// [함수 정의] 채점 기능 (전체)
let fnCheckAnswers = (objQuestionAnswers, objSelectedAnswers) => {
  // 객체 생성
  let objCheckedResult = {};
  // 채점 객체 초기화
  // - 유효 문제 번호 가져오기
  let arrCollectQuestionNo = fnCollectQuestionNo();
  // - 빈선택지 객체에 담기
  for (let i = 0; i < arrCollectQuestionNo.length; i++) {
    let questionNo = arrCollectQuestionNo[i];
    let checkResult;
    let qa = objQuestionAnswers[questionNo];
    let sa = objSelectedAnswers[questionNo];

    if (sa === 'N') {
      objCheckedResult[questionNo] = 'N';
      checkResult = objCheckedResult[questionNo];
      fnCheckRedPen(questionNo, checkResult);
    } else if (qa === sa) {
      objCheckedResult[questionNo] = 'O';
      checkResult = objCheckedResult[questionNo];
      fnCheckRedPen(questionNo, checkResult);
    } else {
      switch (qa) {
        case 'A':
          objCheckedResult[questionNo] = sa === '1' || sa === '2' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'B':
          objCheckedResult[questionNo] = sa === '1' || sa === '3' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'C':
          objCheckedResult[questionNo] = sa === '1' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'D':
          objCheckedResult[questionNo] = sa === '2' || sa === '3' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'E':
          objCheckedResult[questionNo] = sa === '2' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'F':
          objCheckedResult[questionNo] = sa === '3' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'G':
          objCheckedResult[questionNo] = sa === '1' || sa === '2' || sa === '3' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'H':
          objCheckedResult[questionNo] = sa === '1' || sa === '2' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'I':
          objCheckedResult[questionNo] = sa === '1' || sa === '3' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'J':
          objCheckedResult[questionNo] = sa === '2' || sa === '3' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'K':
          objCheckedResult[questionNo] = sa === '1' || sa === '2' || sa === '3' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        default:
          objCheckedResult[questionNo] = 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
      }
    }
  }
  // 결과 확인
  // console.log('objCheckedResult(click): ', objCheckedResult);
  return objCheckedResult;
};

// [함수 정의] 채점 기능 (일부 요청문제 한정)
let fnCheckAnswerRequestQuestion = (questionNo, objQuestionAnswers, objSelectedAnswers) => {
  // 객체 생성
  let objCheckedResult = {};
  // 채점 객체 초기화
  // - 유효 문제 번호 가져오기
  let arrCollectQuestionNo = fnCollectQuestionNo();
  // - 빈선택지 객체에 담기
  for (let i = 0; i < arrCollectQuestionNo.length; i++) {
    // let questionNo = arrCollectQuestionNo[i];
    let checkResult;
    let qa = objQuestionAnswers[questionNo];
    let sa = objSelectedAnswers[questionNo];

    if (sa === 'N') {
      objCheckedResult[questionNo] = 'N';
      checkResult = objCheckedResult[questionNo];
      fnCheckRedPen(questionNo, checkResult);
    } else if (qa === sa) {
      objCheckedResult[questionNo] = 'O';
      checkResult = objCheckedResult[questionNo];
      fnCheckRedPen(questionNo, checkResult);
    } else {
      switch (qa) {
        case 'A':
          objCheckedResult[questionNo] = sa === '1' || sa === '2' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'B':
          objCheckedResult[questionNo] = sa === '1' || sa === '3' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'C':
          objCheckedResult[questionNo] = sa === '1' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'D':
          objCheckedResult[questionNo] = sa === '2' || sa === '3' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'E':
          objCheckedResult[questionNo] = sa === '2' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'F':
          objCheckedResult[questionNo] = sa === '3' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'G':
          objCheckedResult[questionNo] = sa === '1' || sa === '2' || sa === '3' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'H':
          objCheckedResult[questionNo] = sa === '1' || sa === '2' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'I':
          objCheckedResult[questionNo] = sa === '1' || sa === '3' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'J':
          objCheckedResult[questionNo] = sa === '2' || sa === '3' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        case 'K':
          objCheckedResult[questionNo] = sa === '1' || sa === '2' || sa === '3' || sa === '4' ? 'O' : 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
          break;
        default:
          objCheckedResult[questionNo] = 'X';
          checkResult = objCheckedResult[questionNo];
          fnCheckRedPen(questionNo, checkResult);
      }
    }
  }
  // 결과 확인
  // console.log('objCheckedResult(click): ', objCheckedResult);
  return objCheckedResult;
};

// [함수 정의] 유저가이드 이미지 표시
let fnAlla6GuideDivImagesInput = () => {
  let divElement = document.querySelector('.alla6GuideDiv');
  let imgElement = document.createElement('img');
  imgElement.src = 'https://blog.kakaocdn.net/dn/WAQ7S/btsGJPRdaAa/zQNUUsKTGAL3xgIdl3QJr0/img.gif';
  imgElement.alt = '올에이클래스 이용안내 이미지입니다.';
  divElement.appendChild(imgElement);

  imgElement.addEventListener('click', function () {
    window.location.href = 'https://allaclass.tistory.com/3199'; // 현재창
    // window.open('https://allaclass.tistory.com/3199', '_blank'); // 새창
  });
};

// [함수 정의] 채점 영역 이미지 표시
let fnAlla6GradingExamxDivImagesInput = () => {
  var divElement = document.querySelector('.alla6GradingDiv');
  var imgElement = document.createElement('img');
  imgElement.src = 'https://tistory1.daumcdn.net/tistory/4700529/skin/images/Blog_GradingExam_Web.jpg';
  imgElement.alt = '채점하기 이미지';
  divElement.appendChild(imgElement);

  // 전체 채점 버튼

  // 문제답안 객체 생성 = { 문제번호 : 정답 }
  let objQuestionAnswers = fnQuestionAnswers();
  // console.log('questionAnswers(onload): ', objQuestionAnswers);

  // 선택답안 객체 생성 = { 문제번호 : 선택답안 }
  // - input[type="radio"]를 모두 불러옴
  let alla6BasicTblInputs = document.querySelectorAll('table.alla6BasicTbl .alla6AnswerTr input[type="radio"]');
  // - 초기에 선택된 답안이 없을 경우 'N'으로 초기셋팅
  let objSelectedAnswers = { ...fnNonSelectedAnswers() };
  // console.log('objSelectedAnswers(onload): ', objSelectedAnswers);
  // - 각 라디오 버튼 요소에 대해 변경 이벤트 리스너를 설정
  alla6BasicTblInputs.forEach(function (input) {
    if (input.checked) {
      objSelectedAnswers = fnSelectedAnswers(input, objSelectedAnswers);
    }
    input.addEventListener('change', function () {
      // 라디오 버튼이 클릭되면 선택된 답안을 처리하고 결과를 objSelectedAnswers에 할당
      if (this.checked) {
        objSelectedAnswers = fnSelectedAnswers(this, objSelectedAnswers);
      }
    });
    input.addEventListener('click', function () {
      // 라디오 버튼이 체크되었을 때만 처리합니다.
      if (this.checked) {
        objSelectedAnswers = fnSelectedAnswers(this, objSelectedAnswers);
      }
    });
  });

  // - 버튼 클릭 이벤트 리스너 등록
  imgElement.addEventListener('click', function () {
    // - 채점하기
    fnCheckAnswers(objQuestionAnswers, objSelectedAnswers);

    // - 전체문제 해설 영역 활성화 - 잠시 보류
    // let openSolves = document.querySelectorAll('.alla6BasicTbl .alla6SolveTr td');
    // openSolves.forEach(function (solve) {
    //   solve.style.display = 'block';
    // });

    // 포커스 이동
    let alla6TitleDiv = document.querySelector('.alla6TitleDiv'); // alla6TitleDiv 요소의 위치 정보 가져오기
    if (alla6TitleDiv) {
      let offset = alla6TitleDiv.getBoundingClientRect();
      let scrollDestination = offset.top + window.scrollY - 100; // 스크롤 애니메이션 적용
      window.scrollTo({
        top: scrollDestination,
        behavior: 'smooth',
      });
    }
  });
};

// [함수 정의] 초기화 영역 이미지 표시
let fnAlla6ResetExamsDivImagesInput = () => {
  let divElement = document.querySelector('.alla6ResetDiv');
  let imgElement = document.createElement('img');
  imgElement.src = 'https://tistory1.daumcdn.net/tistory/4700529/skin/images/Blog_ResetExam_Web.jpg';
  imgElement.alt = '초기화하기 이미지';
  divElement.appendChild(imgElement);

  // - 버튼 클릭 이벤트 리스너 등록
  imgElement.addEventListener('click', function () {
    let confirmMsg = confirm('현재 문제집의 풀이 정보가 모두 사라집니다.\n정말로 삭제하시겠습니까?');
    if (confirmMsg) {
      // - 쿠키 삭제
      deleteAllCookies();
      // 스크롤이 완료되면 페이지를 새로고침합니다.
      location.reload();
    }
  });
};

// [함수 정의] 타년도 바로가기 이미지 표시
let fnAlla6OtherExamsDivImagesInput = () => {
  var divElement = document.querySelector('.alla6OtherExamDiv');
  var imgElement = document.createElement('img');
  imgElement.src = 'https://tistory1.daumcdn.net/tistory/4700529/skin/images/Blog_OtherExam_Web.jpg';
  imgElement.alt = '타년도 바로가기 이미지';
  divElement.appendChild(imgElement);

  imgElement.addEventListener('click', function () {
    // 과목명 찾기
    let examTitleElement = document.querySelector('.alla6TitleDiv table.alla6TitleTbl tbody tr:nth-child(2) td');
    let examTitle = examTitleElement.textContent.trim();
    // 시험종류 찾기
    let examKindElement = document.querySelector('.alla6TitleDiv table.alla6TitleTbl tbody tr:nth-child(3) td:nth-child(2)');
    let examKind = examKindElement.textContent.trim();
    // 하이퍼링크
    window.location.href = `https://allaclass.tistory.com/tag/${examTitle}%20${examKind}`;
  });
};

// [함수 정의] 다운로드 바로가기 이미지 표시
let fnAlla6DownloadExamDivImagesInput = () => {
  var divElement = document.querySelector('.alla6DownloadExamDiv');
  var imgElement = document.createElement('img');
  imgElement.src = 'https://tistory1.daumcdn.net/tistory/4700529/skin/images/Blog_DownloadExam_Web.jpg';
  imgElement.alt = '문제 다운로드 바로가기 이미지';
  imgElement.style.opacity = '0.3'; // CSS 스타일을 적용하여 이미지의 투명도를 50%로 설정
  divElement.appendChild(imgElement);
};

// [함수 정의] 객관식 답안 클릭 이벤트
let fnAlla6BasicTblInputsClick = () => {
  // 특정 클래스를 가진 테이블 내의 라디오 버튼들을 선택합니다.
  let alla6BasicTblInputsClick = document.querySelectorAll('table.alla6BasicTbl .alla6AnswerTr input[type="radio"]');
  // 각 라디오 버튼에 대해 반복합니다.
  alla6BasicTblInputsClick.forEach(function (input) {
    if (input.checked) {
      handleRadioButtonEvent(input);
    }
    // 라디오 버튼에 change 이벤트를 추가합니다.
    input.addEventListener('change', function () {
      // 라디오 버튼이 체크되었을 때만 처리합니다.
      if (this.checked) {
        handleRadioButtonEvent(this);
      }
    });
    input.addEventListener('click', function () {
      // 라디오 버튼이 체크되었을 때만 처리합니다.
      if (this.checked) {
        handleRadioButtonEvent(this);
      }
    });
  });
};

// 라디오 버튼 클릭 또는 상태 변경 시 처리할 함수
function handleRadioButtonEvent(radioButton) {
  // 클릭된 라디오 버튼의 부모인 테이블 행(<tr>)을 선택합니다.
  let parentTr = radioButton.parentElement.parentElement.parentElement;
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
}

// 객관식 답안 클릭 이벤트를 호출합니다.
// fnAlla6BasicTblInputsClick();

// [함수 정의] 유효 문제 번호 수집 및 배열 할당 = ['01', '02', ...]
let fnCollectQuestionNo = () => {
  // 객체 생성
  let arrCollectQuestionNo = [];
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
      arrCollectQuestionNo.push(questionNo); // 객체에 저장
    }
  });
  return arrCollectQuestionNo;
};

// [함수 정의] 문제 정답 수집 및 객체 생성 = { 문제번호 : 정답 }
let fnQuestionAnswers = () => {
  // 정답 부분 가져오기
  let answerText = document.querySelector('.alla6AnswerTableDiv table tbody tr:nth-child(2) td:nth-child(1)').textContent.trim();

  // 객체 생성
  let questionsAnswers = {};

  // 유효 문제 번호 가져오기
  let arrCollectQuestionNo = fnCollectQuestionNo();

  // 정답 가져와서 객체에 담기
  for (let i = 0; i < arrCollectQuestionNo.length; i++) {
    let questionAnswer = answerText.charAt(i); // 정답 가져오기
    questionsAnswers[arrCollectQuestionNo[i]] = questionAnswer; // 객체에 문제번호:정답 셋팅
  }

  // 반환
  return questionsAnswers;
};

// [함수 정의] 문제 선택답안 초기값 셋팅 = { 문제번호 : 'N' }
let fnNonSelectedAnswers = () => {
  // 객체 생성
  let nonSelectedAnswers = {};

  // 유효 문제 번호 가져오기
  let arrCollectQuestionNo = fnCollectQuestionNo();

  // 빈선택지 객체에 담기
  for (let i = 0; i < arrCollectQuestionNo.length; i++) {
    nonSelectedAnswers[arrCollectQuestionNo[i]] = 'N'; // 객체에 문제번호:'N' 셋팅
  }
  // console.log('nonSelectedAnswers(onload-fn): ', nonSelectedAnswers);

  // 반환
  return nonSelectedAnswers;
};

// [함수 정의] 문제 선택답안 수집 및 객체 생성 = { 문제번호 : 선택답안 }
let fnSelectedAnswers = (item, objSelectedAnswers) => {
  // 문제 번호 추출
  let questionNo = item.getAttribute('name').replace('question-', '');
  // 문제 번호를 숫자로 변환하여 확인
  let questionNoNumeric = parseInt(questionNo);
  if (!isNaN(questionNoNumeric)) {
    // 숫자로 변환 가능한 경우에만 처리
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
    // console.log('objSelectedAnswers(click): ', objSelectedAnswers);
  }

  // 선택된 답안 객체를 리턴합니다.
  return objSelectedAnswers;
};

document.addEventListener('DOMContentLoaded', function () {
  // 포커스 이동
  // alla6GuideDiv 요소의 위치 정보 가져오기
  // let alla6GuideDiv = document.querySelector('.alla6GuideDiv');
  // if (alla6GuideDiv) {
  //   let offset = alla6GuideDiv.getBoundingClientRect();
  //   // 스크롤 애니메이션 적용
  //   let scrollDestination = offset.top + window.scrollY - 100; // 스크롤 이동
  //   window.scrollTo({
  //     top: scrollDestination,
  //     behavior: 'smooth',
  //   });
  // }

  // 유저가이드 이미지 표시
  fnAlla6GuideDivImagesInput();
  // 채점 영역 이미지 표시
  fnAlla6GradingExamxDivImagesInput();
  // 초기화 영역 이미지 표시
  fnAlla6ResetExamsDivImagesInput();
  // 타년도 바로가기 이미지 표시
  fnAlla6OtherExamsDivImagesInput();
  // 다운로드 바로가기 이미지 표시
  fnAlla6DownloadExamDivImagesInput();

  // 객관식 답안 클릭 이벤트
  fnAlla6BasicTblInputsClick();

  // 문제답안 객체 생성 = { 문제번호 : 정답 }
  let objQuestionAnswers = fnQuestionAnswers();
  // console.log('questionAnswers(onload): ', objQuestionAnswers);

  // 선택답안 객체 생성 = { 문제번호 : 선택답안 }
  // - input[type="radio"]를 모두 불러옴
  let alla6BasicTblInputs = document.querySelectorAll('table.alla6BasicTbl .alla6AnswerTr input[type="radio"]');
  // - 초기에 선택된 답안이 없을 경우 'N'으로 초기셋팅
  let objSelectedAnswers = { ...fnNonSelectedAnswers() };
  // console.log('objSelectedAnswers(onload): ', objSelectedAnswers);
  // - 각 라디오 버튼 요소에 대해 변경 이벤트 리스너를 설정
  alla6BasicTblInputs.forEach(function (input) {
    if (input.checked) {
      objSelectedAnswers = fnSelectedAnswers(input, objSelectedAnswers);
    }
    input.addEventListener('change', function () {
      // 라디오 버튼이 클릭되면 선택된 답안을 처리하고 결과를 objSelectedAnswers에 할당
      if (this.checked) {
        objSelectedAnswers = fnSelectedAnswers(this, objSelectedAnswers);
      }
    });
    input.addEventListener('click', function () {
      // 라디오 버튼이 체크되었을 때만 처리합니다.
      if (this.checked) {
        objSelectedAnswers = fnSelectedAnswers(this, objSelectedAnswers);
      }
    });
  });

  // 문제별 체점 버튼 (제거)
  // - 버튼 요소를 가져옴
  // let alla6checkButtons = document.querySelectorAll('.alla6CheckTr button');

  // // - 버튼 클릭 이벤트 리스너 등록
  // alla6checkButtons.forEach(function (button) {
  //   button.addEventListener('click', function () {
  //     // 버튼의 부모 요소를 찾아 해당 요소 아래에서 alla6QuestionNo 클래스를 가진 요소를 선택
  //     let questionNoElement = this.closest('.alla6CheckTr').parentNode.querySelector('.alla6QuestionNo');
  //     // 선택한 요소의 내용을 가져와서 questionNo 변수에 저장
  //     var questionNo = questionNoElement.textContent;
  //     // 해당 문제만 채점 요청
  //     fnCheckAnswerRequestQuestion(questionNo, objQuestionAnswers, objSelectedAnswers);
  //   });
  // });

  // 문제별 채점 : 객관식 답안 클릭 이벤트
  // - 버튼 요소를 가져옴
  let alla6checkSelectedAnswer = document.querySelectorAll('.alla6AnswerTd label');

  // - 버튼 클릭 이벤트 리스너 등록
  alla6checkSelectedAnswer.forEach(function (button) {
    button.addEventListener('click', function () {
      // (해당 문제만 채점하기)
      // 버튼의 부모 요소를 찾아 해당 요소 아래에서 alla6QuestionNo 클래스를 가진 요소를 선택
      let questionNoElement = this.closest('.alla6AnswerTr').parentNode.querySelector('.alla6QuestionNo');
      // 선택한 요소의 내용을 가져와서 questionNo 변수에 저장
      var questionNo = questionNoElement.textContent;
      // 해당 문제만 채점 요청
      fnCheckAnswerRequestQuestion(questionNo, objQuestionAnswers, objSelectedAnswers);
      // (해당 문제만 해설 노출시키기) - 잠시 보류
      // 버튼의 부모 요소를 찾아 해당 요소 아래에서 alla6QuestionNo 클래스를 가진 요소를 선택
      // let solveElement = this.closest('.alla6AnswerTr').parentNode.querySelector('.alla6SolveTr td');
      // 해설영역 활성화
      // solveElement.style.display = 'block';
    });
  });
});

// 티스토리 카테고리 파라미터 삭제 코드
Array.prototype.slice
  .call(document.querySelectorAll('a'))
  .filter(function (el) {
    return el.href.match(/\/[0-9]+\?category/gi);
  })
  .forEach(function (el) {
    el.href = el.href.replace(/\?category.*/, '');
  });
