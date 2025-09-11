import { useState } from "react";
import { useForm } from "react-hook-form";

type AuthMode = "LOGIN" | "REGISTER";

export function useLogin() {
  // state để lưu mode hiện tại
  const [mode, setMode] = useState<AuthMode>("LOGIN");

  // react-hook-form
  const { register, handleSubmit, reset } = useForm();

  // đổi qua REGISTER
  const handleRegister = () => {
    setMode("REGISTER");
    reset(); // reset form khi đổi mode (nếu muốn)
  };

  // đổi qua LOGIN
  const handleLogin = () => {
    setMode("LOGIN");
    reset();
  };
  // xử lý submit
  const onSubmit = (data: any) => {
    if (mode === "LOGIN") {
      console.log("Login with", data);
    } else {
      console.log("Register with", data);
    }
  };

  return [
    {
      mode,
    },
    {
      register,
      handleSubmit,
      onSubmit,
      handleRegister,
      handleLogin,
    },
  ] as const;
}
