/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordind.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordind.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const according = (btnsSelector, selectorHideItem) => {
  const btns = document.querySelectorAll(btnsSelector),
    items = document.querySelectorAll(selectorHideItem);
  items[0].style.maxHeight = items[0].scrollHeight + "px";
  btns[0].classList.add('active');
  btns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      closeAllItems();
      btn.classList.add('active');
      const item = btn.querySelector(selectorHideItem);
      if (item.style.maxHeight) {
        item.style.maxHeight = null;
      } else {
        item.style.maxHeight = item.scrollHeight + "px";
      }
    });
  });
  function closeAllItems() {
    items.forEach(item => {
      item.style.maxHeight = null;
    });
    btns.forEach(item => {
      item.classList.remove('active');
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (according);

/***/ }),

/***/ "./src/js/modules/according-menu.js":
/*!******************************************!*\
  !*** ./src/js/modules/according-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordingMenu = (btnsSelector, selectorHideItem) => {
  const btns = document.querySelectorAll(btnsSelector),
    items = document.querySelectorAll(selectorHideItem);
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (btn.querySelector(selectorHideItem)) {
        closeAllItems();
        const item = btn.querySelector(selectorHideItem);
        if (item.style.maxHeight) {
          item.style.maxHeight = null;
        } else {
          item.style.maxHeight = item.scrollHeight + "px";
        }
      }
    });
  });
  function closeAllItems() {
    try {
      items.forEach(item => {
        item.style.maxHeight = null;
      });
    } catch (e) {}
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordingMenu);

/***/ }),

/***/ "./src/js/modules/animations.js":
/*!**************************************!*\
  !*** ./src/js/modules/animations.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const animations = () => {
  const tlLoader = gsap.timeline();
  tlLoader.set('.logo__item', {
    scale: 0.5,
    opacity: 0
  }).to('.logo__item', {
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.5
  });
  window.onload = function () {
    tlLoader.to('.logo__item', {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5
    }).to('.loader__container', {
      yPercent: -100,
      duration: 0.5
    });
    document.body.classList.remove('_lock');
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animations);

/***/ }),

/***/ "./src/js/modules/burger-menu.js":
/*!***************************************!*\
  !*** ./src/js/modules/burger-menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuBuger = burgerSelector => {
  const burgerIcon = document.querySelector(burgerSelector),
    menu = document.querySelector('.menu__list'),
    links = menu.children,
    subliks = document.querySelectorAll('.menu__subitem'),
    linksItem = document.querySelectorAll('.link-menu'),
    svgs = document.querySelectorAll('.menu__link-arrow-svg');
  let intViewportHeight = window.innerHeight,
    widthScreen = window.innerWidth,
    deg = 0;
  window.addEventListener('resize', () => {
    intViewportHeight = window.innerHeight;
  });
  burgerIcon.addEventListener('click', () => {
    activeMenu();
  });
  function activeMenu() {
    burgerIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
  if (widthScreen < 1024) {
    try {
      svgs.forEach(svg => {
        svg.contentDocument.getElementById("Capa_1").setAttribute("width", "34px");
        svg.contentDocument.getElementById("Capa_1").setAttribute("height", "24px");
      });
    } catch (e) {}

    // Array.from(links)

    linksItem.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.remove('_lock');
        burgerIcon.classList.remove('_active');
        menu.classList.remove('_active');
        if (item.querySelector('.menu__link-arrow-svg')) {
          const arrow = item.querySelector('.menu__link-arrow-svg');
          if (deg === 0) {
            arrow.style.transform = 'rotate(-90deg)';
            deg = -90;
          } else {
            arrow.style.transform = 'rotate(0deg)';
            deg = 0;
          }
        }
      });
    });

    // subliks.forEach(item => {
    //   item.addEventListener('click', () => {
    //     activeMenu();

    //   });
    // });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuBuger);

/***/ }),

