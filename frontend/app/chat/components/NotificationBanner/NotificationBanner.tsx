import { Fragment } from "react";



import { useNotificationBanner } from "./hooks/useNotificationBanner";

export const NotificationBanner = (): JSX.Element => {
  const { notificationBanner, isDismissed } =
    useNotificationBanner();

  if (isDismissed || notificationBanner === undefined) {
    return <Fragment />;
  }

  return (
    <div>
     
    </div>
  );
};
