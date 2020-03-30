import React, { useState, useEffect } from "react";

const UpdateMoney = ({ money, updateMoney }) => {
    const [changeMoney, setChangeMoney] = useState(money);
    const handleChange = e => {
        const regex = /^\d{0,10}$/;
        if (regex.test(e.target.value)) {
            setChangeMoney(e.target.value);
        } else {
            alert("input numbers only, and no more than 10 digits please.");
            e.target.value = changeMoney;
        }
    };
    useEffect(() => {
        updateMoney(changeMoney);
    }, [changeMoney, updateMoney]);
    return (
        <div>
            <span>Update Money: </span>
            <input type="text" onChange={e => handleChange(e)} value={changeMoney} />
        </div>
    );
};

export default UpdateMoney;