/***/ "./src/js/modules/change-bg-menu.js":
/*!******************************************!*\
  !*** ./src/js/modules/change-bg-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeBgMenu = () => {
  const links = document.querySelectorAll('.menu-list__item'),
    imgs = document.querySelectorAll('.menu-list__bg img');
  imgs[0].style.opacity = '1';
  imgs[0].style.transform = 'scale(1.1)';
  links.forEach((link, i) => {
    link.addEventListener('mouseenter', () => {
      imgs.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(1)';
      });
      imgs[i].style.opacity = '1';
      imgs[i].style.transform = 'scale(1.1)';
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeBgMenu);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = outputTextSelector => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    options = document.querySelectorAll('option'),
    text = document.querySelector(outputTextSelector);
  const message = {
    loading: 'Sending your message...',
    success: 'Thank you for your message. It has been sent!',
    failure: 'Oops, something went wrong...  Try again!'
  };
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };
  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
    options.forEach(option => {
      option.removeAttribute('selected');
    });
  };
  forms.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);
      const formData = new FormData(item);
      postData('assets/server.php', formData).then(res => {
        console.log(res);
        statusMessage.textContent = message.success;
      }).catch(() => statusMessage.textContent = message.failure).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/js/modules/link-default.js":
/*!****************************************!*\
  !*** ./src/js/modules/link-default.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const linkDefault = linkSelector => {
  const links = document.querySelectorAll(linkSelector);
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      console.log('click');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkDefault);

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const video = (btnsSelector, overlaySelector) => {
  const btns = document.querySelectorAll(btnsSelector),
    overlay = document.querySelector(overlaySelector),
    close = document.querySelector('.close');
  let player;
  function createPlayer(url) {
    player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      playerVars: {
        'fs': 0
      }
    });
    console.log(player);
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function initPlayer() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    bindTrigger();
  }
  initPlayer();
  function bindTrigger() {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          overlay.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        } else {
          const path = btn.getAttribute('data-url');
          createPlayer(path);
        }
      });
    });
    close.addEventListener('click', () => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      player.stopVideo();
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (video);

/***/ }),

/***/ "./src/js/modules/rotate-logo.js":
/*!***************************************!*\
  !*** ./src/js/modules/rotate-logo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const rotateLogo = selector => {
  const item = selector;
  let angle = 0,
    animate = true,
    speed = 0.3;
  function updateBoxAngle() {
    angle += 1;
    if (angle * speed === 360) {
      angle = 0;
    }
    item.style.transform = `rotate(${angle * speed}deg)`;
    if (animate == true) {
      requestAnimationFrame(updateBoxAngle);
    }
  }
  requestAnimationFrame(updateBoxAngle);
  item.addEventListener("mouseenter", () => {
    animate = false;
  });
  item.addEventListener("mouseleave", () => {
    if (animate == false) {
      animate = true;
      requestAnimationFrame(updateBoxAngle);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rotateLogo);

/***/ }),

/***/ "./src/js/modules/select-input.js":
/*!****************************************!*\
  !*** ./src/js/modules/select-input.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectInput = (selectBlockSelector, cloneSelectBlockSelector, btnSelector, outputTextSelector, btnSubmitSelector) => {
  const selectBlock = document.querySelector(selectBlockSelector),
    options = selectBlock.querySelectorAll('option'),
    cloneSelect = document.querySelector(cloneSelectBlockSelector),
    btn = document.querySelector(btnSelector),
    form = selectBlock.parentNode,
    text = document.querySelector(outputTextSelector),
    btnSubmit = document.querySelector(btnSubmitSelector);
  function createCloneSelectBlock() {
    options.forEach(item => {
      const itemList = document.createElement('li');
      itemList.classList = 'select-clone__item';
      itemList.innerText = `${item.innerText}`;
      cloneSelect.appendChild(itemList);
    });
    bindTrigger();
  }
  createCloneSelectBlock();
  function bindTrigger() {
    // To show an element when click block select: 
    btn.addEventListener('click', e => {
      cloneSelect.classList.toggle('_open');
    });

    // To hide an element when push button ESC: 
    document.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        cloneSelect.classList.remove('_open');
      }
    });

    // To hide an element when clicked outside: 
    document.addEventListener('mouseup', e => {
      if (!form.contains(e.target) && cloneSelect.classList.contains('_open')) {
        btn.click();
      }
    });

    // output of the selected item
    const items = Array.from(cloneSelect.children);
    items.forEach((item, i) => {
      item.addEventListener('click', e => {
        text.innerText = e.target.innerText;
        options.forEach(item => {
          item.removeAttribute('selected');
        });
        options[i].setAttribute('selected', 'true');
      });
    });
    btnSubmit.addEventListener('click', () => {
      // selectBlock.getAttribute('placeholder');
      // console.log(selectBlock.getAttribute('placeholder'));
      text.innerText = selectBlock.getAttribute('placeholder');
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectInput);

/***/ }),

