FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(App, { activeUnit: 0 });
  },

  name: "defaultUnit"
});

FlowRouter.route('/:activeUnit', {
  action: function(params, queryParams) {
    ReactLayout.render(App, { activeUnit: Number(params.activeUnit) });
  },

  name: "directedUnit"
});
