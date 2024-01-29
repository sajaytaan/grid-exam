import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportStoriesGrid>
          <SportStoriesContainer>
            <SportsStories>
              {SPORTS_STORIES.map((data) => (
                <MiniStory key={data.id} {...data} />
              ))}
            </SportsStories>
          </SportStoriesContainer>
        </SportStoriesGrid>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
  @media (${QUERIES.laptopAndUp}) {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const SportStoriesContainer = styled.div``;

const SportStoriesGrid = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
  @media (${QUERIES.laptopAndUp}) {
    margin-left: -32px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    gap: 16px;
    width: 100%;
    overflow: auto;
  }
`;

export default SpecialtyStoryGrid;
