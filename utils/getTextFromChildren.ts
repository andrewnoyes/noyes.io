import { Children, isValidElement, ReactElement, ReactNode } from 'react';

export const getTextFromChildren = (
  children: ReactNode | ReactNode[],
): string => Children.toArray(children).map(getTextFromChild).join('');

const getTextFromChild = (child: ReactNode): string => {
  if (hasChildren(child)) {
    return getTextFromChildren(child.props.children);
  }

  if (isValidElement(child)) {
    return '';
  }

  return childToString(child);
};

const hasChildren = (
  element: ReactNode,
): element is ReactElement<{ children: ReactNode | ReactNode[] }> =>
  isValidElement<{ children?: ReactNode[] }>(element) &&
  Boolean(element.props.children);

const childToString = (child?: ReactNode): string => child?.toString() ?? '';
