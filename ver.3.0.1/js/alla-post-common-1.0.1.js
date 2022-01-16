/* -------------------------------------------- */
/* 제  목 : alla-post-jquery-1.0.1.js         */
/* 작성일 : 2021.04.04                          */
/* 작성자 : 김현수                              */
/* -------------------------------------------- */

$(document).ready(function(){

    // 유저가이드 이미지 표시 / 210404 - 숨김
    // $(".allaGuideWrap img").attr('src', 'https://tistory2.daumcdn.net/tistory/4107481/skin/images/guideBook_ver2.gif');
    // 문제지 라디오 이미지 표시 / 210404 - 수정
    $(".allaBasicWrap div.allaAnswerWrap form div.allaAnswerLine div.allaAnswerRadioImg label img").attr('src', 'https://tistory1.daumcdn.net/tistory/4700529/skin/images/radio-check-off.png');
    // 정답표 "-" 기호 표시 / 0604 추가
    $(".allaAnswerTableWrap table:nth-of-type(2) tr td:nth-of-type(4) img").attr('src', 'https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-none.png');
    // 정답표 "바로가기" 기호 표시 / 0604 추가
    $(".allaAnswerTableWrap table:nth-of-type(2) tr td:nth-of-type(5) img").attr('src', 'https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-shortcut.png');
    
    // radio > label click event
    $(".allaBasicWrap .allaAnswerWrap form .allaAnswerLine input[type='radio']").click(function(){
        // .allaAnswerLine / backgroundColor effect
        $(this).parent().siblings("div").css('backgroundColor', 'rgba(220, 220, 220, 0)');
        $(this).parent().css('backgroundColor', 'rgba(220, 220, 220, 0.7)');
        // .allaAnswerRadioImg / change image
        $(this).parent().siblings("div").children("div.allaAnswerRadioImg").children("label").find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/radio-check-off.png");
        $(this).siblings("div.allaAnswerRadioImg").children("label").children("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/radio-check-on.png");
        // quiz no == answer no (variable)
        var questionNumber = $(this).parents(".allaAnswerWrap").siblings(".allaQuestionWrap").find("span.allaQuestionNumber").html();
        var answerValue = $(this).val();
        var answerTableNumber = $(this).parents(".allaBasicWrap").siblings(".allaAnswerTableWrap").children("table").find("tr").find("td:first-of-type");
        // answerTable check
        answerTableNumber.each(function(){
            // 정답표 문제번호와 문제번호가 일치한다면
            if($(this).text() == questionNumber){
                // 정답표의 해당문제 선택답안에 객관식 선택 답안의 값을 넣고,
                $(this).next().next("td").html(answerValue);
                // (조건문) 정답과 선택이 같다면
                if($(this).next("td").text() == $(this).next().next("td").text()){
                    $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                // (조건문) 정답이 모름이라면
                } else if($(this).next().next("td").text()==5){
                    $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-t.png");
                // (조건문) 정답이 틀렸다면
                } else if($(this).next("td").text() != $(this).next().next("td").text()) {
                    if($.isNumeric($(this).next("td").text())){
                        $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                    } else {
                        if($(this).next("td").html()=="A"){
                            if($(this).next().next("td").text()==1 || $(this).next().next("td").text()==2){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="B"){
                            if($(this).next().next("td").text()==1 || $(this).next().next("td").text()==3){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="C"){
                            if($(this).next().next("td").text()==1 || $(this).next().next("td").text()==4){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="D"){
                            if($(this).next().next("td").text()==2 || $(this).next().next("td").text()==3){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="E"){
                            if($(this).next().next("td").text()==2 || $(this).next().next("td").text()==4){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="F"){
                            if($(this).next().next("td").text()==3 || $(this).next().next("td").text()==4){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="G"){
                            if($(this).next().next("td").text()==1 || $(this).next().next("td").text()==2 || $(this).next().next("td").text()==3){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="H"){
                            if($(this).next().next("td").text()==1 || $(this).next().next("td").text()==2 || $(this).next().next("td").text()==4){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="I"){
                            if($(this).next().next("td").text()==1 || $(this).next().next("td").text()==3 || $(this).next().next("td").text()==4){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="J"){
                            if($(this).next().next("td").text()==2 || $(this).next().next("td").text()==3 || $(this).next().next("td").text()==4){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        } else if($(this).next("td").html()=="K"){
                            if($(this).next().next("td").text()==1 || $(this).next().next("td").text()==2 || $(this).next().next("td").text()==3 || $(this).next().next("td").text()==4){
                                $(this).next().next().next().find("img").attr("src", "https://tistory1.daumcdn.net/tistory/4700529/skin/images/answer-o.png");
                            } else {
                                $(this).next().next().next().find("img").attr("src", "https://tistory4.daumcdn.net/tistory/4700529/skin/images/answer-x.png");
                            }
                        }
                    }
                    
                } 
            }
        });
    });
    
    // check button : within question
    $(".allaCheckButton button").click(function(){
        // (변수지정) 문제 번호
        var questionNumber = $(this).parents(".allaCheckButton").siblings(".allaQuestionWrap").find("span.allaQuestionNumber");
        // (변수지정) 정답표 문제 번호
        var answerNumber = $(this).parents(".allaBasicWrap").siblings(".allaAnswerTableWrap").find("tr").siblings("tr").find("td:first-of-type");
        // (조건문)
        answerNumber.each(function(){
            // (조건문) 문제 번호가 같다면
            if($(this).text() == questionNumber.html()){
                // (조건문) 답안 선택이 "공백" 일 때
                if($(this).next().next().text() == ""){
                    $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-V.png)');
                    $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                    $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                    $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                // (조건문) 답안 선택이 "5. 모름" 일 때
                } else if($(this).next().next().text()=="5"){
                    $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory2.daumcdn.net/tistory/4700529/skin/images/check-T.png)');
                    $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                    $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                    $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                // (조건문) 답안 선택이 "정답" 일 때
                } else if($(this).next().next().text() == $(this).next().text()){
                    $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                    $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                    $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                    $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                // (조건문) 답안이 틀렸을 때
                } else if($(this).next().next().text() != $(this).next().text()){
                    // (조건문) 정답이 숫자일 때
                    if($.isNumeric($(this).next().text())){
                        $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                        $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                        $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                        $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                    // (조건문) 정답이 숫자가 아닐 때
                    } else {
                        if($(this).next().text()=="A"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==1 || $(this).next().next().text()==2){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="B"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==1 || $(this).next().next().text()==3){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="C"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==1 || $(this).next().next().text()==4){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="D"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==2 || $(this).next().next().text()==3){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="E"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==2 || $(this).next().next().text()==4){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="F"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==3 || $(this).next().next().text()==4){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="G"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==1 || $(this).next().next().text()==2 || $(this).next().next().text()==3){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="H"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==1 || $(this).next().next().text()==2 || $(this).next().next().text()==4){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="I"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==1 || $(this).next().next().text()==3 || $(this).next().next().text()==4){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="J"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==2 || $(this).next().next().text()==3 || $(this).next().next().text()==4){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        } else if($(this).next().text()=="K"){
                            // (조건문) 답안이 정답일 때
                            if($(this).next().next().text()==1 || $(this).next().next().text()==2 || $(this).next().next().text()==3 || $(this).next().next().text()==4){
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory3.daumcdn.net/tistory/4700529/skin/images/check-O.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            // (조건문) 답안이 틀렸을 때
                            } else {
                                $(questionNumber).parents(".allaBasicWrap").css('background-image', 'url(https://tistory4.daumcdn.net/tistory/4700529/skin/images/check-X.png)');
                                $(questionNumber).parents(".allaBasicWrap").css('background-repeat', 'no-repeat');
                                $(questionNumber).parents(".allaBasicWrap").css('background-size', '7.0em');
                                $(questionNumber).parents(".allaBasicWrap").css('background-position', 'top left');
                            }
                        }
                    }
                }
            }
        });
    });

    // check button : total check
    $(".allaCheckWrap form button:first-of-type").click(function(){
        $(".allaCheckButton button").click();
        var offset = $(".allaTitleWrap").offset();
        $("html").animate({scrollTop: offset.top-10}, 500);
        $(".allaCheckButton button").css('display','inline-block');
    });

    // reset button : total reset
    $(".allaCheckWrap form button:nth-of-type(2)").click(function(){
        var delConfirm = confirm('이 문제집을 풀어본 기존 정보가 모두 사라집니다.\n정말 풀어본 정보를 삭제 하시겠습니까?');
        if (delConfirm == true){
            var offset = $(".allaTitleWrap").offset();
            $("html").animate({scrollTop: offset.top-10}, 0);
            location.reload();
        }
    });
});


/*
    // 페이지 벗어날 시 경고문
    $(function() {
        $(window).on('beforeunload', function() {
            return "이 페이지를 벗어나면 데이터가 초기화 됩니다.";
        });
    });
*/

/* -------------------------------------------- */
/* 종  료 : alla-post-jquery-1.0.1.js         */
/* -------------------------------------------- */


/* -------------------------------------------- */
/* =category 파라미터 삭제 코드                 */
/* -------------------------------------------- */
// <script>
Array.prototype.slice.call(document.querySelectorAll('a'))
    .filter(function(el) {
        return el.href.match(/\/[0-9]+\?category/gi);
    })
    .forEach(function(el) {
        el.href = el.href.replace(/\?category.*/, '');
    });
// </script>
/* -------------------------------------------- */
/* // =category 파라미터 삭제 코드              */
/* -------------------------------------------- */