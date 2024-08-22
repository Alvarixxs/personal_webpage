"use client";

import React, { useEffect } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = React.useState("");

  const updateTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Toronto",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    setCurrentTime(
      new Intl.DateTimeFormat("en-US", options).format(new Date())
    );
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p className="text-2xl">{currentTime}</p>;
};

export default CurrentTime;
