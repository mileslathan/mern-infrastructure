import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm'

export default function Auth({ setUser }) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}
