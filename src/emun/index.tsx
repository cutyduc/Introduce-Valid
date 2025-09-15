import { Exam } from "@/components/organisms/type";

export const examList: Exam[] = [
  {
    id: "exam-001",
    title: "IELTS Practice Listening",
    content: {
      duration: 30,
      attempts: 50,
      comments: 5,
      parts: 1,
      questions: 3,
    },
    tags: [
      { label: "IELTS", value: "ielts" },
      { label: "Listening", value: "listening" },
    ],
    data: [
      {
        id: "q1",
        question: "What is the speaker mainly talking about?",
        options: ["Travel", "Food", "Education", "Music"],
        answer: "Travel",
      },
      {
        id: "q2",
        question: "Which city is mentioned?",
        options: ["London", "Paris", "New York", "Tokyo"],
        answer: "London",
      },
      {
        id: "q3",
        question: "What time does the train leave?",
        options: ["6 AM", "8 AM", "10 AM", "12 PM"],
        answer: "8 AM",
      },
    ],
  },
  {
    id: "exam-002",
    title: "TOEIC Practice Test",
    content: {
      duration: 25,
      attempts: 40,
      comments: 3,
      parts: 1,
      questions: 2,
    },
    tags: [
      { label: "TOEIC", value: "toeic" },
      { label: "Business", value: "business" },
    ],
    data: [
      {
        id: "q1",
        question: "Where is the meeting scheduled?",
        options: ["Room A", "Room B", "Room C", "Room D"],
        answer: "Room B",
      },
      {
        id: "q2",
        question: "Who will present first?",
        options: ["Mr. Kim", "Ms. Lee", "Mr. John", "Ms. Anna"],
        answer: "Ms. Lee",
      },
    ],
  },
  {
    id: "exam-003",
    title: "TOEFL Reading Practice",
    content: {
      duration: 40,
      attempts: 60,
      comments: 6,
      parts: 1,
      questions: 4,
    },
    tags: [
      { label: "TOEFL", value: "toefl" },
      { label: "Reading", value: "reading" },
    ],
    data: [
      {
        id: "q1",
        question: "What is the main idea of the passage?",
        options: ["Climate Change", "History", "Art", "Technology"],
        answer: "Climate Change",
      },
      {
        id: "q2",
        question: "Which word is closest in meaning to 'sustainable'?",
        options: ["Temporary", "Maintainable", "Fragile", "Weak"],
        answer: "Maintainable",
      },
      {
        id: "q3",
        question: "What is implied by the author?",
        options: [
          "Need action",
          "Ignore issue",
          "Past is better",
          "Future is fixed",
        ],
        answer: "Need action",
      },
      {
        id: "q4",
        question: "Which of the following is NOT mentioned?",
        options: ["Energy", "Pollution", "Transport", "Fashion"],
        answer: "Fashion",
      },
    ],
  },
  {
    id: "exam-004",
    title: "JLPT N3 Kanji Drill",
    content: {
      duration: 20,
      attempts: 30,
      comments: 2,
      parts: 1,
      questions: 2,
    },
    tags: [
      { label: "JLPT", value: "jlpt" },
      { label: "N3", value: "n3" },
    ],
    data: [
      {
        id: "q1",
        question: "漢字 '水' nghĩa là gì?",
        options: ["Lửa", "Nước", "Cây", "Đất"],
        answer: "Nước",
      },
      {
        id: "q2",
        question: "Chữ '食' được đọc là gì?",
        options: ["Taberu", "Nomu", "Kiku", "Miru"],
        answer: "Taberu",
      },
    ],
  },
  {
    id: "exam-005",
    title: "SAT Math Mini Test",
    content: {
      duration: 30,
      attempts: 35,
      comments: 4,
      parts: 1,
      questions: 3,
    },
    tags: [
      { label: "SAT", value: "sat" },
      { label: "Math", value: "math" },
    ],
    data: [
      {
        id: "q1",
        question: "2x + 3 = 7. What is x?",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        id: "q2",
        question: "What is 5²?",
        options: ["20", "25", "30", "15"],
        answer: "25",
      },
      {
        id: "q3",
        question: "Solve: 12 ÷ 3 × 2 = ?",
        options: ["6", "8", "10", "12"],
        answer: "8",
      },
    ],
  },
  {
    id: "exam-006",
    title: "GMAT Quant Quick Test",
    content: {
      duration: 25,
      attempts: 28,
      comments: 1,
      parts: 1,
      questions: 2,
    },
    tags: [
      { label: "GMAT", value: "gmat" },
      { label: "Quant", value: "quant" },
    ],
    data: [
      {
        id: "q1",
        question: "If y = 3x + 2, what is y when x = 4?",
        options: ["10", "12", "14", "20"],
        answer: "14",
      },
      {
        id: "q2",
        question: "Find the median of [3, 7, 9, 10, 15]",
        options: ["7", "9", "10", "15"],
        answer: "9",
      },
    ],
  },
  {
    id: "exam-007",
    title: "GRE Writing Sample",
    content: {
      duration: 20,
      attempts: 18,
      comments: 1,
      parts: 1,
      questions: 1,
    },
    tags: [
      { label: "GRE", value: "gre" },
      { label: "Writing", value: "writing" },
    ],
    data: [
      {
        id: "q1",
        question: "Write an essay about the role of technology in education.",
        options: ["Submit Essay"],
        answer: "Submit Essay",
      },
    ],
  },
  {
    id: "exam-008",
    title: "Cambridge English B2 Reading",
    content: {
      duration: 35,
      attempts: 45,
      comments: 2,
      parts: 1,
      questions: 3,
    },
    tags: [
      { label: "Cambridge", value: "cambridge" },
      { label: "B2", value: "b2" },
    ],
    data: [
      {
        id: "q1",
        question: "What is the tone of the passage?",
        options: ["Formal", "Informal", "Neutral", "Negative"],
        answer: "Formal",
      },
      {
        id: "q2",
        question: "What does 'efficient' mean?",
        options: ["Fast", "Lazy", "Weak", "Random"],
        answer: "Fast",
      },
      {
        id: "q3",
        question: "Which detail supports the main idea?",
        options: ["Example A", "Example B", "Example C", "None"],
        answer: "Example A",
      },
    ],
  },
  {
    id: "exam-009",
    title: "PTE Listening Mini Test",
    content: {
      duration: 25,
      attempts: 38,
      comments: 2,
      parts: 1,
      questions: 2,
    },
    tags: [
      { label: "PTE", value: "pte" },
      { label: "Listening", value: "listening" },
    ],
    data: [
      {
        id: "q1",
        question: "What word did the speaker stress?",
        options: ["Economy", "Policy", "Growth", "Market"],
        answer: "Policy",
      },
      {
        id: "q2",
        question: "What is the speaker's attitude?",
        options: ["Happy", "Sad", "Angry", "Neutral"],
        answer: "Neutral",
      },
    ],
  },
  {
    id: "exam-010",
    title: "HSK4 Practice",
    content: {
      duration: 40,
      attempts: 60,
      comments: 5,
      parts: 1,
      questions: 4,
    },
    tags: [
      { label: "HSK", value: "hsk" },
      { label: "HSK4", value: "4" },
    ],
    data: [
      {
        id: "q1",
        question: "汉字 '书' nghĩa là gì?",
        options: ["Sách", "Bút", "Bàn", "Trường"],
        answer: "Sách",
      },
      {
        id: "q2",
        question: "Từ '朋友' nghĩa là?",
        options: ["Ba mẹ", "Bạn bè", "Anh chị", "Người yêu"],
        answer: "Bạn bè",
      },
      {
        id: "q3",
        question: "Chữ '学习' nghĩa là?",
        options: ["Làm việc", "Ăn uống", "Học tập", "Ngủ nghỉ"],
        answer: "Học tập",
      },
      {
        id: "q4",
        question: "Chữ '饭馆' nghĩa là?",
        options: ["Nhà hàng", "Trường học", "Cửa hàng", "Bệnh viện"],
        answer: "Nhà hàng",
      },
    ],
  },
];
