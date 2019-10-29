var svg   = $('.test'),
    rect1 = svg.find('#cut1 rect'), // Notice that the animated element is the rect inside de clipPath
    tl    = new TimelineMax({ repeat: -1, yoyo: true });

    tl
      .to(rect1, 5, {attr:{width: 1 }, transformOrigin: '50% 100%'});

   tl.play();