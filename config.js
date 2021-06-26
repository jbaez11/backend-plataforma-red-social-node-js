module.exports={
    api:{
        port : process.env.API_PORT || 3000,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'notasecreta!',
    },
    mysql:{
        host : process.env.MYSQL_HOST || 'remotemysql.com',
        user : process.env.MYSQL_USER || 'oFGULJUYbu',
        password : process.env.MYSQL_PASSWORD || 'BUej0zeKVu',
        database : process.env.MYSQL_DATABASE || 'oFGULJUYbu',
    },
}