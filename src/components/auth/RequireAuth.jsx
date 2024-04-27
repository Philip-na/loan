import { Link, Outlet } from "react-router-dom";
import { redirect } from "react-router-dom";

const RequireAuth = () => {

    const user = JSON.parse(localStorage.getItem("user")) || null;
 

    console.log(user);

    if (user !== null) {
        return <Outlet />;
    } else {
        return (
            <div>
                <h1>Access Denied</h1>
                <p>You must be logged in to view this page</p>

                <Link to="/login">Login</Link>
                
            </div>
        );
    }

}

export default RequireAuth