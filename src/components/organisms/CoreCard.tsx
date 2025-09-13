import { Button, Card, CardContent, Typography } from "@mui/material";
import CoreChip from "../atoms/CoreChip";

type Prop = {
  title: string;
  content?: string;
  tag?: string;
  button?: string;
  sx?: object;
};

export default function CoreCard(props: Prop) {
  const { sx, title, content, tag, button } = props;

  return (
    <Card
      sx={{
        display: "flex",
        minWidth: 300,
        minHeight: 300,
        padding: 2,
        flexDirection: "column", // ✅ quan trọng
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
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <CoreChip lable={tag} />
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary">
        {button}
      </Button>
    </Card>
  );
}
