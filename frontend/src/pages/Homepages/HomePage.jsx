// import { useAuthUserStore } from '../../authStore/authUser';
import { useUserStore } from '../../stores/useUserStore';
import HomeAuth from './HomeAuth';
import HomePageUser from './HomePageUser';

const HomePage = () => {
    const { user } = useUserStore();
    console.log(user);
    return <>
        {user ? <HomePageUser /> : <HomeAuth />}
    </>

}

export default HomePage;