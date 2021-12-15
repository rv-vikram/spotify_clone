import styled from "styled-components";

export function Sidebar() {

    return <Layout />
}

const Layout = styled.div`
    width: 200px;
    height:928px;
    border:1px solid red;
    position: fixed;
    overflow-y:hidden;
`;