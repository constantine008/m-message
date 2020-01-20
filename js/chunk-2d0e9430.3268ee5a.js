(window["webpackJsonpVueMMessage"]=window["webpackJsonpVueMMessage"]||[]).push([["chunk-2d0e9430"],{"8d7e":function(s,a,n){"use strict";n.r(a);var t=function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",[n("DocIndex")],1)},l=[],p=function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"v-docs"},[n("div",{staticClass:"markdown-body"},[n("h1",[s._v("Message")]),n("p",[n("DemoBlock",{attrs:{data:{raw:'<template>\n  <div>\n    <select class="m-input" v-model="type">\n      <option value="">None</option>\n      <option value="info">Info</option>\n      <option value="success">Success</option>\n      <option value="warning">Warning</option>\n      <option value="error">Error</option>\n      <option value="loading">Loading</option>\n    </select>\n    <select class="m-input" v-model="position">\n      <option value="">None</option>\n      <option value="top-left">top-left</option>\n      <option value="top-center">top-center</option>\n      <option value="top-right">top-right</option>\n      <option value="center">center</option>\n      <option value="bottom-left">bottom-left</option>\n      <option value="bottom-center">bottom-center</option>\n      <option value="bottom-right">bottom-right</option>\n    </select>\n    <input v-model="msg" class="m-input" />\n    <button @click="handleMessage" class="m-btn">Send</button>\n  </div>\n</template>\n<script>\nexport default {\n  data () {\n    return {\n      type: \'\',\n      position: \'\',\n      msg: \'This is a test message\'\n    }\n  },\n  methods: {\n    handleMessage () {\n      this.$message({\n        type: this.type,\n        message: this.msg,\n        showClose: true,\n        position: this.position\n      })\n    }\n  }\n}\n<\/script>'},params:{}},scopedSlots:s._u([{key:"code",fn:function(){return[n("pre",{staticClass:"language language-html",attrs:{"data-lang":"html"}},[n("code",{domProps:{innerHTML:s._s('<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-input"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"type"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">""</span>&gt;</span>None<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"info"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"success"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"warning"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"error"</span>&gt;</span>Error<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"loading"</span>&gt;</span>Loading<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-input"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"position"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">""</span>&gt;</span>None<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"top-left"</span>&gt;</span>top-left<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"top-center"</span>&gt;</span>top-center<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"top-right"</span>&gt;</span>top-right<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"center"</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bottom-left"</span>&gt;</span>bottom-left<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bottom-center"</span>&gt;</span>bottom-center<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bottom-right"</span>&gt;</span>bottom-right<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"msg"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-input"</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"handleMessage"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-btn"</span>&gt;</span>Send<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">type</span>: <span class="hljs-string">\'\'</span>,\n      <span class="hljs-attr">position</span>: <span class="hljs-string">\'\'</span>,\n      <span class="hljs-attr">msg</span>: <span class="hljs-string">\'This is a test message\'</span>\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleMessage () {\n      <span class="hljs-keyword">this</span>.$message({\n        <span class="hljs-attr">type</span>: <span class="hljs-keyword">this</span>.type,\n        <span class="hljs-attr">message</span>: <span class="hljs-keyword">this</span>.msg,\n        <span class="hljs-attr">showClose</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">position</span>: <span class="hljs-keyword">this</span>.position\n      })\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n')}})])]},proxy:!0}])},[n("BlockCodeDemod85bfae8597")],1)],1)])])},o=[],e=function(){return{data:function(){return{type:"",position:"",msg:"This is a test message"}},methods:{handleMessage:function(){this.$message({type:this.type,message:this.msg,showClose:!0,position:this.position})}}}}();e.template='<div>\n  <div>\n    <select class="m-input" v-model="type">\n      <option value="">None</option>\n      <option value="info">Info</option>\n      <option value="success">Success</option>\n      <option value="warning">Warning</option>\n      <option value="error">Error</option>\n      <option value="loading">Loading</option>\n    </select>\n    <select class="m-input" v-model="position">\n      <option value="">None</option>\n      <option value="top-left">top-left</option>\n      <option value="top-center">top-center</option>\n      <option value="top-right">top-right</option>\n      <option value="center">center</option>\n      <option value="bottom-left">bottom-left</option>\n      <option value="bottom-center">bottom-center</option>\n      <option value="bottom-right">bottom-right</option>\n    </select>\n    <input v-model="msg" class="m-input" />\n    <button @click="handleMessage" class="m-btn">Send</button>\n  </div>\n</div>';var c={components:{BlockCodeDemod85bfae8597:e},mixins:[]},i=c,h=n("2877"),g=Object(h["a"])(i,p,o,!1,null,null,null),r=g.exports,j={components:{DocIndex:r}},m=j,u=Object(h["a"])(m,t,l,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e9430.3268ee5a.js.map