import CoreChip from "@/components/atoms/CoreChip";
import CoreCard from "@/components/organisms/CoreCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-8 items-center justify-items-center ">
      <Image
        src="/valid/images/background.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <CoreChip lable="chu van duc" />
      <CoreCard
        title="Core Card"
        content="Content Card"
        tag="taggg"
        button="button"
      />
    </div>
  );
}
