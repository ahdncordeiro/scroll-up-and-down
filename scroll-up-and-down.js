function scrollUp() {
  $("html, body").animate({ scrollTop: document.body },
    100000,
    function() {
      scrollDown();
  });
}

function scrollDown() {
  $("html, body").animate({ scrollTop: document.body.scrollHeight },
    100000,
    function() {
      scrollUp();
  });
}

scrollDown();
