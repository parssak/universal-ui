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

const computeLayoutNodes = (items: Item[]): LayoutNode[] => {
  // Sort Items!
  const sortedItems = items.sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  if (sortedItems.length === 0) {
    return [];
  }

  const start = new Date(sortedItems[0].start);
  const end = new Date(sortedItems[sortedItems.length - 1].end);

  const layoutRangeMs = end.getTime() - start.getTime();

  const layoutNodes: LayoutNode[] = sortedItems.map((item, index) => {
    const startDate = new Date(item.start);
    const endDate = new Date(item.end);
    const width = (endDate.getTime() - startDate.getTime()) / layoutRangeMs;
    const x = (startDate.getTime() - start.getTime()) / layoutRangeMs;
    return {
      id: `${index}`,
      x,
      width,
      name: item.name,
    };
  });

  return layoutNodes;
};

export const GanttChart = ({
  defaultItems,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  defaultItems: Item[];
}) => {
  const [items, setItems] = useState(defaultItems);

  const layoutNodes = useMemo(() => computeLayoutNodes(items), [items]);

  const onRemove = (name: string) => {
    setItems(items.filter(item => item.name !== name));
  };

  const scale = 40;

  return (
    <div {...props}>
      <div className="relative">
        <div className="space-y-2 overflow-x-auto py-4">
          {layoutNodes.map((node, i) => (
            <div
              key={i}
              className="h-5 border transition-all duration-500 border-neutral-600/30  rounded relative whitespace-nowrap"
              style={{
                left: `${node.x * scale}rem`,
                width: `${node.width * scale}rem`,
                backgroundColor: getColorFromString(node.name),
              }}
              onClick={() => onRemove(node.name)}
            >
              <span className="absolute select-none top-0 bottom-0 grid place-items-center left-full text-left pl-2 text-sm text-neutral-600 ">
                {node.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
