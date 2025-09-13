import CoreChip from "@/components/atoms/CoreChip";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center ">
      <Image
        src="/valid/images/background.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <CoreChip lable="chu van duc" />
    </div>
  );
}
