import React, { createContext, useContext, useEffect, useState } from "react";

type Children = {
  children?: React.ReactNode;
};

type Context = {
  point: number[];
  currentPoint: number;
  completed: boolean;
  isStarted: boolean;
};

export const Context = createContext<Context | null>(null);

export const ContextProvider: React.FC<Children> = ({ children }) => {
  const [currentPoint, setCurrentPoint] = useState<number>(0);
  const [point, setPoint] = useState<number[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    //@ts-ignore
    const totalPoint = point.reduce((sum, item) => sum + item.points, 0);
    setCurrentPoint(totalPoint);
  }, [point]);

  const values = {
    currentPoint,
    point,
    completed,
    isStarted,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useContextHook = () => useContext(Context);
