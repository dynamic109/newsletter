let shareIcon = document.getElementById("share-icon");
let footer = document.getElementById("footer");
let windowWidth = window.innerWidth;

shareIcon.addEventListener("click", () => {
  footer.style.background = "hsl(217, 19%, 35%)";

  if (windowWidth < "1024px") {
    footer.innerHTML = `<div class="footer-container">
                            <div class="socials-container">
                                <p>SHARE </p>
                                <img src="./images/icon-facebook.svg"/>
                                <img src="./images/icon-twitter.svg"/>
                                <img src="./images/icon-pinterest.svg"/>
                            </div>
                            <img  class="share-icon" src="./images/icon-share.svg"/>
                      </div>`;
  } else {
    footer.innerHTML = `<div class="footer-container">
                            <div class="socials-container">
                                <p>SHARE </p>
                                <img src="./images/icon-facebook.svg"/>
                                <img src="./images/icon-twitter.svg"/>
                                <img src="./images/icon-pinterest.svg"/>
                            </div>
                            <img  class="share-icon" src="./images/icon-share.svg"/>
                      </div>`;
  }
});
