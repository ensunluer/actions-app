import React, { createContext, useContext, useState } from "react";

type Children = {
  children?: React.ReactNode;
};

export const Context = createContext<any | null>(null);

export const ContextProvider: React.FC<Children> = ({ children }) => {
  const [currentPoint, setCurrentPoint] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [completedItem, setCompletedItem] = useState<number[]>([]);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [actions, setActions] = useState<boolean>(false);

  const values = {
    currentPoint,
    completed,
    completedItem,
    isStarted,
    actions,
    setCurrentPoint,
    setCompleted,
    setCompletedItem,
    setIsStarted,
    setActions,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useContextHook = () => useContext(Context);