/***/ "./src/js/modules/show-header.js":
/*!***************************************!*\
  !*** ./src/js/modules/show-header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showHeaderByScroll = (selectorHeader, selectorBody) => {
  const header = document.querySelector(selectorHeader),
    body = document.querySelector(selectorBody);
  let toTop = 0,
    currenyPositionY = 0,
    moveBy = 0;
  window.addEventListener('scroll', () => {
    toTop = window.scrollY;
    if (toTop > 50) {
      header.style.position = 'fixed';
      header.style.top = '-100%';
      body.style.padding = '5px 0px';
    } else {
      header.style.position = 'fixed';
      header.style.top = '0';
      body.style.padding = '32px 0px';
    }
    moveBy = currenyPositionY - toTop;
    if (moveBy > 0) {
      currenyPositionY = toTop;
      showHeader();
    } else {
      currenyPositionY = toTop;
      hideHeader();
    }
  });
  function getPositionY() {
    return window.scrollY;
  }
  function showHeader() {
    if (toTop >= 10) {
      header.style.top = '0';
    }
  }
  function hideHeader() {
    if (toTop >= 10) {
      header.style.top = '-100%';
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHeaderByScroll);

/***/ }),

/***/ "./src/js/modules/show-scroll-top.js":
/*!*******************************************!*\
  !*** ./src/js/modules/show-scroll-top.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrollTop = itemSelector => {
  const scroll = document.querySelector(itemSelector),
    top = document.querySelector('#top');
  let heightShow = 0,
    toTop = 0;
  scroll.style.opacity = '0';
  heightShow = window.innerHeight * 2;
  window.addEventListener('scroll', () => {
    toTop = window.scrollY;
    if (toTop >= heightShow) {
      scroll.style.opacity = '1';
    } else {
      scroll.style.opacity = '0';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTop);

/***/ }),

