
exports.config = {
  
  seleniumAddress: 'http://localhost:9515',
  capabilities: {
        browserName: 'electron',
        chromeOptions: {
            binary:".\\node_modules\\.bin\\electron",
            args: [" .\\"]
	}
  },
  specs: ['spec.js']
}
