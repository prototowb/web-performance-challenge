const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const acceptCookies = () => {
  document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--accepted');
};

const marqueeBar = document.querySelector('marquee');

// mock content delay
setTimeout(() => marqueeBar.innerHTML = CONTENT_BREAKING_NEWS);
