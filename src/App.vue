<template>
  <v-app v-on:scroll.passive="onScroll">
    <v-app-bar inverted-scroll ref="appbar" color="var(--primaryColor)" dark short app>
      <div class="name-title font-weight-thin">Steve</div>
      <v-spacer></v-spacer>

      <v-btn text class="px-2">
        <div class="font-weight-light">Resume</div>
        <v-icon class="pl-1">mdi-file-document</v-icon>
      </v-btn>
      <v-btn text class="px-2">
        <div class="font-weight-light">Contact</div>
        <v-icon class="pl-1">mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    <header class="landing-page">
      <div align="center" class="lp-actions">
        <div class="welcome font-weight-light">Hello, I'm <font style="color:var(--primaryColor)">Steve</font>. Welcome to my site!</div>

        <v-btn
          v-on:click="explore()"
          class="explore-btn"
          v-scroll-to="'.intro-section'"
          large
          align="center"
        >
          Explore
        </v-btn>
      </div>
    </header>
    <section class="intro-section">
      <div class="container is-body">
        <transition name="slide-from-top">
          <div class="text-center text-h1 mb-8" v-show="show">About Me</div>
        </transition>
        <v-row>
          <transition name="slide-from-left">
            <v-card
              shadow
              max-width="374"
              style="background: var(--primaryColor); color:  var(--primaryTextColor)"
              v-show="show"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img class="" height="26vh" src="./assets/avatar.jpg"></v-img>
              <v-card-title>
                <div style="display: inline">Steve Lassinger</div>
                <div
                  style="display: inline"
                  class="font-weight-light font-italic text-subtitle-1"
                >
                  FULL-STACK WEB DEVELOPER
                </div>
              </v-card-title>

              <v-card-text class="pl-1">
                <v-row align="center" class="mx-0">
                  <v-icon class="ml-2 mr-2">mdi-briefcase</v-icon>
                  <div class="font-weight-bold mr-4">Company</div>
                  <div class="info-value">Amches, Inc.</div>
                </v-row>
                <v-row align="center" class="mx-0">
                  <v-icon class="ml-2 mr-2">mdi-map-marker</v-icon>
                  <div class="font-weight-bold mr-5">Location</div>
                  <div class="info-value">Annapolis, MD</div>
                </v-row>
                <v-row align="center" class="mx-0 mt-1">
                  <v-icon class="pl-1 ml-1 mr-2">mdi-school</v-icon>
                  <div class="font-weight-bold mr-3">Education</div>
                  <div class="info-value">
                    University of Maryland, College Park
                  </div>
                </v-row>
                <v-row align="center" class="mx-0 mt-1">
                  <v-icon class="pl-1 ml-1 mr-2"
                    >mdi-book-open-page-variant</v-icon
                  >
                  <div class="font-weight-bold mr-10">Major</div>
                  <div class="info-value">B.S. Computer Science</div>
                </v-row>
                <v-row align="center" class="mx-0 mt-1">
                  <v-icon class="pl-1 ml-1 mr-2">mdi-email</v-icon>
                  <div class="font-weight-bold mr-10">Email</div>
                  <div class="info-value">slassinger@yahoo.com</div>
                </v-row>
              </v-card-text>
            </v-card>
          </transition>

          <transition name="slide-from-right">
            <v-card
              class="ml-5"
              v-show="show"
              style="
                background: transparent;
                width: 47em;
                border: none;
                box-shadow: none;
              "
            >
              Isadfsfsd
              <br />
              adsfadsfdas
              <br />
              adsfdsfdasf
            </v-card>
          </transition>
        </v-row>
      </div>
    </section>
    <section class="skills-section">
      <div class="text-center text-h1 mt-4">Skills</div>
    </section>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import mainView from "./components/views/main";

export default {
  name: "App",

  data: () => ({
    show: false,
    scrolled: false,
    windowHeight: 0,
    styleobj: {
      fontSize: "30px",
      color: "red",
    },
  }),

  mounted() {
    setTimeout(function () {
      var top = document.getElementById("app").offsetTop;
      window.scrollTo(0, top);
    }, 200);

    window.addEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      this.windowHeight = window.scrollY;

      setTimeout(() => {
        // Any code to be executed when the window is scrolled
        if (!this.scrolled && window.scrollY > 500) {
          this.show = !this.show;
          this.scrolled = true;
        }
      }, 200);
    },

    explore() {
      if (!this.show) {
        this.show = !this.show;
        this.scrolled = true;
      }
    },
  },
};
</script>

<style scoped>

 
.name-title {
  caret-color: transparent;
  font-size: 2rem;
}

.landing-page {
  background-image: url("./assets/bg2.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
}

.lp-actions {
  width: 100%;
  transform: translatey(30%);
}

.welcome {
  color: var(--primaryTextColor);
  font-size: 3em;
  margin-bottom:3em;
}

.explore-btn {
  /* top: 2em; */
}

.intro-section {
  height: 100vh;
  background: #fff;
}
.skills-section {
  height: 100vh;
  background: #f5f5f5;
}

.is-body {
  margin-top: 5em;
}

.info-value {
  color:var(--primaryTextColor) !important;
}

/* FROM LEFT ------> */
.slide-from-left-leave-active,
.slide-from-left-enter-active {
  transition: 1s;
}
.slide-from-left-enter {
  transform: translate(-100%, 0);
}
.slide-from-left-leave-to {
  transform: translate(100%, 0);
}

/* FROM Right <------ */
.slide-from-right-leave-active,
.slide-from-right-enter-active {
  transition: 1s;
}
.slide-from-right-enter {
  transform: translate(100%, 0);
}
.slide-from-right-leave-to {
  transform: translate(-100%, 0);
}

/* FROM top  */
.slide-from-top-leave-active,
.slide-from-top-enter-active {
  transition: 1s;
}
.slide-from-top-enter {
  transform: translateY(-100%);
}
.slide-from-top-leave-to {
  transform: translateY(100%);
}
</style>
