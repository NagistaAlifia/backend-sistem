const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const cors = require('cors');


const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: '0.0.0.0',
        routes: {
            "cors": {
                "origin": ["http://localhost:3000", "http://backend-sistem-906-v1-env.eba-zmizyni3.ap-southeast-2.elasticbeanstalk.com", "http://nagista-alifia-906-fe.s3-website-ap-southeast-2.amazonaws.com"],
                "headers": ["Accept", "Content-Type"],
                "additionalHeaders": ["X-Requested-With"]
            }
        }
    });
    
    
    server.route(routes);


    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();