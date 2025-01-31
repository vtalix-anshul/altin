import arrow__down from "../assets/images/arrow__down.png";

const ScrollDownButton = ({ targetId })=>{
    const handleScroll = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button onClick={handleScroll} className="your-button-styles">
            <img src={arrow__down} alt="" />
        </button>
    );
}

export default ScrollDownButton;