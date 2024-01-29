import React from "react";
import styled from "styled-components/macro";

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletOnly}) {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
    gap: 16px;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 2fr 1.5fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media (${QUERIES.tabletAndUp}) {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  margin-top: -16px;

  @media (${QUERIES.laptopAndUp}) {
    margin-left: -32px;
    border-right: 1px solid var(--color-gray-300);
    border-bottom: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > a:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media (${QUERIES.tabletOnly}) {
    & > div {
      display: grid;
      gap: 32px;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-template-rows: 1fr;

      & > a:not(:last-of-type) {
        border-bottom: revert;
        margin-top: -1rem;
      }
    }
  }

  @media (${QUERIES.laptopAndUp}) {
    border-bottom: 1px solid var(--color-gray-300);
    margin-left: -48px;
    padding-left: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media (${QUERIES.laptopAndUp}) {
    margin-top: -48px;
    margin-left: -48px;
    padding-left: 16px;
  }
`;

export default MainStoryGrid;
