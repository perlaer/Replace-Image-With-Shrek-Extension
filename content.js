NEW_IMAGE_URL = "https://static.wikia.nocookie.net/universalstudios/images/f/f2/Shrek2-disneyscreencaps.com-4369.jpg/revision/latest/scale-to-width-down/1000?cb=20250224023204";

function replaceImages() {
  document.querySelectorAll("img").forEach(img => {
    img.src = NEW_IMAGE_URL;
    img.srcset = "";
  });
}

replaceImages()

const observer = new MutationObserver(replaceImages);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
