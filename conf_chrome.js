
exports.config = {
  
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['spec.js']
};
