<template>
  <v-app v-on:scroll.passive="onScroll">
    <div>
      <v-app-bar
        ref="appbar"
        color="var(--primaryColor)"
        dark
        max-height="56px"
        fixed
         id="appbar"
        style="border-bottom: 3px solid #18202b; z-index: 5;"
      >
        <v-btn class="mb-2" text color="var(--primaryColor)">
          <router-link to="/">Steve</router-link>
        </v-btn>
      </v-app-bar>
    </div>
    <div class="container mt-10">
      <header class="mdi-filled font-weight-light mt-10 text-h2 px-3">
        Resume
      </header>
      <div class="education mt-8">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto card" flat>
              <v-card-title
                class="font-weight-regular"
                style="font-size: 2.525rem !important"
              >
                Education
              </v-card-title>
              <div class="text--primary px-4">
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-card class="pt-2" flat>
                      <div class="text-h5 font-weight-regular">
                        University of Maryland, College Park
                      </div>
                      <div style="font-size: 1.2rem">
                        Bachelors of Science in Computer Science
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 text-h5 font-weight-regular" flat>
                      2015 - 2018
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    <v-card class="pt-2" flat>
                      <div class="text-h5 font-weight-regular">
                        Anne Arundel Community College
                      </div>
                      <div style="font-size: 1.2rem">General Studies</div>
                    </v-card>
                  </v-col>
                  <v-col cols="2">
                    <v-card class="pa-2 text-h5 font-weight-regular" flat>
                      2014 - 2015
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-divider class="mb-4"></v-divider>
      <div class="work-experience">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto card" flat>
              <v-card-title
                class="font-weight-regular"
                style="font-size: 2.525rem !important"
              >
                Experience
              </v-card-title>
              <div class="text--primary px-4">
                <v-row no-gutters>
                  <v-col cols="10" class="mb-3 pt-2">
                    <v-card class="" flat>
                      <div class="text-h5 font-weight-regular">Amches Inc.</div>
                      <div style="font-size: 1.2rem" class="font-weight-medium">
                        Software Engineer
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2" class="pt-2">
                    <div class="px-2 text-h5 font-weight-regular">
                      2020 - Present
                    </div>
                    <div
                      style="font-size: 1.2rem"
                      class="font-weight-medium px-2"
                    >
                      Tech Stack
                    </div>
                  </v-col>
                  <v-col cols="10">
                    <v-card class="" flat>
                      <div style="font-size: 1rem">
                        Worked onsite at the Laboratory for Telecommunication
                        Science to support research in mobile phone development.
                        Developed and maintained both front-end and back-end
                        capabilities for a property management system which
                        greatly improved property speeds while also providing
                        the user with a detailed view of their inventory.
                        Developed front-end to visualize cellular network
                        properties in real-time which provides operators with a
                        realistic, geographical view of a cellular layout based
                        on location. Developed front-end that enables analysts
                        with real-time interaction to perform dynamic analysis
                        on multiple phones simultaneously. Developed a tool to
                        automate the process of scanning and archiving
                        information about a phone’s battery.
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2">
                    <v-card class="px-2" style="font-size: 1rem" flat>
                      Vue.js,Docker, MongoDB, Gitlab
                    </v-card>
                  </v-col>
                </v-row>
                <v-divider class="mt-7"></v-divider>

                <v-row no-gutters class="mt-8">
                  <v-col cols="10" class="mb-3">
                    <v-card class="" flat>
                      <div class="text-h5 font-weight-regular">
                        Minerva Engineering
                      </div>
                      <div style="font-size: 1.2rem" class="font-weight-medium">
                        Software Developer
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2" class="pt-2">
                    <div class="px-2 text-h5 font-weight-regular">
                      2018 - 2020
                    </div>
                    <div
                      style="font-size: 1.2rem"
                      class="font-weight-medium px-2"
                    >
                      Tech Stack
                    </div>
                  </v-col>
                  <v-col cols="10">
                    <v-card class="" flat>
                      <div style="font-size: 1rem">
                        Worked onsite at the Laboratory for Telecommunication
                        Science to support research in mobile phone development.
                        Developed and maintained both front-end and back-end
                        capabilities for a property management system which
                        greatly improved property speeds while also providing
                        the user with a detailed view of their inventory.
                        Developed front-end to visualize cellular network
                        properties in real-time which provides operators with a
                        realistic, geographical view of a cellular layout based
                        on location. Developed front-end that enables analysts
                        with real-time interaction to perform dynamic analysis
                        on multiple phones simultaneously. Developed a tool to
                        automate the process of scanning and archiving
                        information about a phone’s battery.
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2">
                    <v-card class="px-2" style="font-size: 1rem" flat>
                      Nodejs, NGINX, Docker, MySQL, Gitlab, Snipe-IT
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="work-experience">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto card" flat>
              <v-card-title
                class="font-weight-regular"
                style="font-size: 2.525rem !important"
              >
                Experience
              </v-card-title>
              <div class="text--primary px-4">
                <v-row no-gutters>
                  <v-col cols="10" class="mb-3 pt-2">
                    <v-card class="" flat>
                      <div class="text-h5 font-weight-regular">Amches Inc.</div>
                      <div style="font-size: 1.2rem" class="font-weight-medium">
                        Software Engineer
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2" class="pt-2">
                    <div class="px-2 text-h5 font-weight-regular">
                      2020 - Present
                    </div>
                    <div
                      style="font-size: 1.2rem"
                      class="font-weight-medium px-2"
                    >
                      Tech Stack
                    </div>
                  </v-col>
                  <v-col cols="10">
                    <v-card class="" flat>
                      <div style="font-size: 1rem">
                        Worked onsite at the Laboratory for Telecommunication
                        Science to support research in mobile phone development.
                        Developed and maintained both front-end and back-end
                        capabilities for a property management system which
                        greatly improved property speeds while also providing
                        the user with a detailed view of their inventory.
                        Developed front-end to visualize cellular network
                        properties in real-time which provides operators with a
                        realistic, geographical view of a cellular layout based
                        on location. Developed front-end that enables analysts
                        with real-time interaction to perform dynamic analysis
                        on multiple phones simultaneously. Developed a tool to
                        automate the process of scanning and archiving
                        information about a phone’s battery.
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2">
                    <v-card class="px-2" style="font-size: 1rem" flat>
                      Vue.js,Docker, MongoDB, Gitlab
                    </v-card>
                  </v-col>
                </v-row>
                <v-divider class="mt-7"></v-divider>

                <v-row no-gutters class="mt-8">
                  <v-col cols="10" class="mb-3">
                    <v-card class="" flat>
                      <div class="text-h5 font-weight-regular">
                        Minerva Engineering
                      </div>
                      <div style="font-size: 1.2rem" class="font-weight-medium">
                        Software Developer
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2" class="pt-2">
                    <div class="px-2 text-h5 font-weight-regular">
                      2018 - 2020
                    </div>
                    <div
                      style="font-size: 1.2rem"
                      class="font-weight-medium px-2"
                    >
                      Tech Stack
                    </div>
                  </v-col>
                  <v-col cols="10">
                    <v-card class="" flat>
                      <div style="font-size: 1rem">
                        Worked onsite at the Laboratory for Telecommunication
                        Science to support research in mobile phone development.
                        Developed and maintained both front-end and back-end
                        capabilities for a property management system which
                        greatly improved property speeds while also providing
                        the user with a detailed view of their inventory.
                        Developed front-end to visualize cellular network
                        properties in real-time which provides operators with a
                        realistic, geographical view of a cellular layout based
                        on location. Developed front-end that enables analysts
                        with real-time interaction to perform dynamic analysis
                        on multiple phones simultaneously. Developed a tool to
                        automate the process of scanning and archiving
                        information about a phone’s battery.
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="2">
                    <v-card class="px-2" style="font-size: 1rem" flat>
                      Nodejs, NGINX, Docker, MySQL, Gitlab, Snipe-IT
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Resume",

  data: () => ({}),

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.name-title {
  caret-color: transparent;
  font-size: 2rem;
}

a {
  text-decoration: none;
  color: var(--primaryTextColor) !important;
  font-size: 2rem;
  font-weight: 100 !important;
  text-transform: none!important;
  letter-spacing: 0!important;
}

/* a:hover {
  background-color: #566bc7c2 !important;
} */

#appbar {
  position: fixed !important;
}
</style>
