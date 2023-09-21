"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7238],{91050:function(t,i,e){e.r(i),e.d(i,{AudioProvider:function(){return s}});var h=e(87299);class s extends h.H{$$PROVIDER_TYPE="AUDIO";get type(){return"audio"}setup(t){super.setup(t),"audio"===this.type&&t.delegate.U("provider-setup",{detail:this})}get audio(){return this.n}}},38122:function(t,i,e){e.d(i,{H:function(){return l},R:function(){return r}});var h=e(18648),s=e(11527),a=e(3009),n=e(93882);class r{constructor(t){this._e=t}Lh;M(){(0,s.o8)(this.Lh)&&this.Mh()}N(){(0,s.hj)(this.Lh)&&window.cancelAnimationFrame(this.Lh),this.Lh=void 0}Mh(){this.Lh=window.requestAnimationFrame(()=>{(0,s.o8)(this.Lh)||(this._e(),this.Mh())})}}let d=t=>(0,a.Kh)(t);class l{constructor(t){this.ta=t}ph;Ca=null;uh=null;nh={};oh=new Set;get instance(){return this.Ca}setup(t,i){this.ph=i;let e=(0,h.fj)(i.$store.streamType).includes("live"),r=(0,h.fj)(i.$store.streamType).includes("ll-");this.Ca=new t({lowLatencyMode:r,backBufferLength:r?4:e?8:void 0,renderTextTracksNatively:!1,...this.nh});let d=this.vh.bind(this);for(let i of Object.values(t.Events))this.Ca.on(i,d);for(let i of(this.Ca.on(t.Events.ERROR,this.Zb.bind(this)),this.oh))i(this.Ca);i.player.dispatchEvent(new a.yb("hls-instance",{detail:this.Ca})),this.Ca.attachMedia(this.ta),this.Ca.on(t.Events.AUDIO_TRACK_SWITCHED,this.wh.bind(this)),this.Ca.on(t.Events.LEVEL_SWITCHED,this.xh.bind(this)),this.Ca.on(t.Events.LEVEL_LOADED,this.yh.bind(this)),this.Ca.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.zh.bind(this)),this.Ca.on(t.Events.CUES_PARSED,this.Ah.bind(this)),i.qualities[n.F]=this.Bh.bind(this),(0,a.yl)(i.qualities,"change",this.Rf.bind(this)),(0,a.yl)(i.audioTracks,"change",this.Ch.bind(this)),this.uh=(0,s.cE)(this.Dh.bind(this))}Dh(){if(!this.ph.$store.live())return;let t=new r(this.Eh.bind(this));return t.M(),t.N.bind(t)}Eh(){this.ph.$store.liveSyncPosition.set(this.Ca?.liveSyncPosition??1/0)}vh(t,i){this.ph.player.dispatchEvent(new a.yb(d(t),{detail:i}))}zh(t,i){let e=new a.yb(t,{detail:i}),h=-1;for(let t=0;t<i.tracks.length;t++){let s=i.tracks[t],a=s.subtitleTrack??s.closedCaptions,r=new n.G({id:`hls-${s.kind}${t}`,src:a?.url,label:s.label,language:a?.lang,kind:s.kind});r[n.H]=2,r[n.J]=()=>{"showing"===r.mode?(this.Ca.subtitleTrack=t,h=t):h===t&&(this.Ca.subtitleTrack=-1,h=-1)},s.default&&r.setMode("showing",e),this.ph.textTracks.add(r,e)}}Ah(t,i){let e=this.ph.textTracks.getById(`hls-${i.track}`);if(!e)return;let h=new a.yb(t,{detail:i});for(let t of i.cues)t.positionAlign="auto",e.addCue(t,h)}wh(t,i){let e=this.ph.audioTracks[i.id];e&&this.ph.audioTracks[n.L](e,!0,new a.yb(t,{detail:i}))}xh(t,i){let e=this.ph.qualities[i.level];e&&this.ph.qualities[n.L](e,!0,new a.yb(t,{detail:i}))}yh(t,i){if(this.ph.$store.canPlay())return;let{type:e,live:h,totalduration:s}=i.details,r=new a.yb(t,{detail:i});this.ph.delegate.U("stream-type-change",{detail:h?"EVENT"===e&&Number.isFinite(s)?"live:dvr":"live":"on-demand",trigger:r}),this.ph.delegate.U("duration-change",{detail:s,trigger:r});let d=this.Ca.media;for(let t of(-1===this.Ca.currentLevel&&this.ph.qualities[n.K](!0,r),this.Ca.audioTracks))this.ph.audioTracks[n.N]({id:t.id+"",label:t.name,language:t.lang||"",kind:"main"},r);for(let t of this.Ca.levels)this.ph.qualities[n.N]({width:t.width,height:t.height,codec:t.codecSet,bitrate:t.bitrate},r);d.dispatchEvent(new a.yb("canplay",{trigger:r}))}Zb(t,i){if(i.fatal)switch(i.type){case"networkError":this.Ca?.startLoad();break;case"mediaError":this.Ca?.recoverMediaError();break;default:this.Ca?.destroy(),this.Ca=null}}Bh(){this.Ca&&(this.Ca.currentLevel=-1)}Rf(){let{qualities:t}=this.ph;this.Ca&&!t.auto&&(this.Ca[t.switch+"Level"]=t.selectedIndex,n.P&&(this.ta.currentTime=this.ta.currentTime))}Ch(){let{audioTracks:t}=this.ph;this.Ca&&this.Ca.audioTrack!==t.selectedIndex&&(this.Ca.audioTrack=t.selectedIndex)}Jg(){this.ph&&(this.ph.qualities[n.F]=void 0),this.Ca?.destroy(),this.Ca=null,this.uh?.(),this.uh=null}}},87299:function(t,i,e){e.d(i,{H:function(){return g}});var h=e(3009),s=e(11527),a=e(70951),n=e(18648),r=e(79982),d=e(38122),l=e(47129),u=e(93882);class o{constructor(t,i){this.m=t,this.ph=i,this.ai(),(0,s.cE)(this.bi.bind(this)),(0,n.uG)(this.qh.bind(this))}ih=(0,r._f)();Vh=!1;Yh=!1;Zh=!1;Wh=new d.R(this.ci.bind(this));get n(){return this.m.media}get jg(){return this.ph.delegate}qh(){this.Wh.N(),this.ih.empty()}ci(){let t=this.m.currentTime;this.ph.$store.currentTime()!==t&&this.Uh(t)}ai(){this.Th("loadstart",this.je),this.Th("abort",this._h),this.Th("emptied",this.di),this.Th("error",this.Zb)}ei(){this.Yh||(this.ih.add(this.Th("loadeddata",this.fi),this.Th("loadedmetadata",this.gi),this.Th("canplay",this.Ub),this.Th("canplaythrough",this.hi),this.Th("durationchange",this.ii),this.Th("play",this.ji),this.Th("progress",this.ki),this.Th("stalled",this.li),this.Th("suspend",this.mi)),this.Yh=!0)}ni(){this.Zh||(this.ih.add(this.Th("pause",this.oi),this.Th("playing",this.pi),this.Th("ratechange",this.qi),this.Th("seeked",this.ri),this.Th("seeking",this.si),this.Th("ended",this.ti),this.Th("volumechange",this.dc),this.Th("waiting",this.ui)),this.Zh=!0)}vi=void 0;xi=void 0;Th(t,i){return(0,h.yl)(this.n,t,i.bind(this))}yi(t){}Uh(t,i){this.jg.U("time-update",{detail:{currentTime:Math.min(t,this.ph.$store.seekableEnd()),played:this.n.played},trigger:i})}je(t){if(3===this.n.networkState){this._h(t);return}this.ei(),this.jg.U("load-start",{trigger:t})}_h(t){this.jg.U("abort",{trigger:t})}di(){this.jg.U("emptied",{trigger:event})}fi(t){this.jg.U("loaded-data",{trigger:t})}gi(t){this.$h(),this.ni(),this.jg.U("volume-change",{detail:{volume:this.n.volume,muted:this.n.muted}}),this.jg.U("loaded-metadata",{trigger:t}),u.I&&(0,a.i)(this.ph.$store.source())&&this.jg.af(this.Xh(),t)}Xh(){return{duration:this.n.duration,buffered:this.n.buffered,seekable:this.n.seekable}}$h(){let t=!Number.isFinite(this.n.duration);this.jg.U("stream-type-change",{detail:t?"live":"on-demand"})}ji(t){this.ph.$store.canPlay&&this.jg.U("play",{trigger:t})}oi(t){(1!==this.n.readyState||this.Vh)&&(this.Vh=!1,this.Wh.N(),this.jg.U("pause",{trigger:t}))}Ub(t){this.jg.af(this.Xh(),t)}hi(t){this.ph.$store.started()||this.jg.U("can-play-through",{trigger:t,detail:this.Xh()})}pi(t){this.Vh=!1,this.jg.U("playing",{trigger:t}),this.Wh.M()}li(t){this.jg.U("stalled",{trigger:t}),this.n.readyState<3&&(this.Vh=!0,this.jg.U("waiting",{trigger:t}))}ui(t){this.n.readyState<3&&(this.Vh=!0,this.jg.U("waiting",{trigger:t}))}ti(t){this.Wh.N(),this.Uh(this.n.duration,t),this.jg.U("end",{trigger:t}),this.ph.$store.loop()?this.wi():this.jg.U("ended",{trigger:t})}bi(){this.ph.$store.paused()&&(0,h.yl)(this.n,"timeupdate",this.Yb.bind(this))}Yb(t){this.Uh(this.n.currentTime,t)}ii(t){this.$h(),this.ph.$store.ended()&&this.Uh(this.n.duration,t),this.jg.U("duration-change",{detail:this.n.duration,trigger:t})}dc(t){this.jg.U("volume-change",{detail:{volume:this.n.volume,muted:this.n.muted},trigger:t})}ri(t){this.Uh(this.n.currentTime,t),this.jg.U("seeked",{detail:this.n.currentTime,trigger:t}),Math.trunc(this.n.currentTime)===Math.trunc(this.n.duration)&&(0,l.y)(this.n.duration)>(0,l.y)(this.n.currentTime)&&(this.Uh(this.n.duration,t),this.n.ended||this.ph.player.dispatchEvent(new h.yb("media-play-request",{trigger:t})))}si(t){this.jg.U("seeking",{detail:this.n.currentTime,trigger:t})}ki(t){this.jg.U("progress",{detail:{buffered:this.n.buffered,seekable:this.n.seekable},trigger:t})}wi(){let t=(0,s.kK)(this.n.controls);t&&(this.n.controls=!1),this.ph.player.dispatchEvent(new h.yb("media-loop-request"))}mi(t){this.jg.U("suspend",{trigger:t})}qi(t){this.jg.U("rate-change",{detail:this.n.playbackRate,trigger:t})}Zb(t){let i=this.n.error;i&&this.jg.U("error",{detail:{message:i.message,code:i.code,mediaError:i},trigger:t})}}class c{constructor(t,i){this.m=t,this.ph=i,this.Nh.onaddtrack=this.Ph.bind(this),this.Nh.onremovetrack=this.Qh.bind(this),this.Nh.onchange=this.Rh.bind(this),(0,h.yl)(this.ph.audioTracks,"change",this.Sh.bind(this))}get Nh(){return this.m.media.audioTracks}Ph(t){let i=t.track;if(""===i.label)return;let e={id:i.id+"",label:i.label,language:i.language,kind:i.kind,selected:!1};this.ph.audioTracks[u.N](e,t),i.enabled&&(e.selected=!0)}Qh(t){let i=this.ph.audioTracks.getById(t.track.id);i&&this.ph.audioTracks[u.W](i,t)}Rh(t){let i=this.Oh();if(!i)return;let e=this.ph.audioTracks.getById(i.id);e&&this.ph.audioTracks[u.L](e,!0,t)}Oh(){return Array.from(this.Nh).find(t=>t.enabled)}Sh(t){let{current:i}=t.detail;if(!i)return;let e=this.Nh.getTrackById(i.id);if(e){let t=this.Oh();t&&(t.enabled=!1),e.enabled=!0}}}class g{constructor(t){this.n=t}setup(t){new o(this,t),"audioTracks"in this.media&&new c(this,t)}get type(){return""}get media(){return this.n}get paused(){return this.n.paused}get muted(){return this.n.muted}set muted(t){this.n.muted=t}get volume(){return this.n.volume}set volume(t){this.n.volume=t}get currentTime(){return this.n.currentTime}set currentTime(t){this.n.currentTime=t}get playsinline(){return this.n.hasAttribute("playsinline")}set playsinline(t){(0,h.P$)(this.n,"playsinline",t)}get playbackRate(){return this.n.playbackRate}set playbackRate(t){this.n.playbackRate=t}async play(){return this.n.play()}async pause(){return this.n.pause()}async loadSource({src:t},i){this.n.preload=i,(0,a.b)(t)?this.n.srcObject=t:(this.n.srcObject=null,this.n.src=(0,s.HD)(t)?t:window.URL.createObjectURL(t)),this.n.load()}}}}]);