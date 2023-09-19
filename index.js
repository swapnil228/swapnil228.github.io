const navItems = document.getElementsByClassName("nav-item");
const contentItems = document.getElementsByClassName("content-item");
const uxProjectCards = document.getElementsByClassName("ux-project-card");
const modalProjectItems = document.getElementsByClassName("modal-project-item");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
const content = document.querySelector(".content");
const viewMoreAboutMe = document.querySelector(".about-me-more");
const viewMoreUxProjects = document.querySelector(".view-more-ux-projects");
const viewMoreUxProjectsBtn = document.querySelector(
  ".view-more-ux-projects-btn"
);
const viewMoreAboutMeBtn = document.querySelector(".view-more-about-me-btn");

// const svg1 = `<svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M1 1.5V21.5H18V1.5H1Z" stroke="#3F80E3" stroke-width="2"/>
// </svg>
// `

// const artworkDetail = document.querySelector('.artwork-detail')

let uxProjectNumberVisible = 1;
let selectedContentItem = 0;

const showMoreContent = (elem) => {
  elem.classList.remove("hide");
  setMainContentHeight();
};

const addArtwork = () => {
  const pencilSketches = document.querySelector(".pencil-sketches");
  const digitalArt = document.querySelector(".digital-art");
  const penSketches = document.querySelector(".pen-sketches");
  const practiceSketches = document.querySelector(".practice");
  const totalArtwork = 32;
  for (let i = 11; i <= 17; i++) {
    let art = document.createElement("img");
    art.setAttribute("src", "public/artwork/Slice " + i + ".png");
    art.classList.add("art-img");
    pencilSketches.append(art);

    // art.addEventListener('mouseenter', showArtDetail)
    // art.addEventListener('mouseleave', hideArtDetail)
  }

  for (let i = 1; i <= 10; i++) {
    let art = document.createElement("img");
    art.setAttribute("src", "public/artwork/Slice " + i + ".png");
    art.classList.add("art-img");
    digitalArt.append(art);
  }

  for (let i = 18; i <= 32; i++) {
    let art = document.createElement("img");
    art.setAttribute("src", "public/artwork/Slice " + i + ".png");
    art.classList.add("art-img");
    penSketches.append(art);
  }

  for (let i = 33; i <= 37; i++) {
    let art = document.createElement("img");
    art.setAttribute("src", "public/artwork/Slice " + i + ".png");
    art.classList.add("art-img");
    practiceSketches.append(art);
  }
};

// const showArtDetail = (e) => {
//   artworkDetail.setAttribute('src', e.target.getAttribute('src'))
//   artworkDetail.classList.remove('hide')
// }
// const hideArtDetail = (e) => {
//   artworkDetail.classList.add('hide')
// }

const openModal = () => {
  modal.classList.add("display-block");
  setTimeout(() => {
    modalContent.classList.add("modal-content-show");
  }, 100);
  wrapper.classList.add("stop-scrolling");
};

const closeModal = () => {
  modalContent.classList.remove("modal-content-show");
  setTimeout(() => {
    modal.classList.remove("display-block");
  }, 200);
  // modalContent.classList.remove('modal-content-show')
  wrapper.classList.remove("stop-scrolling");
};

function setModalContentHeight() {
  const modalContent = document.querySelector(".modal-content");
  if (modalContent.clientHeight < 1000) {
    modalContent.style.height = 1000 + "px";
  }
}

function setMainContentHeight() {
  if (contentItems[selectedContentItem].clientHeight < 800) {
    content.style.height = 950 + "px";
  } else {
    content.style.height =
      contentItems[selectedContentItem].clientHeight + 200 + "px";
  }
}

function showUXProjectDetails(projectNumber) {
  openModal();
  uxProjectNumberVisible = projectNumber;
  const uxProjectDetails = document.querySelector(
    `.ux-project-${uxProjectNumberVisible}`
  );
  uxProjectDetails.classList.add("display-block");
  content.classList.add("hide");
  setModalContentHeight();
  window.scrollTo(0, 0);
}

function hideUXProjectDetails(projectNumber) {
  closeModal();

  const uxProjectDetails = document.querySelector(
    `.ux-project-${uxProjectNumberVisible}`
  );

  setTimeout(() => {
    uxProjectDetails.classList.remove("display-block");
  }, 200);

  content.classList.remove("hide");
  window.scrollTo(0, 0);
}

