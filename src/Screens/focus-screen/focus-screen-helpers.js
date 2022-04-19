const timerReducerControl = (timerControl, action) => {
  switch (action.type) {
    case "UPDATE_TIMER":
      return { ...timerControl, runningTime: timerControl.runningTime - 1 };
    case "SET_TIMER":
      return { ...timerControl, runningTime: action.payload };
    case "SET_INTERVAL":
      return { ...timerControl, intervalId: action.payload };
    case "SET_MOOD":
      return {
        ...timerControl,
        bgMoodColor: action.payload.bgColor,
        bgTitle: action.payload.name,
      };
    default:
      return timerControl;
  }
};
const handleResetTimer = (dispatchTimerControl, task) => {
  dispatchTimerControl({
    type: "SET_TIMER",
    payload: Number(task.duration) * 60 || 0,
  });
  dispatchTimerControl({
    type: "SET_MOOD",
    payload: { name: "Focus", bgColor: null },
  });
};
const handleShortBreak = (dispatchTimerControl, shortBreak) => {
  dispatchTimerControl({
    type: "SET_TIMER",
    payload: shortBreak * 60 || 0,
  });
  dispatchTimerControl({
    type: "SET_MOOD",
    payload: { name: "Short Break", bgColor: "#247BA0" },
  });
};
const handleLongBreak = (dispatchTimerControl, longBreak) => {
  dispatchTimerControl({
    type: "SET_TIMER",
    payload: longBreak * 60 || 0,
  });
  dispatchTimerControl({
    type: "SET_MOOD",
    payload: { name: "Long Break", bgColor: "#FF1654" },
  });
};
const handleStartTimer = (intervalId, setTimerStatus) => {
  clearInterval(intervalId);
  setTimerStatus((timerStatus) =>
    timerStatus === "Pause" ? "Resume" : "Pause"
  );
};
export {
  timerReducerControl,
  handleResetTimer,
  handleStartTimer,
  handleLongBreak,
  handleShortBreak,
};