/***/ "./src/js/modules/show-submenu.js":
/*!****************************************!*\
  !*** ./src/js/modules/show-submenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showSubMenu = (selectorLink, selectorSubItem) => {
  const links = document.querySelectorAll(selectorLink),
    subitems = document.querySelectorAll(selectorSubItem),
    svgs = document.querySelectorAll('.menu__link-arrow-svg');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (link.querySelector(selectorSubItem)) {
        const subitem = link.querySelector(selectorSubItem),
          svg = link.querySelector('.menu__link-arrow-svg');
        hideSubItem();
        subitem.classList.add('_active');
        svg.contentDocument.getElementById("svgInternalID").setAttribute("fill", "#dcca87");
      }
    });
    link.addEventListener('mouseleave', () => {
      hideSubItem();
      changeColorSvg();
    });
  });
  subitems.forEach(item => {
    item.addEventListener('mouseleave', () => {
      hideSubItem();
      changeColorSvg();
    });
  });
  function hideSubItem() {
    subitems.forEach(item => {
      item.classList.remove('_active');
    });
  }
  function changeColorSvg() {
    svgs.forEach(item => {
      item.getSVGDocument().getElementById("svgInternalID").setAttribute("fill", "#fff");
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showSubMenu);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliderMain = () => {
  const sliderMain = (sliderContainer, sliderSelector, prevBtn, nextBtn) => {
    const container = document.querySelector(sliderContainer),
      slider = document.querySelector(sliderSelector),
      slides = slider.children,
      prevButton = document.querySelector(prevBtn),
      nextButton = document.querySelector(nextBtn);
    const delay = 500,
      timer = 5000;
    let sliderStatus = false,
      playSlider;
    function showSlider() {
      slides[0].classList.add('_show');
      if (slides[0].classList.contains('text-slider__item')) {
        slides[0].style.transform = 'translate(0, 0)';
      }
    }
    showSlider();
    prevButton.addEventListener('click', () => {
      if (!sliderStatus) {
        sliderStatus = true;
        removeClass(['_show', '_hide']);
        slides[0].classList.add('_hide');
        if (slides[0].classList.contains('text-slider__item')) {
          slides[0].style.transform = 'translate(0, 30%)';
          slides[slides.length - 1].style.transform = 'translate(0, -30%)';
        }
        let indexSlide = slides[slides.length - 1];
        setTimeout(() => {
          slider.insertBefore(indexSlide, slides[0]);
          setTimeout(() => {
            showSlider();
          }, 20);
        }, delay);
        setTimeout(() => {
          sliderStatus = false;
        }, delay * 2);
      }
    });
    nextButton.addEventListener('click', () => {
      if (!sliderStatus) {
        sliderStatus = true;
        removeClass(['_show', '_hide']);
        slides[0].classList.add('_hide');
        if (slides[0].classList.contains('text-slider__item')) {
          slides[0].style.transform = 'translate(0, 0)';
          slides[1].style.transform = 'translate(0, 100%)';
        }
        setTimeout(() => {
          slider.appendChild(slides[0]);
          showSlider();
        }, delay);
        setTimeout(() => {
          sliderStatus = false;
        }, delay * 2);
      }
    });
    container.addEventListener('mouseenter', () => {
      clearInterval(playSlider);
    });
    container.addEventListener('mouseleave', () => {
      startSliderByTimer();
    });
    function removeClass(arrayClass) {
      for (let i = 0; i < arrayClass.length; i++) {
        Array.from(slides).forEach(item => {
          item.classList.remove(arrayClass[i]);
        });
      }
    }
    function startSliderByTimer() {
      playSlider = setInterval(() => {
        nextButton.click();
      }, timer);
    }
    startSliderByTimer();
  };
  sliderMain('.main__slider', '.text-slider__inner', '.img-slider__button.button-prev', '.img-slider__button.button-next');
  sliderMain('.main__slider', '.img-slider__inner', '.img-slider__button.button-prev', '.img-slider__button.button-next');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderMain);

/***/ }),

