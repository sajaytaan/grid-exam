import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupDesk>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupDesk>
        <Logo />
        <SubscribeWrapper>
          <Button>SUBSCRIBE</Button>
          <Link href='/'>Already a subsriber?</Link>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const ActionGroupDesk = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    gap: 16px;
  }
`;

const Link = styled.a`
  color: var(--color-gray-900);
  font-size: 14px;
  font-style: italic;
  text-decoration: revert;
  padding-top: 8px;
`;

const SubscribeWrapper = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: end;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletOnly}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  @media (${QUERIES.laptopAndUp}) {
    margin-top: 16px;
    margin-bottom: 81px;
    justify-content: space-between;
  }
`;

export default Header;
