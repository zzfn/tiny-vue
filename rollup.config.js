import babel from 'rollup-plugin-babel'
import serve from "rollup-plugin-serve";
export default {
    input:"./src/index.js",
    output:{
        file:'dist/vue.js',
        name:"Vue",
        format:"umd",
        sourcemap:true
    },
    plugin:[
        babel({
            exclude:"node_modules/**"
        }),
        process.env.ENV==='development'?serve({
            open:true,
            openPage:'examples/index.html',
            port:3000,
            contentBase:['dist','examples']
        }):null
    ]
}
