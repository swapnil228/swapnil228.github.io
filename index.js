const navItems = document.getElementsByClassName('nav-item')
  const contentItems = document.getElementsByClassName("content-item")
  const uxProjectCards = document.getElementsByClassName("ux-project-card")
  const modalProjectItems = document.getElementsByClassName("modal-project-item")
  const modal = document.querySelector('.modal')
  const wrapper = document.querySelector('.wrapper')
  const body = document.querySelector('body')
  const content = document.querySelector('.content')
  const viewMoreAboutMe = document.querySelector('.about-me-more')
  const viewMoreUxProjects = document.querySelector('.view-more-ux-projects')
  const viewMoreUxProjectsBtn = document.querySelector('.view-more-ux-projects-btn')
  const viewMoreAboutMeBtn = document.querySelector('.view-more-about-me-btn')
  const pencilSketches = document.querySelector('.pencil-sketches')
  const digitalArt = document.querySelector('.digital-art')
  const penSketches = document.querySelector('.pen-sketches')
  // const artworkDetail = document.querySelector('.artwork-detail')

  let uxProjectNumberVisible = 1
  let selectedContentItem = 0


  viewMoreAboutMeBtn.addEventListener('click', () => {
    viewMoreAboutMeBtn.classList.add('hide')
    showMoreContent(viewMoreAboutMe)
  })

  viewMoreUxProjectsBtn.addEventListener('click', () => {
    viewMoreUxProjectsBtn.classList.add('hide')
    showMoreContent(viewMoreUxProjects)
  })

  const showMoreContent = (elem) => {
    elem.classList.remove('hide')
    setMainContentHeight()
  }

  const addArtwork = () => {
    const totalArtwork = 32
    for (let i = 11; i <= 17; i++) {

      let art = document.createElement('img')
      art.setAttribute('src', 'public/artwork/Slice ' + i + '.png')
      art.classList.add('art-img')
      pencilSketches.append(art)

      // art.addEventListener('mouseenter', showArtDetail)
      // art.addEventListener('mouseleave', hideArtDetail)
    }

    for (let i = 1; i <= 10; i++) {

      let art = document.createElement('img')
      art.setAttribute('src', 'public/artwork/Slice ' + i + '.png')
      art.classList.add('art-img')
      digitalArt.append(art)
    }

    for (let i = 18; i <= 32; i++) {

      let art = document.createElement('img')
      art.setAttribute('src', 'public/artwork/Slice ' + i + '.png')
      art.classList.add('art-img')
      penSketches.append(art)
    }
  }

  // const showArtDetail = (e) => {
  //   artworkDetail.setAttribute('src', e.target.getAttribute('src'))
  //   artworkDetail.classList.remove('hide')
  // }
  // const hideArtDetail = (e) => {
  //   artworkDetail.classList.add('hide')
  // }

  const openModal = () => {
    modal.classList.add('modal-visible')
    wrapper.classList.add('stop-scrolling')
  }

  const closeModal = () => {
    modal.classList.remove('modal-visible')
    wrapper.classList.remove('stop-scrolling')
  }

  function setModalContentHeight() {
    const modalContent = document.querySelector('.modal-content')
    if (modalContent.clientHeight < 1000) {
      modalContent.style.height = 1000 + 'px'
    }
  }

  function setMainContentHeight() {
    if (contentItems[selectedContentItem].clientHeight < 800) {
      content.style.height = 950 + 'px'
    }
    else {
      content.style.height = contentItems[selectedContentItem].clientHeight + 200 + "px"
    }
  }

  function showUXProjectDetails(projectNumber) {
    openModal()
    uxProjectNumberVisible = projectNumber
    const uxProjectDetails = document.querySelector(`.ux-project-${uxProjectNumberVisible}`)
    uxProjectDetails.classList.add('modal-item-visible')
    content.classList.add('hide')
    setModalContentHeight()
    window.scrollTo(0, 0)
  }

  function hideUXProjectDetails(projectNumber) {
    closeModal()
    const uxProjectDetails = document.querySelector(`.ux-project-${uxProjectNumberVisible}`)
    uxProjectDetails.classList.remove('modal-item-visible')
    content.classList.remove('hide')
    window.scrollTo(0, 0)
  }

  const selectItem = function (str) {
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("selected");
    }
    this.classList.add("selected");

    for (var i = 0; i < contentItems.length; i++) {
      contentItems[i].classList.add("hide");
    };

    switch (str) {
      case 'about-me':
        contentItems[0].classList.remove('hide');
        selectedContentItem = 0
        break;
      case 'ux':
        contentItems[1].classList.remove('hide');
        selectedContentItem = 1
        break;
      case 'game-dev':
        contentItems[2].classList.remove('hide');
        selectedContentItem = 2
        break;
      case 'dev-apps':
        contentItems[3].classList.remove('hide');
        selectedContentItem = 3
        break;
      case 'musings':
        contentItems[4].classList.remove('hide');
        selectedContentItem = 4
        break;
      case 'artwork':
        contentItems[5].classList.remove('hide');
        selectedContentItem = 5
        break;
      default:
        contentItems[0].classList.remove('hide');
        selectedContentItem = 0
    }

    setMainContentHeight()

  };



  const goToNextUXProject = () => {
    console.log("Nect");
    let currentProjectNumber = uxProjectNumberVisible
    uxProjectNumberVisible = currentProjectNumber + 1
    if (uxProjectNumberVisible > uxProjectCards.length) {
      uxProjectNumberVisible = 1
    }
    const uxProjectDetails = document.querySelector(`.ux-project-${uxProjectNumberVisible}`)
    uxProjectDetails.classList.add('modal-item-visible')
    const currentUxProjectDetails = document.querySelector(`.ux-project-${currentProjectNumber}`)
    currentUxProjectDetails.classList.remove('modal-item-visible')
    setModalContentHeight()
    window.scrollTo(0, 0)
  }

  const goToPreviousUXProject = () => {
    console.log("Prev");
    let currentProjectNumber = uxProjectNumberVisible
    uxProjectNumberVisible = currentProjectNumber - 1
    if (uxProjectNumberVisible < 1) {
      uxProjectNumberVisible = uxProjectCards.length
    }
    const uxProjectDetails = document.querySelector(`.ux-project-${uxProjectNumberVisible}`)
    uxProjectDetails.classList.add('modal-item-visible')
    const currentUxProjectDetails = document.querySelector(`.ux-project-${currentProjectNumber}`)
    currentUxProjectDetails.classList.remove('modal-item-visible')
    setModalContentHeight()
    window.scrollTo(0, 0)
  }

  function init() {

    for (var i = 0; i < contentItems.length; i++) {
      contentItems[i].classList.add("hide");
    };

    contentItems[0].classList.remove("hide")
    viewMoreAboutMe.classList.add("hide")
    viewMoreUxProjects.classList.add("hide")



    selectedContentItem = 0

    setMainContentHeight()

    for (let i = 0; i < uxProjectCards.length; i++) {
      uxProjectCards[i].addEventListener('click', () => showUXProjectDetails(i + 1))
    }

    addArtwork()

  }

  init()