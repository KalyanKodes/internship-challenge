import tcImage from '../Assests/topCategories.png';
import "../styles/topCategories.css"

const TopCategories = () => {
    return (
        <div className="top-categories-wrapper">
            <div className="image-wrapper">
                <img src={tcImage} alt="group-image-of-people-laughing" />
            </div>
            <div className="top-categories-details-wrapper">
                <h3 className='hero-banner-details-heading'>Top Categories</h3>
                <h1 className='hero-banner-details-title' style={{ fontSize: "30px" }}><span>Career Development</span></h1>
                <p className='hero-banner-details-description top-categories-details' style={{ fontSize: "16px" }}>Not all changes in an organisation are welcome and even the best ones are not always easy. This is why many employers put a high value on executives able to lead well under pressure.</p>
                <h3 className='hero-banner-details-heading'>Read more</h3>
            </div>
        </div>
    )
}

export default TopCategories;