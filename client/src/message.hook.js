import React, { useCallback } from "react";
import { AlertLayout } from "./components/CommonComponents/Alerts";

export const useMessage = () => {
   return useCallback((type, message) => {
      return <AlertLayout type={type} message={message} />;
   }, []);
};
