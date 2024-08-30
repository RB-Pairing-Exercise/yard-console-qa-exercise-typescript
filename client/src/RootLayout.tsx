import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const RootLayout = () => {
  return (
    <Container>
      <NavContainer>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/equipment">Equipment</StyledNavLink>
        <StyledNavLink to="/yards">Yards</StyledNavLink>
      </NavContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Container>
  );
};

export default RootLayout;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ContentContainer = styled.div`
  max-width: 50rem;

  margin: 0 auto;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  border: gray 2px solid;
  border-radius: 5px;

  padding: 0.5rem 1rem;

  text-decoration: none;

  &.active {
    background-color: darkgray;
    color: white;
  }
`;
