import React from 'react';
import { MantineProvider } from '@mantine/core';
import { UserCardImage } from './UserCard/UserCard';
import "./AboutMe.css";

// const PRIMARY_COL_WIDTH = '35%';
// const SECONDARY_COL_WIDTH = '65%'; // Adjusted to fit within 100%

export function AboutSkillsToggle() {
  return (
    <MantineProvider defaultColorScheme="light">

    </MantineProvider>
    );
}
//       <div
//         style={{
//           height: '100vh',
//           width: '100vw',
//           padding: 0,
//           margin: 0,
//           display: 'flex',
//           flexDirection: 'row',
//           boxSizing: 'border-box',
//         }}
//       >
//         <div className='About left-column' id='about'
//           style={{
//             width: PRIMARY_COL_WIDTH,
//             height: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: 'green',
//             boxSizing: 'border-box',
//           }}
//         >
//           {/* <UserCardImage /> */}
//         </div>

//         <div className='right-column'
//           style={{
//             width: SECONDARY_COL_WIDTH,
//             height: '100%',
//             display: 'grid',
//             gridTemplateRows: '1fr 1fr',
//             gridTemplateColumns: '1fr 1fr',
//             gap: 'md',
//             boxSizing: 'border-box',
//           }}
//         >
//           <div className='top-left'
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: 'pink',
//               boxSizing: 'border-box',
//             }}
//           >
//             {/* Content for the top-left grid item */}
//           </div>

//           <div className='top-right'
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: 'orange',
//               boxSizing: 'border-box',
//             }}
//           >
//             {/* Content for the top-right grid item */}
//           </div>

//           <div className='bottom'
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: 'yellow',
//               boxSizing: 'border-box',
//               gridColumn: '1 / span 2', // Span across two columns
//             }}
//           >
//             {/* Content for the bottom grid item spanning across both columns */}
//           </div>
//         </div>
//       </div>