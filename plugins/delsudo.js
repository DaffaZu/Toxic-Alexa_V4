const _0x5b8271=_0x1dda;(function(_0x3ba31e,_0x183720){const _0x208b89=_0x1dda,_0x1ac9b5=_0x3ba31e();while(!![]){try{const _0x902ec6=-parseInt(_0x208b89(0x11f))/0x1*(-parseInt(_0x208b89(0x117))/0x2)+parseInt(_0x208b89(0x118))/0x3*(parseInt(_0x208b89(0x109))/0x4)+parseInt(_0x208b89(0x110))/0x5+parseInt(_0x208b89(0x116))/0x6+parseInt(_0x208b89(0x106))/0x7+parseInt(_0x208b89(0x112))/0x8*(parseInt(_0x208b89(0x108))/0x9)+-parseInt(_0x208b89(0x11a))/0xa;if(_0x902ec6===_0x183720)break;else _0x1ac9b5['push'](_0x1ac9b5['shift']());}catch(_0x2c7b5a){_0x1ac9b5['push'](_0x1ac9b5['shift']());}}}(_0x407b,0xba7f7));function _0x407b(){const _0x32273e=['529619SKnIPs','7946568GXHBKa','Tag\x20the\x20person\x20you\x20want\x20to\x20remove\x20as\x20an\x20Owner!','252243oIISjc','112UicFvP','reply','\x20has\x20been\x20removed\x20as\x20an\x20Owner.','owner','This\x20person\x20is\x20not\x20an\x20owner!','split','mentionedJid','5842305AZYLxD','quoted','128Bjtijk','splice','help','removeowner\x20@user','959802FHQYAT','4wyrMKy','106674zRnCii','tags','42030510shCBTh','command','chat','findIndex','parseMention'];_0x407b=function(){return _0x32273e;};return _0x407b();}function _0x1dda(_0x14632b,_0x36afc6){const _0x407bde=_0x407b();return _0x1dda=function(_0x1ddae0,_0x1927d5){_0x1ddae0=_0x1ddae0-0x106;let _0x658a4d=_0x407bde[_0x1ddae0];return _0x658a4d;},_0x1dda(_0x14632b,_0x36afc6);}let handler=async(_0x54b17d,{conn:_0xa2374b,text:_0xbbb7e8})=>{const _0x1fb226=_0x1dda;let _0x4a3acf;_0x54b17d['isGroup']?_0x4a3acf=_0x54b17d[_0x1fb226(0x10f)][0x0]?_0x54b17d['mentionedJid'][0x0]:_0x54b17d[_0x1fb226(0x111)]?_0x54b17d['quoted']['sender']:_0xbbb7e8:_0x4a3acf=_0x54b17d[_0x1fb226(0x11c)];if(!_0x4a3acf)throw _0x1fb226(0x107);const _0x3b2653=_0x4a3acf[_0x1fb226(0x10e)]('@')[0x0],_0x3d0160=global[_0x1fb226(0x10c)][_0x1fb226(0x11d)](_0x286b10=>_0x286b10[0x0]===_0x3b2653);if(_0x3d0160===-0x1)throw _0x1fb226(0x10d);const _0x4b6192=global['owner'][_0x1fb226(0x113)](_0x3d0160,0x1)[0x0],_0x29714f='@'+_0x4b6192[0x0]+_0x1fb226(0x10b);await _0xa2374b[_0x1fb226(0x10a)](_0x54b17d[_0x1fb226(0x11c)],_0x29714f,_0x54b17d,{'mentions':_0xa2374b[_0x1fb226(0x11e)](_0x29714f)});};handler[_0x5b8271(0x114)]=[_0x5b8271(0x115)],handler[_0x5b8271(0x119)]=[_0x5b8271(0x10c)],handler[_0x5b8271(0x11b)]=/^(remove|del|-)(owner|sudo)$/i,handler[_0x5b8271(0x10c)]=!![];export default handler;