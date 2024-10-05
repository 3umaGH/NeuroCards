import { FlashCardQuestion } from '../types/quiz'

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

export const mockQuestions: FlashCardQuestion[] = [
  {
    id: 0,
    question: 'What is the main objective of the Summer Hacks by Edulearn hackathon?',
    answer:
      'To develop a tech-based solution that targets a challenge or enhances learning experiences within the field of education.',
  },
  {
    id: 1,
    question: 'What types of projects can participants build for the hackathon?',
    answer:
      'Participants can build web applications, mobile apps, games, software tools, or any other innovative digital solution.',
  },
  {
    id: 2,
    question: 'What is required for the project prototype?',
    answer:
      'A functioning prototype demonstrating core features and functionalities, with a focus on being polished and user-friendly.',
  },
 /* {
    id: 3,
    question: 'Where should participants maintain their project code?',
    answer: 'A public code repository on a platform like GitHub, GitLab, or Bitbucket.',
  },
  {
    id: 4,
    question: 'What should the demo video include?',
    answer:
      "A compelling presentation of the project's functionality and features, explaining how it addresses an educational challenge, up to 5 minutes long.",
  },
  {
    id: 5,
    question: 'What format should the presentation deck be in?',
    answer: 'The presentation deck should be in PDF or PowerPoint format.',
  },
  {
    id: 6,
    question: 'What should the presentation deck cover?',
    answer:
      'An overview of the project, including its purpose, features, and potential impact on education, with visuals and clear explanations.',
  },
  {
    id: 7,
    question: 'What must be included in the technical documentation?',
    answer:
      'A concise document outlining how to set up, configure, and use the project, ensuring clarity for understanding the technical aspects.',
  },
  {
    id: 8,
    question: 'What information is required about the team members?',
    answer:
      'Names and contact details of all team members, along with a brief introduction or bio emphasizing their roles and contributions.',
  },
  {
    id: 9,
    question: 'What are additional materials that participants can submit?',
    answer:
      "Supplementary materials like concept art, design mockups, user stories, or any other relevant content that enhances the project's presentation.",
  },
  {
    id: 10,
    question: 'What is encouraged for participants in terms of creativity?',
    answer:
      'To think innovatively, push creative boundaries, and strive to make a meaningful impact on education through their technological solution.',
  },*/
]
