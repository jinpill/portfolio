import styled from "styled-components";

const Container = styled.footer`
    flex: none;
    padding: 32px 20px;

    color: #c8c8c8;
    font-size: 0.8rem;
    text-align: center;

    user-select: none;
`;

const Footer = () => (
    <Container>
        © 2022 - All rights reserved by Jinpill Lee
    </Container>
);

export default Footer;