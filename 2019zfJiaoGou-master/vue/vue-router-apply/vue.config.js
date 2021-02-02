//基于node的，node不支持import语法
let path = require('path');
//默认环境变量  NODE_ENV  production(生产环境)  development(开发环境)
module.exports={
    //配置上线后的访问的域名
   publicPath:process.env.NODE_ENV === 'production'?'http://www.zhufeng.cn':'/',
    //资源路径,配置上线后想将文件放在一个文件夹里
    asstsDir:'asserts',
    //配置上线后打包的名称（不用再叫dist了）
    outputDir:'./my-dist',
    //是否使用template模板，只要开启模板就会多100k，一般用false
    runtimeCompiler:false,

    //把这个改为false。不然在最终打包的文件中会出现一些map文件，map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
    // 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
    productionSourceMap:false,//打包时不再使用 sourcemap
    //可以获取到webpack配置  在增加一些自己的逻辑
    chainWebpack:config=>{
       //配置目录别名，别名叫+（加号就是代表src,以后引用的时候，就可以写成 import HelloWorld from '+/HelloWorld.vue'）
       config.resolve.alias.set('+',path.resolve(__dirname,'src/components'))
        config.resolve.alias.set('_v',path.resolve(__dirname,'views'))
    },
    //这里面可以写扩展一些新的功能
    configureWebpack:{//webpack-merge(自己写的webpack配置和原有的合并)
       plugins:[],
        module:{}
    },
    devServer:{//开发 服务时使用
       //配置跨域的访问域名
       proxy:{
           '/api/getUser':{
               target:'http://localhost:3000',
               pathRewrite:{//代理前缀
                   '/api':''
               }
           }
       }
    },
    pluginOptions:{
       'style-resources-loader':{
           preProcessor:'less',
           patterns:[
               //自己配置路径
               path.resolve(__dirname,'src/assets/common.less')

           ]
       }
    }


}

//想要vue ui 安装插件
//运行vue add style-resources-loader 相当于==> npm install @vue-cli-style-resource-loader
//直接就会在vue.config.js里配置pluginOptions脚本