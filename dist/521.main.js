"use strict";exports.id=521,exports.ids=[521],exports.modules={131:(t,e,r)=>{r.d(e,{R:()=>o});var n=r(185),c=r.n(n);const s=new(c().Schema)({nombre:{type:String,required:!0},descripcion:{type:String,required:!0},codigo:{type:String,required:!0},foto:{type:String,required:!0},precio:{type:String,required:!0},stock:{type:String,required:!0}},{timestamps:!0}),o=c().model("products",s)},846:(t,e,r)=>{r.a(t,(async(t,n)=>{try{r.d(e,{Z:()=>d});var c=r(185),s=r.n(c),o=r(971),a=t([o]);const i=(o=(a.then?(await a)():a)[0]).v.URIString;class d{constructor(t){this.model=t}async connect(){try{return await s().connect(i)}catch(t){throw new Error(`ERROR DE CONEXION + ${t}`)}}async save(t){try{console.log("entro en el container"),console.log(t);const e=new this.model(t);return await e.save()}catch(t){return!1}}async getById(t){}async getAll(){}async deleteById(t){}async updateById(t,e){}}n()}catch(t){n(t)}}))},521:(t,e,r)=>{r.a(t,(async(t,n)=>{try{r.r(e),r.d(e,{default:()=>a});var c=r(846),s=r(131),o=t([c]);c=(o.then?(await o)():o)[0];class a extends c.Z{constructor(){super(s.R)}}n()}catch(t){n(t)}}))}};