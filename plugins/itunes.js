function _0x220c(_0x26bbff,_0x2fae7c){const _0x47197c=_0x4719();return _0x220c=function(_0x220ccf,_0x6ca281){_0x220ccf=_0x220ccf-0x15e;let _0x15a3a1=_0x47197c[_0x220ccf];return _0x15a3a1;},_0x220c(_0x26bbff,_0x2fae7c);}const _0x18039b=_0x220c;(function(_0x29d0af,_0x4c1fe0){const _0x55995c=_0x220c,_0x48945d=_0x29d0af();while(!![]){try{const _0x4dcb03=-parseInt(_0x55995c(0x170))/0x1+parseInt(_0x55995c(0x173))/0x2+-parseInt(_0x55995c(0x169))/0x3+parseInt(_0x55995c(0x175))/0x4*(parseInt(_0x55995c(0x16f))/0x5)+-parseInt(_0x55995c(0x164))/0x6*(parseInt(_0x55995c(0x16c))/0x7)+-parseInt(_0x55995c(0x17f))/0x8+parseInt(_0x55995c(0x176))/0x9;if(_0x4dcb03===_0x4c1fe0)break;else _0x48945d['push'](_0x48945d['shift']());}catch(_0x4861e3){_0x48945d['push'](_0x48945d['shift']());}}}(_0x4719,0x448d0));function _0x4719(){const _0x289769=['album','sendFile','114gzujBj','API\x20request\x20failed\x20with\x20status\x20','tools','length','genre','393936OHDlsO','json','url','38899kOnZpT','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Artist:*\x20','*Song\x20Information:*\x0a\x0a\x20\x20\x20\x20\x20•\x20*Name:*\x20','5CdQEMf','140767pyYXET','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Album:*\x20','name','884004iVzbOB','error','895948nrmBDu','871524rPDRWw','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Length:*\x20','command','\x0a\x0a\x20\x20\x20\x20\x20•\x20*URL:*\x20','help','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Price:*\x20','release_date','price','status','835032yqLcIY','itunes','JSON\x20response:','thumbnail.jpg','thumbnail','chat'];_0x4719=function(){return _0x289769;};return _0x4719();}import _0x5acd06 from'node-fetch';let itunesHandler=async(_0xd97d32,{conn:_0x145a29,text:_0x572f67})=>{const _0x105b03=_0x220c;if(!_0x572f67)throw'Please\x20provide\x20a\x20song\x20name';try{let _0x1c6597=await _0x5acd06('https://api.popcat.xyz/itunes?q='+encodeURIComponent(_0x572f67));if(!_0x1c6597['ok'])throw new Error(_0x105b03(0x165)+_0x1c6597[_0x105b03(0x17e)]);let _0x162ad6=await _0x1c6597[_0x105b03(0x16a)]();console['log'](_0x105b03(0x15e),_0x162ad6);let _0x524b42=_0x105b03(0x16e)+_0x162ad6[_0x105b03(0x172)]+_0x105b03(0x16d)+_0x162ad6['artist']+_0x105b03(0x171)+_0x162ad6[_0x105b03(0x162)]+'\x0a\x0a\x20\x20\x20\x20\x20•\x20*Release\x20Date:*\x20'+_0x162ad6[_0x105b03(0x17c)]+_0x105b03(0x17b)+_0x162ad6[_0x105b03(0x17d)]+_0x105b03(0x177)+_0x162ad6[_0x105b03(0x167)]+'\x0a\x0a\x20\x20\x20\x20\x20•\x20*Genre:*\x20'+_0x162ad6[_0x105b03(0x168)]+_0x105b03(0x179)+_0x162ad6[_0x105b03(0x16b)];_0x162ad6['thumbnail']?await _0x145a29[_0x105b03(0x163)](_0xd97d32[_0x105b03(0x161)],_0x162ad6[_0x105b03(0x160)],_0x105b03(0x15f),_0x524b42,_0xd97d32):_0xd97d32['reply'](_0x524b42);}catch(_0x4c92a6){console[_0x105b03(0x174)](_0x4c92a6);}};itunesHandler[_0x18039b(0x17a)]=[_0x18039b(0x180)],itunesHandler['tags']=[_0x18039b(0x166)],itunesHandler[_0x18039b(0x178)]=/^(itunes)$/i;export default itunesHandler;