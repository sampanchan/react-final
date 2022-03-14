   
const Sin = ({ onChangeText, addSin, value }) => {
    return (
      <span className="sin2">
        <input type="text" onChange={onChangeText} value={value} />
        <button className="add-btn"onClick={addSin}>+</button>
      </span>
    );
  };

export default Sin;