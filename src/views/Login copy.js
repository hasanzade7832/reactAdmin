import React, { useState } from 'react';
import { RingLoader } from 'react-spinners';

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  // این تابع را می‌توانید برای مثال با setTimeout برای تغییر وضعیت loading فراخوانی کنید
  // برای نمایش مثالی طولانی‌تر، من کد تایم‌اوت اینجا قرار ندادم.
  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);

  return (
    <div className="sweet-loading">
      <RingLoader color={'#123abc'} loading={loading} />
    </div>
  );
};

export default LoadingComponent;
