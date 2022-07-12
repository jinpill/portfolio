import styled from "styled-components";
import Layout from "../components/Layout";

import background from "../assets/profile-background-main.png";

const Container = styled.div`
    height: 100%;

    position: relative;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    &::before {
        display: block;
        content: "";

        position: absolute;
        inset: 0;

        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7));
    }

    > div {
        position: relative;
        z-index: 1;
    }
`;

const Profile = () => (
    <Layout>
        <Container>
            <div>
                <h1>Jinpill's Portfolio</h1>
            </div>
        </Container>
    </Layout>
);

export default Profile;