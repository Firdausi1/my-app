export const notification = {
  insert: "top",
  container: "top-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 3000,
    onScreen: true,
    showIcon: true,
    pauseOnHover: true,
  },
};

export const failedNotification = {
  title: "Warning",
  message: "item alreaded added to cart",
  type: "danger",
  ...notification,
};

export const successNotification = {
  title: "Sucessfull",
  message: "Item added to cart",
  type: "success",
  ...notification,
};

export const notificationType = {
  sucessMessage: "success",
  failedMessage: "Warning",
};
