const a27_0x26f50b = function () {
  let _0x563abe = true;
  return function (_0x77aadd, _0x5979a1) {
    const _0x115519 = _0x563abe ? function () {
      if (_0x5979a1) {
        const _0x591e33 = _0x5979a1.apply(_0x77aadd, arguments);
        _0x5979a1 = null;
        return _0x591e33;
      }
    } : function () {};
    _0x563abe = false;
    return _0x115519;
  };
}();
const a27_0x5ea24f = a27_0x26f50b(this, function () {
  return a27_0x5ea24f.toString().search("(((.+)+)+)+$").toString().constructor(a27_0x5ea24f).search("(((.+)+)+)+$");
});
a27_0x5ea24f();
const {
  zokou: a27_0x172a72
} = require("../framework/zokou");
const a27_0x2167e9 = require("../commandes/style");
const a27_0x2c0a6e = {
  "nomCom": "fancy2",
  "categorie": "Fun",
  "reaction": '☑️',
  "desc": "transform text into fancy style",
  "alias": ['fc']
};
a27_0x172a72(a27_0x2c0a6e, async (_0x5c2ff0, _0x35bdad, _0x93a172) => {
  const {
    arg: _0x558539,
    repondre: _0x29499d,
    prefixe: _0x3d4e27
  } = _0x93a172;
  const _0x2509c2 = _0x558539[0x0]?.["match"](/\d+/)?.["join"]('');
  const _0x33592c = _0x558539.slice(0x1).join(" ");
  try {
    if (_0x2509c2 === undefined || _0x33592c === undefined) {
      return await _0x29499d("\nExemple : " + _0x3d4e27 + "fancy 10 zokou-md\n" + String.fromCharCode(0x200e).repeat(0xfa1) + a27_0x2167e9.list("Zokou-md", a27_0x2167e9));
    }
    const _0x5a2021 = a27_0x2167e9[parseInt(_0x2509c2) - 0x1];
    return _0x5a2021 ? await _0x29499d(a27_0x2167e9.apply(_0x5a2021, _0x33592c)) : await _0x29499d("_Style introuvable :(_");
  } catch (_0x54713b) {
    console.error(_0x54713b);
    return await _0x29499d("_Une erreur s'est produite :(_");
  }
});
