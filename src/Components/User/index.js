import React from "react";
import Style from "./Style";

const User = ({ item }) => {
    return (
        <Style>
            <div>{item.name}</div>
            <div>Roll dice limit: {item.limit}</div>
            {item.pont}
            <div className="point">
                Point :{" "}
                <div className="point-value">
                    {item.point.map((value, i) => {
                        return (
                            <div key={i}>
                                {value.value.map((dice, key) => {
                                    return `${dice} ${
                                        value.value.length === i + 1 ? "" : ", "
                                    }`;
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>Score : ({item.score})</div>
        </Style>
    );
};
export default User;
