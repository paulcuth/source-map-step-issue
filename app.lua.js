"use strict";
if (typeof global === 'undefined' && typeof window !== 'undefined') {
  window.global = window;
}let __star = global.starlight.runtime,
    $0 = __star.globalScope,
    $ = $0,
    __star_tmp;let __star_call = __star.call,
    __star_T = __star.T,
    __star_op_bool = __star.op.bool;let __star_op_unm = __star.op.unm,
    __star_op_not = __star.op.not,
    __star_op_len = __star.op.len,
    __star_op_concat = __star.op.concat,
    __star_op_add = __star.op.add,
    __star_op_sub = __star.op.sub,
    __star_op_mul = __star.op.mul,
    __star_op_div = __star.op.div,
    __star_op_mod = __star.op.mod,
    __star_op_eq = __star.op.eq,
    __star_op_neq = __star.op.neq,
    __star_op_lt = __star.op.lt,
    __star_op_gt = __star.op.gt,
    __star_op_lte = __star.op.lte,
    __star_op_gte = __star.op.gte,
    __star_op_pow = __star.op.pow;let __star_op_and = __star.op.and,
    __star_op_or = __star.op.or;let Tget, Tset, Tins, $get, $set, $setLocal, __star_shift;(() => {
  let call = Function.prototype.call,
      bind = call.bind.bind(call),
      Tproto = __star_T.prototype,
      $proto = __star.globalScope.constructor.prototype;Tget = bind(Tproto.get), Tset = bind(Tproto.set), Tins = bind(Tproto.insert);$get = bind($proto.get), $set = bind($proto.set), $setLocal = bind($proto.setLocal);__star_shift = bind(Array.prototype.shift);
})();
__star_call($get($, 'rawset'), Tget($get($, 'package'), 'preload'), 'src.app', (__star_tmp = function (...args) {
  let $1 = $0.extend(),
      $ = $1;$.setVarargs(args);
  __star_call($get($, 'print'), 'start');
  for ($1._forLoop1 = 1; $1._forLoop1 <= 5; $1._forLoop1 += 1) {
    let $2 = $1.extend(),
        $ = $2;
    $2.setLocal('i', $1._forLoop1);
    __star_call($get($, 'print'), 'Hello world', $get($, 'i'));
  }
  __star_call($get($, 'print'), 'end');
}, __star_tmp.toString = () => 'function: [preloaded: src.app]', __star_tmp));
__star_call($get($, 'require'), 'src.app');
//# sourceMappingURL=app.lua.js.map
