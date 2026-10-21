import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
  const handleSubmit = (e) => e.preventDefault()
  return (
    <div className="card narrow">
      <h1>Forgot password</h1>
      <p className="muted">Enter your email and we will send you a reset link.</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <button type="submit" className="primary">Send reset link</button>
      </form>
      <p className="muted"><Link to="/login">Back to login</Link></p>
    </div>
  )
}
