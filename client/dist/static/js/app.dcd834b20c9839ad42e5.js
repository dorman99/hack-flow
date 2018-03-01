webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_navbarvue_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_bodyvue_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footervue_vue__ = __webpack_require__(134);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    navbarvue: __WEBPACK_IMPORTED_MODULE_0__components_navbarvue_vue__["a" /* default */],
    bodyvue: __WEBPACK_IMPORTED_MODULE_1__components_bodyvue_vue__["a" /* default */],
    footervue: __WEBPACK_IMPORTED_MODULE_2__components_footervue_vue__["a" /* default */]
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_epic_spinners__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'navbar',
  components: {
    AtomSpinner: __WEBPACK_IMPORTED_MODULE_0_epic_spinners__["a" /* AtomSpinner */]
  },
  data() {
    return {
      item: 'navbar-item'
    };
  },
  methods: {
    activebar() {
      this.item += ' is-active';
    },
    deactivebar() {
      this.item = 'navbar-item';
    },
    signout() {
      localStorage.clear();
      this.$router.push('/login');
      this.$store.dispatch('logout', false);
      console.log('inii sign out');
    },
    modalquestion() {
      this.$store.dispatch('togglemodal');
    },
    goprofle() {
      this.$router.push('profile');
    },
    home() {
      this.$router.push('/');
    }
  },
  computed: {
    login() {
      return this.$store.state.login;
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HollowDotsSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    dotSize: {
      type: Number,
      default: 15
    },
    dotsNum: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    horizontalMargin() {
      return this.dotSize / 2;
    },

    spinnerStyle() {
      return {
        height: `${this.dotSize}px`,
        width: `${(this.dotSize + this.horizontalMargin * 2) * this.dotsNum}px`
      };
    },

    dotStyle() {
      return {
        animationDuration: `${this.animationDuration}ms`,
        width: `${this.dotSize}px`,
        height: `${this.dotSize}px`,
        margin: `0 ${this.horizontalMargin}px`,
        borderWidth: `${this.dotSize / 5}px`,
        borderColor: this.color
      };
    },

    dotsStyles() {
      const dotsStyles = [];
      const delayModifier = 0.3;
      const basicDelay = 1000;

      for (let i = 1; i <= this.dotsNum; i++) {
        const style = Object.assign({
          animationDelay: `${basicDelay * i * delayModifier}ms`
        }, this.dotStyle);

        dotsStyles.push(style);
      }

      return dotsStyles;
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utils__ = __webpack_require__(6);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'PixelSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      animationBaseName: 'pixel-spinner-animation',
      currentAnimationName: ''
    };
  },

  computed: {
    pixelSize() {
      return this.size / 7;
    },

    spinnerStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      };
    },

    spinnerInnerStyle() {
      return {
        animationDuration: `${this.animationDuration}ms`,
        animationName: this.currentAnimationName,
        width: `${this.pixelSize}px`,
        height: `${this.pixelSize}px`,
        backgroundColor: this.color,
        color: this.color,
        boxShadow: `
                      ${this.pixelSize * 1.5}px ${this.pixelSize * 1.5}px 0 0,
                      ${this.pixelSize * -1.5}px ${this.pixelSize * -1.5}px 0 0,
                      ${this.pixelSize * 1.5}px ${this.pixelSize * -1.5}px 0 0,
                      ${this.pixelSize * -1.5}px ${this.pixelSize * 1.5}px 0 0,
                      0 ${this.pixelSize * 1.5}px 0 0,
                      ${this.pixelSize * 1.5}px 0 0 0,
                      ${this.pixelSize * -1.5}px 0 0 0,
                      0 ${this.pixelSize * -1.5}px 0 0
                    `
      };
    }
  },

  watch: {
    '$props': {
      handler() {
        this.updateAnimation();
      },
      deep: true
    }
  },

  mounted() {
    this.updateAnimation();
  },

  methods: {
    updateAnimation() {
      this.updateAnimationName();
      __WEBPACK_IMPORTED_MODULE_0__services_utils__["a" /* default */].appendKeyframes(this.currentAnimationName, this.generateKeyframes());
    },

    updateAnimationName() {
      this.currentAnimationName = `${this.animationBaseName}-${Date.now()}`;
    },

    generateKeyframes() {
      return `
      50% {
        box-shadow:  ${this.pixelSize * 2}px ${this.pixelSize * 2}px 0 0,
                     ${this.pixelSize * -2}px ${this.pixelSize * -2}px 0 0,
                     ${this.pixelSize * 2}px ${this.pixelSize * -2}px 0 0,
                     ${this.pixelSize * -2}px ${this.pixelSize * 2}px 0 0,
                     0 ${this.pixelSize}px 0 0,
                     ${this.pixelSize}px 0 0 0,
                     ${this.pixelSize * -1}px 0 0 0,
                     0 ${this.pixelSize * -1}px 0 0;
      }


      75% {
        box-shadow:  ${this.pixelSize * 2}px ${this.pixelSize * 2}px 0 0,
                     ${this.pixelSize * -2}px ${this.pixelSize * -2}px 0 0,
                     ${this.pixelSize * 2}px ${this.pixelSize * -2}px 0 0,
                     ${this.pixelSize * -2}px ${this.pixelSize * 2}px 0 0,
                     0 ${this.pixelSize}px 0 0,
                     ${this.pixelSize}px 0 0 0,
                     ${this.pixelSize * -1}px 0 0 0,
                     0 ${this.pixelSize * -1}px 0 0;
      }

      100% {
        transform: rotate(360deg);
      }`;
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utils__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FlowerSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2500
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      smallerDotAnimationBaseName: 'flower-spinner-smaller-dot-animation',
      biggerDotAnimationBaseName: 'flower-spinner-bigger-dot-animation',
      currentSmallerDotAnimationBaseName: '',
      currentBiggerDotAnimationBaseName: ''
    };
  },

  computed: {
    dotSize() {
      return this.size / 7;
    },

    spinnerStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      };
    },

    dotsContainerStyle() {
      return {
        width: `${this.dotSize}px`,
        height: `${this.dotSize}px`
      };
    },

    smallerDotStyle() {
      return {
        background: this.color,
        animationDuration: `${this.animationDuration}ms`,
        animationName: this.currentSmallerDotAnimationBaseName
      };
    },

    biggerDotStyle() {
      return {
        background: this.color,
        animationDuration: `${this.animationDuration}ms`,
        animationName: this.currentBiggerDotAnimationBaseName
      };
    }
  },

  watch: {
    '$props': {
      handler() {
        this.updateAnimation();
      },
      deep: true
    }
  },

  mounted() {
    this.updateAnimation();
  },

  methods: {
    updateAnimation() {
      this.updateAnimationName();
      __WEBPACK_IMPORTED_MODULE_0__services_utils__["a" /* default */].appendKeyframes(this.currentSmallerDotAnimationBaseName, this.generateSmallerDotKeyframes());
      __WEBPACK_IMPORTED_MODULE_0__services_utils__["a" /* default */].appendKeyframes(this.currentBiggerDotAnimationBaseName, this.generateBiggerDotKeyframes());
    },

    updateAnimationName() {
      this.currentSmallerDotAnimationBaseName = `${this.smallerDotAnimationBaseName}-${Date.now()}`;
      this.currentBiggerDotAnimationBaseName = `${this.biggerDotAnimationBaseName}-${Date.now()}`;
    },

    generateSmallerDotKeyframes() {
      return `0%, 100% {
                  box-shadow: 0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color};
                }
                25%, 75% {
                  box-shadow: ${this.dotSize * 1.4}px 0 0 ${this.color},
                              -${this.dotSize * 1.4}px 0 0 ${this.color},
                              0 ${this.dotSize * 1.4}px 0 ${this.color},
                              0 -${this.dotSize * 1.4}px 0 ${this.color},
                              ${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                              ${this.dotSize}px ${this.dotSize}px 0 ${this.color},
                              -${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                              -${this.dotSize}px ${this.dotSize}px 0 ${this.color};

                }
                100% {
                  box-shadow: 0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color};
                }`;
    },

    generateBiggerDotKeyframes() {
      return `0%, 100% {
                  box-shadow: 0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color};
                }
                50% {
                  transform: rotate(180deg);
                }
                25%, 75% {
                  box-shadow: ${this.dotSize * 2.6}px 0 0 ${this.color},
                              -${this.dotSize * 2.6}px 0 0 ${this.color},
                              0 ${this.dotSize * 2.6}px 0 ${this.color},
                              0 -${this.dotSize * 2.6}px 0 ${this.color},
                              ${this.dotSize * 1.9}px -${this.dotSize * 1.9}px 0 ${this.color},
                              ${this.dotSize * 1.9}px ${this.dotSize * 1.9}px 0 ${this.color},
                              -${this.dotSize * 1.9}px -${this.dotSize * 1.9}px 0 ${this.color},
                              -${this.dotSize * 1.9}px ${this.dotSize * 1.9}px 0 ${this.color};

                }
                100% {
                  transform: rotate(360deg);
                  box-shadow: 0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color};
                }`;
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'IntersectingCirclesSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1200
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    circleSize() {
      return this.size / 2;
    },

    spinnerStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      };
    },

    spinnerBlockStyle() {
      return {
        animationDuration: `${this.animationDuration}ms`,
        width: `${this.circleSize}px`,
        height: `${this.circleSize}px`
      };
    },

    circleStyle() {
      return {
        borderColor: this.color
      };
    },

    circleStyles() {
      const circlesPositions = [{ top: 0, left: 0 }, { left: `${this.circleSize * -0.36}px`, top: `${this.circleSize * 0.2}px` }, { left: `${this.circleSize * -0.36}px`, top: `${this.circleSize * -0.2}px` }, { left: 0, top: `${this.circleSize * -0.36}px` }, { left: `${this.circleSize * 0.36}px`, top: `${this.circleSize * -0.2}px` }, { left: `${this.circleSize * 0.36}px`, top: `${this.circleSize * 0.2}px` }, { left: 0, top: `${this.circleSize * 0.36}px` }];

      return circlesPositions.map(cp => Object.assign(cp, this.circleStyle));
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'OrbitSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },

    orbitStyle() {
      return {
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      };
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FingerprintSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      ringsNum: 9,
      containerPadding: 2
    };
  },

  computed: {
    outerRingSize() {
      return this.size - this.containerPadding * 2;
    },

    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        padding: `${this.containerPadding}px`
      };
    },

    ringStyle() {
      return {
        borderTopColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      };
    },

    ringsStyles() {
      const ringsStyles = [];
      const ringBase = this.outerRingSize / this.ringsNum;
      const ringInc = ringBase;

      for (let i = 1; i <= this.ringsNum; i++) {
        let style = Object.assign({
          animationDelay: `${i * 50}ms`,
          height: `${ringBase + (i - 1) * ringInc}px`,
          width: `${ringBase + (i - 1) * ringInc}px`
        }, this.ringStyle);
        ringsStyles.push(style);
      }

      return ringsStyles;
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'TrinityRingsSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      containerPadding: 3
    };
  },

  computed: {
    outerRingSize() {
      return this.size - this.containerPadding * 2;
    },

    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        padding: `${this.containerPadding}px`
      };
    },

    ring1Style() {
      return {
        height: `${this.outerRingSize}px`,
        width: `${this.outerRingSize}px`,
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      };
    },

    ring2Style() {
      return {
        height: `${this.outerRingSize * 0.65}px`,
        width: `${this.outerRingSize * 0.65}px`,
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      };
    },

    ring3Style() {
      return {
        height: `${this.outerRingSize * 0.1}px`,
        width: `${this.outerRingSize * 0.1}px`,
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      };
    }
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FulfillingSquareSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 4000
    },
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        borderColor: this.color
      };
    },

    spinnerInnerStyle() {
      return {
        backgroundColor: this.color
      };
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CirclesToRhombusesSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1200
    },
    circleSize: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#fff'
    },
    circlesNum: {
      type: Number,
      default: 3
    }
  },

  computed: {
    circleMarginLeft() {
      return this.circleSize * 1.125;
    },

    spinnertStyle() {
      return {
        height: `${this.circleSize}px`,
        width: `${(this.circleSize + this.circleMarginLeft) * this.circlesNum}px`
      };
    },

    circleStyle() {
      return {
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`,
        height: `${this.circleSize}px`,
        width: `${this.circleSize}px`,
        marginLeft: `${this.circleMarginLeft}px`
      };
    },

    circlesStyles() {
      const circlesStyles = [];
      const delay = 150;

      for (let i = 1; i <= this.circlesNum; i++) {
        const style = Object.assign({
          animationDelay: `${i * delay}ms`
        }, this.circleStyle);

        if (i === 1) {
          style.marginLeft = 0;
        }

        circlesStyles.push(style);
      }

      return circlesStyles;
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SemipolarSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      ringsNum: 5
    };
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },
    ringStyle() {
      return {
        animationDuration: `${this.animationDuration}ms`,
        borderTopColor: this.color,
        borderLeftColor: this.color
      };
    },
    ringsStyles() {
      const ringsStyles = [];
      const delayModifier = 0.1;
      const ringWidth = this.size * 0.05;
      const positionIncrement = ringWidth * 2;
      const sizeDecrement = this.size * 0.2;

      for (let i = 0; i < this.ringsNum; i++) {
        const computedSize = `${this.size - sizeDecrement * i}px`;
        const computedPosition = `${positionIncrement * i}px`;
        const style = Object.assign({
          animationDelay: `${this.animationDuration * delayModifier * (this.ringsNum - i - 1)}ms`,
          height: computedSize,
          width: computedSize,
          left: computedPosition,
          top: computedPosition,
          borderWidth: `${ringWidth}px`
        }, this.ringStyle);
        ringsStyles.push(style);
      }

      return ringsStyles;
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'BreedingRhombusSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 150
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      animationBaseName: 'breeding-rhombus-spinner-animation-child',
      rhombusesNum: 8
    };
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },

    rhombusStyle() {
      return {
        height: `${this.size / 7.5}px`,
        width: `${this.size / 7.5}px`,
        animationDuration: `${this.animationDuration}ms`,
        top: `${this.size / 2.3077}px`,
        left: `${this.size / 2.3077}px`,
        backgroundColor: this.color
      };
    },

    rhombusesStyles() {
      const rhombusesStyles = [];
      const delayModifier = this.animationDuration * 0.05;

      for (let i = 1; i <= this.rhombusesNum; i++) {
        rhombusesStyles.push(Object.assign({
          animationDelay: `${delayModifier * (i + 1)}ms`
        }, this.rhombusStyle));
      }

      return rhombusesStyles;
    },

    bigRhombusStyle() {
      return {
        height: `${this.size / 3}px`,
        width: `${this.size / 3}px`,
        animationDuration: `${this.animationDuration}`,
        top: `${this.size / 3}px`,
        left: `${this.size / 3}px`,
        backgroundColor: this.color
      };
    }
  }

});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SwappingSquaresSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      animationBaseName: 'swapping-squares-animation-child',
      squaresNum: 4
    };
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },

    squareStyle() {
      return {
        height: `${this.size * 0.25 / 1.3}px`,
        width: `${this.size * 0.25 / 1.3}px`,
        animationDuration: `${this.animationDuration}ms`,
        borderWidth: `${this.size * 0.04 / 1.3}px`,
        borderColor: this.color
      };
    },

    squaresStyles() {
      const squaresStyles = [];
      const delay = this.animationDuration * 0.5;

      for (let i = 1; i <= this.squaresNum; i++) {
        squaresStyles.push(Object.assign({
          animationDelay: `${i % 2 === 0 ? delay : 0}ms`
        }, this.squareStyle));
      }

      return squaresStyles;
    }
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ScalingSquaresSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1250
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      squaresNum: 4
    };
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        animationDuration: `${this.animationDuration}ms`
      };
    },

    squareStyle() {
      return {
        height: `${this.size * 0.25 / 1.3}px`,
        width: `${this.size * 0.25 / 1.3}px`,
        animationDuration: `${this.animationDuration}ms`,
        borderWidth: `${this.size * 0.04 / 1.3}px`,
        borderColor: this.color
      };
    },

    squaresStyles() {
      const squaresStyles = [];

      for (let i = 1; i <= this.squaresNum; i++) {
        squaresStyles.push(Object.assign({}, this.squareStyle));
      }

      return squaresStyles;
    }
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FulfillingBouncingCircleSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 4000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        animationDuration: `${this.animationDuration}ms`
      };
    },

    orbitStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        borderColor: this.color,
        borderWidth: `${this.size * 0.03}px`,
        animationDuration: `${this.animationDuration}ms`
      };
    },

    circleStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        borderColor: this.color,
        color: this.color,
        borderWidth: `${this.size * 0.1}px`,
        animationDuration: `${this.animationDuration}ms`
      };
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'RadarSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 110
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      circlesNum: 4
    };
  },

  computed: {
    borderWidth() {
      return this.size * 5 / 110;
    },

    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },

    circleStyle() {
      return {
        animationDuration: `${this.animationDuration}ms`
      };
    },

    circleInnerContainerStyle() {
      return {
        borderWidth: `${this.borderWidth}px`
      };
    },

    circleInnerStyle() {
      return {
        borderLeftColor: this.color,
        borderRightColor: this.color,
        borderWidth: `${this.borderWidth}px`
      };
    },

    circlesStyles() {
      const circlesStyles = [];
      const delay = this.animationDuration * 0.15;

      for (let i = 0; i < this.circlesNum; i++) {
        circlesStyles.push(Object.assign({
          padding: `${this.borderWidth * 2 * i}px`,
          animationDelay: `${i === this.circlesNum - 1 ? 0 : delay}ms`
        }, this.circleStyle));
      }

      return circlesStyles;
    }
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SelfBuildingSquareSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 6000
    },
    size: {
      type: Number,
      default: 40
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      squaresNum: 9
    };
  },

  computed: {
    squareSize() {
      return this.size / 4;
    },

    initialTopPosition() {
      return -this.squareSize * 2 / 3;
    },

    spinnerStyle() {
      return {
        top: `${-this.initialTopPosition}px`,
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },

    squareStyle() {
      return {
        height: `${this.squareSize}px`,
        width: `${this.squareSize}px`,
        top: `${this.initialTopPosition}px`,
        marginRight: `${this.squareSize / 3}px`,
        marginTop: `${this.squareSize / 3}px`,
        animationDuration: `${this.animationDuration}ms`,
        background: this.color
      };
    },

    squaresStyles() {
      const squaresStyles = [];
      const delaysMultipliers = [6, 7, 8, 3, 4, 5, 0, 1, 2];
      const delayModifier = this.animationDuration * 0.05;

      for (let i = 0; i < this.squaresNum; i++) {
        squaresStyles.push(Object.assign({
          animationDelay: `${delayModifier * delaysMultipliers[i]}ms`
        }, this.squareStyle));
      }

      return squaresStyles;
    }
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utils__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SpringSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 3000
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      animationBaseName: 'spring-spinner-animation',
      currentAnimationName: ''
    };
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },

    spinnerPartStyle() {
      return {
        height: `${this.size / 2}px`,
        width: `${this.size}px`
      };
    },

    rotatorStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        borderRightColor: this.color,
        borderTopColor: this.color,
        borderWidth: `${this.size / 7}px`,
        animationDuration: `${this.animationDuration}ms`,
        animationName: this.currentAnimationName
      };
    }
  },

  watch: {
    '$props': {
      handler() {
        this.updateAnimation();
      },
      deep: true
    }
  },

  mounted() {
    this.updateAnimation();
  },

  methods: {
    updateAnimation() {
      this.updateAnimationName();
      __WEBPACK_IMPORTED_MODULE_0__services_utils__["a" /* default */].appendKeyframes(this.currentAnimationName, this.generateKeyframes());
    },

    updateAnimationName() {
      this.currentAnimationName = `${this.animationBaseName}-${Date.now()}`;
    },

    generateKeyframes() {
      return `
        0% {
          border-width: ${this.size / 7}px;
        }
        25% {
          border-width: ${this.size / 23.33}px;
        }
        50% {
          transform: rotate(115deg);
          border-width: ${this.size / 7}px;
        }
        75% {
          border-width: ${this.size / 23.33}px;
         }
        100% {
         border-width: ${this.size / 7}px;
        }`;
    }
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'LoopingRhombusesSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2500
    },
    rhombusSize: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      rhombusesNum: 3
    };
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.rhombusSize}px`,
        width: `${this.rhombusSize * 4}px`
      };
    },

    rhombusStyle() {
      return {
        height: `${this.rhombusSize}px`,
        width: `${this.rhombusSize}px`,
        backgroundColor: this.color,
        animationDuration: `${this.animationDuration}ms`,
        left: `${this.rhombusSize * 4}px`
      };
    },

    rhombusesStyles() {
      const rhombusesStyles = [];
      const delay = -this.animationDuration / 1.5;

      for (let i = 1; i <= this.rhombusesNum; i++) {
        const style = Object.assign({
          animationDelay: `${i * delay}ms`
        }, this.rhombusStyle);

        rhombusesStyles.push(style);
      }

      return rhombusesStyles;
    }
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HalfCircleSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },

    circleStyle() {
      return {
        borderWidth: `${this.size / 10}px`,
        animationDuration: `${this.animationDuration}ms`
      };
    },

    circle1Style() {
      return Object.assign({
        borderTopColor: this.color
      }, this.circleStyle);
    },

    circle2Style() {
      return Object.assign({
        borderBottomColor: this.color
      }, this.circleStyle);
    }
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'AtomSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: 'red'
    }
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      };
    },

    circleStyle() {
      return {
        color: this.color,
        fontSize: `${this.size * 0.24}px`
      };
    },

    lineStyle() {
      return {
        animationDuration: `${this.animationDuration}ms`,
        borderLeftWidth: `${this.size / 25}px`,
        borderTopWidth: `${this.size / 25}px`,
        borderLeftColor: this.color
      };
    }
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bodyvue_vue__ = __webpack_require__(32);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64997f0e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bodyvue_vue__ = __webpack_require__(133);
function injectStyle (ssrContext) {
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bodyvue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64997f0e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bodyvue_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questions_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modalquestion_vue__ = __webpack_require__(130);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bodyvue',
  components: {
    question: __WEBPACK_IMPORTED_MODULE_0__questions_vue__["a" /* default */],
    modalquestion: __WEBPACK_IMPORTED_MODULE_1__modalquestion_vue__["a" /* default */]
  },
  methods: {
    getAllQuestions() {
      // let self = this
      let payload = {};
      this.$store.dispatch('getAllQuestions', payload);
      // this.$http.get('/questions').then(({data}) => {
      //   self.$store.commit('setDataQuestions', data.data)
      // }).catch(err => console.log(err))
    },
    checklogin() {
      return this.$store.dispatch('signin');
    }
  },
  computed: {
    dataQuestions() {
      return this.$store.getters.getQuestions;
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.getAllQuestions();
      this.$router.push('/');
      this.checklogin();
      this.$store.dispatch('reftoken', localStorage.getItem('token'));
      console.log('masuk sini bray');
    } else {
      this.$router.push('/login');
      console.log('ini ke sini cuy');
    }
  }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answers_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answerfield_vue__ = __webpack_require__(36);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'question',
  props: ['question'],
  data() {
    return {

      show: false
    };
  },
  components: {
    answer: __WEBPACK_IMPORTED_MODULE_0__answers_vue__["a" /* default */],
    answerfield: __WEBPACK_IMPORTED_MODULE_1__answerfield_vue__["a" /* default */]
  },
  methods: {
    showAnswerField() {
      this.show = true;
    },
    upvoteq() {
      let objupdate = {
        status: 'like',
        id: this.question._id
      };
      this.$store.dispatch('qdownvote', objupdate);
    },
    downvoteq() {
      let objupdate = {
        status: '',
        id: this.question._id
      };
      this.$store.dispatch('qdownvote', objupdate);
    }
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answers_vue__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_506ce3e5_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answers_vue__ = __webpack_require__(126);
function injectStyle (ssrContext) {
  __webpack_require__(125)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answers_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_506ce3e5_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answers_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['answer'],
  name: 'answers',
  data() {
    return {
      userid: localStorage.getItem('userid')
    };
  },
  methods: {
    upvote() {
      let obj = {
        status: 'like',
        id: this.answer._id
      };
      this.$store.dispatch('upvoteAnswer', obj);
    },
    downvote() {
      let obj = {
        status: 'dislike',
        id: this.answer._id
      };
      this.$store.dispatch('upvoteAnswer', obj);
    },
    destroyanswer(ansid) {
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http.delete('/answers', {
            headers: {
              answerid: ansid
            }
          }).then(response => {
            this.$store.dispatch('getAllQuestions');
          }).catch(err => {
            console.log(err);
          });
          this.$swal('Poof! Your comment has been deleted!', {
            icon: 'success'
          });
        } else {
          this.$swal('Your comment is safe!');
        }
      });
    }
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answerfield_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41f94524_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answerfield_vue__ = __webpack_require__(128);
function injectStyle (ssrContext) {
  __webpack_require__(127)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answerfield_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41f94524_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answerfield_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['quesid'],
  data() {
    return {
      comment: '',
      dataQuests: this.$store.getters.getQuestions
    };
  },
  methods: {
    submitcomment() {
      console.log('masuk submit');
      let self = this;
      let objupdate = {
        comment: this.comment,
        quesid: this.quesid
      };
      this.$store.dispatch('updateQuestion', objupdate);
      console.log(self.quesid);
      this.comment = '';
      this.$swal('comment submited', 'thks for your response:)', 'success');
    }
  }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'modalquestion',
  data() {
    return {
      modalinput: {
        title: 'input is-danger',
        status: true
      },
      newques: {
        title: '',
        content: ''
      },
      content: {
        field: 'textarea is-danger',
        status: true
      }
    };
  },
  computed: {
    modalstat() {
      return this.$store.state.modal;
    }
  },
  methods: {
    closemodal() {
      this.$store.dispatch('closemodal');
    },
    checkfield(e) {
      if (e.target.value.length !== 0) {
        this.modalinput.title = 'input is-success';
        this.modalinput.status = false;
      } else {
        this.modalinput.title = 'input is-danger';
        this.modalinput.status = true;
      }
    },
    checkcontent(e) {
      if (e.target.value.length !== 0) {
        this.content.field = 'textarea is-success';
        this.content.status = false;
      } else {
        this.content.field = 'textarea is-danger';
        this.content.status = true;
      }
    },
    newquessub() {
      if (this.content.status === false && this.modalinput.status === false) {
        this.$http.post('/questions', {
          title: this.newques.title,
          question: this.newques.content
        }, {
          headers: {
            token: localStorage.getItem('token')
          }
        }).then(response => {
          this.$store.dispatch('newquestion');
          this.newques = {
            title: '',
            content: ''
          };
          this.$swal('Question Submitted', 'hope you will be happy :)', 'success');
        });
      } else {
        this.$swal('fill the blank', 'if you want ask :) ', 'warning');
      }
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'footervue'
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_epic_spinners__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_vue__ = __webpack_require__(142);
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'atomspinner',
  components: {
    AtomSpinner: __WEBPACK_IMPORTED_MODULE_0_epic_spinners__["a" /* AtomSpinner */],
    login: __WEBPACK_IMPORTED_MODULE_1__login_vue__["a" /* default */]
  }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_epic_spinners__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'login',
  data() {
    return {
      signup: {
        email: '',
        password: ''
      },
      login: {
        email: '',
        password: ''
      },
      form: {
        email: 'input',
        password: 'input',
        statusEmail: false,
        statusPassword: false
      },
      formS: {
        email: 'input',
        password: 'input',
        statusEmail: false,
        statusPassword: false
      }
    };
  },
  components: {
    AtomSpinner: __WEBPACK_IMPORTED_MODULE_0_epic_spinners__["a" /* AtomSpinner */]
  },
  methods: {
    loggedin() {
      let self = this;
      this.$http.post('/signin', {
        email: self.login.email,
        password: self.login.password
      }).then(response => {
        if (response.data.data) {
          console.log(response.data, 'ini login coek');
          localStorage.setItem('userid', response.data.iduser);
          // self.$store.dispatch('signin', response.data.data)
          localStorage.setItem('token', response.data.data);
          self.$router.push('/');
          self.$swal('Loggein Success!', 'Welcome To HackFlow!', 'success');
          self.login = {
            email: '',
            password: ''
          };
        } else {
          self.$swal('Invalid email or password!', 'Check your email / password ', 'error');
          self.login = {
            email: '',
            password: ''
          };
        }
      }).catch(err => {
        console.log(err);
      });
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
      return re.test(String(email).toLowerCase());
    },
    checkPassword(e) {
      console.log('ini password', e.target.value);
      if (e.target.value.length === 0) {
        this.form.password = 'input';
        this.form.statusPassword = false;
      } else if (e.target.value.length < 6) {
        this.form.password = 'input is-danger';
        this.form.statusPassword = true;
      } else {
        this.form.password = 'input is-success';
        this.form.statusPassword = false;
      }
    },
    checkPasswordS(e) {
      console.log('ini password', e.target.value);
      if (e.target.value.length === 0) {
        this.formS.password = 'input';
        this.formS.statusPassword = false;
      } else if (e.target.value.length < 6) {
        this.formS.password = 'input is-danger';
        this.formS.statusPassword = true;
      } else {
        this.formS.password = 'input is-success';
        this.formS.statusPassword = false;
      }
    },
    checkemail(e) {
      console.log(' ini checker', e.target.value);
      console.log(this.validateEmail(e.target.value));
      if (e.target.value.length === 0) {
        this.form.email = 'input';
        this.form.statusEmail = false;
      } else if (!this.validateEmail(e.target.value)) {
        this.form.email = 'input is-danger';
        this.form.statusEmail = true;
      } else {
        this.form.email = 'input is-success';
        this.form.statusEmail = false;
      }
    },
    checkemailS(e) {
      console.log(' ini checker', e.target.value);
      console.log(this.validateEmail(e.target.value));
      if (e.target.value.length === 0) {
        this.formS.email = 'input';
        this.formS.statusEmail = false;
      } else if (!this.validateEmail(e.target.value)) {
        this.formS.email = 'input is-danger';
        this.formS.statusEmail = true;
      } else {
        this.formS.email = 'input is-success';
        this.formS.statusEmail = false;
      }
    },
    signupe() {
      let self = this;
      if (this.signup.email && this.signup.password && this.formS.statusEmail === false && this.formS.statusPassword === false) {
        this.$http.post('/signup', {
          email: self.signup.email,
          password: self.signup.password
        }).then(response => {
          if (response.data.message === 'error') {
            self.$swal('email has been taken', 'please change your email', 'error');
          } else {
            console.log(response.data);
            self.$swal('Welcome To HackFlow!', 'You can login now :)', 'success');
            self.signup = {
              email: '',
              password: ''
            };
          }
        }).catch(err => {
          console.log(err);
        });
      } else {
        self.$swal('Please take a look at your form', 'check your input', 'warning');
      }
    }
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    dataQuestions: [],
    token: '',
    login: false,
    modal: 'modal',
    quesedit: {
      id: '',
      title: '',
      question: ''
    }
  },
  mutations: {
    filterquestion(state, payload) {
      state.dataQuestions.forEach((el, i) => {
        if (el._id === payload._id) {
          el = payload;
        }
      });
    },
    modalclose(state) {
      state.modal = 'modal';
    },
    changemodal(state, payload) {
      state.modal += ' is-active';
    },
    editmodal(state, payload) {
      state.modal += ' is-active';
      state.quesedit.title = payload.title;
      state.quesedit.question = payload.question;
      state.quesedit.id = payload._id;
    },
    settoken(state, payload) {
      state.login = true;
      state.token = payload;
    },
    setDataQuestions(state, payload) {
      state.dataQuestions = payload;
    },
    signout(state, payload) {
      console.log('ini sign our', payload);
      state.login = payload;
      state.token = '';
      state.dataQuestions = [];
    },
    newquescome(state, payload) {
      state.modal = 'modal';
      this.dispatch('getAllQuestions', payload);
    }
  },
  getters: {
    getQuestions(state, getters) {
      return state.dataQuestions;
    }
  },
  actions: {
    setnewvalue({ commit }, payload) {
      commit('setDataQuestions', payload);
    },
    reftoken({ commit }, payload) {
      console.log('masuk sini');
      commit('settoken', payload);
    },
    updateQuestion({ commit }, payload) {
      console.log(payload, 'ini actin');
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(`http://35.197.129.37:3050/answers/${payload.quesid}`, {
        answer: payload.comment
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(response => {
        this.dispatch('getAllQuestions', payload);
      }).catch(err => {
        console.log(err);
      });
    },
    getAllQuestions({ commit }, payload) {
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('http://35.197.129.37:3050/questions').then(({ data }) => {
        commit('setDataQuestions', data.data);
      }).catch(err => console.log(err));
    },
    upvoteAnswer({ commit }, payload) {
      console.log('masuk sini', payload);
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('http://35.197.129.37:3050/answers', {
        answerid: payload.id,
        vote: payload.status
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(response => {
        console.log('ini', response.data);
        if (response.data === 'invalid') {
          __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()('You have vote once', 'cant vote on this question anymore', 'warning');
        } else {
          this.dispatch('getAllQuestions', payload);
          __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()('Vote Success', 'Thank you :)', 'success');
        }
      }).catch(err => console.log(err));
    },
    qdownvote({ commit }, payload) {
      console.log('masuk sini');
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('http://35.197.129.37:3050/questions/', {
        questionid: payload.id,
        vote: payload.status
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(response => {
        console.log('kkk', response.data);
        if (response.data === 'invalid') {
          __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()('You have vote once', 'cant vote on this question anymore', 'warning');
        } else {
          this.dispatch('getAllQuestions', payload);
          __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()('Vote Success', 'Thank you :)', 'success');
        }
      }).catch(err => console.log(err));
    },
    signin({ commit }, payload) {
      commit('settoken', payload);
      this.dispatch('getAllQuestions', payload);
    },
    logout({ commit }, payload) {
      commit('signout', payload);
    },
    togglemodal({ commit }, payload) {
      console.log('ini togggle modal');
      commit('changemodal', payload);
    },
    modaledit({ commit }, payload) {
      console.log('ini togggle modal');
      commit('editmodal', payload);
    },
    closemodal({ commit }) {
      commit('modalclose');
    },
    newquestion({ commit }) {
      commit('newquescome');
    }
  }
}));

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questionsprofile_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modaledit_vue__ = __webpack_require__(170);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {};
  },
  computed: {
    setmyques() {
      // console.log(this.$store.state.dataQuestions)
      let myques = this.$store.state.dataQuestions.filter(el => el.userId._id === localStorage.getItem('userid'));
      return myques;
    }
  },
  components: {
    question: __WEBPACK_IMPORTED_MODULE_0__questionsprofile_vue__["a" /* default */],
    modalquestion: __WEBPACK_IMPORTED_MODULE_1__modaledit_vue__["a" /* default */]
  },
  created() {
    if (localStorage.getItem('token')) {
      console.log('masuk sini proil');
      this.$store.dispatch('getAllQuestions');
      // this.$router.push('/')
      // this.checklogin()
      this.$store.dispatch('reftoken', localStorage.getItem('token'));
      console.log('masuk sini bray');
      // this.myques = this.$store.state.dataQuestions
    } else {
        // this.$router.push('/login')
        // console.log('ini ke sini cuy')
      }
  }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answers_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answerfield_vue__ = __webpack_require__(36);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'question',
  props: ['question'],
  data() {
    return {

      show: false
    };
  },
  components: {
    answer: __WEBPACK_IMPORTED_MODULE_0__answers_vue__["a" /* default */],
    answerfield: __WEBPACK_IMPORTED_MODULE_1__answerfield_vue__["a" /* default */]
  },
  methods: {
    edit(id, title, question) {
      let payload = {
        _id: id,
        title: title,
        question: question
      };
      console.log('ini apa', payload);
      this.$store.dispatch('modaledit', payload);
    },
    destroy(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http.delete('/questions/' + id).then(response => {
            this.$store.dispatch('getAllQuestions');
          }).catch(err => console.log(err));
          this.$swal('Poof! Your imaginary file has been deleted!', {
            icon: 'success'
          });
        } else {
          this.$swal('Your imaginary file is safe');
        }
      });
    }
  }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'modalquestion',
  data() {
    return {
      modalinput: {
        title: 'input is-danger',
        status: true
      },
      newques: {
        title: '',
        content: ''
      },
      content: {
        field: 'textarea is-danger',
        status: true
      }
    };
  },
  computed: {
    modalstat() {
      return this.$store.state.modal;
    },
    editdata() {
      return this.$store.state.quesedit;
    }
  },
  methods: {
    closemodal() {
      this.$store.dispatch('closemodal');
    },
    checkfield(e) {
      if (e.target.value.length !== 0) {
        this.modalinput.title = 'input is-success';
        this.modalinput.status = false;
      } else {
        this.modalinput.title = 'input is-danger';
        this.modalinput.status = true;
      }
    },
    checkcontent(e) {
      if (e.target.value.length !== 0) {
        this.content.field = 'textarea is-success';
        this.content.status = false;
      } else {
        this.content.field = 'textarea is-danger';
        this.content.status = true;
      }
    },
    newquessub(id, question, title) {
      console.log('kaka', id, question, title);
      let payload = {
        _id: id,
        title: title,
        question: question
      };
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http.put('/questions/' + payload._id, {
            title: payload.title,
            question: payload.question
          }, {
            headers: {
              token: localStorage.getItem('token')
            }
          }).then(response => {
            this.$store.dispatch('closemodal');
            this.$store.dispatch('getAllQuestions');
          });
          this.$swal('Poof! Your imaginary file has been changed!', {
            icon: 'success'
          });
        } else {
          this.$swal('Your imaginary file is unchange!');
        }
      });
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buefy__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buefy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_buefy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buefy_lib_buefy_css__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buefy_lib_buefy_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_buefy_lib_buefy_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$http = __WEBPACK_IMPORTED_MODULE_6_axios___default.a.create({
  baseURL: 'http://35.197.129.37:3050'
});
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$swal = __WEBPACK_IMPORTED_MODULE_7_sweetalert___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_buefy___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_5__store_js__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cee899e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(137);
function injectStyle (ssrContext) {
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cee899e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbarvue_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3d56f5c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbarvue_vue__ = __webpack_require__(120);
function injectStyle (ssrContext) {
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbarvue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3d56f5c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navbarvue_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_HollowDotsSpinner_vue__ = __webpack_require__(11);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6a541738_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_HollowDotsSpinner_vue__ = __webpack_require__(62);
function injectStyle (ssrContext) {
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a541738"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_HollowDotsSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6a541738_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_HollowDotsSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hollow-dots-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.dotsStyles),function(ds,index){return _c('div',{key:index,staticClass:"dot",style:(ds)})}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_PixelSpinner_vue__ = __webpack_require__(12);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_eeed2fb8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_PixelSpinner_vue__ = __webpack_require__(65);
function injectStyle (ssrContext) {
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eeed2fb8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_PixelSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_eeed2fb8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_PixelSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pixel-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"pixel-spinner-inner",style:(_vm.spinnerInnerStyle)})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_FlowerSpinner_vue__ = __webpack_require__(13);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_7b1ad6b5_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_FlowerSpinner_vue__ = __webpack_require__(68);
function injectStyle (ssrContext) {
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b1ad6b5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_FlowerSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_7b1ad6b5_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_FlowerSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flower-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"dots-container",style:(_vm.dotsContainerStyle)},[_c('div',{staticClass:"bigger-dot",style:(_vm.biggerDotStyle)},[_c('div',{staticClass:"smaller-dot",style:(_vm.smallerDotStyle)})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_IntersectingCirclesSpinner_vue__ = __webpack_require__(14);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_72b5f8a9_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_IntersectingCirclesSpinner_vue__ = __webpack_require__(71);
function injectStyle (ssrContext) {
  __webpack_require__(70)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72b5f8a9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_IntersectingCirclesSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_72b5f8a9_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_IntersectingCirclesSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intersecting-circles-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinnerBlock",style:(_vm.spinnerBlockStyle)},_vm._l((_vm.circleStyles),function(cs,index){return _c('span',{key:index,staticClass:"circle",style:(cs)})}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_OrbitSpinner_vue__ = __webpack_require__(15);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_325a6afe_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_OrbitSpinner_vue__ = __webpack_require__(74);
function injectStyle (ssrContext) {
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-325a6afe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_OrbitSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_325a6afe_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_OrbitSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"orbit-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"orbit one",style:(_vm.orbitStyle)}),_vm._v(" "),_c('div',{staticClass:"orbit two",style:(_vm.orbitStyle)}),_vm._v(" "),_c('div',{staticClass:"orbit three",style:(_vm.orbitStyle)})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_FingerprintSpinner_vue__ = __webpack_require__(16);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_f115833a_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_FingerprintSpinner_vue__ = __webpack_require__(77);
function injectStyle (ssrContext) {
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f115833a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_FingerprintSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_f115833a_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_FingerprintSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fingerprint-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.ringsStyles),function(rs,index){return _c('div',{key:index,staticClass:"spinner-ring",style:(rs)})}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_TrinityRingsSpinner_vue__ = __webpack_require__(17);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_65918846_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_TrinityRingsSpinner_vue__ = __webpack_require__(80);
function injectStyle (ssrContext) {
  __webpack_require__(79)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65918846"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_TrinityRingsSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_65918846_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_TrinityRingsSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trinity-rings-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle circle1",style:(_vm.ring1Style)}),_vm._v(" "),_c('div',{staticClass:"circle circle2",style:(_vm.ring2Style)}),_vm._v(" "),_c('div',{staticClass:"circle circle3",style:(_vm.ring3Style)})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_FulfillingSquareSpinner_vue__ = __webpack_require__(18);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_96d5104c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_FulfillingSquareSpinner_vue__ = __webpack_require__(83);
function injectStyle (ssrContext) {
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-96d5104c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_FulfillingSquareSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_96d5104c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_FulfillingSquareSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulfilling-square-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinner-inner",style:(_vm.spinnerInnerStyle)})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CirclesToRhombusesSpinner_vue__ = __webpack_require__(19);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_91571d3e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_CirclesToRhombusesSpinner_vue__ = __webpack_require__(86);
function injectStyle (ssrContext) {
  __webpack_require__(85)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-91571d3e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CirclesToRhombusesSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_91571d3e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_CirclesToRhombusesSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"circles-to-rhombuses-spinner",style:(_vm.spinnertStyle)},_vm._l((_vm.circlesStyles),function(cs,index){return _c('div',{key:index,staticClass:"circle",style:(cs)})}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_SemipolarSpinner_vue__ = __webpack_require__(20);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0f568b7c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_SemipolarSpinner_vue__ = __webpack_require__(89);
function injectStyle (ssrContext) {
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0f568b7c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_SemipolarSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0f568b7c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_SemipolarSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"semipolar-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.ringsStyles),function(rs,index){return _c('div',{key:index,staticClass:"ring",style:(rs)})}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_BreedingRhombusSpinner_vue__ = __webpack_require__(21);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_7c827517_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_BreedingRhombusSpinner_vue__ = __webpack_require__(92);
function injectStyle (ssrContext) {
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c827517"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_BreedingRhombusSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_7c827517_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_BreedingRhombusSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breeding-rhombus-spinner",style:(_vm.spinnerStyle)},[_vm._l((_vm.rhombusesStyles),function(rs,index){return _c('div',{key:index,staticClass:"rhombus",class:("child-" + (index + 1)),style:(rs)})}),_vm._v(" "),_c('div',{staticClass:"rhombus big",style:(_vm.bigRhombusStyle)})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_SwappingSquaresSpinner_vue__ = __webpack_require__(22);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_b85b25de_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_SwappingSquaresSpinner_vue__ = __webpack_require__(95);
function injectStyle (ssrContext) {
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b85b25de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_SwappingSquaresSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_b85b25de_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_SwappingSquaresSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swapping-squares-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:("square-" + (index + 1)),style:(ss)})}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_ScalingSquaresSpinner_vue__ = __webpack_require__(23);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_43f67b6f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_ScalingSquaresSpinner_vue__ = __webpack_require__(98);
function injectStyle (ssrContext) {
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-43f67b6f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_ScalingSquaresSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_43f67b6f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_ScalingSquaresSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scaling-squares-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:("square-" + (index + 1)),style:(ss)})}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_FulfillingBouncingCircleSpinner_vue__ = __webpack_require__(24);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_44939cec_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_FulfillingBouncingCircleSpinner_vue__ = __webpack_require__(101);
function injectStyle (ssrContext) {
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44939cec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_FulfillingBouncingCircleSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_44939cec_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_FulfillingBouncingCircleSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulfilling-bouncing-circle-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle",style:(_vm.circleStyle)}),_vm._v(" "),_c('div',{staticClass:"orbit",style:(_vm.orbitStyle)})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_RadarSpinner_vue__ = __webpack_require__(25);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_7ca7cfc9_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_RadarSpinner_vue__ = __webpack_require__(104);
function injectStyle (ssrContext) {
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ca7cfc9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_RadarSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_7ca7cfc9_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_RadarSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"radar-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.circlesStyles),function(cs,index){return _c('div',{key:index,staticClass:"circle",style:(cs)},[_c('div',{staticClass:"circle-inner-container",style:(_vm.circleInnerContainerStyle)},[_c('div',{staticClass:"circle-inner",style:(_vm.circleInnerStyle)})])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_SelfBuildingSquareSpinner_vue__ = __webpack_require__(26);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_2543d096_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_SelfBuildingSquareSpinner_vue__ = __webpack_require__(107);
function injectStyle (ssrContext) {
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2543d096"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_SelfBuildingSquareSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_2543d096_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_SelfBuildingSquareSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"self-building-square-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:{'clear': index && index % 3 === 0},style:(ss)})}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_SpringSpinner_vue__ = __webpack_require__(27);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_10ac9285_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_SpringSpinner_vue__ = __webpack_require__(110);
function injectStyle (ssrContext) {
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-10ac9285"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_SpringSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_10ac9285_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_SpringSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spring-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spring-spinner-part top",style:(_vm.spinnerPartStyle)},[_c('div',{staticClass:"spring-spinner-rotator",style:(_vm.rotatorStyle)})]),_vm._v(" "),_c('div',{staticClass:"spring-spinner-part bottom",style:(_vm.spinnerPartStyle)},[_c('div',{staticClass:"spring-spinner-rotator",style:(_vm.rotatorStyle)})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_LoopingRhombusesSpinner_vue__ = __webpack_require__(28);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0458ce94_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_LoopingRhombusesSpinner_vue__ = __webpack_require__(113);
function injectStyle (ssrContext) {
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0458ce94"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_LoopingRhombusesSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0458ce94_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_LoopingRhombusesSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"looping-rhombuses-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.rhombusesStyles),function(rs,index){return _c('div',{staticClass:"rhombus",style:(rs),attrs:{"ikey":index}})}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_HalfCircleSpinner_vue__ = __webpack_require__(29);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_31ad46aa_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_HalfCircleSpinner_vue__ = __webpack_require__(116);
function injectStyle (ssrContext) {
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31ad46aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_HalfCircleSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_31ad46aa_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_HalfCircleSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"half-circle-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle circle-1",style:(_vm.circle1Style)}),_vm._v(" "),_c('div',{staticClass:"circle circle-2",style:(_vm.circle2Style)})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_AtomSpinner_vue__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_59f49670_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_AtomSpinner_vue__ = __webpack_require__(119);
function injectStyle (ssrContext) {
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59f49670"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_AtomSpinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_59f49670_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_AtomSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"atom-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinner-inner"},[_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_vm._v(" "),_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_vm._v(" "),_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_vm._v(" "),_c('div',{staticClass:"spinner-circle",style:(_vm.circleStyle)},[_vm._v("\n      ●\n    ")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar "},[_c('div',{staticClass:"navbar-brand"},[_c('a',{staticClass:"navbar-item",on:{"click":function($event){$event.preventDefault();_vm.home($event)}}},[_c('img',{attrs:{"src":__webpack_require__(121),"alt":"fox"}}),_vm._v(" \n    "),_vm._m(0),_vm._v(" \n       "),_c('atom-spinner',{attrs:{"animation-duration":1000,"size":80,"color":'#000000'}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.login),expression:"login"}],staticClass:"navbar-burger burger",attrs:{"data-target":"navbarExampleTransparentExample"}},[_c('span'),_vm._v(" "),_c('span'),_vm._v(" "),_c('span')])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.login),expression:"login"}],staticClass:"navbar-menu",attrs:{"id":"navbarExampleTransparentExample"}},[_c('div',{staticClass:"navbar-start"}),_vm._v(" "),_c('div',{staticClass:"navbar-end"},[_c('div',{staticClass:"navbar-item"},[_c('div',{staticClass:"field is-grouped"},[_c('div',{staticClass:"navbar-item has-dropdown is-hoverable"},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.login),expression:"login"}],staticClass:"navbar-link",attrs:{"href":"#"}},[_vm._v("\n          Menu: \n        ")]),_vm._v(" "),_c('div',{staticClass:"navbar-dropdown is-boxed"},[_c('div',{staticClass:"container"},[(this.$route.path === '/')?_c('a',{class:_vm.item,on:{"click":function($event){$event.preventDefault();_vm.modalquestion($event)}}},[_vm._v("\n            have questions?\n          ")]):_vm._e(),_vm._v(" "),(this.$route.path === '/profile')?_c('a',{class:_vm.item,on:{"click":function($event){$event.preventDefault();_vm.home($event)}}},[_vm._v("\n            Home\n          ")]):_vm._e(),_vm._v(" "),(this.$route.path === '/')?_c('a',{class:_vm.item,on:{"click":function($event){$event.preventDefault();_vm.goprofle($event)}}},[_vm._v("\n            Profile\n          ")]):_vm._e(),_vm._v(" "),_c('a',{class:_vm.item,attrs:{"href":"https://bulma.io/documentation/layout/container/"},on:{"click":function($event){$event.preventDefault();_vm.signout($event)}}},[_vm._v("\n            Logout\n          ")])])])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('b',[_vm._v("OverFlow")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/fox.a9e377a.png";

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_questions_vue__ = __webpack_require__(33);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7450d32f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_questions_vue__ = __webpack_require__(129);
function injectStyle (ssrContext) {
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_questions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7450d32f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_questions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('article',{staticClass:"message is-warning"},[_c('div',{staticClass:"message-header"},[_c('div',[_c('p',[_vm._v("Answer by : "+_vm._s(_vm.answer.userId.email))]),_vm._v(" "),_c('p',[_vm._v("point : "+_vm._s(_vm.answer.point)+"  ")])]),_vm._v(" "),_c('div',[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.answer.userId._id === _vm.userid),expression:"answer.userId._id === userid"}],staticClass:"button is-danger",on:{"click":function($event){_vm.destroyanswer(_vm.answer._id)}}},[_vm._v("delete")]),_vm._v(" "),_c('button',{staticClass:"button",attrs:{"aria-label":"delete"},on:{"click":_vm.downvote}},[_c('i',{staticClass:"fas fa-arrow-down"})]),_vm._v(" "),_c('button',{staticClass:"button",attrs:{"aria-label":"delete"},on:{"click":_vm.upvote}},[_c('i',{staticClass:"fas fa-arrow-up"})])])]),_vm._v(" "),_c('div',{staticClass:"message-body"},[_vm._v("\n    "+_vm._s(_vm.answer.answer)+"\n  ")])]),_vm._v(" "),_c('hr')])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cotainer"},[_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Answer this question")]),_vm._v(" "),_c('div',{staticClass:"control"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment),expression:"comment"}],staticClass:"textarea",attrs:{"placeholder":"Textarea"},domProps:{"value":(_vm.comment)},on:{"input":function($event){if($event.target.composing){ return; }_vm.comment=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"field is-grouped"},[_c('div',{staticClass:"control"},[_c('button',{staticClass:"button is-link",on:{"click":function($event){$event.preventDefault();_vm.submitcomment($event)}}},[_vm._v("Submit")])])]),_vm._v(" "),_c('hr')])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('article',{staticClass:"message is-dark"},[_c('div',{staticClass:"message-header"},[_c('div',[_c('p',[_vm._v("Question: "+_vm._s(_vm.question.title))]),_vm._v(" "),_c('p',[_vm._v("point : "+_vm._s(_vm.question.point)+" ")]),_vm._v(" "),_c('p',[_vm._v("by:"+_vm._s(_vm.question.userId.email))])]),_vm._v(" "),_c('div',[_c('button',{staticClass:"button",attrs:{"aria-label":"delete"},on:{"click":_vm.downvoteq}},[_c('i',{staticClass:"fas fa-arrow-down"})]),_vm._v(" "),_c('button',{staticClass:"button",attrs:{"aria-label":"delete"},on:{"click":_vm.upvoteq}},[_c('i',{staticClass:"fas fa-arrow-up"})])])]),_vm._v(" "),_c('div',{staticClass:"message-body"},[_vm._v("\n    "+_vm._s(_vm.question.question)+"\n  ")])]),_vm._v(" "),_c('div',_vm._l((_vm.question.answers),function(answer){return _c('answer',{key:answer._id,attrs:{"answer":answer}})})),_vm._v(" "),_c('hr'),_vm._v(" "),_c('answerfield',{attrs:{"quesid":_vm.question._id}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalquestion_vue__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f08f348_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modalquestion_vue__ = __webpack_require__(132);
function injectStyle (ssrContext) {
  __webpack_require__(131)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modalquestion_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f08f348_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modalquestion_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.modalstat},[_c('div',{staticClass:"modal-background"}),_vm._v(" "),_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"hero is-dark"},[_c('p',{staticClass:"title is-centered",attrs:{"id":"ques"}},[_vm._v("Ask Anything but be wise :)")]),_vm._v(" "),_c('div',{staticClass:"field is-horizontal"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"field-body"},[_c('div',{staticClass:"field"},[_c('div',{staticClass:"control"},[_c('p',{staticClass:"subtile"},[_vm._v("title: ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newques.title),expression:"newques.title"}],class:_vm.modalinput.title,attrs:{"name":"title","type":"text","placeholder":"e.g. Partnership opportunity"},domProps:{"value":(_vm.newques.title)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.newques, "title", $event.target.value)},_vm.checkfield]}})]),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.modalinput.status),expression:"modalinput.status"}],staticClass:"help is-danger"},[_vm._v("\n\t\t\t\t\tThis field is required\n\t\t\t\t")])])])]),_vm._v(" "),_c('div',{staticClass:"field is-horizontal"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"field-body"},[_c('div',{staticClass:"field"},[_c('div',{staticClass:"control"},[_c('p',{staticClass:"subtile"},[_vm._v("Content: ")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.newques.content),expression:"newques.content"}],class:_vm.content.field,attrs:{"name":"content","placeholder":"Explain how we can help you"},domProps:{"value":(_vm.newques.content)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.newques, "content", $event.target.value)},_vm.checkcontent]}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.content.status),expression:"content.status"}],staticClass:"help is-danger"},[_vm._v("\n\t\t\t\t\t\t\tThis field is required\n\t\t\t\t\t\t")])])])])]),_vm._v(" "),_c('div',{staticClass:"field is-horizontal",attrs:{"id":"buttons"}},[_c('button',{staticClass:"is-warning button",on:{"click":_vm.newquessub}},[_vm._v("submit question !")]),_vm._v("\n\t\t \n\t\t"),_c('button',{staticClass:" button is-danger",on:{"click":_vm.closemodal}},[_vm._v("cancel !")])])])]),_vm._v(" "),_c('button',{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{"click":_vm.closemodal}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-label is-normal"},[_c('label',{staticClass:"label"},[_vm._v("Subject")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-label is-normal"},[_c('label',{staticClass:"label"},[_vm._v("Question")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('body',[_c('modalquestion'),_vm._v(" "),_c('section',{staticClass:"section",staticStyle:{"background-color":"grey"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"columns",staticStyle:{"display":"flex"}},[_c('div',{staticClass:"columns"},_vm._l((_vm.dataQuestions),function(question){return _c('question',{key:question._id,attrs:{"question":question}})}))])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footervue_vue__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9c003e20_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_footervue_vue__ = __webpack_require__(136);
function injectStyle (ssrContext) {
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footervue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9c003e20_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_footervue_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"content has-text-centered"},[_c('p',[_c('strong',[_vm._v("HACKTIVFLOW")]),_vm._v(" by "),_c('a',{attrs:{"href":"http://instagram.com/abdillahh"}},[_vm._v("Hafizh SI Dorman")]),_vm._v(". The source code is licensed\n        "),_c('a',{attrs:{"href":"http://opensource.org/licenses/mit-license.php"}},[_vm._v("MIT")]),_vm._v(". The website content\n        is licensed "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[_vm._v("CC BY NC SA 4.0")]),_vm._v(".\n      ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('navbarvue'),_vm._v(" "),_c('router-view'),_vm._v(" "),_c('footervue')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pagelanding__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bodyvue_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_vue__ = __webpack_require__(165);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'body',
    component: __WEBPACK_IMPORTED_MODULE_3__components_bodyvue_vue__["a" /* default */]
  }, {
    path: '/login',
    name: 'login',
    component: __WEBPACK_IMPORTED_MODULE_2__components_pagelanding__["a" /* default */]
  }, {
    path: '/profile',
    name: 'profile',
    component: __WEBPACK_IMPORTED_MODULE_5__components_profile_vue__["a" /* default */]
  }]
});

router.beforeEach((to, from, next) => {
  console.log('aa', __WEBPACK_IMPORTED_MODULE_4__store_js__["a" /* default */].state.token);
  if (!localStorage.getItem('token')) {
    if (to.path !== '/login') {
      next('/login');
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next(false);
    } else {
      next();
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 139 */,
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagelanding_vue__ = __webpack_require__(40);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1320c1f4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pagelanding_vue__ = __webpack_require__(145);
function injectStyle (ssrContext) {
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagelanding_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1320c1f4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pagelanding_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 141 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(41);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b9916b4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(144);
function injectStyle (ssrContext) {
  __webpack_require__(143)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b9916b4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"hero is-fullheight is-medium is-dark is-bold"},[_c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column"},[_c('article',{staticClass:"card is-rounded"},[_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Email: ")]),_vm._v(" "),_c('div',{staticClass:"control has-icons-left has-icons-right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.login.email),expression:"login.email"}],class:_vm.form.email,attrs:{"name":"email","type":"email","placeholder":"Text input"},domProps:{"value":(_vm.login.email)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.loggedin($event)},"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.login, "email", $event.target.value)},_vm.checkemail]}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.form.statusEmail),expression:"!form.statusEmail"}],staticClass:"icon is-small is-right"},[_c('i',{staticClass:"fas fa-check"})])]),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.form.statusEmail),expression:"form.statusEmail"}],staticClass:"help is-danger"},[_vm._v("invalid email input")])]),_vm._v(" "),_c('label',{staticClass:"label"},[_vm._v("Password:")]),_vm._v(" "),_c('p',{staticClass:"control has-icon"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.login.password),expression:"login.password"}],staticClass:"input",attrs:{"name":"password","type":"password","placeholder":"Password"},domProps:{"value":(_vm.login.password)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.loggedin($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.login, "password", $event.target.value)}}}),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('br'),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',{staticClass:"control"}),_c('hr'),_vm._v(" "),_c('button',{staticClass:"button is-warning is-medium is-fullwidth",on:{"click":_vm.loggedin}},[_c('i',{staticClass:"fa fa-user"}),_vm._v("  \n                      Login\n                    ")]),_vm._v(" "),_c('p')])])]),_vm._v(" "),_c('div',{staticClass:"column is-4"},[_c('div',{staticClass:"Aligner"},[_c('div',{staticClass:"Aligner-item Aligner-item--top"}),_vm._v(" "),_c('div',{staticClass:"Aligner-item"},[_c('AtomSpinner',{attrs:{"animation-duration":1000,"size":100,"color":'#000000'}})],1),_vm._v(" "),_c('div',{staticClass:"Aligner-item Aligner-item--bottom"})])]),_vm._v(" "),_c('div',{staticClass:"column"},[_c('article',{staticClass:"card is-rounded"},[_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Email: ")]),_vm._v(" "),_c('div',{staticClass:"control has-icons-left has-icons-right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.signup.email),expression:"signup.email"}],class:_vm.formS.email,attrs:{"name":"email","type":"email","placeholder":"Text input"},domProps:{"value":(_vm.signup.email)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.signupe($event)},"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.signup, "email", $event.target.value)},_vm.checkemailS]}}),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.formS.statusEmail),expression:"!formS.statusEmail"}],staticClass:"icon is-small is-right"},[_c('i',{staticClass:"fas fa-check"})])]),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.formS.statusEmail),expression:"formS.statusEmail"}],staticClass:"help is-danger"},[_vm._v("invalid email input")])]),_vm._v(" "),_c('label',{staticClass:"label"},[_vm._v("Password:")]),_vm._v(" "),_c('p',{staticClass:"control has-icon"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.signup.password),expression:"signup.password"}],staticClass:"input",class:_vm.formS.password,attrs:{"name":"password","type":"password","placeholder":"Password"},domProps:{"value":(_vm.signup.password)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.signupe($event)},"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.signup, "password", $event.target.value)},_vm.checkPasswordS]}}),_vm._v(" "),_vm._m(4)]),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.formS.statusPassword),expression:"formS.statusPassword"}],staticClass:"help is-danger"},[_vm._v("Min 6 character")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',{staticClass:"control"}),_c('hr'),_vm._v(" "),_c('button',{staticClass:"button is-warning is-medium is-fullwidth",on:{"click":_vm.signupe}},[_c('i',{staticClass:"fa fa-user"}),_vm._v("  \n                      Sign Up\n                    ")]),_vm._v(" "),_c('p')])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"icon is-small is-left"},[_c('i',{staticClass:"fas fa-envelope"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"icon is-small is-left"},[_c('i',{staticClass:"fas fa-lock"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"control"},[_c('label',{staticClass:"checkbox"},[_c('input',{attrs:{"type":"checkbox"}}),_vm._v("\n                      Remember me\n                    ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"icon is-small is-left"},[_c('i',{staticClass:"fas fa-envelope"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"icon is-small is-left"},[_c('i',{staticClass:"fas fa-lock"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('login')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_profile_vue__ = __webpack_require__(50);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e5059a24_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_vue__ = __webpack_require__(173);
