import styled from "styled-components";

const Container = styled.main`
    flex: 1 0 auto;
    overflow-y: auto;
`;

const Contents = (props: {
    children: React.ReactNode
}) => (
    <Container>
        {props.children}
    </Container>
);

export default Contents;