import { Link } from 'react-router-dom'

export default function LoginPage() {
  const handleSubmit = (e) => e.preventDefault()
  return (
    <div className="card narrow">
      <h1>Log in</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" autoComplete="current-password" required />
        </label>
        <button type="submit" className="primary">Log in</button>
      </form>
      <p className="muted"><Link to="/forgot-password">Forgot your password?</Link></p>
    </div>
  )
}
