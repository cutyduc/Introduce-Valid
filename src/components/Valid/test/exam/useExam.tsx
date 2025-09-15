import { examList } from "@/emun";
import { useParams } from "next/navigation";
export function useExam() {
  const params = useParams();
  const { id } = params; // 👉 id = "exam-002"
  const exam = examList.find((item) => item.id === id);

  return [{ data: exam?.data }, {}] as const;
}
