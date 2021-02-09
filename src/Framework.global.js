(function (root, factory) {
    root.entcore = root.entcore || {};
    root.entcore.framework = factory();
})(window || global || this, function () {
   return require('../dist/package/Framework');
});
