import { useNavigate, useOutletContext } from "react-router-dom"

export default function ProfilePage() {

    const {loggedIn, email} = useOutletContext()
    const navigate = useNavigate()

    return <div className="card">
        {loggedIn && <p>Congratulations for logging in, {email}!</p>}
        {!loggedIn && navigate('/login')}
    </div>
}