// Hire.js
import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { Button } from "../elements";

const Hire = () => {
    return (
        <a
            href="https://www.notion.so/2021-9c2e445194794c879ff5af7378061b2a"
            style={{ textDecoration: "none" }}
        >
            <Center>
                <P>π₯ λ΄λμ λκ·λͺ¨ μ±μ© μ€! π₯</P>
                <P2>λ΄λμ λμ½μ ν¨κ»ν  μλ‘μ΄ λλ£λ₯Ό μ°Ύμ΅λλ€.</P2>
                <Button is_black width="134px" height="41px">
                    λ λ³΄κΈ°
                </Button>
            </Center>
        </a>
    );
};

const P = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #161616;
    margin: 0;
    text-decoration: none;
`;

const P2 = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #161616;
    margin: 2px 0 6px;
`;

const Center = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 24px 55px 10px;
`;

Hire.defaultProps = {};

export default Hire;
