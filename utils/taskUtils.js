export const formatTaskCount = (count) => {
  return `${count} task${count !== 1 ? "s" : ""}`;
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString();
};

export const validateTaskText = (text) => {
  return text.trim().length > 0;
};
