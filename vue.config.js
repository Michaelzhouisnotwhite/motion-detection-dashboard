module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  devServer: {
    port: 8081, // 端口
    proxy:{
      '/':{
        target:'http://localhost:8000',
        changeOrigin:true,
        // pathRewrite:{
        //   '^/api':''
        // }
      }
    }
  },
  
};