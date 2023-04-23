import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";
import Spacer from "../Spacer/Spacer";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
        <Divider height="100%" width="2px" />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index, arr) => (
            <>
              <SecondaryStory key={story.id} {...story} />
              {index !== arr.length - 1 && <Divider width="100%" />}
              <Spacer size={20} />
            </>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index, arr) => (
            <>
              <OpinionStory key={story.id} {...story} />
              {index !== arr.length - 1 && <Divider width="100%" />}
              <Spacer size={20} />
            </>
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
  gap: 24px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: auto repeat(4, minmax(140px, 1fr));
    grid-template-areas:
      "main-story secondary-stories secondary-stories opinion-stories opinion-stories"
      "main-story advertisement advertisement advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  display: flex;
  gap: 1rem;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

const Divider = styled.hr`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: var(--color-gray-300);
  opacity: 0.5;
`;

export default MainStoryGrid;
