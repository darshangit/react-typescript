import * as React from 'react';

type TextProps<E> = {
  children?: string;
  as?: E;
};

type CombinedProps<E extends React.ElementType> = TextProps<E> &
  Omit<React.ComponentProps<E>, keyof TextProps<E>>;

const exampleText = 'Demo TExt.';

const defaultEle = 'div';
function Text<E extends React.ElementType = typeof defaultEle>({
  children,
  as
}: CombinedProps<E>) {
  const TagName = as || defaultEle;
  return <TagName>{children}</TagName>;
}

const Application = () => {
  return (
    <main>
      <Text as="p">{exampleText}</Text>
    </main>
  );
};

export default Application;
