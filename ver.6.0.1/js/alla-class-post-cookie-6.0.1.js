// Old version Page Cookie Init
function deleteCookiesAndReload() {
    // 만약 allaGuideWrap 또는 allaGuideDiv 클래스를 가진 요소가 있다면
    if (document.querySelector('.allaGuideWrap') || document.querySelector('.allaGuideDiv')) {
        // 현재 스크롤 위치를 allaGuideWrap 또는 allaGuideDiv 요소의 상단으로 이동합니다.
        var offset = document.querySelector('.allaGuideWrap') ? document.querySelector('.allaGuideWrap').offsetTop : document.querySelector('.allaGuideDiv').offsetTop;
        window.scrollTo({ top: offset - 100, behavior: 'smooth' });

        // 쿠키 삭제
        deleteAllCookies();

        // 페이지를 새로 고칩니다.
        // location.reload();
    }
}

// 함수 호출
deleteCookiesAndReload();


// Function to set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    // 2-1. 현재 페이지의 URL을 가져옵니다.
    // var currentUrl = window.location.href;
    var currentUrl = window.location.pathname;

    // 2-2. 도메인의 경로 뒤의 모든 URL 부분을 가져옵니다.
    var domainPath = currentUrl.replace(/^.*\/\/[^\/]+/, '');

    // 2-3. 쿠키의 path에 도메인의 경로를 추가합니다.
    document.cookie = name + "=" + (value || "") + expires + "; path=" + domainPath;
}

// Function to get cookie value
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to handle radio button click event
function handleRadioButtonClick(event) {
    var radioButton = event.target;
    if (radioButton.type === 'radio' && radioButton.checked) {
        setCookie(radioButton.name, radioButton.value, 365); // Store value in cookie for 365 days
    }
}

// Function to set radio button based on cookie value
function setRadioButtonFromCookie() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function (radioButton) {
        var cookieValue = getCookie(radioButton.name);
        if (cookieValue === radioButton.value) {
            radioButton.checked = true;
        }
    });
}

// Function to delete all cookies
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        // 2-1. 현재 페이지의 URL을 가져옵니다.
        // var currentUrl = window.location.href;
        var currentUrl = window.location.pathname;

        // 2-2. 도메인의 경로 뒤의 모든 URL 부분을 가져옵니다.
        var domainPath = currentUrl.replace(/^.*\/\/[^\/]+/, '');

        // 2-3. 쿠키의 path에 도메인의 경로를 추가합니다.
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=" + domainPath;

        // document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }

    // Uncheck all radio buttons
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.checked = false;
    });
}

// Add event listeners
document.addEventListener('DOMContentLoaded', setRadioButtonFromCookie); // Set radio button based on cookie when DOM content is loaded
document.addEventListener('click', handleRadioButtonClick); // Handle radio button click event
