import { Carousel } from "antd";
const AutoCarousel = (props) => {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Carousel autoplay effect="fade">
        {props.bannerData.map((el) => {
          return (
            <div>
              {/* <div style={contentStyle}> */}
              <img
                className="w-full"
                // src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                src={el.bannerImage?.fields?.file?.url}
                alt="photo"
              />
              {/* </div> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default AutoCarousel;
