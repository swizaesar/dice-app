import React from "react";
import User from "../../Components/User";
import Style from "./style";

const Games = () => {
    const [number, setNumber] = React.useState("");
    const [point, setPoint] = React.useState([
        {
            id: 1,
            name: "User 1",
            point: [
                {
                    round: 1,
                    value: [],
                },
                {
                    round: 2,
                    value: [],
                },
                {
                    round: 3,
                    value: [],
                },
            ],
            limit: 4,
            round: 1,
            role: 3,
            score: 0,
        },
        {
            id: 2,
            name: "User 2",
            point: [
                {
                    round: 1,
                    value: [],
                },
                {
                    round: 2,
                    value: [],
                },
                {
                    round: 3,
                    value: [],
                },
            ],
            limit: 4,
            round: 1,
            role: 3,
            score: 0,
        },
        {
            id: 3,
            name: "User 3",
            point: [
                {
                    round: 1,
                    value: [],
                },
                {
                    round: 2,
                    value: [],
                },
                {
                    round: 3,
                    value: [],
                },
            ],
            limit: 4,
            round: 1,
            role: 3,
            score: 0,
        },
    ]);
    const [active, setActive] = React.useState(0);
    const sides = 6;
    var dice = {
        roll: function () {
            var randomNumber = Math.floor(Math.random() * sides) + 1;
            return randomNumber;
        },
    };
    const handlerClickDice = () => {
        let result = dice.roll();
        if (result) {
            setNumber(result);
            if (result === 1) {
                point[active + 1 === 3 ? 0 : active + 1].limit =
                    point[active + 1 === 3 ? 0 : active + 1].limit + 1;
                point[active + 1 === 3 ? 0 : active + 1].point[
                    point[active].round - 1
                ].value = [
                    ...point[active + 1 === 3 ? 0 : active + 1].point[
                        point[active].round - 1
                    ].value,
                    result,
                ];
                point[active].limit = point[active].limit - 1;
            } else {
                point[active].limit = point[active].limit - 1;
                point[active].point[point[active].round - 1].value = [
                    ...point[active].point[point[active].round - 1].value,
                    result,
                ];
            }

            if (point[active].limit === 0 && point[active].role !== 0) {
                setActive(active === 2 ? 0 : active + 1);
                point[active].role = point[active].role - 1;
                point[active].round = point[active].round + 1;
                point[active].limit = 4;
            }

            point[active].score =
                result === 6 ? point[active].score + 1 : point[active].score;
            setPoint(point);
        }
    };
    return (
        <Style>
            <div className="dice">
                <div className="dice-point">{number}</div>
                <button
                    disabled={point[2].round === 4}
                    className="button"
                    onClick={handlerClickDice}
                >
                    Roll Dice
                </button>
            </div>
            <div className="user">
                {point.map((item, key) => {
                    return <User item={item} key={key} />;
                })}
            </div>
        </Style>
    );
};

export default Games;
