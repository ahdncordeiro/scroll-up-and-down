function scrollUp() {
  $("html, body").animate({ scrollTop: document.body },
    50000,
    function() {
      scrollDown();
  });
}

function scrollDown() {
  $("html, body").animate({ scrollTop: document.body.scrollHeight },
    50000,
    function() {
      scrollUp();
  });
}

scrollDown();
