import React, { memo } from 'react'

const Child = memo(({ onClickBtn }) => {
  console.log(("Child Rendered."));
  return (
    <div>
        <button onClick={onClickBtn}>Click Me</button>
    </div>
  )
});

export default Child