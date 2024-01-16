import user from "../images/user.png";

const Chip = ({item, handleClick}) => {
  return (
    <div className="chip">
      <div className="profile--image chip--image">
        <img src={user} alt="profile" />
          </div>
          <p>{item.name}&nbsp;</p>
          <span onClick={() => handleClick(item)}>X&nbsp;</span>
    </div>
  );
};

export default Chip;
