   
const Sin = ({ onChangeText, addSin, value }) => {
    return (
      <div className="sin2">
        <input type="text" onChange={onChangeText} value={value} />
        <button onClick={addSin}>Add Sin</button>
      </div>
    );
  };

export default Sin;