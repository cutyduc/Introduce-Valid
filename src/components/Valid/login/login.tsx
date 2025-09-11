"use client";

import { useLogin } from "./useLogin";

export default function LoginForm() {
  const [value, handle] = useLogin();
  const { mode } = value;
  const { onSubmit, handleRegister, handleLogin, register, handleSubmit } =
    handle;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          {mode === "LOGIN" ? "Đăng nhập" : "Đăng ký"}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email")}
              placeholder="Nhập email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mật khẩu</label>
            <input
              {...register("password")}
              placeholder="Nhập mật khẩu"
              type="password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {mode === "REGISTER" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Xác nhận mật khẩu
              </label>
              <input
                {...register("confirmPassword")}
                placeholder="Xác nhận mật khẩu"
                type="password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {mode === "LOGIN" ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        {/* Toggle mode */}
        <div className="text-center mt-4 text-sm">
          {mode === "LOGIN" ? (
            <p>
              Chưa có tài khoản?{" "}
              <button
                type="button"
                onClick={handleRegister}
                className="text-blue-600 font-medium hover:underline"
              >
                Đăng ký ngay
              </button>
            </p>
          ) : (
            <p>
              Đã có tài khoản?{" "}
              <button
                type="button"
                onClick={handleLogin}
                className="text-blue-600 font-medium hover:underline"
              >
                Đăng nhập
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
