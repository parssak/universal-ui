import React from 'react';
import { Text } from '../../src';
import { themes } from '../../src/utils';
import StoryLayout from '../utils/StoryLayout';

export default {
  title: 'Colors',
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

/**
  THEME 
    - background color
    - border color
    - text color
    - active color
    - active text color
 */

export const Colors = () => {
  const themeNames = [
    'primary',
    'secondary',
    'success',
    'warning',
    'info',
    'error',
    'purple',
  ];

  return (
    <StoryLayout>
      <div className="space-y-4">
        {themeNames.map(theme => (
          <div key={theme}>
            <div
              className={`border-2 p-2 ${themes[theme]['border']} ${themes[theme]['bg']} rounded-t`}
            >
              <Text variant="h1" className="capitalize">
                <span className={themes[theme].text}>{theme}</span>
              </Text>
            </div>
            <div
              className={`border-2 p-2 ${themes[theme]['border-active']} ${themes[theme]['bg-active']} rounded-b`}
            >
              <Text variant="h2" className="capitalize">
                <span className={themes[theme]['text-active']}>
                  {theme} active
                </span>
              </Text>
            </div>
          </div>
        ))}
      </div>
    </StoryLayout>
  );
};
