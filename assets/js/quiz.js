/**
 * IMPORTATION DES VARIABLES
 */
import { form, titleQuestion, a_text, 
    b_text, c_text, d_text, submitButton, answers, quizData, timeQuiz, time } from "./lib/variables.js"

//INITIALISATION
let currentQuiz = 0
let score = 0
let currentTime = 16

/**
 * FONCTION PERMETTANT D'INITIALISER LE TEMPS
 */
initTime()
function initTime(){
    if (currentTime<10) {
        time.innerText ="Time : "+ "0"+currentTime+"s" 
    }else{
        time.innerText = "Time : "+ currentTime+"s" 
    }

    currentTime--
    if (currentTime<16 && currentTime>=0) {
        
        setTimeout(initTime, 1000)
    }
    
    if (currentTime===0) {
        
       questionsAndReloadQuiz()
        
    }
}

//FONCTION PERMETTANT DE REDEMARRER LE COMPTAGE DU TEMPS
function reloadTime(){

    currentTime = 16
}

/**
 *  FONCTION PERMETTANT D'INITIALISER LE QUIZ
 */
initQuiz()
function initQuiz(){

    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]

    titleQuestion.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
      
}

//FONCTION PERMETTANT DE SUPPRIMER LA REPONSE SELECTIONNEE
function deselectAnswer(){

    answers.forEach(answer => answer.checked = false)
}

//FONCTION PERMETTANT DE RECUPER L'ID DE L'ELEMENT SELECTIONNEE
function getSelected(){
    let answer

    answers.forEach(answerElement =>{

        if (answerElement.checked) {
            
            answer = answerElement.id
        }
       
    })

    return answer
}

/**
 * Function permettant d'aller de question en question 
 * selon le temps et/ou la validation d'une réponse
 */
function questionsAndReloadQuiz(){

    currentQuiz ++

    if (currentQuiz < quizData.length) {
        
        initQuiz()
        reloadTime()
    }else{
        timeQuiz.innerHTML = ''
        
        form.innerHTML = `
            <div class="title-question">
            <h2>Vous avez repondu ${score}/${quizData.length} questions correctement</h2>
            <div class="submit">
            <button type="button" onclick="location.reload()">Récommencer le quiz</button>
            </div>
        `
    }
}

/**
 * A la soumission de la réponse, le score change, on change de question, total des points,
 * Réjouer le Quiz
 */
submitButton.addEventListener('click', ()=>{

    const answer = getSelected()  
    if (answer) {
  
        if (answer === quizData[currentQuiz].answer) {
            score++
        }

       questionsAndReloadQuiz()
    }

})















