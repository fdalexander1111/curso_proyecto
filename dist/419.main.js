"use strict";exports.id=419,exports.ids=[419],exports.modules={913:(t,e,c)=>{c.d(e,{v:()=>r});var n=c(142);c.n(n)().config();const o=`mongodb+srv://${process.env.DATABASE_MONGODB_USER}:${process.env.DATABASE_MONGODB_PASSWORD}@cluster0.zdu2a1t.mongodb.net/${process.env.DATABASE_MONGODB_NAME}?retryWrites=true&w=majority`,r={type:process.env.DATABASE,URIString:o,firebase:{type:"service_account",project_id:"ecommerce-cc127",private_key_id:"aa91eaeea097b49ee952db29aa6707589402db08",private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDOWBSWIHg60/EO\nNQiAPFQkxZvFHvgipXQYT7a4rweWOxc2kKBRGjXkWLGxmnRNatB4SSmbNkfQHmlP\nS6nwzOxrTC/w2gCP4WlSJTfGAEOyVKSEbrm5JM47C/e6xk88LWtO3brfF1hQ2c48\ni3JmrteIcMkjJESV2zpCu+eRH6sZHyT/oVofjePgPGZZukP153GRGL7WX+TdOYzx\nC1fJA2WXzb+ETYNDIx5qvaBgfRjAQWxgzV/f6+tc0gk/0/YikP6mibe8ASqQtH0+\njRGptQzjjjzxESodgLXBuNYnxdb7FOBlQCx06qhKcjwD3l5KwxSHlgO8VfXMsf3E\nAttANdb1AgMBAAECggEAO7ovK012v8B9dBlRvpy31nUEo8hVFuJBepAIWekADzJH\ng9nVLeSiWNh7hucoZwhWE5tJ2c2ad9l1rig+pp8Kh/xjnBneM8eRjt+LB1soPURW\n4qaSR88pitnp+TxRzx9ugkOYRd8iBzUkh03t7V8KsEnFTtC+sYnlkU+GtfEuu3RN\nMqFCOp/Aha6Co7RCpqfAJ4LIE7OBob0FSqKWs5SYEwn8kpA2XhFMUZpNRb9L1XCF\nIR9BZ+R/Q1Q5RZA067+7PYsVrshlUH5i5Ch/qaWymywZzA5NMNWTboc5gAKBBBwq\nOiV3rsrnZ5vgqEk0CTwx+sDv6X4REcbROYwAmh9L+QKBgQDxBVF/plI4PgEK/gIY\n1TruDYBuEqU2uoqDtS3/NytL1oU5lQ88nJ3dQIEPCSxDxhRRqNXCGWsTI2of5K3t\nzpT8lqNCAmXwZA1K/Hx56KvHOd+k2wPsHSZs+wRAvHR4D+zgmBzFytdC2q+OQ/e4\n40Tcgt0x9RqRnE6TbpaoCVz7PwKBgQDbKwy3vTGyF4sboczdcCdqSdLjqh8QodMi\ngEkuDuXzfPiHtV271lMFXrlG0jGHeqTMGgREeh955YcoaFOjmh9g6inx/Rt0kZmF\nTISm8otjLZl5jvBD3q+RrLtwUX0G14urLvspSR6s5izajP/ubumDvVIxzYVdAwUL\nfGgYdypkywKBgQDY29criqPZ1PgtQsTyQREn1eAjqgUbTBaLUP6U7re3Icp3OAYg\nnC5yP7Kfq7o3NMddfhLu9N3ht3CqR6CzIrfs2UEFiJDeDbfkK294ZQACXrE6bJGH\n5eaIEgcOlEIbMQEKR/NDiDHNBmUFFWST53EzE1Agvg9syn3sq4lEokAWEwKBgGts\n53fsMT6k0ZeCsELd5UPw2YCj80QYvb+Md9IulUHKwJrsJ/yY6eqY6mGvR32rfLla\nCztxTJpYCe6hbFWlhrnfLR4ivOFfOIug3OhjvDSpti9iA5yQuyfBLcK4/nprDlei\n2JL89x8yV0vsjsnU7XqYQoCMx1C22TMvEGrlhg8PAoGAG4zhNGHW8i69JWEf+4II\nwr/buQS+mtuvv0B5mgfhNfmBIqfq+rVf2o2UnzF3hv6iuXt20Zx+SBCSymM4uPKY\nopcg3FNtnlbnYwm2K8hYjcPlFm+IrYrvcML38fyvyrjHFRq/aTTn9/uES2Q5rLLh\nEcNwKN5/1wGy+TuvPZtdAz4=\n-----END PRIVATE KEY-----\n",client_email:"firebase-adminsdk-mtziu@ecommerce-cc127.iam.gserviceaccount.com",client_id:"108884333479537415914",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_x509_cert_url:"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mtziu%40ecommerce-cc127.iam.gserviceaccount.com"}}},907:(t,e,c)=>{c.d(e,{Z:()=>s});var n=c(509),o=c.n(n);const r=c(913).v.firebase;class s{constructor(t){this.connect(),this.db=o().firestore(),this.collection=this.db.collection(t)}async connect(){try{0===o().apps.length&&o().initializeApp({credential:o().credential.cert(r),databaseURL:"https://ecommerce-cc127.firebaseio.com"})}catch(t){throw new Error(`ERROR DE CONEXION + ${t}`)}}async save(t){try{const e=this.collection.doc();return await e.create(t)}catch(t){return!1}}async getById(t){try{console.log(t);const e=this.collection.doc(t);console.log(e);const c=await e.get();console.log(c);const n=c.data(),o=Object.assign({id:t},n);return console.log(o),o}catch(t){return!1}}async getAll(){try{const t=[];return(await this.collection.get()).forEach((e=>{t.push(Object.assign({id:e.id},e.data()))})),t}catch(t){return!1}}async deleteById(t){}async updateById(t,e){}}},419:(t,e,c)=>{c.r(e),c.d(e,{default:()=>o});var n=c(907);class o extends n.Z{constructor(){super("products")}}}};