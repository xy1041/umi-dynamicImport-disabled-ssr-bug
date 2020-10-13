/**
 * @author 杨欣
 * @date 2020-10-13 18:07
 */

import React from 'react';

const MainLayout = (props: any) => {
  const {} = props;

  return (
    <div>
      <div>this is wrapper</div>
      {props.children}
    </div>
  );
};

export default MainLayout;
