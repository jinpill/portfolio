import { Link, useHref } from "react-router-dom";
import styled from "styled-components";
import { useClassList } from "../hooks";

const Container = styled.header`
    height: 80px;

    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1.25rem;

    border-bottom: 1px solid #d3d3d3;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    > * {
        height: 100%;
    }

    a {
        text-decoration: none;
    }
`;

const Title = styled.h1`
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 200;
    user-select: none;

    span {
        color: #acacac;
    }
`;

const Anchors = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    font-size: 0.9rem;

    a {
        display: block;
        position: relative;

        &::after {
            width: 100%;

            display: block;
            content: "";

            position: absolute;
            bottom: 0;
            transform: translateY(4px);

            border-bottom: 1px solid transparent;
        }

        &.active,
        &:hover {
            &::after {
                border-bottom-color: #b4b4b4;
                transition: border 0.2s;
            }
        }
    }
`;

const Anchor = (props: {
    path: Path,
    children: string
}) => {
    const href = useHref("");
    const classList = useClassList();
    const _href = process.env.PUBLIC_URL + props.path;

    if (href === _href) classList.add("active");

    return (
        <li>
            <Link
                to={props.path}
                className={classList.join()}
            >
                {props.children}
            </Link>
        </li>
    );
}

const Header = () => {
    const anchors: [Path, string][] = [
        ["/profile", "Profile"],
        ["/projects", "Projects"],
        ["/contact", "Contact"]
    ];

    return (
        <Container>
            <Title>
                <Link to="/">
                    Jinipill<span>'s Portfolio</span>
                </Link>
            </Title>
            <Anchors>
                {anchors.map(([path, name]) => (
                    <Anchor key={path} path={path}>
                        {name}
                    </Anchor>
                ))}
            </Anchors>
        </Container>
    );
}

export default Header;