/***/ "./src/js/modules/slider_1.js":
/*!************************************!*\
  !*** ./src/js/modules/slider_1.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = _ref => {
  let {
    breakpoints = null,
    slidesPerView,
    spaceBetween,
    sliderSelector,
    itemSelector,
    play = false,
    timeoutSlider = 0,
    prev = null,
    next = null
  } = _ref;
  const container = document.querySelector(sliderSelector),
    slides = container.querySelectorAll(itemSelector),
    prevBtn = document.querySelector(prev),
    nextBtn = document.querySelector(next),
    time = timeoutSlider;
  let perView = slidesPerView,
    gridGap = spaceBetween,
    breakpointsPage,
    widthScreen = document.documentElement.clientWidth,
    posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slidesLength = slides.length,
    slideSize = 0,
    index = 0,
    allowShift = true,
    autoPlay = play,
    playSlider;
  function reportWindowSize() {
    widthScreen = document.documentElement.clientWidth;
    setPerViewByBreakPoint(breakpoints);
    container.style.setProperty('--per-view', perView);
    container.style.setProperty('--grid-gap', gridGap + 'px');
  }
  window.onresize = reportWindowSize;
  function initSlider() {
    // set parameter slider
    if (breakpoints) {
      setPerViewByBreakPoint(breakpoints);
    }
    container.style.setProperty('--per-view', perView);
    container.style.setProperty('--grid-gap', gridGap + 'px');

    //clone slide on start and end slider
    for (let i = 0; i < perView; i++) {
      container.insertAdjacentHTML('beforeend', slides[i].outerHTML);
    }
    for (let i = 1; i <= perView; i++) {
      container.insertAdjacentHTML('afterbegin', slides[slidesLength - i].outerHTML);
    }
    bindTriggers();
    autoPlaySlider();
  }
  initSlider();
  function bindTriggers() {
    // Mouse events
    container.addEventListener('mouseenter', () => {
      if (autoPlay) {
        clearInterval(playSlider);
      }
    });
    try {
      prevBtn.addEventListener('mouseenter', () => {
        if (autoPlay) {
          clearInterval(playSlider);
        }
      });
      nextBtn.addEventListener('mouseenter', () => {
        if (autoPlay) {
          clearInterval(playSlider);
        }
      });
      prevBtn.addEventListener('mouseleave', () => {
        if (autoPlay) {
          autoPlaySlider();
        }
      });
      nextBtn.addEventListener('mouseleave', () => {
        if (autoPlay) {
          autoPlaySlider();
        }
      });
    } catch (e) {}
    container.addEventListener('mouseleave', () => {
      if (autoPlay) {
        autoPlaySlider();
      }
    });
    container.onmousedown = dragStart;

    // Touch events
    container.addEventListener('touchstart', dragStart);
    container.addEventListener('touchend', dragEnd);
    container.addEventListener('touchmove', dragAction);

    // Click events
    try {
      prevBtn.addEventListener('click', function () {
        shiftSlide(-1);
      });
      nextBtn.addEventListener('click', function () {
        shiftSlide(1);
      });
    } catch (e) {}

    // Transition events
    container.addEventListener('transitionend', checkIndex);
  }

  // auto play slider
  function autoPlaySlider() {
    if (autoPlay) {
      playSlider = setInterval(() => {
        shiftSlide(1);
      }, time);
    }
  }

  // start move slider
  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = container.offsetLeft;
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.pageX;
      container.style.cursor = 'grabbing';
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function dragAction(e) {
    e = e || window.event;
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    container.style.left = container.offsetLeft - posX2 + "px";
  }
  function dragEnd() {
    posFinal = container.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      container.classList.add('shifting');
      container.style.left = posInitial + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
    container.style.cursor = 'grab';
  }
  function shiftSlide(dir, action) {
    container.classList.add('shifting');
    if (allowShift) {
      if (!action) {
        posInitial = container.offsetLeft;
      }
      slideSize = getWidthSlide();
      if (dir == 1) {
        container.style.left = posInitial - slideSize + 'px';
        index++;
      } else if (dir == -1) {
        container.style.left = posInitial + slideSize + 'px';
        index--;
      }
    }
    allowShift = false;
  }
  function checkIndex() {
    container.classList.remove('shifting');
    slideSize = getWidthSlide();
    if (index == -1) {
      container.style.left = -(slidesLength * slideSize) + 'px';
      index = slidesLength - 1;
    }
    if (index == slidesLength) {
      container.style.left = -(1 * slideSize) + 'px';
      index = 0;
    }
    allowShift = true;
  }
  function getWidthSlide() {
    return slides[0].offsetWidth + gridGap;
  }
  function setPerViewByBreakPoint(obj) {
    breakpointsPage = {
      ...obj
    };
    for (let key in breakpointsPage) {
      if (key > widthScreen && typeof +key === 'number') {
        setPerViewByBreakPoint(breakpointsPage[key]);
      } else {
        if (key === 'slidesPerView') {
          perView = breakpointsPage[key];
        } else if (key === 'spaceBetween') {
          gridGap = breakpointsPage[key];
        }
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/modules/slider_flex.js":
/*!***************************************!*\
  !*** ./src/js/modules/slider_flex.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliderFlex = _ref => {
  let {
    containerSelector,
    prev,
    next,
    perViewSlides = null,
    autoPlaySlider = false,
    playSliderByTime = 5000
  } = _ref;
  const container = document.querySelector(containerSelector),
    slides = Array.from(container.children),
    prevBtn = document.querySelector(prev),
    nextBtn = document.querySelector(next),
    slidesLength = slides.length;
  let slideIndex = 0,
    initPos = 0,
    wigthSlide = getWidthSlide(),
    perView = perViewSlides == null ? slidesLength : perViewSlides,
    shifting = false,
    autoPlay = autoPlaySlider,
    playSlider,
    time = playSliderByTime,
    startPosition,
    animatedID,
    currentTranslate = 0,
    prevTranslate = 0,
    isDragging = false;
  function initSlider() {
    slides.forEach(item => {
      const img = item.querySelector('img');
      img.addEventListener('dragstart', e => {
        e.preventDefault();
      });
    });

    // Disable context menu
    // window.oncontextmenu = function (e) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return false;
    // };

    // set slider to start position
    initPos = wigthSlide * perView;
    currentTranslate = -initPos;
    prevTranslate = -initPos;
    setSliderPosition();

    //clone slide on start and end slider
    for (let i = 0; i < perView; i++) {
      container.insertAdjacentHTML('beforeend', slides[i].outerHTML);
    }
    for (let i = 1; i <= perView; i++) {
      container.insertAdjacentHTML('afterbegin', slides[slidesLength - i].outerHTML);
    }
    bindTriggers();
    playSliderByInterval();
  }
  initSlider();
  function bindTriggers() {
    container.addEventListener('transitionend', checkIndex);
    // click by button
    try {
      prevBtn.addEventListener('click', () => {
        nextSlide(1);
      });
      nextBtn.addEventListener('click', () => {
        nextSlide(-1);
      });
    } catch (e) {}

    // Touch events
    container.addEventListener('touchstart', touchStart());
    container.addEventListener('touchmove', touchMove);
    container.addEventListener('touchend', touchEnd);

    // Mouse events
    container.addEventListener('mousedown', touchStart());
    container.addEventListener('mousemove', touchMove);
    container.addEventListener('mouseup', touchEnd);
    container.addEventListener('mouseleave', touchEnd);

    //pause autoplay slider
    container.addEventListener('mouseenter', () => {
      clearInterval(playSlider);
    });
    container.addEventListener('mouseleave', () => {
      playSliderByInterval();
    });
    try {
      prevBtn.addEventListener('mouseenter', () => {
        clearInterval(playSlider);
      });
      nextBtn.addEventListener('mouseenter', () => {
        clearInterval(playSlider);
      });
      prevBtn.addEventListener('mouseleave', () => {
        playSliderByInterval();
      });
      nextBtn.addEventListener('mouseleave', () => {
        playSliderByInterval();
      });
    } catch (e) {}
  }
  function touchStart() {
    return function (e) {
      container.style.cursor = 'grabbing';
      startPosition = getPositionX(e);
      isDragging = true;
      animatedID = requestAnimationFrame(animation);
    };
  }
  function touchMove(e) {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      currentTranslate = prevTranslate + currentPosition - startPosition;
    }
  }
  function touchEnd() {
    isDragging = false;
    container.style.cursor = 'grab';
    cancelAnimationFrame(animation);
    const moveBy = currentTranslate - prevTranslate;
    if (moveBy < -150) {
      nextSlide(-1);
    } else {
      setReturnSliderPosition();
    }
    if (moveBy > 150) {
      nextSlide(1);
    } else {
      setReturnSliderPosition();
    }
  }
  function setReturnSliderPosition() {
    currentTranslate = -initPos + wigthSlide * slideIndex;
    setSliderPosition();
  }
  function setSliderPosition() {
    container.style.left = `${currentTranslate}px`;
  }
  function animation() {
    setSliderPosition();
    if (isDragging) {
      requestAnimationFrame(animation);
    }
  }
  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }
  function nextSlide(n) {
    if (!shifting) {
      shifting = true;
      if (n < 0) {
        slideIndex--;
      } else {
        slideIndex++;
      }
      container.classList.add('shifting');
      calcNewSliderPosition();
      setSliderPosition();
    }
  }
  function calcNewSliderPosition() {
    currentTranslate = -initPos + wigthSlide * slideIndex;
    prevTranslate = currentTranslate;
  }
  function getWidthSlide() {
    return slides[0].offsetWidth;
  }
  function checkIndex() {
    container.classList.remove('shifting');
    if (slideIndex == slidesLength || slideIndex == -slidesLength) {
      slideIndex = 0;
      calcNewSliderPosition();
      setSliderPosition();
    }
    shifting = false;
  }
  function playSliderByInterval() {
    if (autoPlay) {
      playSlider = setInterval(() => {
        nextSlide(-1);
      }, time);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderFlex);

/***/ }),

