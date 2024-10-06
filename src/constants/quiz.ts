import { FlashCardQuiz, QuizTableItem } from '../types/quiz'

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

export const mockQuizListItems: QuizTableItem[] = [
  { id: 0, quiz_topic: 'Error Handling in JavaScript', questions_amount: 44 },
  { id: 1, quiz_topic: 'Git and Version Control', questions_amount: 35 },
  { id: 2, quiz_topic: 'Web Performance Optimization', questions_amount: 27 },
  { id: 3, quiz_topic: 'Microservices Architecture', questions_amount: 33 },
  { id: 4, quiz_topic: 'Node.js Fundamentals', questions_amount: 19 },
  { id: 5, quiz_topic: 'React Router Deep Dive', questions_amount: 25 },
  { id: 6, quiz_topic: 'Agile and Scrum Methodologies', questions_amount: 29 },
  { id: 7, quiz_topic: 'Introduction to Kafka', questions_amount: 16 },
  { id: 8, quiz_topic: 'CSS Flexbox and Grid', questions_amount: 10 },
  { id: 9, quiz_topic: 'Agile and Scrum Methodologies', questions_amount: 30 },
  { id: 10, quiz_topic: 'React Context API', questions_amount: 36 },
  { id: 11, quiz_topic: 'REST API Integration', questions_amount: 33 },
  { id: 12, quiz_topic: 'Database Design Fundamentals', questions_amount: 21 },
  { id: 13, quiz_topic: 'ES6+ Features', questions_amount: 50 },
  { id: 14, quiz_topic: 'CSS Preprocessors (SASS/LESS)', questions_amount: 11 },
  { id: 15, quiz_topic: 'Authentication with JWT', questions_amount: 23 },
  { id: 16, quiz_topic: 'Binary Search Trees', questions_amount: 29 },
  { id: 17, quiz_topic: 'Data Structures and Algorithms', questions_amount: 41 },
  { id: 18, quiz_topic: 'ES6+ Features', questions_amount: 29 },
  { id: 19, quiz_topic: 'React Hooks and Lifecycle', questions_amount: 15 },
  { id: 20, quiz_topic: 'JavaScript and TypeScript Concepts', questions_amount: 45 },
  { id: 21, quiz_topic: 'Binary Search Trees', questions_amount: 31 },
  { id: 22, quiz_topic: 'Authentication and Authorization', questions_amount: 43 },
  { id: 23, quiz_topic: 'REST API Integration', questions_amount: 35 },
  { id: 24, quiz_topic: 'Error Handling in JavaScript', questions_amount: 38 },
  { id: 25, quiz_topic: 'Testing with Jest and Enzyme', questions_amount: 36 },
  { id: 26, quiz_topic: 'Big O Notation', questions_amount: 10 },
  { id: 27, quiz_topic: 'Big O Notation', questions_amount: 16 },
  { id: 28, quiz_topic: 'JavaScript and TypeScript Concepts', questions_amount: 21 },
  { id: 29, quiz_topic: 'ES6+ Features', questions_amount: 32 },
  { id: 30, quiz_topic: 'React Performance Optimization', questions_amount: 48 },
  { id: 31, quiz_topic: 'Big O Notation', questions_amount: 48 },
  { id: 32, quiz_topic: 'GraphQL vs REST API', questions_amount: 50 },
  { id: 33, quiz_topic: 'Data Structures and Algorithms', questions_amount: 39 },
  { id: 34, quiz_topic: 'Node.js Fundamentals', questions_amount: 11 },
  { id: 35, quiz_topic: 'Introduction to Kubernetes', questions_amount: 19 },
  { id: 36, quiz_topic: 'Git and Version Control', questions_amount: 17 },
  { id: 37, quiz_topic: 'Binary Search Trees', questions_amount: 41 },
  { id: 38, quiz_topic: 'Error Handling in JavaScript', questions_amount: 50 },
  { id: 39, quiz_topic: 'GraphQL vs REST API', questions_amount: 35 },
  { id: 40, quiz_topic: 'Node.js Fundamentals', questions_amount: 48 },
  { id: 41, quiz_topic: 'OAuth and Social Login', questions_amount: 29 },
  { id: 42, quiz_topic: 'React Context API', questions_amount: 32 },
  { id: 43, quiz_topic: 'Microservices Architecture', questions_amount: 28 },
  { id: 44, quiz_topic: 'CSS Preprocessors (SASS/LESS)', questions_amount: 19 },
  { id: 45, quiz_topic: 'Database Design Fundamentals', questions_amount: 35 },
  { id: 46, quiz_topic: 'CSS Flexbox and Grid', questions_amount: 40 },
  { id: 47, quiz_topic: 'Responsive Web Design', questions_amount: 46 },
  { id: 48, quiz_topic: 'Caching Strategies (Redis, Memcached)', questions_amount: 22 },
  { id: 49, quiz_topic: 'Functional Programming', questions_amount: 35 },
]

export const mockQuiz: FlashCardQuiz = {
  id: 0,
  quiz_topic: 'JavaScript and TypeScript Concepts',
  questions: [
    {
      id: 0,
      question: "What is the main difference between arrow functions and regular functions regarding 'this'?",
      answer: 'Arrow functions do not have their own b[this]b. They inherit it from their surrounding lexical context.',
    },
    {
      id: 1,
      question: "How does 'this' behave in a regular function?",
      answer:
        "'this' in a regular function is b[dynamic]b. It refers to the object the method is called on or the global object if called outside a method.",
    },
    /*{
      id: 2,
      question: 'What is the difference between a function declaration and a function expression?',
      answer:
        'A function declaration is hoisted and function scoped while a function expression is hoisted only as a variable, not as a function.',
    },
    {
      id: 3,
      question: 'What is the Temporal Dead Zone (TDZ)?',
      answer:
        'The TDZ is the period when variables declared with b[let]b, b[const]b, or b[class]b are in scope but not yet initialized, leading to a ReferenceError if accessed.',
    },
    {
      id: 4,
      question: 'What do the rest and spread operators do?',
      answer:
        'The b[spread]b operator expands an iterable into individual elements, while the b[rest]b operator groups an unknown number of arguments into an array.',
    },
    {
      id: 5,
      question: 'What are the scoping rules for var, let, and const?',
      answer:
        'Var is b[function-scoped]b, while let and const are b[block-scoped]b and cannot be accessed until after their declaration (TDZ).',
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
        'Immutability means that data structures are b[immutable]b, and instead of modifying them, new data structures are created.',
    },
    {
      id: 8,
      question: 'What defines a pure function?',
      answer: 'A pure function always returns the same result for the same inputs and has b[no side effects]b.',
    },
    {
      id: 9,
      question: 'What are higher-order functions?',
      answer:
        'Higher-order functions are functions that either take other functions as b[arguments]b or return them as b[outputs]b.',
    },
    {
      id: 10,
      question: 'What is a declarative approach in programming?',
      answer:
        'A declarative approach focuses on b[what to do]b rather than b[how to do it]b, emphasizing the desired outcome over the process.',
    },*/
  ],
}
