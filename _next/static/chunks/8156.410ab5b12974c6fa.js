"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8156],{18156:function(t,e,s){s.r(e),s.d(e,{SRTParser:function(){return h},default:function(){return u}});var i=s(99803);let n=/,/g;class h extends i.V{parse(t,e){if(""===t)this.a&&(this.j.push(this.a),this.f.onCue?.(this.a),this.a=null),this.c=i.a.None;else if(this.c===i.a.Cue)this.a.text+=(this.a.text?"\n":"")+t;else if(t.includes("-->")){let s=this.o(t,e);s&&(this.a=new i.b(s[0],s[1],s[2].join(" ")),this.a.id=this.l,this.c=i.a.Cue)}this.l=t}o(t,e){return super.o(t.replace(n,"."),e)}}function u(){return new h}}}]);