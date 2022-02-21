import { FC, useState, createContext, Children, isValidElement, cloneElement } from 'react';
interface Context {
  isSubNavStuck: boolean;
  setIsSubNavStuck: Function;
}

const defaultValue: Context = {
  isSubNavStuck: false,
  setIsSubNavStuck: () => {},
};

export const LayoutContext = createContext(defaultValue);
export const LayoutContextProvider: FC<any> = ({ children, ...props }) => {
  const [isSubNavStuck, setIsSubNavStuck] = useState(false);
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, props);
    }

    return child;
  });

  const value = {
    isSubNavStuck,
    setIsSubNavStuck,
  };

  return <LayoutContext.Provider value={value}>{childrenWithProps}</LayoutContext.Provider>;
};
