import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){ // data load hower por loading false hobe, tokhon nicher kajgulo korbe. Tokho Orders ba private route theke login page a redirect korbena.
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;



// Private Route: 
// project a kono route create korle je kew oi route a jaita pare. But sudho Jei user email, password dia login ase , sedho sei user oi route a jaite parbe amon korte hole:
// 1st a PrivateRoute namer component creae kore nita hobe, ai component er perameter a childreen namer property k distucture kore nibo.
// Than useContext k call kore user k distucture kore nobo. Jodi user namer property thake tahole children k return kore dibo. ar na thakle <Navigate to="/login"> namer component k call kore to="/login" page a pathia dibo.
// Ar main.jsx file a jei component k private korte chassi, sei component k <PrivateRoute> er modde rakhte hobe. Tahole age private route a hitt kore , condition true hole oi component a jate diba. ex: <PrivateRoutes><Orders></Orders></PrivateRoutes>
// But akto problem ase: Orders route ba private route a thaka obosthai reload korle login page a nia jasse, Karon data server theke nia aste akto late hoi. Tokhon PrivateRotes component a condition false hosse, tai login page a dia pathasse, So amadrke loading er maddhome aita controol korte hobe:
// 1st a AuthProvider component a loading namer useState declare korbo. initialy value true thakbe, and jokhon user create , login, logOUt korbo sobsomoi loading er value true kore dibo. ar jokhon onAuthChanged er maddhome current user k dhore user state a set kore diba tar pore loading er value false kore dibo.
// Tarpor context er maddhome loadin kew pathia dibo. Than Private roure a loading distucrure kore nia.. condition dia return kore dibo. JOkhon loading er value true hobe akta loading spiner return kore diba.