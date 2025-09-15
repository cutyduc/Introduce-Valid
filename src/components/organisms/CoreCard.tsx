import {
  Box,
  Button,
  Card,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";
import CoreChip from "../atoms/CoreChip";
import { Exam } from "./type";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Link from "next/link";

type Prop = {
  prop: Exam;
  sx?: object;
};

export default function CoreCard(props: Prop) {
  const { sx, prop } = props;

  return (
    <Card
      sx={{
        display: "flex",
        minWidth: 270,
        maxWidth: 270,
        minHeight: 300,
        maxHeight: 300,
        padding: 2,
        flexDirection: "column", // ✅ quan trọng
        border: "1px solid #1976d2", // Đường viền dày 2px, màu xanh
        borderRadius: 2, // Bo góc
        boxShadow: 6, // Độ bóng (0–24)
        transition: "0.3s",
        "&:hover": {
          boxShadow: 12, // Tăng bóng khi hover
          borderColor: "#1565c0", // Đổi màu viền khi hover
        },
        ...sx,
      }}
    >
      <CardContent
        sx={{
          padding: 0,
          paddingBottom: 0,
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1, // ✅ chiếm hết không gian còn lại
          flexDirection: "column",
        }}
      >
        <Typography sx={{ marginBottom: 1 }} variant="h6" component="div">
          {prop.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1, // ✅ chiếm hết không gian còn lại
            flexDirection: "column",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <Tooltip title="Thời gian làm bài">
              <AccessTimeIcon sx={{ fontSize: 20 }} />
            </Tooltip>{" "}
            {prop.content.duration} {"Phút"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Tooltip title="Số lượt thi">
              <DriveFileRenameOutlineIcon sx={{ fontSize: 20 }} />
            </Tooltip>{" "}
            {prop.content.attempts}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Tooltip title="Bình luận">
              <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />
            </Tooltip>{" "}
            {prop.content.comments}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {prop.content.parts} {"Phần thi"} {"|"} {""}
            {prop.content.questions} {"Câu hỏi"}
          </Typography>
          <Typography
            sx={{ display: "flex", gap: 1, marginY: 1 }}
            variant="body2"
            color="text.secondary"
          >
            {prop?.tags?.map((tag, index) => (
              <CoreChip key={index} lable={tag.label} />
            ))}
          </Typography>
        </Box>
      </CardContent>
      <Button variant="contained" color="primary">
        <Link href={`/test/${prop?.id}`}>Chi tiết</Link>
      </Button>
    </Card>
  );
}
