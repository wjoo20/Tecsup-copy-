var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        url: 'index.html',
      },
      {
        path: '/horario/',
        url: 'horario.html',
      },
      {
        path: '/carnet/',
        url: 'carnet.html',
      },
      {
        path: '/alertas/',
        url: 'alertas.html',
      },
      {
        path: '/historial/',
        url: 'historial.html',
      },
      {
        path: '/notas/',
        url: 'notas.html',
      },
      {
        path: '/noticias/',
        url: 'noticias.html',
      },
      {
        path: '/pagos/',
        url: 'pagos.html',
      },
    ],
    // ... other parameters
  });

  var mainView = app.views.create('.view-main');