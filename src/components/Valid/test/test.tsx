"use client";

import { useTest } from "./useTest";
import CoreCard from "@/components/organisms/CoreCard";
import { examList } from "@/emun";
import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Test() {
  const [value, handle] = useTest();
  const { keyword, data } = value;
  const { handleSearch, setKeyword } = handle;

  return (
    <Container
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="Tìm kiếm bài thi"
        variant="outlined"
        onChange={(e) => setKeyword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Grid container sx={{ marginY: 2 }} spacing={2}>
        {data.map((exam, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CoreCard prop={exam} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
