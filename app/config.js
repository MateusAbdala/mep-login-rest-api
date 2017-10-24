export default {

    mongo: {
     	default: {
    		secret: 'mateusabdala',
    		port: 27017
    	},
    	development: {
				db: 'usercontroldev',
				host: 'localhost'
    	},
    	production: {
				db: 'usercontrol',
				host: 'localhost'
    	}
    }

};