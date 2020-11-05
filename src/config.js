export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: 'pk_test_FfVH8sG4Z9CptmWC0gQSSezC',
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-attachments-and-uploads',
    },
    apiGateway: {
        REGION: 'us-east-1',
        URL: 'https://99k3ma0et4.execute-api.us-east-1.amazonaws.com/prod',
    },
    cognito: {
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_cVBHby26k',
        APP_CLIENT_ID: '1e270etkcak35cg99r5rlufkef',
        IDENTITY_POOL_ID: 'us-east-1:56fbf642-5641-4dea-a755-4cb6aef385ef',
    },
};
