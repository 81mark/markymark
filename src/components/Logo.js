import React from 'react';

function Logo({ page }) {
  return (
    <>
      {page === 'home' ? (
        <>
          <p className="text-page">Full Stack development</p>
          <p className="text-feature fix-logo">
            <span className="by">by</span>mark
          </p>
        </>
      ) : (
        <>
          <p className="text-page">Full Stack development</p>
          <p className="text-feature fix-logo">
            <a href="/" title="Go Home">
              <span className="by">by</span>mark
            </a>
          </p>
        </>
      )}
    </>
  );
}

export default Logo;
