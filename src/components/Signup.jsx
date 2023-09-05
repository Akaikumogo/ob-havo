import { useGlobalContext } from "../context";

export default function Signup() {
  const { signup } = useGlobalContext();

  return (
    <>
      <div>Ro'yxatdan o'tish uchun ma'lumot kiriting</div>
      <button onClick={() => signup()}>Ro'yxatdan o'tish</button>
    </>
  );
}
