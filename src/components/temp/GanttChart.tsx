import React, { useMemo, useState } from 'react';

export const getColorFromString = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 2) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 2)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

interface Item {
  start: string;
  end: string;
  name: string;
}

interface LayoutNode {
  id: string;
  x: number;
  width: number;
  name: string;
}

export const GanttChart = ({
  defaultItems,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  defaultItems: Item[];
}) => {;

  return (
    <div {...props}>
      {/* redacted */}
    </div>
  );
};
