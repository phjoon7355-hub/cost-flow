// ==========================================
// 요소별원가계산 Interactive
// script.js
// Version 1.0
// ==========================================

let step = 1;

// -----------------------------
// HTML 가져오기
// -----------------------------

const input = document.getElementById("answerInput");
const button = document.getElementById("checkButton");

const message = document.getElementById("message");

const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");

const rawAnswer = document.getElementById("rawAnswer");
const materialAnswer = document.getElementById("materialAnswer");

const workInProcess = document.getElementById("workInProcess");

const movingCard = document.getElementById("movingCard");


// -----------------------------
// Enter 입력
// -----------------------------

input.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        checkAnswer();

    }

});

button.addEventListener("click", checkAnswer);


// -----------------------------
// 정답 확인
// -----------------------------

function checkAnswer(){

    const answer = input.value.trim();

    // -------------------------
    // STEP 1
    // -------------------------

    if(step===1){

        if(answer==="소비액"){

            successStep1();

        }else{

            wrong();

        }

    }

    // -------------------------
    // STEP 2
    // -------------------------

    else if(step===2){

        if(answer==="재료비"){

            successStep2();

        }else{

            wrong();

        }

    }

}



// -----------------------------
// STEP1 성공
// -----------------------------

function successStep1(){

    rawAnswer.innerHTML="소비액";

    rawAnswer.style.background="#d4edda";

    rawAnswer.style.color="#155724";

    rawAnswer.style.border="none";

    message.innerHTML="정답입니다! 소비액이 재공품으로 이동합니다.";

    input.value="";

    animateCard("소비액", afterMoveStep1);

}



// -----------------------------
// STEP2 성공
// -----------------------------

function successStep2(){

    materialAnswer.innerHTML="재료비";

    materialAnswer.style.background="#d4edda";

    materialAnswer.style.color="#155724";

    materialAnswer.style.border="none";

    message.innerHTML="🎉 축하합니다! 첫 번째 흐름을 완성했습니다.";

    input.disabled=true;

    button.disabled=true;

}



// -----------------------------
// 오답
// -----------------------------

function wrong(){

    message.innerHTML="❌ 다시 생각해 보세요.";

    input.select();

}



// -----------------------------
// 카드 이동
// -----------------------------

function animateCard(text, callback){

    movingCard.innerHTML=text;

    movingCard.style.display="flex";

    movingCard.style.left="320px";

    movingCard.style.top="280px";

    let x=320;
    let y=280;

    const interval=setInterval(function(){

        x+=8;
        y+=2;

        movingCard.style.left=x+"px";
        movingCard.style.top=y+"px";

        if(x>760){

            clearInterval(interval);

            movingCard.style.left="-500px";
            movingCard.style.top="-500px";

            callback();

        }

    },16);

}



// -----------------------------
// 이동 끝
// -----------------------------

function afterMoveStep1(){

    workInProcess.classList.remove("hidden");

    step=2;

    questionTitle.innerHTML="문제 2";

    questionText.innerHTML="재공품 차변 첫 번째 빈칸은?";

    message.innerHTML="재공품의 첫 번째 계정과목을 입력하세요.";

}



// -----------------------------
// 시작
// -----------------------------

message.innerHTML="원재료의 대변 빈칸을 맞혀보세요.";

input.focus();