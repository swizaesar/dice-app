import styled from "styled-components";

const Style = styled.div`
    h2 {
        text-align: center;
    }
    .dice {
        text-align: center;
        margin-bottom: 50px;
        &-point {
            height: 70px;
            width: 70px;
            padding: 50px;
            margin: 20px auto;
            border: 1px solid gray;
            border-radius: 10px;
            font-size: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .button {
        background-color: rgb(82, 186, 179);
        border-radius: 6px;
        border: none;
        color: rgb(255, 255, 255);
        padding: 10px;
        text-transform: uppercase;
        width: 200px;
        cursor: pointer;
        &:disabled {
            opacity: 0.5;
            cursor: no-drop;
        }
    }
    .user {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
export default Style;
