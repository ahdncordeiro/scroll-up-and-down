function scrollUp() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    {
      duration: 50000,
      always: function() { scrollDown(); }
    }
  );
}

function scrollDown() {
  $("html, body").animate(
    {
      scrollTop: document.body.scrollHeight
    },
    {
      duration: 50000,
      always: function() { scrollUp(); }
    }
  );
}

scrollDown();
