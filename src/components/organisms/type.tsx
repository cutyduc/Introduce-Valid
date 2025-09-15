export type ExamContent = {
  duration: number;
  attempts: number;
  comments: number;
  parts: number;
  questions: number;
};

export type ExamTag = {
  label: string;
  value: string;
};

export type ExamQuestion = {
  id: string; // ID câu hỏi
  question: string; // Nội dung câu hỏi
  options: string[]; // Các lựa chọn trả lời
  answer: string; // Đáp án đúng
};

export type Exam = {
  id: string; // ID bài thi
  title: string;
  content: ExamContent;
  tags?: ExamTag[];
  data: ExamQuestion[];
};
