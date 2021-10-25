import Rate from "./Rate";

const Card = (props) => {
  return (
    <div className="m-1.5 h-50 w-52 text-center shadow-md rounded-md ">
      <img
        className="object-center object-cover h-36 w-full"
        // src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        src={props.url}
        alt="photo"
      />
      <Rate />
      <h2>{props.title}</h2>
    </div>
  );
};
export default Card;