function injectStyle (ssrContext) {
  __webpack_require__(166)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_profile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e5059a24_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 166 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_questionsprofile_vue__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47da247c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_questionsprofile_vue__ = __webpack_require__(169);
function injectStyle (ssrContext) {
  __webpack_require__(168)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_questionsprofile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47da247c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_questionsprofile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('article',{staticClass:"message is-dark"},[_c('div',{staticClass:"message-header"},[_c('div',[_c('p',[_vm._v("Question: "+_vm._s(_vm.question.title))]),_vm._v(" "),_c('p',[_vm._v("point : "+_vm._s(_vm.question.point)+" ")]),_vm._v(" "),_c('p',[_vm._v("by:"+_vm._s(_vm.question.userId.email))])]),_vm._v(" "),_c('div',[_c('button',{staticClass:"button is-danger",attrs:{"aria-label":"delete"},on:{"click":function($event){_vm.destroy(_vm.question._id)}}},[_vm._v("delete")]),_vm._v(" "),_c('button',{staticClass:"button is-warning",attrs:{"aria-label":"delete"},on:{"click":function($event){_vm.edit(_vm.question._id, _vm.question.title, _vm.question.question)}}},[_vm._v("edit")])])]),_vm._v(" "),_c('div',{staticClass:"message-body"},[_vm._v("\n    "+_vm._s(_vm.question.question)+"\n  ")])]),_vm._v(" "),_c('div',_vm._l((_vm.question.answers),function(answer){return _c('answer',{key:answer._id,attrs:{"answer":answer}})}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modaledit_vue__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a93cf4c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modaledit_vue__ = __webpack_require__(172);
function injectStyle (ssrContext) {
  __webpack_require__(171)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modaledit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a93cf4c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modaledit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 171 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.modalstat},[_c('div',{staticClass:"modal-background"}),_vm._v(" "),_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"hero is-dark"},[_c('p',{staticClass:"title is-centered",attrs:{"id":"ques"}},[_vm._v("Wanna edit your ques?")]),_vm._v(" "),_c('div',{staticClass:"field is-horizontal"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"field-body"},[_c('div',{staticClass:"field"},[_c('div',{staticClass:"control"},[_c('p',{staticClass:"subtile"},[_vm._v("title: ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.editdata.title),expression:"editdata.title"}],class:_vm.modalinput.title,attrs:{"name":"title","type":"text","placeholder":"e.g. Partnership opportunity"},domProps:{"value":(_vm.editdata.title)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.editdata, "title", $event.target.value)},_vm.checkfield]}})])])])]),_vm._v(" "),_c('div',{staticClass:"field is-horizontal"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"field-body"},[_c('div',{staticClass:"field"},[_c('div',{staticClass:"control"},[_c('p',{staticClass:"subtile"},[_vm._v("Content: ")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.editdata.question),expression:"editdata.question"}],class:_vm.content.field,attrs:{"name":"content","placeholder":"Explain how we can help you"},domProps:{"value":(_vm.editdata.question)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.editdata, "question", $event.target.value)},_vm.checkcontent]}})])])])]),_vm._v(" "),_c('div',{staticClass:"field is-horizontal",attrs:{"id":"buttons"}},[_c('button',{staticClass:"is-warning button",on:{"click":function($event){_vm.newquessub(_vm.editdata.id, _vm.editdata.question, _vm.editdata.title)}}},[_vm._v("submit question !")]),_vm._v("\n\t\t \n\t\t"),_c('button',{staticClass:" button is-danger",on:{"click":_vm.closemodal}},[_vm._v("cancel !")])])])]),_vm._v(" "),_c('button',{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{"click":_vm.closemodal}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-label is-normal"},[_c('label',{staticClass:"label"},[_vm._v("Subject")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-label is-normal"},[_c('label',{staticClass:"label"},[_vm._v("Question")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('body',[_c('modalquestion'),_vm._v(" "),_c('section',{staticClass:"section",staticStyle:{"background-color":"grey"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"columns",staticStyle:{"display":"flex"}},[_c('div',{staticClass:"columns"},_vm._l((_vm.setmyques),function(question){return _c('question',{key:question._id,attrs:{"question":question}})}))])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 174 */,
/* 175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[53]);
//# sourceMappingURL=app.dcd834b20c9839ad42e5.js.map