const selectItem = (num) => {
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("selected");
  }
  navItems[num].classList.add("selected");

  for (var i = 0; i < contentItems.length; i++) {
    contentItems[i].classList.add("hide");
  }

  selectedContentItem = num;

  switch (selectedContentItem) {
    case 0:
      contentItems[0].classList.remove("hide");
      break;
    case 1:
      contentItems[1].classList.remove("hide");
      break;
    case 2:
      contentItems[2].classList.remove("hide");
      break;
    case 3:
      contentItems[3].classList.remove("hide");
      break;
    case 4:
      contentItems[4].classList.remove("hide");
      break;
    case 5:
      contentItems[5].classList.remove("hide");
      break;
    default:
      contentItems[0].classList.remove("hide");
      selectedContentItem = 0;
  }

  setMainContentHeight();
};

const goToNextUXProject = () => {
  let currentProjectNumber = uxProjectNumberVisible;
  uxProjectNumberVisible = currentProjectNumber + 1;

  if (uxProjectNumberVisible > uxProjectCards.length) {
    uxProjectNumberVisible = 1;
  }

  const uxProjectDetails = document.querySelector(
    `.ux-project-${uxProjectNumberVisible}`
  );
  const currentUxProjectDetails = document.querySelector(
    `.ux-project-${currentProjectNumber}`
  );

  modalContent.classList.remove("modal-content-show")
  // modalContent.style.transform = "translateY(0px)"
  
  setTimeout(() => {
    currentUxProjectDetails.classList.remove("display-block");
    uxProjectDetails.classList.add("display-block");
    modalContent.classList.add("modal-content-show");
  }, 400);


  setModalContentHeight();
  window.scrollTo(0, 0);
};

const goToPreviousUXProject = () => {
  console.log("Prev");
  let currentProjectNumber = uxProjectNumberVisible;
  uxProjectNumberVisible = currentProjectNumber - 1;

  if (uxProjectNumberVisible < 1) {
    uxProjectNumberVisible = uxProjectCards.length;
  }

  const uxProjectDetails = document.querySelector(
    `.ux-project-${uxProjectNumberVisible}`
  );
  const currentUxProjectDetails = document.querySelector(
    `.ux-project-${currentProjectNumber}`
  );

  modalContent.classList.remove("modal-content-show")
  // modalContent.style.transform = "translateY(0px)"
  
  setTimeout(() => {
    currentUxProjectDetails.classList.remove("display-block");
    uxProjectDetails.classList.add("display-block");
    modalContent.classList.add("modal-content-show");
  }, 400);

  setModalContentHeight();
  window.scrollTo(0, 0);
};

const addEventListeners = () => {
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => selectItem(i));
  }

  // navItems[1].parentElement.querySelector(".svg-container").innerHTML = svg1

  // navItems[1].addEventListener("mouseenter", (e) => {
  //   // console.log(document.querySelector('svg'));
  //   console.log(e.target.parentElement.querySelector(".svg-container"));
  
  //   document.querySelector('svg').setAttribute('class','svg-end')
  // })
  // navItems[1].addEventListener("mouseleave", (e) => {
  //   // console.log(document.querySelector('svg'));
  //   // e.target.parentElement.querySelector(".svg-container").innerHTML = ""
  //   document.querySelector('svg').setAttribute('class','svg-start')
  // })

  document
    .querySelector(".modal-close button")
    .addEventListener("click", hideUXProjectDetails);

  document
    .querySelector(".previous-project-btn")
    .addEventListener("click", goToPreviousUXProject);

  document
    .querySelector(".next-project-btn")
    .addEventListener("click", goToNextUXProject);

  for (let i = 0; i < uxProjectCards.length; i++) {
    uxProjectCards[i].addEventListener("click", () =>
      showUXProjectDetails(i + 1)
    );
  }

  viewMoreAboutMeBtn.addEventListener("click", () => {
    viewMoreAboutMeBtn.classList.add("hide");
    showMoreContent(viewMoreAboutMe);
  });

  viewMoreUxProjectsBtn.addEventListener("click", () => {
    viewMoreUxProjectsBtn.classList.add("hide");
    showMoreContent(viewMoreUxProjects);
  });
};

const init = () => {
  addEventListeners();

  for (var i = 0; i < contentItems.length; i++) {
    contentItems[i].classList.add("hide");
  }

  contentItems[0].classList.remove("hide");
  viewMoreAboutMe.classList.add("hide");
  viewMoreUxProjects.classList.add("hide");

  selectedContentItem = 0;

  setMainContentHeight();
  addArtwork();
};

init();
