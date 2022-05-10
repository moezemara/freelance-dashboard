import { useRouteMatch } from "react-router-dom";
import { Link as RounterLink } from "react-router-dom";

const Page404 = () => {
    let match = useRouteMatch();
    return (
        <div className="page404">
            <h2>Page Not Found !</h2>
            <p>The page that you have requested cannot be found</p>
            <RounterLink  to={`/signup`}>Back to Home Page?</RounterLink>
        </div>
    );
}
 
export default Page404;