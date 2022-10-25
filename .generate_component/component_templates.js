// component.tsx
exports.component = (name) => `import React from 'react';
import {${name}Container} from './${name}.styles';
export interface I${name}Props {}
const ${name} = ({}: I${name}Props) => {
  return <${name}Container>Hello 👋, I am a ${name} component.</${name}Container>;
};
export default ${name};
`;

// component.stories.jsx
exports.styles = (name) => `import styled from 'styled-components';
// import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const ${name}Container = styled.div\`\`;

`;

// // component.stories.jsx
// exports.story = name => `import React from 'react';
// import ${name} from './${name}.tsx';
// export default {
//   title: '${name}',
//   component: ${name},
// };
// export const Default = () => <${name} />;
// `;

// // component.test.tsx
// exports.test = name => `import React from 'react';
// import { render } from '@testing-library/react';
// import ${name} from './${name}';
// describe('${name} Component', () => {
//   test('it should match the snapshot', () => {
//     const { asFragment } = render(<${name} />);
//     expect(asFragment()).toMatchSnapshot();
//   });
// });
// `;

// index.ts
exports.barrel = (name) => `import ${name} from './${name}';
export default ${name};
`;
