{
    buildModules: [
      // Simple usage
      '@nuxtjs/vuetify',
  
      // With options
      ['@nuxtjs/vuetify', { /* module options */ }]
    ],
    {
      modules: [
          'vue-scrollto/nuxt',
  
          // Or if you have custom options...
          ['vue-scrollto/nuxt', { duration: 300 }],
      ]
  }
  }
  