import user from "../images/user.png"

const ListItem = ({ item, handleClick, isFocused = false }) => {
  const style = isFocused ? {backgroundColor: "#ededed"} : {backgroundColor : ""}
  return (
    <div className="list__item" style={style} onClick={() => handleClick(item)}>
      <div className="profile--image">
        <img src={user} alt="profile" />
      </div>
      <h5>{item.name}</h5> &nbsp; &nbsp;
      <p>{item.email}</p>
    </div>
  );
};

export default ListItem;