/***/ "./src/js/modules/smooth-scrolling.js":
/*!********************************************!*\
  !*** ./src/js/modules/smooth-scrolling.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const smoothScrolling = selector => {
  const links = document.querySelectorAll(selector),
    speed = 0.3;
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      let withTop = document.documentElement.scrollTop,
        hash = link.getAttribute('href'),
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(withTop - progress / speed, withTop + toBlock) : Math.min(withTop + progress / speed, withTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != withTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger-menu */ "./src/js/modules/burger-menu.js");
/* harmony import */ var _modules_change_bg_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/change-bg-menu */ "./src/js/modules/change-bg-menu.js");
/* harmony import */ var _modules_slider_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider_1 */ "./src/js/modules/slider_1.js");
/* harmony import */ var _modules_slider_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider_flex */ "./src/js/modules/slider_flex.js");
/* harmony import */ var _modules_rotate_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/rotate-logo */ "./src/js/modules/rotate-logo.js");
/* harmony import */ var _modules_show_scroll_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/show-scroll-top */ "./src/js/modules/show-scroll-top.js");
/* harmony import */ var _modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/smooth-scrolling */ "./src/js/modules/smooth-scrolling.js");
/* harmony import */ var _modules_show_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/show-header */ "./src/js/modules/show-header.js");
/* harmony import */ var _modules_accordind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/accordind */ "./src/js/modules/accordind.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_show_submenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/show-submenu */ "./src/js/modules/show-submenu.js");
/* harmony import */ var _modules_according_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/according-menu */ "./src/js/modules/according-menu.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_select_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/select-input */ "./src/js/modules/select-input.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_link_default__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/link-default */ "./src/js/modules/link-default.js");
/* harmony import */ var _modules_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/animations */ "./src/js/modules/animations.js");

















