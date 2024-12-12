import { LoginForm } from "../components/login-form";


export default function LoginPage() {
  return (
    <main>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}