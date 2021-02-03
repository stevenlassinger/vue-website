<template>
  <v-app v-on:scroll.passive="onScroll">
    <header class="landing-page">
      <div align="center" class="lp-actions">
        <div class="welcome font-weight-light">
          Hello, I'm <font style="color: var(--primaryColor)">Steve</font>.
          Welcome to my site!
        </div>
        <v-btn
          v-on:click="explore()"
          class="explore-btn elevation-24"
          v-scroll-to="{ el: '.intro-section', offset: -50 }"
          large
          align="center"
          elevate-on-scroll="true"
        >
          Explore
        </v-btn>
      </div>
    </header>
    <v-app-bar
      inverted-scroll
      ref="appbar"
      color="var(--primaryColor)"
      dark
      short
      id="appbar"
      v-show="appbarShow"
      style="border-bottom: 3px solid #18202b; z-index: 5"
    >
      <div class="name-title font-weight-thin ml-4">Steve</div>
      <v-spacer></v-spacer>

      <v-btn
        text
        v-scroll-to="{ el: '.intro-section', offset: -50 }"
        class="px-2"
      >
        <div class="font-weight-light">About Me</div>
        <v-icon class="pl-1">mdi-account</v-icon>
      </v-btn>
      <v-btn
        text
        v-scroll-to="{ el: '.skills-section', offset: -50 }"
        class="px-2"
      >
        <div class="font-weight-light">Skills</div>
        <v-icon class="pl-1">mdi-code-tags</v-icon>
      </v-btn>
      <v-btn
        text
        class="px-2"
        v-scroll-to="{ el: '.contact-section', offset: -50 }"
      >
        <div class="font-weight-light">Contact</div>
        <v-icon class="pl-1">mdi-email</v-icon>
      </v-btn>
      <v-btn text class="px-2">
        <router-link to="/resume">Resume</router-link>
        <v-icon class="pl-1">mdi-file-document</v-icon>
      </v-btn>
    </v-app-bar>

    <section class="intro-section">
      <div class="container is-body">
        <transition name="slide-from-top">
          <div class="text-h3 mb-2 mt-5 font-weight-light" v-show="show">
            About Me
          </div>
        </transition>
        <v-divider class="mb-4"></v-divider>

        <v-row class="ml-0">
          <transition name="slide-from-left">
            <v-card
              shadow
              max-width="374"
              style="
                background: var(--primaryColor);
                color: var(--primaryTextColor);
              "
              v-show="show"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img
                style="border-bottom: 3px solid rgb(24, 32, 43)"
                position="center center"
                height="28vh"
                src="../assets/avatar2.jpg"
              ></v-img>
              <v-card-title>
                <div class="font-weight-regular" style="display: inline">
                  Steve Lassinger
                </div>
                <div
                  style="display: inline"
                  class="font-weight-light font-italic text-subtitle-1"
                >
                  FULL-STACK WEB DEVELOPER
                </div>
              </v-card-title>
              <v-divider
                class="mx-4"
                style="background: var(--primaryTextColor)"
              ></v-divider>

              <v-card-text class="pl-1">
                <v-row align="center" class="mx-0">
                  <v-icon class="ml-2 mr-2 mdi-filled">mdi-briefcase</v-icon>
                  <div class="font-weight-bold mr-4 mdi-filled">Company</div>
                  <div class="info-value">Amches, Inc.</div>
                </v-row>
                <v-row align="center" class="mx-0">
                  <v-icon class="ml-2 mr-2 mdi-filled">mdi-map-marker</v-icon>
                  <div class="font-weight-bold mr-5 mdi-filled">Location</div>
                  <div class="info-value">Annapolis, MD</div>
                </v-row>
                <v-row align="center" class="mx-0 mt-1">
                  <v-icon class="pl-1 ml-1 mr-2 mdi-filled">mdi-school</v-icon>
                  <div class="font-weight-bold mr-3 mdi-filled">Education</div>
                  <div class="info-value">
                    University of Maryland, College Park
                  </div>
                </v-row>
                <v-row align="center" class="mx-0 mt-1">
                  <v-icon class="pl-1 ml-1 mr-2 mdi-filled"
                    >mdi-book-open-page-variant</v-icon
                  >
                  <div class="font-weight-bold mr-10 mdi-filled">Major</div>
                  <div class="info-value">B.S. Computer Science</div>
                </v-row>
                <v-row align="center" class="mx-0 mt-1">
                  <v-icon class="pl-1 ml-1 mr-2 mdi-filled">mdi-email</v-icon>
                  <div class="font-weight-bold mr-10 mdi-filled">Email</div>
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
                width: 31em;
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
      <div class="container skills-body">
        <div class="text-h3 mb-2 font-weight-light">Skills</div>
        <v-divider class="mb-4"></v-divider>

        <!-- <v-row
          style="justify-content:center">
          <v-col cols="6" class="" >  -->
        <div>
          <v-card
            shadow
            max-width="374"
            style="
              background: white;
              margin-left: auto;
              margin-right: auto;
              display: inline-block;
              width: 23em;
              margin-right: 10px;
            "
            v-show="show"
          >
            <v-card-title
              class="justify-center skills-card-header py-2 font-weight-regular"
              >Languages
            </v-card-title>

            <v-card-text class="mt-1 pb-0">
              <Skills :icon="icons.get('node')"></Skills>
              <Skills :icon="icons.get('js')"></Skills>
              <Skills :icon="icons.get('html')"></Skills>
              <Skills :icon="icons.get('css')"></Skills>
              <Skills :icon="icons.get('java')"></Skills>
              <Skills :icon="icons.get('mysql')"></Skills>
              <UglySVGs :value="'python'"></UglySVGs>
              <br />
            </v-card-text>
          </v-card>
          <v-card
            shadow
            max-width="374"
            style="
              background: white;
              margin-left: auto;
              margin-right: auto;
              display: inline-block;
              width: 23em;
              margin-right: 10px;
            "
            v-show="show"
          >
            <v-card-title
              class="justify-center skills-card-header py-2 font-weight-regular"
              >Frameworks/Design
            </v-card-title>

            <v-card-text class="mt-1 pb-0">
              <Skills :icon="icons.get('bootstrap')"></Skills>
              <Skills :icon="icons.get('jquery')"></Skills>
              <Skills :icon="icons.get('vue')"></Skills>
              <Skills :icon="icons.get('materialui')"></Skills>
              <br />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </v-card-text>
          </v-card>
          <!-- </v-col> -->
          <!-- <v-col cols="2" class="" > </v-col> -->
          <!-- <v-col cols="6" class=""> -->
          <!-- <div class="spacer" style="display: inline-block; width: 2rem"></div> -->
          <v-card
            shadow
            max-width="374"
            style="
              background: white;
              margin-left: auto;
              margin-right: auto;
              display: inline-block;
              vertical-align: top;
              width: 23em;
              margin-right: 10px;
            "
            v-show="show"
            height="100%"
          >
            <v-card-title
              class="justify-center skills-card-header py-2 font-weight-regular"
              >Development
            </v-card-title>
            <v-card-text>
              <UglySVGs :value="'docker'"></UglySVGs>
              <Skills :icon="icons.get('git')"></Skills>
              <Skills :icon="icons.get('vscode')"></Skills>
              <Skills :icon="icons.get('linux')"></Skills>
              <UglySVGs :value="'jira'"></UglySVGs>
              <Skills :icon="icons.get('nginx')"></Skills>
              <Skills :icon="icons.get('webpack')"></Skills>
              <div style="padding-bottom: 11px"></div>
            </v-card-text>
          </v-card>
        </div>
        <!-- </v-col>
        </v-row> -->
      </div>
    </section>
    <section class="contact-section">
      <div class="container contact-body">
        <div class="text-h3 mb-2 contact-header font-weight-light">
          Contact Me
        </div>
        <v-divider class="mb-4"></v-divider>

        <div class="container1 elevation-3 mt-14">
          <form class="contact-form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"
            />
            <label>Email</label>
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"
            />
            <label>Message</label>
            <textarea
              name="message"
              v-model="message"
              cols="30"
              rows="5"
              placeholder="Message"
            >
            </textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
    <section>
      <v-footer padless class="custom-footer" v-show="footerShow">
        <v-row justify="center" no-gutters>
          <v-col
            class="footer-col lighten-2 py-4 text-center white--text"
            cols="12"
          >
            <v-btn
              v-for="icon in footerIcons"
              :key="icon.link"
              class="mx-4 white--text"
              icon
              :href="icon.link"
              target="_blank"
            >
              <v-icon size="3em"> {{ icon.value }} </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-footer>
    </section>
  </v-app>