window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const logos = document.querySelectorAll('.logo-text');
  logos.forEach(item => {
    (0,_modules_rotate_logo__WEBPACK_IMPORTED_MODULE_4__["default"])(item);
  });
  (0,_modules_animations__WEBPACK_IMPORTED_MODULE_16__["default"])();
  (0,_modules_show_header__WEBPACK_IMPORTED_MODULE_7__["default"])('.header', '.header__body');
  (0,_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.menu__burger');
  (0,_modules_playVideo__WEBPACK_IMPORTED_MODULE_12__["default"])('.video__button img', '.overlay');
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_14__["default"])();
  (0,_modules_link_default__WEBPACK_IMPORTED_MODULE_15__["default"])('a.button__block');
  (0,_modules_select_input__WEBPACK_IMPORTED_MODULE_13__["default"])('.select-persones', '.persone-form__select-clone', '.persone-form', '.persone-form__view-select', '.button-book');
  (0,_modules_select_input__WEBPACK_IMPORTED_MODULE_13__["default"])('.select-time', '.time-form__select-clone', '.time-form', '.date-form__view-select', '.button-book');
  (0,_modules_according_menu__WEBPACK_IMPORTED_MODULE_11__["default"])('.menu__item', '.menu__sublist');
  (0,_modules_accordind__WEBPACK_IMPORTED_MODULE_8__["default"])('.menu-list__item', '.item-menu__text');
  (0,_modules_show_submenu__WEBPACK_IMPORTED_MODULE_10__["default"])('.menu__item', '.menu__sublist');
  (0,_modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_6__["default"])('.scroll-popup__body');
  (0,_modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_6__["default"])('.link-menu a');
  (0,_modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_6__["default"])('.menu__sublink');
  (0,_modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_6__["default"])('.order__book');
  (0,_modules_change_bg_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_show_scroll_top__WEBPACK_IMPORTED_MODULE_5__["default"])('.scroll-popup__body');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_modules_slider_flex__WEBPACK_IMPORTED_MODULE_3__["default"])({
    containerSelector: '.img-block-instagram__body',
    itemSelector: '.img-block-instagram__item',
    prev: '.btn.prev-btn',
    next: '.btn.next-btn',
    autoPlaySlider: true,
    playSliderByTime: 5000
  });
  (0,_modules_slider_1__WEBPACK_IMPORTED_MODULE_2__["default"])({
    slidesPerView: 3,
    spaceBetween: 32,
    sliderSelector: '.blog__cards-block-body',
    itemSelector: '.card-block',
    play: true,
    timeoutSlider: 5000,
    breakpoints: {
      // when window width is <= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is <= 1100px
      1100: {
        slidesPerView: 2,
        spaceBetween: 32
      }
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map