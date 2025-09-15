"use client";

import {
  Button,
  Card,
  CardContent,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useExam } from "./useExam";
import { useState } from "react";

export default function Exam() {
  const [value, handle] = useExam();
  const { data } = value;
  const {} = handle;

  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleChange = (qId: string, val: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    let correct = 0;
    data?.forEach((q) => {
      if (answers[q.id] === q.answer) correct++;
    });
    alert(`Bạn làm đúng ${correct}/${data?.length} câu`);
  };
  return (
    <Container
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      {data?.map((q) => (
        <Card key={q.id} sx={{ width: "100%", maxWidth: 800, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {q.question}
            </Typography>
            <RadioGroup
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
            >
              {q.options.map((opt, idx) => (
                <FormControlLabel
                  key={idx}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                />
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ width: "fit-content", alignSelf: "center" }}
      >
        Nộp bài
      </Button>
    </Container>
  );
}
