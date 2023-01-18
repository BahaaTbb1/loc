import styled from 'styled-components';

export const ProblemDetailsContainer = styled.div`
  /* margin-right: 64px; */
  width: 100%;
  max-height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-padding: 20px;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  overflow-y: scroll !important;
  padding: 32px 64px 16px 32px;
  max-height: 100%;
`;
