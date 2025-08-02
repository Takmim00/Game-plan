import Banner from "../component/Banner";
import Coaches from "../component/Coaches";
import Maximize from "../component/Maximize";
import Ultimate from "../component/Ultimate";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Ultimate/>
            <Coaches/>
            <Maximize/>
        </div>
    );
};

export default Home;