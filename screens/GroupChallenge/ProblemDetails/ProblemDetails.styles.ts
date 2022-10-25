import styled from 'styled-components';

export const ProblemDetailsContainer = styled.div`
  margin-left: 32px;
  /* margin-right: 64px; */
  width: 100%;
  margin-top: 32px;
  /* max-height: 100vh ; */
  scroll-snap-type: y mandatory;
  scroll-padding: 20px;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  overflow-y: scroll !important;
  margin-bottom: 142px;
`;
