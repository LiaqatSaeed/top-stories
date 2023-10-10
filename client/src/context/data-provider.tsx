"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useTopStories } from "../hooks/use-top-stories";

export interface IDataContextProps {
  topStories: any;
  setTopStoriesData: React.Dispatch<React.SetStateAction<string>>;
  storyType: string;
  isLoading: boolean;
  error: any;
  setStoryType: React.Dispatch<React.SetStateAction<string>>;
}

interface IDataProviderProps {
  children: React.ReactNode;
}

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

export const DataContext = createContext<IDataContextProps | undefined>(
  undefined
);

export const DataProvider: React.FC<IDataProviderProps> = ({
  children,
}: IDataProviderProps) => {
  const [topStories, setTopStoriesData] = useState<any>(null);
  const [storyType, setStoryType] = useState<any>("science");

   const {data, isLoading, error} = useTopStories(storyType);

   useEffect(() => {
    if(data !== null) {
      setTopStoriesData(data);
    }
   },[data])


  const contextValue: IDataContextProps = {
    topStories,
    storyType,
    setTopStoriesData,
    setStoryType,
    isLoading,
    error
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
