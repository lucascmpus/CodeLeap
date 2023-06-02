import { LoginForm, User } from "modules/login-form/login-form";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "types/schemas";
import { useDispatch } from "react-redux";
import { login } from "redux/actions/user";
import { useEffect } from "react";

export function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");

  function handleSubmit(data: User) {
    dispatch(login(data.username));
    navigate("/network");
  }

  useEffect(() => {
    if (user) {
      dispatch(login(JSON.parse(user)));
      navigate("/network");
    }
  }, [user]);

  return (
    <>
      <div className="min-h-screen w-full bg-secondary flex justify-center items-center">
        <div className="bg-white rounded-md p-5 w-[500px]">
          <h1 className="font-bold text-xl">Welcome to CodeLeap network!</h1>

          <LoginForm validationSchema={loginSchema} onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}
