import { Exam } from "@/components/organisms/type";

export const examList: Exam[] = [
  {
    title: "IELTS Practice Set 3 Listening test 2",
    content: {
      duration: 60,
      attempts: 200,
      comments: 15,
      parts: 3,
      questions: 50,
    },
    tags: [
      { label: "HSK1", value: "1" },
      { label: "HSK2", value: "2" },
    ],
  },
  {
    title: "TOEIC Practice Test 1",
    content: {
      duration: 45,
      attempts: 150,
      comments: 12,
      parts: 4,
      questions: 100,
    },
    tags: [
      { label: "TOEIC", value: "toeic" },
      { label: "Listening", value: "listening" },
    ],
  },
  {
    title: "TOEFL Mock Test Reading Section",
    content: {
      duration: 90,
      attempts: 300,
      comments: 20,
      parts: 3,
      questions: 60,
    },
    tags: [
      { label: "TOEFL", value: "toefl" },
      { label: "Reading", value: "reading" },
    ],
  },
  {
    title: "JLPT N3 Kanji Practice",
    content: {
      duration: 30,
      attempts: 120,
      comments: 8,
      parts: 2,
      questions: 40,
    },
    tags: [
      { label: "JLPT", value: "jlpt" },
      { label: "N3", value: "n3" },
    ],
  },
  {
    title: "SAT Math Section Drill",
    content: {
      duration: 75,
      attempts: 90,
      comments: 5,
      parts: 4,
      questions: 58,
    },
    tags: [
      { label: "SAT", value: "sat" },
      { label: "Math", value: "math" },
    ],
  },
  {
    title: "GMAT Quantitative Practice",
    content: {
      duration: 60,
      attempts: 70,
      comments: 4,
      parts: 2,
      questions: 37,
    },
    tags: [
      { label: "GMAT", value: "gmat" },
      { label: "Quant", value: "quant" },
    ],
  },
  {
    title: "GRE Analytical Writing Task 1",
    content: {
      duration: 30,
      attempts: 40,
      comments: 6,
      parts: 1,
      questions: 1,
    },
    tags: [
      { label: "GRE", value: "gre" },
      { label: "Writing", value: "writing" },
    ],
  },
  {
    title: "Cambridge English B2 Reading",
    content: {
      duration: 70,
      attempts: 180,
      comments: 9,
      parts: 3,
      questions: 52,
    },
    tags: [
      { label: "Cambridge", value: "cambridge" },
      { label: "B2", value: "b2" },
    ],
  },
  {
    title: "PTE Listening Practice Mock 2",
    content: {
      duration: 55,
      attempts: 110,
      comments: 7,
      parts: 2,
      questions: 30,
    },
    tags: [
      { label: "PTE", value: "pte" },
      { label: "Listening", value: "listening" },
    ],
  },
  {
    title: "HSK4 Full Practice Test",
    content: {
      duration: 120,
      attempts: 250,
      comments: 25,
      parts: 5,
      questions: 100,
    },
    tags: [
      { label: "HSK", value: "hsk" },
      { label: "HSK4", value: "4" },
    ],
  },
];
