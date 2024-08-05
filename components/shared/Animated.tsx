import React from "react";

const Animated = ({ className, children }:{ className?: string, children: React.ReactNode }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="appear-from-below">
        {children}
      </div>
    </div>
  )
}

export default Animated;