import CoreChip from "@/components/atoms/CoreChip";
import CoreCard from "@/components/organisms/CoreCard";
import { Exam } from "@/components/organisms/type";
import Image from "next/image";

const exam: Exam = {
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
};

export default function Home() {
  return (
    <div className="flex gap-8 items-center justify-items-center ">
      <CoreCard prop={exam} />
    </div>
  );
}
