import { examList } from "@/emun";
import { useState } from "react";

export function useTest() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(examList); // dữ liệu hiển thị sau khi lọc

  const handleSearch = () => {
    console.log("Từ khóa tìm kiếm:", keyword);
    const filtered = examList.filter((exam) =>
      exam.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setData(filtered);
  };
  return [
    { keyword, data },
    { handleSearch, setKeyword },
  ] as const;
}
