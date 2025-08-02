import Banner from "../component/Banner";
import Coaches from "../component/Coaches";
import Faq from "../component/Faq";
import Maximize from "../component/Maximize";
import Pricing from "../component/Pricing";
import Ultimate from "../component/Ultimate";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Ultimate/>
            <Coaches/>
            <Maximize/>
            <Faq/>
            <Pricing/>
        </div>
    );
};

export default Home;