</template>

<script>
import Skills from "../components/skill.vue";
import UglySVGs from "../components/uglySVGs.vue";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import Icons from "../icons.js";

init("user_LqMtDg5AaLF8MBBzUXPtA");

export default {
  name: "Home",
  components: {
    Skills: Skills,
    UglySVGs: UglySVGs,
  },
  data: () => ({
    show: false,
    footerShow: false,
    scrolled: false,
    appbarShow: true,
    windowHeight: 0,
    icons: Icons.getIcons(),
    name: "",
    email: "",
    message: "",
    footerIcons: [
      {
        value: "mdi-facebook",
        link: "https://www.facebook.com/steven.lassinger",
      },
      {
        value: "mdi-linkedin",
        link:
          "https://www.linkedin.com/public-profile/in/steven-lassinger-b81339157?challengeId=AQEIhWYjpnCbIAAAAXdWrjwEyZT27iYWOiYHGB0ICJqlrM4GidKbFVBgwZE-Jy7juQSXk1nVZL2S0JWjwg3-PPD8PZZ2-UMFDg&submissionId=4817940b-6436-5f16-4ea5-3bc4d589850c",
      },
      {
        value: "mdi-github",
        link: "https://github.com/stevenlassinger",
      },
    ],
    navPos: null,
    lastPos: 0,
  }),

  mounted() {
    this.navPos = document.getElementById("appbar").offsetTop;
    this.icons = Icons.getIcons();
    this.appbarShow = false;
    setTimeout(function () {
      var top = document.getElementById("app").offsetTop;
      window.scrollTo(0, top);
    }, 200);

    window.addEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      var pos = window.scrollY;
      // console.log("document.getElementById(appbar)", document.getElementById("appbar"))

      if (
        pos >= this.navPos + document.getElementById("appbar").offsetHeight &&
        this.lastPos < pos
      ) {
        if (!document.getElementById("appbar").classList.contains("fixed")) {
          document.getElementById("appbar").className += " " + "fixed";
          document.getElementById("appbar").classList.remove("relative");
        }
        document.getElementById("appbar").style.position = "fixed";
        this.appbarShow = true;
      }

      if (pos < this.navPos && this.lastPos > pos) {
        if (!document.getElementById("appbar").classList.contains("relative")) {
          document.getElementById("appbar").className += " " + "relative";
          document.getElementById("appbar").classList.remove("fixed");
        }
        document.getElementById("appbar").style.position = "relative";

        this.appbarShow = false;
        this.appbarShow = true;
      }

      this.lastPos = pos;

      // this.windowHeight = window.scrollY;
      if (window.scrollY == 0) {
        this.footerShow = false;
        this.appbarShow = false;
      }
      if (window.scrollY > 0) {
        // this.footerShow = false;
        this.appbarShow = true;
      }

      setTimeout(() => {
        // Any code to be executed when the window is scrolled
        if (window.scrollY > 100) {
          this.footerShow = true;
        }

        if (!this.scrolled && window.scrollY > 500) {
          this.show = !this.show;
          this.footerShow = true;
          this.scrolled = true;
        }
      }, 200);
    },

    explore() {
      this.appbarShow = true;
      this.$refs.appbar.$el.style.position = "fixed";

      if (!this.show) {
        this.show = !this.show;
        this.footerShow = true;
        this.scrolled = true;
      }
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_pxhvriq",
          "template_5i9syxv",
          e.target,
          "user_LqMtDg5AaLF8MBBzUXPtA",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
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
  background-image: url("../assets/bg2.jpg");
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
  margin-bottom: 3em;
}

.explore-btn {
}

.intro-section {
  background: #fff;
}

.skills-section {
  /* background: #cacbd0; */
}

.contact-section {
  /* background: #18202b; */
}

.contact-header {
  /* color: var(--primaryTextColor); */
}

.skills-card-header {
  background: var(--primaryColor);
  color: var(--primaryTextColor);
  border-bottom: 3px solid rgb(24, 32, 43);
}

.is-body,
.skills-body {
  margin-bottom: 1em;
}

.contact-body {
  margin-top: 1em;
  height: 67vh;
}

.info-value {
  color: var(--primaryTextColor) !important;
}
.icon {
  height: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.custom-footer {
  /* border-bottom: 3px solid #18202b */
  border-top: 3px solid rgb(24, 32, 43) !important;
}

.footer-col {
  background-color: var(--primaryColor);
}

.footer-links {
  color: var(--primaryTextColor) !important;
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

* {
  box-sizing: border-box;
}

.container1 {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  width: 50%;
}

.contact-section {
  /* background-image: url("./assets/contact-bg1.jpg");
  background-size: cover;
  background-position: center;
  display: flex; */
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: var(--primaryColor);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #454ea0;
}

@media (min-width: 1904px) {
  .container {
    /* margin-left: 35em;
    margin-right: 35em; */
    max-width: 85em;
  }
}
@media (max-width: 1263) {
  .container {
    /* margin-left: 35em;
    margin-right: 35em; */
    max-width: 85em;
  }
}

nav.fixed.desk {
  animation: popDown 0.5s;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: popDown;
}

@keyframes popDown {
  0% {
    transform: translateY(-100px);
  }
}

.fixed {
  /* position: fixed !important; */
}
.relative {
  /* position: fixed!important; */
}

a {
  text-decoration: none;
  color: var(--primaryTextColor)!important;
  font-size: 0.875rem;
  font-weight: 300 !important;
}
</style>
