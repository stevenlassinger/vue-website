<template>
  <v-row no-gutters v-if="icon_data == 'jira'">
    <v-col cols="1" class="py-1">
      <svg
        v-if="icon_data == 'jira'"
        class="icon"
        reserveAspectRatio="xMidYMid"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 -30.632388516510233 255.324 285.95638851651023"
      >
        <linearGradient id="a">
          <stop offset=".18" stop-color="#0052cc" />
          <stop offset="1" stop-color="#2684ff" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="98.031%"
          x2="58.888%"
          xlink:href="#a"
          y1=".161%"
          y2="40.766%"
        />
        <linearGradient
          id="c"
          x1="100.665%"
          x2="55.402%"
          xlink:href="#a"
          y1=".455%"
          y2="44.727%"
        />
        <path
          d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z"
          fill="#2684ff"
        />
        <path
          d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z"
          fill="url(#b)"
        />
        <path
          d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667z"
          fill="url(#c)"
        />
      </svg>
    </v-col>
    <v-col
      cols="3"
      class="pl-3 pt-2 font-weight-bold font-italic"
      style="color: black; display: inline-flex"
    >
      Jira
    </v-col>
    <v-col cols="4" class="pt-2">
      <div class="rectangle novice ml-2 mr-1"></div>
      <div class="rectangle mr-1"></div>
      <div class="rectangle mr-1"></div>
    </v-col>
    <v-col cols="4" class="font-weight-bold pt-2"> novice </v-col>
  </v-row>

  <v-row no-gutters v-else-if="icon_data == 'docker'">
    <v-col cols="1" class="py-1">
      <svg class="icon" viewBox="0 0 128 128">
        <g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#3A4D54"
            d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6v-11.4h11.3v-11.2h22.5v-11.3h13.5v22.5z"
          ></path>
          <path
            fill="#00AADA"
            d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-72.2c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6000000000000001c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
          ></path>
          <path
            fill="#28B8EB"
            d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"
          ></path>
          <path
            fill="#028BB8"
            d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26h-85.1v-.1z"
          ></path>
          <path
            fill="#019BC6"
            d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1h-70.6z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#00ACD3"
            d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM39.6 41.5h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#23C2EE"
            d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#00ACD3"
            d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#23C2EE"
            d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM62.2 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#00ACD3"
            d="M62.2 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#23C2EE"
            d="M62.2 30.2h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#00ACD3"
            d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#D4EEF1"
            d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#3A4D54"
            d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"
          ></path>
          <path
            fill="#BFDBE0"
            d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8h3.1z"
          ></path>
          <path
            fill="#D4EEF1"
            d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"
          ></path>
        </g>
      </svg>
    </v-col>
    <v-col
      cols="3"
      class="pl-3 pt-2 font-weight-bold font-italic"
      style="color: black; display: inline-flex"
    >
      Docker
    </v-col>
    <v-col cols="4" class="pt-2">
      <div class="rectangle intermediate ml-2 mr-1"></div>
      <div class="rectangle intermediate mr-1"></div>
      <div class="rectangle mr-1"></div>
    </v-col>
    <v-col cols="4" class="font-weight-bold pt-2"> intermediate </v-col>
  </v-row>

  <v-row no-gutters v-else-if="icon_data == 'python'">
    <v-col cols="1" class="py-1">
      <svg viewBox="0 0 128 128">
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="70.252"
          y1="1237.476"
          x2="170.659"
          y2="1151.089"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        >
          <stop offset="0" stop-color="#5A9FD4"></stop>
          <stop offset="1" stop-color="#306998"></stop>
        </linearGradient>
        <path
          fill="url(#a)"
          d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
        ></path>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="209.474"
          y1="1098.811"
          x2="173.62"
          y2="1149.537"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        >
          <stop offset="0" stop-color="#FFD43B"></stop>
          <stop offset="1" stop-color="#FFE873"></stop>
        </linearGradient>
        <path
          fill="url(#b)"
          d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
        ></path>
        <radialGradient
          id="c"
          cx="1825.678"
          cy="444.45"
          r="26.743"
          gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop>
          <stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop>
        </radialGradient>
        <path
          opacity=".444"
          fill="url(#c)"
          enable-background="new"
          d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
        ></path>
      </svg>
    </v-col>
    <v-col
      cols="3"
      class="pl-3 pt-2 font-weight-bold font-italic"
      style="color: black; display: inline-flex"
    >
      Python
    </v-col>
    <v-col cols="4" class="pt-2">
      <div class="rectangle novice ml-2 mr-1"></div>
      <div class="rectangle mr-1"></div>
      <div class="rectangle mr-1"></div>
    </v-col>
    <v-col cols="4" class="font-weight-bold pt-2"> novice </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UglySVGs",

  data: () => ({
    icon_data: null,
  }),

  mounted() {
    this.icon_data = this.value;
  },

  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {},
  
};
</script>

<style scoped>
.icon {
  height: 2em;
}

.rectangle {
  height: 10px;
  width: 25px;
  display: inline-flex;
  border-radius: 3px;
  background-color: gray;
}

.proficient {
  background-color: rgb(105 230 105);
}

.intermediate {
  background-color: rgb(212 214 92);
}

.novice {
  background-color: rgb(224 138 67);
}
</style>
