import { keyframes } from '@chakra-ui/react';

export const moveTopFromBottom = keyframes`
  0% {
    top: 100%;
  }
  100% {
    top: 50%; /* Animate the element onto the screen */
  }
`;

// const StickLayout = styled.div`
//   position: relative;
// `;

// const Stick = styled.div<
//   Partial<{
//     backgroundColor: string;
//     height: string;
//   }>
// >`
//   width: 10vw;
//   border-radius: 6px;
//   background-color: #f3f4f6;
//   aspect-ratio: 1 / 3.5;

//   &:after {
//     content: '';
//     border-radius: 6px;
//     display: block;
//     height: ${({ height }) => height || '130px'};
//     position: absolute;
//     bottom: 0;
//     width: 10vw;
//     background-color: ${({ backgroundColor }) => backgroundColor || '#F3F4F6'};
//     animation: ${bottomToTop} 0.3s ease-in-out;
//   }
// `;
