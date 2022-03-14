// where default sins go

const Default = ({ onChangeCheckbox, deleteSin, sin, value, uid}) => {
    return(
        <label className="sin">
            <input
                type="checkbox"
                checked={value}
                onChange={onChangeCheckbox}
                data-uid={uid}
            />
            <span>{sin}</span>
            <button className="delete-btn" onClick={deleteSin} data-uid={uid}>
                X
            </button>
        </label>
    )
}

export default Default;