<template>
  <v-app v-on:scroll.passive="onScroll">
    <v-app-bar
      inverted-scroll
      ref="appbar"
      color="var(--primaryColor)"
      dark
      short
      app
    >
      <div class="name-title font-weight-thin">Steve</div>
      <v-spacer></v-spacer>

      <v-btn text v-scroll-to="'.intro-section'" class="px-2">
        <div class="font-weight-light">About Me</div>
        <v-icon class="pl-1">mdi-account</v-icon>
      </v-btn>
      <v-btn text v-scroll-to="'.skills-section'" class="px-2">
        <div class="font-weight-light">Skills</div>
        <v-icon class="pl-1">mdi-code-tags</v-icon>
      </v-btn>
      <v-btn text class="px-2" v-scroll-to="'.contact-section'">
        <div class="font-weight-light">Contact</div>
        <v-icon class="pl-1">mdi-email</v-icon>
      </v-btn>
      <v-btn text class="px-2">
        <div class="font-weight-light">Resume</div>
        <v-icon class="pl-1">mdi-file-document</v-icon>
      </v-btn>
    </v-app-bar>
    <header class="landing-page">
      <div align="center" class="lp-actions">
        <div class="welcome font-weight-light">
          Hello, I'm <font style="color: var(--primaryColor)">Steve</font>.
          Welcome to my site!
        </div>
        <v-btn
          v-on:click="explore()"
          class="explore-btn elevation-24"
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
          <div class="text-center text-h2 mb-8" v-show="show">About Me</div>
        </transition>
        <v-row>
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
                class=""
                position="center center"
                height="28vh"
                src="./assets/avatar2.jpg"
              ></v-img>
              <v-card-title>
                <div style="display: inline">Steve Lassinger</div>
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
      <div class="container skills-body">
        <div class="text-center text-h2 mb-2">Skills</div>
        <v-row align="stretch">
          <v-col cols="4" class="offset-md-2">
            <v-card
              shadow
              max-width="374"
              style="background: white; color: black"
              v-show="show"
            >
              <v-card-title class="justify-center skills-card-header"
                >Languages & Frameworks
              </v-card-title>

              <v-card-text class="mt-3">
                <Skills :icon="icons.get('node')"></Skills>
                <Skills :icon="icons.get('js')"></Skills>
                <Skills :icon="icons.get('html')"></Skills>
                <Skills :icon="icons.get('css')"></Skills>
                <Skills :icon="icons.get('jquery')"></Skills>
                <Skills :icon="icons.get('bootstrap')"></Skills>
                <Skills :icon="icons.get('vue')"></Skills>
                <Skills :icon="icons.get('materialui')"></Skills>
                <Skills :icon="icons.get('java')"></Skills>
                <Skills :icon="icons.get('mysql')"></Skills>
                <Skills :icon="icons.get('c')"></Skills>
                <UglySVGs :value="'python'"></UglySVGs>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" class="">
            <v-card
              shadow
              max-width="374"
              style="background: white; color: black"
              v-show="show"
              height="100%"
            >
              <v-card-title class="justify-center skills-card-header"
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
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>
    <section class="contact-section">
      <div class="container contact-body">
        <div class="text-center text-h2 mb-5 contact-header">Contact Me</div>
        <div class="container1">
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
      <v-footer
        color="primary lighten-1"
        padless
        class="custom-footer"
        v-show="footerShow"
      >
        <v-row justify="center" no-gutters>
          <v-col
            class="footer-col lighten-2 py-4 text-center white--text"
            cols="12"
          >
            <v-btn
              v-for="icon in footerIcons"
              :key="icon"
              class="mx-4 white--text"
              icon
              :href="icon.link"
              target="_blank"
            >
              <v-icon size="24px"> {{ icon.value }} </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-footer>
    </section>
  </v-app>
</template>

<script>
import Skills from "./components/skill.vue";
import UglySVGs from "./components/uglySVGs.vue";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_LqMtDg5AaLF8MBBzUXPtA");

import Icons from "./icons.js";
export default {
  name: "App",
  components: {
    Skills: Skills,
    UglySVGs: UglySVGs,
  },
  data: () => ({
    show: false,
    footerShow: false,
    scrolled: false,
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
  }),

  mounted() {
    console.log("getIcons:%o", Icons.getIcons());
    this.icons = Icons.getIcons();
    setTimeout(function () {
      var top = document.getElementById("app").offsetTop;
      window.scrollTo(0, top);
    }, 200);

    window.addEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      this.windowHeight = window.scrollY;
      if (window.scrollY == 0) {
        this.footerShow = false;
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
  margin-bottom: 3em;
}

.explore-btn {
  /* top: 2em; */
}

.intro-section {
  height: 100vh;
  background: #fff;
  padding-top: 3em;
}

.skills-section {
  height: 100vh;
  background: #cacbd0;
  padding-top: 3em;
}

.contact-section {
  height: 100vh;
  background: #18202b;
  padding-top: 3em;
}

.contact-header {
  color: var(--primaryTextColor);
}

.skills-card-header {
  background: var(--primaryColor);
  color: var(--primaryTextColor);
}

.is-body,
.skills-body {
  margin-top: 2em;
}

.contact-body {
  margin-top: 1em;
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
  position: absolute;
  bottom: 0;
  width: 100%;
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
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
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
</style>
