import Banner from "../component/Banner";
import Coaches from "../component/Coaches";
import Faq from "../component/Faq";
import Maximize from "../component/Maximize";
import Ultimate from "../component/Ultimate";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Ultimate/>
            <Coaches/>
            <Maximize/>
            <Faq/>
        </div>
    );
};

export default Home;