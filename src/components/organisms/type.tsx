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

export type Exam = {
  title: string;
  content: ExamContent;
  tags?: ExamTag[];
};
