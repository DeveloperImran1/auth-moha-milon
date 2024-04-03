import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location);   // Output: {pathname: '/about', search: '', hash: '', state: null, key: 'dwng63km'}
    // if(loading){
    //     return;
    // }
    if(user){
        return children;
    }

   return <Navigate to="/login" state={location.pathname} ></Navigate>
};

export default ProtectedRoute;


// Login korar por automatic kono route a nia jaoer jonno,, ba jei route a jete chaisilam sei route a nia jabe: aita korar jonno:
// protected route a useLocation er maddhome current location k pawa jai. Jodi kono route private thake ,, oi route a gele onno route a nia jai, kinto 1st a jei route a click koresi, sei route ta state namer property hisabe pawa jai.
// 