import React, { useEffect } from 'react';
import $ from 'jquery';

import './Fees.css';

const Fees = () => {
  // $(window).scroll(function(e) {
  //   // console.log(window.pageYOffset);
  //   // console.log($('.BackdropZero').offset().top - $(window).scrollTop());
  //   // console.log($('.BackdropZero').offset().top - $(window).scrollTop());

  //   console.log($('.BackdropZero').visible(true));
  //   // The element is visible, do something
  // });

  useEffect(() => {
    // $.fn.isInViewport = function() {
    //   let elementTop = $(this).offset().top;
    //   let elementBottom = elementTop + $(this).outerHeight();
    //   let viewportTop = $(window).scrollTop();
    //   let viewportBottom = viewportTop + $(window).height();
    //   return elementBottom > viewportTop && elementTop < viewportBottom;
    // };
    // $(window).on('resize scroll', function() {
    //   if ($('.BackdropZero')) {
    //     if ($('.BackdropZero').isInViewport()) {
    //       // do something
    //       $('.BackdropZero').css({
    //         top: $(window).scrollTop() / 10 - 260 + 'px'
    //       });
    //     }
    //   }
    // });
  }, []);

  return (
    <div className="Fees">
      <h2>
        <span className="GradientAnimation">Zero </span>
        Fees
      </h2>
      <p>
        All transactions with the Dharma Retailers — deposits, withdrawals, you
        name it — are free.
      </p>
      <div className="BackdropZeroContainer">
        <div className="BackdropZero">Zero.</div>
      </div>
    </div>
  );
};

export default Fees;
