import { LoginForm, User } from "modules/login-form/login-form";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "types/schemas";

// TODO: Button deactive when username field is empty;

export function Home() {
  const navigate = useNavigate();

  function handleSubmit(data: User) {
    // TODO: Set username field on store using redux
    navigate("/network");
  }

  return (
    <>
      <div className="min-h-screen w-full bg-slate-400 flex justify-center items-center">
        <div className="bg-white rounded-md p-5 w-[500px]">
          <h1 className="font-bold text-xl">Welcome to CodeLeap network!</h1>

          <LoginForm validationSchema={loginSchema} onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}
