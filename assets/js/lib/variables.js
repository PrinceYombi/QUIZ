export const quizData = [
    {
        question: "Quel langage tourne avec le navigateur ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        answer: "d"
    },
    {
        question: "Que signifie CSS ?",
        a: "Central Style Sheets",
        b: "Cascading Style sheet",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        answer: "b"
    },
    {
        question: "Que signifie HTML ?",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "Hyperloop Machine Language",
        d: "HyperLink Markup Language",
        answer: "a"

    },
    {
        question: "En quelle année Javascript a été créé ?",
        a: "1996",
        b:  "1995",
        c: "1994",
        d: "Aucune de ces années",
        answer: "b"

    }

  ]

export const form = document.querySelector('form')
export const titleQuestion = document.querySelector('.title-question h2')
export const answers = document.querySelectorAll('.answer')
export const a_text = document.getElementById('a_text')
export const b_text = document.getElementById('b_text')
export const c_text = document.getElementById('c_text')
export const d_text = document.getElementById('d_text')
export const submitButton = document.querySelector('.submit button')
export const timeQuiz = document.querySelector('.time-quiz')
export const time = document.getElementById('time')

