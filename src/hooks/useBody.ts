import React from 'react';

export const useBodyElement = () => {
  const [body, setBody] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setBody(document.body);
  }, []);

  return body;
};
