import { FlashCardQuiz } from '../types/quiz'

export enum QuestionGrade {
  EXCELLENT = 5,
  GOOD = 4,
  FAIR = 3,
  POOR = 2,
  VERY_POOR = 1,
}

export const gradeEmojiMap: Record<QuestionGrade, string> = {
  [QuestionGrade.EXCELLENT]: '🌟',
  [QuestionGrade.GOOD]: '😊',
  [QuestionGrade.FAIR]: '😐',
  [QuestionGrade.POOR]: '😬',
  [QuestionGrade.VERY_POOR]: '💀',
}

export const mockQuiz: FlashCardQuiz = {
  quiz_topic: 'JavaScript and TypeScript Concepts',
  questions: [
    {
      id: 0,
      question: "What is the main difference between arrow functions and regular functions regarding 'this'?",
      answer: 'Arrow functions do not have their own -this-. They inherit it from their surrounding lexical context.',
    },
    {
      id: 1,
      question: "How does 'this' behave in a regular function?",
      answer:
        "'this' in a regular function is -dynamic-. It refers to the object the method is called on or the global object if called outside a method.",
    },
    {
      id: 2,
      question: 'What is the difference between a function declaration and a function expression?',
      answer:
        'A function declaration is hoisted and function scoped while a function expression is hoisted only as a variable, not as a function.',
    },
    {
      id: 3,
      question: 'What is the Temporal Dead Zone (TDZ)?',
      answer:
        'The TDZ is the period when variables declared with -let-, -const-, or -class- are in scope but not yet initialized, leading to a ReferenceError if accessed.',
    },
    {
      id: 4,
      question: 'What do the rest and spread operators do?',
      answer:
        'The -spread- operator expands an iterable into individual elements, while the -rest- operator groups an unknown number of arguments into an array.',
    },
    {
      id: 5,
      question: 'What are the scoping rules for var, let, and const?',
      answer:
        'Var is -function-scoped-, while let and const are -block-scoped- and cannot be accessed until after their declaration (TDZ).',
    },
    {
      id: 6,
      question: 'What is a closure?',
      answer:
        "A closure is when an inner function retains access to its parent's variables even after the parent function has returned.",
    },
    {
      id: 7,
      question: 'What does immutability mean in functional programming?',
      answer:
        'Immutability means that data structures are -immutable-, and instead of modifying them, new data structures are created.',
    },
    {
      id: 8,
      question: 'What defines a pure function?',
      answer: 'A pure function always returns the same result for the same inputs and has -no side effects-.',
    },
    {
      id: 9,
      question: 'What are higher-order functions?',
      answer:
        'Higher-order functions are functions that either take other functions as -arguments- or return them as -outputs-.',
    },
    {
      id: 10,
      question: 'What is a declarative approach in programming?',
      answer:
        'A declarative approach focuses on -what to do- rather than -how to do it-, emphasizing the desired outcome over the process.',
    },
  ],
}
