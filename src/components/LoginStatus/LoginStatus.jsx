import "./LoginStatus.css";

export const LoginStatus = () => {
    return (
        <aside id="login-status" className="login-status hidden">
            <div id="not-logged-in">
                <p><a href="/login"><img src="src/assets/user-icon.png" alt="user icon"/>Login</a></p>
                <p><a href="/register"><img src="src/assets/register-icon.png" alt="register icon"/>Register</a></p>
            </div>
            <div id="logged-in" className="hidden">
                <p><a href="/"><img src="src/assets/user-icon.png" alt="user icon"/>Sign Out</a></p>
            </div>
        </aside>
    )
}