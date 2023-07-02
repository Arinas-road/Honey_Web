const NotificationHtml = ({ status, title, message }) => {
  let specialClasses = "";
  if (status === "error") {
    specialClasses = "notification-error";
  }
  if (status === "success") {
    specialClasses = "notification-success";
  }
  if (status === "pending") {
    specialClasses = "notification-pending";
  }
  const cssClasses = `notification-main ${specialClasses}`;
  return (
    <div className={cssClasses}>
      <p>{message}</p>
    </div>
  );
};

export default NotificationHtml;
