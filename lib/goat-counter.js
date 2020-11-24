const pageView = url => {
  window.goatcounter?.count({
    path: url,
  });
};

export { pageView };
