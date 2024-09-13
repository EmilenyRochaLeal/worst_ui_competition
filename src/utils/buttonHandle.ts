import { useState } from "react";
export const handleDifficulty = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const wrapper = document.querySelector('.overflow-x-auto');
    const wrapperRect = wrapper?.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    if (wrapperRect){

        const maxX = window.innerWidth - buttonRect.width;
        const maxY = window.innerHeight - buttonRect.height;

        const i = Math.floor(Math.random() * maxX);
        const j = Math.floor(Math.random() * maxY);

        button.style.position = 'absolute';
        button.style.left = `${i}px`;
        button.style.top = `${j}px`;
    }
};

export const useButtonHandle = () => {
    const [isLoading, setIsLoading] = useState(false);
  
    const handleExecute = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(true);
      },100000);
    };
  
    return { isLoading, handleExecute };
  };