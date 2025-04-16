var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      (function() {
        const v = document.createElement("link").relList;
        if (v && v.supports && v.supports("modulepreload")) return;
        for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) s(_);
        new MutationObserver((_) => {
          for (const E of _) if (E.type === "childList") for (const D of E.addedNodes) D.tagName === "LINK" && D.rel === "modulepreload" && s(D);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function y(_) {
          const E = {};
          return _.integrity && (E.integrity = _.integrity), _.referrerPolicy && (E.referrerPolicy = _.referrerPolicy), _.crossOrigin === "use-credentials" ? E.credentials = "include" : _.crossOrigin === "anonymous" ? E.credentials = "omit" : E.credentials = "same-origin", E;
        }
        function s(_) {
          if (_.ep) return;
          _.ep = true;
          const E = y(_);
          fetch(_.href, E);
        }
      })();
      var bf = {
        exports: {}
      }, Hu = {};
      var zd;
      function Dy() {
        if (zd) return Hu;
        zd = 1;
        var f = Symbol.for("react.transitional.element"), v = Symbol.for("react.fragment");
        function y(s, _, E) {
          var D = null;
          if (E !== void 0 && (D = "" + E), _.key !== void 0 && (D = "" + _.key), "key" in _) {
            E = {};
            for (var w in _) w !== "key" && (E[w] = _[w]);
          } else E = _;
          return _ = E.ref, {
            $$typeof: f,
            type: s,
            key: D,
            ref: _ !== void 0 ? _ : null,
            props: E
          };
        }
        return Hu.Fragment = v, Hu.jsx = y, Hu.jsxs = y, Hu;
      }
      var Ed;
      function Uy() {
        return Ed || (Ed = 1, bf.exports = Dy()), bf.exports;
      }
      var at = Uy(), pf = {
        exports: {}
      }, k = {};
      var xd;
      function Ny() {
        if (xd) return k;
        xd = 1;
        var f = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), D = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), K = Symbol.iterator;
        function J(r) {
          return r === null || typeof r != "object" ? null : (r = K && r[K] || r["@@iterator"], typeof r == "function" ? r : null);
        }
        var st = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function() {
          },
          enqueueReplaceState: function() {
          },
          enqueueSetState: function() {
          }
        }, P = Object.assign, ct = {};
        function gt(r, M, q) {
          this.props = r, this.context = M, this.refs = ct, this.updater = q || st;
        }
        gt.prototype.isReactComponent = {}, gt.prototype.setState = function(r, M) {
          if (typeof r != "object" && typeof r != "function" && r != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, r, M, "setState");
        }, gt.prototype.forceUpdate = function(r) {
          this.updater.enqueueForceUpdate(this, r, "forceUpdate");
        };
        function $t() {
        }
        $t.prototype = gt.prototype;
        function It(r, M, q) {
          this.props = r, this.context = M, this.refs = ct, this.updater = q || st;
        }
        var zt = It.prototype = new $t();
        zt.constructor = It, P(zt, gt.prototype), zt.isPureReactComponent = true;
        var wt = Array.isArray, W = {
          H: null,
          A: null,
          T: null,
          S: null,
          V: null
        }, Mt = Object.prototype.hasOwnProperty;
        function Ct(r, M, q, U, C, tt) {
          return q = tt.ref, {
            $$typeof: f,
            type: r,
            key: M,
            ref: q !== void 0 ? q : null,
            props: tt
          };
        }
        function X(r, M) {
          return Ct(r.type, M, void 0, void 0, void 0, r.props);
        }
        function Ut(r) {
          return typeof r == "object" && r !== null && r.$$typeof === f;
        }
        function Bl(r) {
          var M = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + r.replace(/[=:]/g, function(q) {
            return M[q];
          });
        }
        var yl = /\/+/g;
        function Ot(r, M) {
          return typeof r == "object" && r !== null && r.key != null ? Bl("" + r.key) : M.toString(36);
        }
        function Rl() {
        }
        function zl(r) {
          switch (r.status) {
            case "fulfilled":
              return r.value;
            case "rejected":
              throw r.reason;
            default:
              switch (typeof r.status == "string" ? r.then(Rl, Rl) : (r.status = "pending", r.then(function(M) {
                r.status === "pending" && (r.status = "fulfilled", r.value = M);
              }, function(M) {
                r.status === "pending" && (r.status = "rejected", r.reason = M);
              })), r.status) {
                case "fulfilled":
                  return r.value;
                case "rejected":
                  throw r.reason;
              }
          }
          throw r;
        }
        function Tt(r, M, q, U, C) {
          var tt = typeof r;
          (tt === "undefined" || tt === "boolean") && (r = null);
          var L = false;
          if (r === null) L = true;
          else switch (tt) {
            case "bigint":
            case "string":
            case "number":
              L = true;
              break;
            case "object":
              switch (r.$$typeof) {
                case f:
                case v:
                  L = true;
                  break;
                case N:
                  return L = r._init, Tt(L(r._payload), M, q, U, C);
              }
          }
          if (L) return C = C(r), L = U === "" ? "." + Ot(r, 0) : U, wt(C) ? (q = "", L != null && (q = L.replace(yl, "$&/") + "/"), Tt(C, M, q, "", function(ul) {
            return ul;
          })) : C != null && (Ut(C) && (C = X(C, q + (C.key == null || r && r.key === C.key ? "" : ("" + C.key).replace(yl, "$&/") + "/") + L)), M.push(C)), 1;
          L = 0;
          var nt = U === "" ? "." : U + ":";
          if (wt(r)) for (var bt = 0; bt < r.length; bt++) U = r[bt], tt = nt + Ot(U, bt), L += Tt(U, M, q, tt, C);
          else if (bt = J(r), typeof bt == "function") for (r = bt.call(r), bt = 0; !(U = r.next()).done; ) U = U.value, tt = nt + Ot(U, bt++), L += Tt(U, M, q, tt, C);
          else if (tt === "object") {
            if (typeof r.then == "function") return Tt(zl(r), M, q, U, C);
            throw M = String(r), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
          }
          return L;
        }
        function T(r, M, q) {
          if (r == null) return r;
          var U = [], C = 0;
          return Tt(r, U, "", "", function(tt) {
            return M.call(q, tt, C++);
          }), U;
        }
        function H(r) {
          if (r._status === -1) {
            var M = r._result;
            M = M(), M.then(function(q) {
              (r._status === 0 || r._status === -1) && (r._status = 1, r._result = q);
            }, function(q) {
              (r._status === 0 || r._status === -1) && (r._status = 2, r._result = q);
            }), r._status === -1 && (r._status = 0, r._result = M);
          }
          if (r._status === 1) return r._result.default;
          throw r._result;
        }
        var R = typeof reportError == "function" ? reportError : function(r) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var M = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
              error: r
            });
            if (!window.dispatchEvent(M)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", r);
            return;
          }
          console.error(r);
        };
        function ot() {
        }
        return k.Children = {
          map: T,
          forEach: function(r, M, q) {
            T(r, function() {
              M.apply(this, arguments);
            }, q);
          },
          count: function(r) {
            var M = 0;
            return T(r, function() {
              M++;
            }), M;
          },
          toArray: function(r) {
            return T(r, function(M) {
              return M;
            }) || [];
          },
          only: function(r) {
            if (!Ut(r)) throw Error("React.Children.only expected to receive a single React element child.");
            return r;
          }
        }, k.Component = gt, k.Fragment = y, k.Profiler = _, k.PureComponent = It, k.StrictMode = s, k.Suspense = O, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, k.__COMPILER_RUNTIME = {
          __proto__: null,
          c: function(r) {
            return W.H.useMemoCache(r);
          }
        }, k.cache = function(r) {
          return function() {
            return r.apply(null, arguments);
          };
        }, k.cloneElement = function(r, M, q) {
          if (r == null) throw Error("The argument must be a React element, but you passed " + r + ".");
          var U = P({}, r.props), C = r.key, tt = void 0;
          if (M != null) for (L in M.ref !== void 0 && (tt = void 0), M.key !== void 0 && (C = "" + M.key), M) !Mt.call(M, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && M.ref === void 0 || (U[L] = M[L]);
          var L = arguments.length - 2;
          if (L === 1) U.children = q;
          else if (1 < L) {
            for (var nt = Array(L), bt = 0; bt < L; bt++) nt[bt] = arguments[bt + 2];
            U.children = nt;
          }
          return Ct(r.type, C, void 0, void 0, tt, U);
        }, k.createContext = function(r) {
          return r = {
            $$typeof: D,
            _currentValue: r,
            _currentValue2: r,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }, r.Provider = r, r.Consumer = {
            $$typeof: E,
            _context: r
          }, r;
        }, k.createElement = function(r, M, q) {
          var U, C = {}, tt = null;
          if (M != null) for (U in M.key !== void 0 && (tt = "" + M.key), M) Mt.call(M, U) && U !== "key" && U !== "__self" && U !== "__source" && (C[U] = M[U]);
          var L = arguments.length - 2;
          if (L === 1) C.children = q;
          else if (1 < L) {
            for (var nt = Array(L), bt = 0; bt < L; bt++) nt[bt] = arguments[bt + 2];
            C.children = nt;
          }
          if (r && r.defaultProps) for (U in L = r.defaultProps, L) C[U] === void 0 && (C[U] = L[U]);
          return Ct(r, tt, void 0, void 0, null, C);
        }, k.createRef = function() {
          return {
            current: null
          };
        }, k.forwardRef = function(r) {
          return {
            $$typeof: w,
            render: r
          };
        }, k.isValidElement = Ut, k.lazy = function(r) {
          return {
            $$typeof: N,
            _payload: {
              _status: -1,
              _result: r
            },
            _init: H
          };
        }, k.memo = function(r, M) {
          return {
            $$typeof: S,
            type: r,
            compare: M === void 0 ? null : M
          };
        }, k.startTransition = function(r) {
          var M = W.T, q = {};
          W.T = q;
          try {
            var U = r(), C = W.S;
            C !== null && C(q, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(ot, R);
          } catch (tt) {
            R(tt);
          } finally {
            W.T = M;
          }
        }, k.unstable_useCacheRefresh = function() {
          return W.H.useCacheRefresh();
        }, k.use = function(r) {
          return W.H.use(r);
        }, k.useActionState = function(r, M, q) {
          return W.H.useActionState(r, M, q);
        }, k.useCallback = function(r, M) {
          return W.H.useCallback(r, M);
        }, k.useContext = function(r) {
          return W.H.useContext(r);
        }, k.useDebugValue = function() {
        }, k.useDeferredValue = function(r, M) {
          return W.H.useDeferredValue(r, M);
        }, k.useEffect = function(r, M, q) {
          var U = W.H;
          if (typeof q == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
          return U.useEffect(r, M);
        }, k.useId = function() {
          return W.H.useId();
        }, k.useImperativeHandle = function(r, M, q) {
          return W.H.useImperativeHandle(r, M, q);
        }, k.useInsertionEffect = function(r, M) {
          return W.H.useInsertionEffect(r, M);
        }, k.useLayoutEffect = function(r, M) {
          return W.H.useLayoutEffect(r, M);
        }, k.useMemo = function(r, M) {
          return W.H.useMemo(r, M);
        }, k.useOptimistic = function(r, M) {
          return W.H.useOptimistic(r, M);
        }, k.useReducer = function(r, M, q) {
          return W.H.useReducer(r, M, q);
        }, k.useRef = function(r) {
          return W.H.useRef(r);
        }, k.useState = function(r) {
          return W.H.useState(r);
        }, k.useSyncExternalStore = function(r, M, q) {
          return W.H.useSyncExternalStore(r, M, q);
        }, k.useTransition = function() {
          return W.H.useTransition();
        }, k.version = "19.1.0", k;
      }
      var Md;
      function Rf() {
        return Md || (Md = 1, pf.exports = Ny()), pf.exports;
      }
      var rt = Rf(), Sf = {
        exports: {}
      }, qu = {}, _f = {
        exports: {}
      }, Tf = {};
      var Od;
      function Hy() {
        return Od || (Od = 1, function(f) {
          function v(T, H) {
            var R = T.length;
            T.push(H);
            t: for (; 0 < R; ) {
              var ot = R - 1 >>> 1, r = T[ot];
              if (0 < _(r, H)) T[ot] = H, T[R] = r, R = ot;
              else break t;
            }
          }
          function y(T) {
            return T.length === 0 ? null : T[0];
          }
          function s(T) {
            if (T.length === 0) return null;
            var H = T[0], R = T.pop();
            if (R !== H) {
              T[0] = R;
              t: for (var ot = 0, r = T.length, M = r >>> 1; ot < M; ) {
                var q = 2 * (ot + 1) - 1, U = T[q], C = q + 1, tt = T[C];
                if (0 > _(U, R)) C < r && 0 > _(tt, U) ? (T[ot] = tt, T[C] = R, ot = C) : (T[ot] = U, T[q] = R, ot = q);
                else if (C < r && 0 > _(tt, R)) T[ot] = tt, T[C] = R, ot = C;
                else break t;
              }
            }
            return H;
          }
          function _(T, H) {
            var R = T.sortIndex - H.sortIndex;
            return R !== 0 ? R : T.id - H.id;
          }
          if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var E = performance;
            f.unstable_now = function() {
              return E.now();
            };
          } else {
            var D = Date, w = D.now();
            f.unstable_now = function() {
              return D.now() - w;
            };
          }
          var O = [], S = [], N = 1, K = null, J = 3, st = false, P = false, ct = false, gt = false, $t = typeof setTimeout == "function" ? setTimeout : null, It = typeof clearTimeout == "function" ? clearTimeout : null, zt = typeof setImmediate < "u" ? setImmediate : null;
          function wt(T) {
            for (var H = y(S); H !== null; ) {
              if (H.callback === null) s(S);
              else if (H.startTime <= T) s(S), H.sortIndex = H.expirationTime, v(O, H);
              else break;
              H = y(S);
            }
          }
          function W(T) {
            if (ct = false, wt(T), !P) if (y(O) !== null) P = true, Mt || (Mt = true, Ot());
            else {
              var H = y(S);
              H !== null && Tt(W, H.startTime - T);
            }
          }
          var Mt = false, Ct = -1, X = 5, Ut = -1;
          function Bl() {
            return gt ? true : !(f.unstable_now() - Ut < X);
          }
          function yl() {
            if (gt = false, Mt) {
              var T = f.unstable_now();
              Ut = T;
              var H = true;
              try {
                t: {
                  P = false, ct && (ct = false, It(Ct), Ct = -1), st = true;
                  var R = J;
                  try {
                    l: {
                      for (wt(T), K = y(O); K !== null && !(K.expirationTime > T && Bl()); ) {
                        var ot = K.callback;
                        if (typeof ot == "function") {
                          K.callback = null, J = K.priorityLevel;
                          var r = ot(K.expirationTime <= T);
                          if (T = f.unstable_now(), typeof r == "function") {
                            K.callback = r, wt(T), H = true;
                            break l;
                          }
                          K === y(O) && s(O), wt(T);
                        } else s(O);
                        K = y(O);
                      }
                      if (K !== null) H = true;
                      else {
                        var M = y(S);
                        M !== null && Tt(W, M.startTime - T), H = false;
                      }
                    }
                    break t;
                  } finally {
                    K = null, J = R, st = false;
                  }
                  H = void 0;
                }
              } finally {
                H ? Ot() : Mt = false;
              }
            }
          }
          var Ot;
          if (typeof zt == "function") Ot = function() {
            zt(yl);
          };
          else if (typeof MessageChannel < "u") {
            var Rl = new MessageChannel(), zl = Rl.port2;
            Rl.port1.onmessage = yl, Ot = function() {
              zl.postMessage(null);
            };
          } else Ot = function() {
            $t(yl, 0);
          };
          function Tt(T, H) {
            Ct = $t(function() {
              T(f.unstable_now());
            }, H);
          }
          f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(T) {
            T.callback = null;
          }, f.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < T ? Math.floor(1e3 / T) : 5;
          }, f.unstable_getCurrentPriorityLevel = function() {
            return J;
          }, f.unstable_next = function(T) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = J;
            }
            var R = J;
            J = H;
            try {
              return T();
            } finally {
              J = R;
            }
          }, f.unstable_requestPaint = function() {
            gt = true;
          }, f.unstable_runWithPriority = function(T, H) {
            switch (T) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                T = 3;
            }
            var R = J;
            J = T;
            try {
              return H();
            } finally {
              J = R;
            }
          }, f.unstable_scheduleCallback = function(T, H, R) {
            var ot = f.unstable_now();
            switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? ot + R : ot) : R = ot, T) {
              case 1:
                var r = -1;
                break;
              case 2:
                r = 250;
                break;
              case 5:
                r = 1073741823;
                break;
              case 4:
                r = 1e4;
                break;
              default:
                r = 5e3;
            }
            return r = R + r, T = {
              id: N++,
              callback: H,
              priorityLevel: T,
              startTime: R,
              expirationTime: r,
              sortIndex: -1
            }, R > ot ? (T.sortIndex = R, v(S, T), y(O) === null && T === y(S) && (ct ? (It(Ct), Ct = -1) : ct = true, Tt(W, R - ot))) : (T.sortIndex = r, v(O, T), P || st || (P = true, Mt || (Mt = true, Ot()))), T;
          }, f.unstable_shouldYield = Bl, f.unstable_wrapCallback = function(T) {
            var H = J;
            return function() {
              var R = J;
              J = H;
              try {
                return T.apply(this, arguments);
              } finally {
                J = R;
              }
            };
          };
        }(Tf)), Tf;
      }
      var Rd;
      function qy() {
        return Rd || (Rd = 1, _f.exports = Hy()), _f.exports;
      }
      var Af = {
        exports: {}
      }, Wt = {};
      var Dd;
      function Cy() {
        if (Dd) return Wt;
        Dd = 1;
        var f = Rf();
        function v(O) {
          var S = "https://react.dev/errors/" + O;
          if (1 < arguments.length) {
            S += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var N = 2; N < arguments.length; N++) S += "&args[]=" + encodeURIComponent(arguments[N]);
          }
          return "Minified React error #" + O + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function y() {
        }
        var s = {
          d: {
            f: y,
            r: function() {
              throw Error(v(522));
            },
            D: y,
            C: y,
            L: y,
            m: y,
            X: y,
            S: y,
            M: y
          },
          p: 0,
          findDOMNode: null
        }, _ = Symbol.for("react.portal");
        function E(O, S, N) {
          var K = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return {
            $$typeof: _,
            key: K == null ? null : "" + K,
            children: O,
            containerInfo: S,
            implementation: N
          };
        }
        var D = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function w(O, S) {
          if (O === "font") return "";
          if (typeof S == "string") return S === "use-credentials" ? S : "";
        }
        return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Wt.createPortal = function(O, S) {
          var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11) throw Error(v(299));
          return E(O, S, null, N);
        }, Wt.flushSync = function(O) {
          var S = D.T, N = s.p;
          try {
            if (D.T = null, s.p = 2, O) return O();
          } finally {
            D.T = S, s.p = N, s.d.f();
          }
        }, Wt.preconnect = function(O, S) {
          typeof O == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, s.d.C(O, S));
        }, Wt.prefetchDNS = function(O) {
          typeof O == "string" && s.d.D(O);
        }, Wt.preinit = function(O, S) {
          if (typeof O == "string" && S && typeof S.as == "string") {
            var N = S.as, K = w(N, S.crossOrigin), J = typeof S.integrity == "string" ? S.integrity : void 0, st = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
            N === "style" ? s.d.S(O, typeof S.precedence == "string" ? S.precedence : void 0, {
              crossOrigin: K,
              integrity: J,
              fetchPriority: st
            }) : N === "script" && s.d.X(O, {
              crossOrigin: K,
              integrity: J,
              fetchPriority: st,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0
            });
          }
        }, Wt.preinitModule = function(O, S) {
          if (typeof O == "string") if (typeof S == "object" && S !== null) {
            if (S.as == null || S.as === "script") {
              var N = w(S.as, S.crossOrigin);
              s.d.M(O, {
                crossOrigin: N,
                integrity: typeof S.integrity == "string" ? S.integrity : void 0,
                nonce: typeof S.nonce == "string" ? S.nonce : void 0
              });
            }
          } else S == null && s.d.M(O);
        }, Wt.preload = function(O, S) {
          if (typeof O == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
            var N = S.as, K = w(N, S.crossOrigin);
            s.d.L(O, N, {
              crossOrigin: K,
              integrity: typeof S.integrity == "string" ? S.integrity : void 0,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
              type: typeof S.type == "string" ? S.type : void 0,
              fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
              referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
              imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
              imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
              media: typeof S.media == "string" ? S.media : void 0
            });
          }
        }, Wt.preloadModule = function(O, S) {
          if (typeof O == "string") if (S) {
            var N = w(S.as, S.crossOrigin);
            s.d.m(O, {
              as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
              crossOrigin: N,
              integrity: typeof S.integrity == "string" ? S.integrity : void 0
            });
          } else s.d.m(O);
        }, Wt.requestFormReset = function(O) {
          s.d.r(O);
        }, Wt.unstable_batchedUpdates = function(O, S) {
          return O(S);
        }, Wt.useFormState = function(O, S, N) {
          return D.H.useFormState(O, S, N);
        }, Wt.useFormStatus = function() {
          return D.H.useHostTransitionStatus();
        }, Wt.version = "19.1.0", Wt;
      }
      var Ud;
      function By() {
        if (Ud) return Af.exports;
        Ud = 1;
        function f() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
          } catch (v) {
            console.error(v);
          }
        }
        return f(), Af.exports = Cy(), Af.exports;
      }
      var Nd;
      function Yy() {
        if (Nd) return qu;
        Nd = 1;
        var f = qy(), v = Rf(), y = By();
        function s(t) {
          var l = "https://react.dev/errors/" + t;
          if (1 < arguments.length) {
            l += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++) l += "&args[]=" + encodeURIComponent(arguments[e]);
          }
          return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function _(t) {
          return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
        }
        function E(t) {
          var l = t, e = t;
          if (t.alternate) for (; l.return; ) l = l.return;
          else {
            t = l;
            do
              l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
            while (t);
          }
          return l.tag === 3 ? e : null;
        }
        function D(t) {
          if (t.tag === 13) {
            var l = t.memoizedState;
            if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
          }
          return null;
        }
        function w(t) {
          if (E(t) !== t) throw Error(s(188));
        }
        function O(t) {
          var l = t.alternate;
          if (!l) {
            if (l = E(t), l === null) throw Error(s(188));
            return l !== t ? null : t;
          }
          for (var e = t, a = l; ; ) {
            var u = e.return;
            if (u === null) break;
            var n = u.alternate;
            if (n === null) {
              if (a = u.return, a !== null) {
                e = a;
                continue;
              }
              break;
            }
            if (u.child === n.child) {
              for (n = u.child; n; ) {
                if (n === e) return w(u), t;
                if (n === a) return w(u), l;
                n = n.sibling;
              }
              throw Error(s(188));
            }
            if (e.return !== a.return) e = u, a = n;
            else {
              for (var i = false, c = u.child; c; ) {
                if (c === e) {
                  i = true, e = u, a = n;
                  break;
                }
                if (c === a) {
                  i = true, a = u, e = n;
                  break;
                }
                c = c.sibling;
              }
              if (!i) {
                for (c = n.child; c; ) {
                  if (c === e) {
                    i = true, e = n, a = u;
                    break;
                  }
                  if (c === a) {
                    i = true, a = n, e = u;
                    break;
                  }
                  c = c.sibling;
                }
                if (!i) throw Error(s(189));
              }
            }
            if (e.alternate !== a) throw Error(s(190));
          }
          if (e.tag !== 3) throw Error(s(188));
          return e.stateNode.current === e ? t : l;
        }
        function S(t) {
          var l = t.tag;
          if (l === 5 || l === 26 || l === 27 || l === 6) return t;
          for (t = t.child; t !== null; ) {
            if (l = S(t), l !== null) return l;
            t = t.sibling;
          }
          return null;
        }
        var N = Object.assign, K = Symbol.for("react.element"), J = Symbol.for("react.transitional.element"), st = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), gt = Symbol.for("react.profiler"), $t = Symbol.for("react.provider"), It = Symbol.for("react.consumer"), zt = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), Ut = Symbol.for("react.activity"), Bl = Symbol.for("react.memo_cache_sentinel"), yl = Symbol.iterator;
        function Ot(t) {
          return t === null || typeof t != "object" ? null : (t = yl && t[yl] || t["@@iterator"], typeof t == "function" ? t : null);
        }
        var Rl = Symbol.for("react.client.reference");
        function zl(t) {
          if (t == null) return null;
          if (typeof t == "function") return t.$$typeof === Rl ? null : t.displayName || t.name || null;
          if (typeof t == "string") return t;
          switch (t) {
            case P:
              return "Fragment";
            case gt:
              return "Profiler";
            case ct:
              return "StrictMode";
            case W:
              return "Suspense";
            case Mt:
              return "SuspenseList";
            case Ut:
              return "Activity";
          }
          if (typeof t == "object") switch (t.$$typeof) {
            case st:
              return "Portal";
            case zt:
              return (t.displayName || "Context") + ".Provider";
            case It:
              return (t._context.displayName || "Context") + ".Consumer";
            case wt:
              var l = t.render;
              return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case Ct:
              return l = t.displayName || null, l !== null ? l : zl(t.type) || "Memo";
            case X:
              l = t._payload, t = t._init;
              try {
                return zl(t(l));
              } catch {
              }
          }
          return null;
        }
        var Tt = Array.isArray, T = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = {
          pending: false,
          data: null,
          method: null,
          action: null
        }, ot = [], r = -1;
        function M(t) {
          return {
            current: t
          };
        }
        function q(t) {
          0 > r || (t.current = ot[r], ot[r] = null, r--);
        }
        function U(t, l) {
          r++, ot[r] = t.current, t.current = l;
        }
        var C = M(null), tt = M(null), L = M(null), nt = M(null);
        function bt(t, l) {
          switch (U(L, l), U(tt, t), U(C, null), l.nodeType) {
            case 9:
            case 11:
              t = (t = l.documentElement) && (t = t.namespaceURI) ? Ir(t) : 0;
              break;
            default:
              if (t = l.tagName, l = l.namespaceURI) l = Ir(l), t = Pr(l, t);
              else switch (t) {
                case "svg":
                  t = 1;
                  break;
                case "math":
                  t = 2;
                  break;
                default:
                  t = 0;
              }
          }
          q(C), U(C, t);
        }
        function ul() {
          q(C), q(tt), q(L);
        }
        function Pl(t) {
          t.memoizedState !== null && U(nt, t);
          var l = C.current, e = Pr(l, t.type);
          l !== e && (U(tt, t), U(C, e));
        }
        function te(t) {
          tt.current === t && (q(C), q(tt)), nt.current === t && (q(nt), Ou._currentValue = R);
        }
        var le = Object.prototype.hasOwnProperty, ui = f.unstable_scheduleCallback, ni = f.unstable_cancelCallback, fm = f.unstable_shouldYield, sm = f.unstable_requestPaint, Dl = f.unstable_now, om = f.unstable_getCurrentPriorityLevel, Uf = f.unstable_ImmediatePriority, Nf = f.unstable_UserBlockingPriority, Yu = f.unstable_NormalPriority, rm = f.unstable_LowPriority, Hf = f.unstable_IdlePriority, dm = f.log, mm = f.unstable_setDisableYieldValue, Ba = null, nl = null;
        function ee(t) {
          if (typeof dm == "function" && mm(t), nl && typeof nl.setStrictMode == "function") try {
            nl.setStrictMode(Ba, t);
          } catch {
          }
        }
        var il = Math.clz32 ? Math.clz32 : hm, ym = Math.log, vm = Math.LN2;
        function hm(t) {
          return t >>>= 0, t === 0 ? 32 : 31 - (ym(t) / vm | 0) | 0;
        }
        var Gu = 256, wu = 4194304;
        function Oe(t) {
          var l = t & 42;
          if (l !== 0) return l;
          switch (t & -t) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return t & 62914560;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return t;
          }
        }
        function ju(t, l, e) {
          var a = t.pendingLanes;
          if (a === 0) return 0;
          var u = 0, n = t.suspendedLanes, i = t.pingedLanes;
          t = t.warmLanes;
          var c = a & 134217727;
          return c !== 0 ? (a = c & ~n, a !== 0 ? u = Oe(a) : (i &= c, i !== 0 ? u = Oe(i) : e || (e = c & ~t, e !== 0 && (u = Oe(e))))) : (c = a & ~n, c !== 0 ? u = Oe(c) : i !== 0 ? u = Oe(i) : e || (e = a & ~t, e !== 0 && (u = Oe(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
        }
        function Ya(t, l) {
          return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
        }
        function gm(t, l) {
          switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return l + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return l + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
              return -1;
            default:
              return -1;
          }
        }
        function qf() {
          var t = Gu;
          return Gu <<= 1, (Gu & 4194048) === 0 && (Gu = 256), t;
        }
        function Cf() {
          var t = wu;
          return wu <<= 1, (wu & 62914560) === 0 && (wu = 4194304), t;
        }
        function ii(t) {
          for (var l = [], e = 0; 31 > e; e++) l.push(t);
          return l;
        }
        function Ga(t, l) {
          t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
        }
        function bm(t, l, e, a, u, n) {
          var i = t.pendingLanes;
          t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
          var c = t.entanglements, o = t.expirationTimes, g = t.hiddenUpdates;
          for (e = i & ~e; 0 < e; ) {
            var A = 31 - il(e), x = 1 << A;
            c[A] = 0, o[A] = -1;
            var b = g[A];
            if (b !== null) for (g[A] = null, A = 0; A < b.length; A++) {
              var p = b[A];
              p !== null && (p.lane &= -536870913);
            }
            e &= ~x;
          }
          a !== 0 && Bf(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
        }
        function Bf(t, l, e) {
          t.pendingLanes |= l, t.suspendedLanes &= ~l;
          var a = 31 - il(l);
          t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194090;
        }
        function Yf(t, l) {
          var e = t.entangledLanes |= l;
          for (t = t.entanglements; e; ) {
            var a = 31 - il(e), u = 1 << a;
            u & l | t[a] & l && (t[a] |= l), e &= ~u;
          }
        }
        function ci(t) {
          switch (t) {
            case 2:
              t = 1;
              break;
            case 8:
              t = 4;
              break;
            case 32:
              t = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              t = 128;
              break;
            case 268435456:
              t = 134217728;
              break;
            default:
              t = 0;
          }
          return t;
        }
        function fi(t) {
          return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function Gf() {
          var t = H.p;
          return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : bd(t.type));
        }
        function pm(t, l) {
          var e = H.p;
          try {
            return H.p = t, l();
          } finally {
            H.p = e;
          }
        }
        var ae = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + ae, Pt = "__reactProps$" + ae, ke = "__reactContainer$" + ae, si = "__reactEvents$" + ae, Sm = "__reactListeners$" + ae, _m = "__reactHandles$" + ae, wf = "__reactResources$" + ae, wa = "__reactMarker$" + ae;
        function oi(t) {
          delete t[Jt], delete t[Pt], delete t[si], delete t[Sm], delete t[_m];
        }
        function We(t) {
          var l = t[Jt];
          if (l) return l;
          for (var e = t.parentNode; e; ) {
            if (l = e[ke] || e[Jt]) {
              if (e = l.alternate, l.child !== null || e !== null && e.child !== null) for (t = ad(t); t !== null; ) {
                if (e = t[Jt]) return e;
                t = ad(t);
              }
              return l;
            }
            t = e, e = t.parentNode;
          }
          return null;
        }
        function $e(t) {
          if (t = t[Jt] || t[ke]) {
            var l = t.tag;
            if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3) return t;
          }
          return null;
        }
        function ja(t) {
          var l = t.tag;
          if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
          throw Error(s(33));
        }
        function Fe(t) {
          var l = t[wf];
          return l || (l = t[wf] = {
            hoistableStyles: /* @__PURE__ */ new Map(),
            hoistableScripts: /* @__PURE__ */ new Map()
          }), l;
        }
        function jt(t) {
          t[wa] = true;
        }
        var jf = /* @__PURE__ */ new Set(), Xf = {};
        function Re(t, l) {
          Ie(t, l), Ie(t + "Capture", l);
        }
        function Ie(t, l) {
          for (Xf[t] = l, t = 0; t < l.length; t++) jf.add(l[t]);
        }
        var Tm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Qf = {}, Zf = {};
        function Am(t) {
          return le.call(Zf, t) ? true : le.call(Qf, t) ? false : Tm.test(t) ? Zf[t] = true : (Qf[t] = true, false);
        }
        function Xu(t, l, e) {
          if (Am(l)) if (e === null) t.removeAttribute(l);
          else {
            switch (typeof e) {
              case "undefined":
              case "function":
              case "symbol":
                t.removeAttribute(l);
                return;
              case "boolean":
                var a = l.toLowerCase().slice(0, 5);
                if (a !== "data-" && a !== "aria-") {
                  t.removeAttribute(l);
                  return;
                }
            }
            t.setAttribute(l, "" + e);
          }
        }
        function Qu(t, l, e) {
          if (e === null) t.removeAttribute(l);
          else {
            switch (typeof e) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                t.removeAttribute(l);
                return;
            }
            t.setAttribute(l, "" + e);
          }
        }
        function Yl(t, l, e, a) {
          if (a === null) t.removeAttribute(e);
          else {
            switch (typeof a) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                t.removeAttribute(e);
                return;
            }
            t.setAttributeNS(l, e, "" + a);
          }
        }
        var ri, Vf;
        function Pe(t) {
          if (ri === void 0) try {
            throw Error();
          } catch (e) {
            var l = e.stack.trim().match(/\n( *(at )?)/);
            ri = l && l[1] || "", Vf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
          return `
` + ri + t + Vf;
        }
        var di = false;
        function mi(t, l) {
          if (!t || di) return "";
          di = true;
          var e = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var a = {
              DetermineComponentFrameRoot: function() {
                try {
                  if (l) {
                    var x = function() {
                      throw Error();
                    };
                    if (Object.defineProperty(x.prototype, "props", {
                      set: function() {
                        throw Error();
                      }
                    }), typeof Reflect == "object" && Reflect.construct) {
                      try {
                        Reflect.construct(x, []);
                      } catch (p) {
                        var b = p;
                      }
                      Reflect.construct(t, [], x);
                    } else {
                      try {
                        x.call();
                      } catch (p) {
                        b = p;
                      }
                      t.call(x.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (p) {
                      b = p;
                    }
                    (x = t()) && typeof x.catch == "function" && x.catch(function() {
                    });
                  }
                } catch (p) {
                  if (p && b && typeof p.stack == "string") return [
                    p.stack,
                    b.stack
                  ];
                }
                return [
                  null,
                  null
                ];
              }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot"
            });
            var n = a.DetermineComponentFrameRoot(), i = n[0], c = n[1];
            if (i && c) {
              var o = i.split(`
`), g = c.split(`
`);
              for (u = a = 0; a < o.length && !o[a].includes("DetermineComponentFrameRoot"); ) a++;
              for (; u < g.length && !g[u].includes("DetermineComponentFrameRoot"); ) u++;
              if (a === o.length || u === g.length) for (a = o.length - 1, u = g.length - 1; 1 <= a && 0 <= u && o[a] !== g[u]; ) u--;
              for (; 1 <= a && 0 <= u; a--, u--) if (o[a] !== g[u]) {
                if (a !== 1 || u !== 1) do
                  if (a--, u--, 0 > u || o[a] !== g[u]) {
                    var A = `
` + o[a].replace(" at new ", " at ");
                    return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A;
                  }
                while (1 <= a && 0 <= u);
                break;
              }
            }
          } finally {
            di = false, Error.prepareStackTrace = e;
          }
          return (e = t ? t.displayName || t.name : "") ? Pe(e) : "";
        }
        function zm(t) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              return Pe(t.type);
            case 16:
              return Pe("Lazy");
            case 13:
              return Pe("Suspense");
            case 19:
              return Pe("SuspenseList");
            case 0:
            case 15:
              return mi(t.type, false);
            case 11:
              return mi(t.type.render, false);
            case 1:
              return mi(t.type, true);
            case 31:
              return Pe("Activity");
            default:
              return "";
          }
        }
        function Lf(t) {
          try {
            var l = "";
            do
              l += zm(t), t = t.return;
            while (t);
            return l;
          } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack;
          }
        }
        function vl(t) {
          switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return t;
            case "object":
              return t;
            default:
              return "";
          }
        }
        function Kf(t) {
          var l = t.type;
          return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
        }
        function Em(t) {
          var l = Kf(t) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l), a = "" + t[l];
          if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
            var u = e.get, n = e.set;
            return Object.defineProperty(t, l, {
              configurable: true,
              get: function() {
                return u.call(this);
              },
              set: function(i) {
                a = "" + i, n.call(this, i);
              }
            }), Object.defineProperty(t, l, {
              enumerable: e.enumerable
            }), {
              getValue: function() {
                return a;
              },
              setValue: function(i) {
                a = "" + i;
              },
              stopTracking: function() {
                t._valueTracker = null, delete t[l];
              }
            };
          }
        }
        function Zu(t) {
          t._valueTracker || (t._valueTracker = Em(t));
        }
        function Jf(t) {
          if (!t) return false;
          var l = t._valueTracker;
          if (!l) return true;
          var e = l.getValue(), a = "";
          return t && (a = Kf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), true) : false;
        }
        function Vu(t) {
          if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
          try {
            return t.activeElement || t.body;
          } catch {
            return t.body;
          }
        }
        var xm = /[\n"\\]/g;
        function hl(t) {
          return t.replace(xm, function(l) {
            return "\\" + l.charCodeAt(0).toString(16) + " ";
          });
        }
        function yi(t, l, e, a, u, n, i, c) {
          t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + vl(l)) : t.value !== "" + vl(l) && (t.value = "" + vl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? vi(t, i, vl(l)) : e != null ? vi(t, i, vl(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + vl(c) : t.removeAttribute("name");
        }
        function kf(t, l, e, a, u, n, i, c) {
          if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || l != null)) return;
            e = e != null ? "" + vl(e) : "", l = l != null ? "" + vl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
          }
          a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i);
        }
        function vi(t, l, e) {
          l === "number" && Vu(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
        }
        function ta(t, l, e, a) {
          if (t = t.options, l) {
            l = {};
            for (var u = 0; u < e.length; u++) l["$" + e[u]] = true;
            for (e = 0; e < t.length; e++) u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = true);
          } else {
            for (e = "" + vl(e), l = null, u = 0; u < t.length; u++) {
              if (t[u].value === e) {
                t[u].selected = true, a && (t[u].defaultSelected = true);
                return;
              }
              l !== null || t[u].disabled || (l = t[u]);
            }
            l !== null && (l.selected = true);
          }
        }
        function Wf(t, l, e) {
          if (l != null && (l = "" + vl(l), l !== t.value && (t.value = l), e == null)) {
            t.defaultValue !== l && (t.defaultValue = l);
            return;
          }
          t.defaultValue = e != null ? "" + vl(e) : "";
        }
        function $f(t, l, e, a) {
          if (l == null) {
            if (a != null) {
              if (e != null) throw Error(s(92));
              if (Tt(a)) {
                if (1 < a.length) throw Error(s(93));
                a = a[0];
              }
              e = a;
            }
            e == null && (e = ""), l = e;
          }
          e = vl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a);
        }
        function la(t, l) {
          if (l) {
            var e = t.firstChild;
            if (e && e === t.lastChild && e.nodeType === 3) {
              e.nodeValue = l;
              return;
            }
          }
          t.textContent = l;
        }
        var Mm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Ff(t, l, e) {
          var a = l.indexOf("--") === 0;
          e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Mm.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
        }
        function If(t, l, e) {
          if (l != null && typeof l != "object") throw Error(s(62));
          if (t = t.style, e != null) {
            for (var a in e) !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var u in l) a = l[u], l.hasOwnProperty(u) && e[u] !== a && Ff(t, u, a);
          } else for (var n in l) l.hasOwnProperty(n) && Ff(t, n, l[n]);
        }
        function hi(t) {
          if (t.indexOf("-") === -1) return false;
          switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var Om = /* @__PURE__ */ new Map([
          [
            "acceptCharset",
            "accept-charset"
          ],
          [
            "htmlFor",
            "for"
          ],
          [
            "httpEquiv",
            "http-equiv"
          ],
          [
            "crossOrigin",
            "crossorigin"
          ],
          [
            "accentHeight",
            "accent-height"
          ],
          [
            "alignmentBaseline",
            "alignment-baseline"
          ],
          [
            "arabicForm",
            "arabic-form"
          ],
          [
            "baselineShift",
            "baseline-shift"
          ],
          [
            "capHeight",
            "cap-height"
          ],
          [
            "clipPath",
            "clip-path"
          ],
          [
            "clipRule",
            "clip-rule"
          ],
          [
            "colorInterpolation",
            "color-interpolation"
          ],
          [
            "colorInterpolationFilters",
            "color-interpolation-filters"
          ],
          [
            "colorProfile",
            "color-profile"
          ],
          [
            "colorRendering",
            "color-rendering"
          ],
          [
            "dominantBaseline",
            "dominant-baseline"
          ],
          [
            "enableBackground",
            "enable-background"
          ],
          [
            "fillOpacity",
            "fill-opacity"
          ],
          [
            "fillRule",
            "fill-rule"
          ],
          [
            "floodColor",
            "flood-color"
          ],
          [
            "floodOpacity",
            "flood-opacity"
          ],
          [
            "fontFamily",
            "font-family"
          ],
          [
            "fontSize",
            "font-size"
          ],
          [
            "fontSizeAdjust",
            "font-size-adjust"
          ],
          [
            "fontStretch",
            "font-stretch"
          ],
          [
            "fontStyle",
            "font-style"
          ],
          [
            "fontVariant",
            "font-variant"
          ],
          [
            "fontWeight",
            "font-weight"
          ],
          [
            "glyphName",
            "glyph-name"
          ],
          [
            "glyphOrientationHorizontal",
            "glyph-orientation-horizontal"
          ],
          [
            "glyphOrientationVertical",
            "glyph-orientation-vertical"
          ],
          [
            "horizAdvX",
            "horiz-adv-x"
          ],
          [
            "horizOriginX",
            "horiz-origin-x"
          ],
          [
            "imageRendering",
            "image-rendering"
          ],
          [
            "letterSpacing",
            "letter-spacing"
          ],
          [
            "lightingColor",
            "lighting-color"
          ],
          [
            "markerEnd",
            "marker-end"
          ],
          [
            "markerMid",
            "marker-mid"
          ],
          [
            "markerStart",
            "marker-start"
          ],
          [
            "overlinePosition",
            "overline-position"
          ],
          [
            "overlineThickness",
            "overline-thickness"
          ],
          [
            "paintOrder",
            "paint-order"
          ],
          [
            "panose-1",
            "panose-1"
          ],
          [
            "pointerEvents",
            "pointer-events"
          ],
          [
            "renderingIntent",
            "rendering-intent"
          ],
          [
            "shapeRendering",
            "shape-rendering"
          ],
          [
            "stopColor",
            "stop-color"
          ],
          [
            "stopOpacity",
            "stop-opacity"
          ],
          [
            "strikethroughPosition",
            "strikethrough-position"
          ],
          [
            "strikethroughThickness",
            "strikethrough-thickness"
          ],
          [
            "strokeDasharray",
            "stroke-dasharray"
          ],
          [
            "strokeDashoffset",
            "stroke-dashoffset"
          ],
          [
            "strokeLinecap",
            "stroke-linecap"
          ],
          [
            "strokeLinejoin",
            "stroke-linejoin"
          ],
          [
            "strokeMiterlimit",
            "stroke-miterlimit"
          ],
          [
            "strokeOpacity",
            "stroke-opacity"
          ],
          [
            "strokeWidth",
            "stroke-width"
          ],
          [
            "textAnchor",
            "text-anchor"
          ],
          [
            "textDecoration",
            "text-decoration"
          ],
          [
            "textRendering",
            "text-rendering"
          ],
          [
            "transformOrigin",
            "transform-origin"
          ],
          [
            "underlinePosition",
            "underline-position"
          ],
          [
            "underlineThickness",
            "underline-thickness"
          ],
          [
            "unicodeBidi",
            "unicode-bidi"
          ],
          [
            "unicodeRange",
            "unicode-range"
          ],
          [
            "unitsPerEm",
            "units-per-em"
          ],
          [
            "vAlphabetic",
            "v-alphabetic"
          ],
          [
            "vHanging",
            "v-hanging"
          ],
          [
            "vIdeographic",
            "v-ideographic"
          ],
          [
            "vMathematical",
            "v-mathematical"
          ],
          [
            "vectorEffect",
            "vector-effect"
          ],
          [
            "vertAdvY",
            "vert-adv-y"
          ],
          [
            "vertOriginX",
            "vert-origin-x"
          ],
          [
            "vertOriginY",
            "vert-origin-y"
          ],
          [
            "wordSpacing",
            "word-spacing"
          ],
          [
            "writingMode",
            "writing-mode"
          ],
          [
            "xmlnsXlink",
            "xmlns:xlink"
          ],
          [
            "xHeight",
            "x-height"
          ]
        ]), Rm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Lu(t) {
          return Rm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
        }
        var gi = null;
        function bi(t) {
          return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
        }
        var ea = null, aa = null;
        function Pf(t) {
          var l = $e(t);
          if (l && (t = l.stateNode)) {
            var e = t[Pt] || null;
            t: switch (t = l.stateNode, l.type) {
              case "input":
                if (yi(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), l = e.name, e.type === "radio" && l != null) {
                  for (e = t; e.parentNode; ) e = e.parentNode;
                  for (e = e.querySelectorAll('input[name="' + hl("" + l) + '"][type="radio"]'), l = 0; l < e.length; l++) {
                    var a = e[l];
                    if (a !== t && a.form === t.form) {
                      var u = a[Pt] || null;
                      if (!u) throw Error(s(90));
                      yi(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                    }
                  }
                  for (l = 0; l < e.length; l++) a = e[l], a.form === t.form && Jf(a);
                }
                break t;
              case "textarea":
                Wf(t, e.value, e.defaultValue);
                break t;
              case "select":
                l = e.value, l != null && ta(t, !!e.multiple, l, false);
            }
          }
        }
        var pi = false;
        function ts(t, l, e) {
          if (pi) return t(l, e);
          pi = true;
          try {
            var a = t(l);
            return a;
          } finally {
            if (pi = false, (ea !== null || aa !== null) && (Un(), ea && (l = ea, t = aa, aa = ea = null, Pf(l), t))) for (l = 0; l < t.length; l++) Pf(t[l]);
          }
        }
        function Xa(t, l) {
          var e = t.stateNode;
          if (e === null) return null;
          var a = e[Pt] || null;
          if (a === null) return null;
          e = a[l];
          t: switch (l) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
              break t;
            default:
              t = false;
          }
          if (t) return null;
          if (e && typeof e != "function") throw Error(s(231, l, typeof e));
          return e;
        }
        var Gl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Si = false;
        if (Gl) try {
          var Qa = {};
          Object.defineProperty(Qa, "passive", {
            get: function() {
              Si = true;
            }
          }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
        } catch {
          Si = false;
        }
        var ue = null, _i = null, Ku = null;
        function ls() {
          if (Ku) return Ku;
          var t, l = _i, e = l.length, a, u = "value" in ue ? ue.value : ue.textContent, n = u.length;
          for (t = 0; t < e && l[t] === u[t]; t++) ;
          var i = e - t;
          for (a = 1; a <= i && l[e - a] === u[n - a]; a++) ;
          return Ku = u.slice(t, 1 < a ? 1 - a : void 0);
        }
        function Ju(t) {
          var l = t.keyCode;
          return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
        }
        function ku() {
          return true;
        }
        function es() {
          return false;
        }
        function tl(t) {
          function l(e, a, u, n, i) {
            this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
            for (var c in t) t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? ku : es, this.isPropagationStopped = es, this;
          }
          return N(l.prototype, {
            preventDefault: function() {
              this.defaultPrevented = true;
              var e = this.nativeEvent;
              e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = ku);
            },
            stopPropagation: function() {
              var e = this.nativeEvent;
              e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = ku);
            },
            persist: function() {
            },
            isPersistent: ku
          }), l;
        }
        var De = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(t) {
            return t.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0
        }, Wu = tl(De), Za = N({}, De, {
          view: 0,
          detail: 0
        }), Dm = tl(Za), Ti, Ai, Va, $u = N({}, Za, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Ei,
          button: 0,
          buttons: 0,
          relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
          },
          movementX: function(t) {
            return "movementX" in t ? t.movementX : (t !== Va && (Va && t.type === "mousemove" ? (Ti = t.screenX - Va.screenX, Ai = t.screenY - Va.screenY) : Ai = Ti = 0, Va = t), Ti);
          },
          movementY: function(t) {
            return "movementY" in t ? t.movementY : Ai;
          }
        }), as = tl($u), Um = N({}, $u, {
          dataTransfer: 0
        }), Nm = tl(Um), Hm = N({}, Za, {
          relatedTarget: 0
        }), zi = tl(Hm), qm = N({}, De, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        }), Cm = tl(qm), Bm = N({}, De, {
          clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData;
          }
        }), Ym = tl(Bm), Gm = N({}, De, {
          data: 0
        }), us = tl(Gm), wm = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        }, jm = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        }, Xm = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };
        function Qm(t) {
          var l = this.nativeEvent;
          return l.getModifierState ? l.getModifierState(t) : (t = Xm[t]) ? !!l[t] : false;
        }
        function Ei() {
          return Qm;
        }
        var Zm = N({}, Za, {
          key: function(t) {
            if (t.key) {
              var l = wm[t.key] || t.key;
              if (l !== "Unidentified") return l;
            }
            return t.type === "keypress" ? (t = Ju(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? jm[t.keyCode] || "Unidentified" : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Ei,
          charCode: function(t) {
            return t.type === "keypress" ? Ju(t) : 0;
          },
          keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
          },
          which: function(t) {
            return t.type === "keypress" ? Ju(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
          }
        }), Vm = tl(Zm), Lm = N({}, $u, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        }), ns = tl(Lm), Km = N({}, Za, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Ei
        }), Jm = tl(Km), km = N({}, De, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        }), Wm = tl(km), $m = N({}, $u, {
          deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
          },
          deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
          },
          deltaZ: 0,
          deltaMode: 0
        }), Fm = tl($m), Im = N({}, De, {
          newState: 0,
          oldState: 0
        }), Pm = tl(Im), t0 = [
          9,
          13,
          27,
          32
        ], xi = Gl && "CompositionEvent" in window, La = null;
        Gl && "documentMode" in document && (La = document.documentMode);
        var l0 = Gl && "TextEvent" in window && !La, is = Gl && (!xi || La && 8 < La && 11 >= La), cs = " ", fs = false;
        function ss(t, l) {
          switch (t) {
            case "keyup":
              return t0.indexOf(l.keyCode) !== -1;
            case "keydown":
              return l.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
              return true;
            default:
              return false;
          }
        }
        function os(t) {
          return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
        }
        var ua = false;
        function e0(t, l) {
          switch (t) {
            case "compositionend":
              return os(l);
            case "keypress":
              return l.which !== 32 ? null : (fs = true, cs);
            case "textInput":
              return t = l.data, t === cs && fs ? null : t;
            default:
              return null;
          }
        }
        function a0(t, l) {
          if (ua) return t === "compositionend" || !xi && ss(t, l) ? (t = ls(), Ku = _i = ue = null, ua = false, t) : null;
          switch (t) {
            case "paste":
              return null;
            case "keypress":
              if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
                if (l.char && 1 < l.char.length) return l.char;
                if (l.which) return String.fromCharCode(l.which);
              }
              return null;
            case "compositionend":
              return is && l.locale !== "ko" ? null : l.data;
            default:
              return null;
          }
        }
        var u0 = {
          color: true,
          date: true,
          datetime: true,
          "datetime-local": true,
          email: true,
          month: true,
          number: true,
          password: true,
          range: true,
          search: true,
          tel: true,
          text: true,
          time: true,
          url: true,
          week: true
        };
        function rs(t) {
          var l = t && t.nodeName && t.nodeName.toLowerCase();
          return l === "input" ? !!u0[t.type] : l === "textarea";
        }
        function ds(t, l, e, a) {
          ea ? aa ? aa.push(a) : aa = [
            a
          ] : ea = a, l = Yn(l, "onChange"), 0 < l.length && (e = new Wu("onChange", "change", null, e, a), t.push({
            event: e,
            listeners: l
          }));
        }
        var Ka = null, Ja = null;
        function n0(t) {
          Jr(t, 0);
        }
        function Fu(t) {
          var l = ja(t);
          if (Jf(l)) return t;
        }
        function ms(t, l) {
          if (t === "change") return l;
        }
        var ys = false;
        if (Gl) {
          var Mi;
          if (Gl) {
            var Oi = "oninput" in document;
            if (!Oi) {
              var vs = document.createElement("div");
              vs.setAttribute("oninput", "return;"), Oi = typeof vs.oninput == "function";
            }
            Mi = Oi;
          } else Mi = false;
          ys = Mi && (!document.documentMode || 9 < document.documentMode);
        }
        function hs() {
          Ka && (Ka.detachEvent("onpropertychange", gs), Ja = Ka = null);
        }
        function gs(t) {
          if (t.propertyName === "value" && Fu(Ja)) {
            var l = [];
            ds(l, Ja, t, bi(t)), ts(n0, l);
          }
        }
        function i0(t, l, e) {
          t === "focusin" ? (hs(), Ka = l, Ja = e, Ka.attachEvent("onpropertychange", gs)) : t === "focusout" && hs();
        }
        function c0(t) {
          if (t === "selectionchange" || t === "keyup" || t === "keydown") return Fu(Ja);
        }
        function f0(t, l) {
          if (t === "click") return Fu(l);
        }
        function s0(t, l) {
          if (t === "input" || t === "change") return Fu(l);
        }
        function o0(t, l) {
          return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
        }
        var cl = typeof Object.is == "function" ? Object.is : o0;
        function ka(t, l) {
          if (cl(t, l)) return true;
          if (typeof t != "object" || t === null || typeof l != "object" || l === null) return false;
          var e = Object.keys(t), a = Object.keys(l);
          if (e.length !== a.length) return false;
          for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!le.call(l, u) || !cl(t[u], l[u])) return false;
          }
          return true;
        }
        function bs(t) {
          for (; t && t.firstChild; ) t = t.firstChild;
          return t;
        }
        function ps(t, l) {
          var e = bs(t);
          t = 0;
          for (var a; e; ) {
            if (e.nodeType === 3) {
              if (a = t + e.textContent.length, t <= l && a >= l) return {
                node: e,
                offset: l - t
              };
              t = a;
            }
            t: {
              for (; e; ) {
                if (e.nextSibling) {
                  e = e.nextSibling;
                  break t;
                }
                e = e.parentNode;
              }
              e = void 0;
            }
            e = bs(e);
          }
        }
        function Ss(t, l) {
          return t && l ? t === l ? true : t && t.nodeType === 3 ? false : l && l.nodeType === 3 ? Ss(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : false : false;
        }
        function _s(t) {
          t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
          for (var l = Vu(t.document); l instanceof t.HTMLIFrameElement; ) {
            try {
              var e = typeof l.contentWindow.location.href == "string";
            } catch {
              e = false;
            }
            if (e) t = l.contentWindow;
            else break;
            l = Vu(t.document);
          }
          return l;
        }
        function Ri(t) {
          var l = t && t.nodeName && t.nodeName.toLowerCase();
          return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
        }
        var r0 = Gl && "documentMode" in document && 11 >= document.documentMode, na = null, Di = null, Wa = null, Ui = false;
        function Ts(t, l, e) {
          var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
          Ui || na == null || na !== Vu(a) || (a = na, "selectionStart" in a && Ri(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
          } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
          }), Wa && ka(Wa, a) || (Wa = a, a = Yn(Di, "onSelect"), 0 < a.length && (l = new Wu("onSelect", "select", null, l, e), t.push({
            event: l,
            listeners: a
          }), l.target = na)));
        }
        function Ue(t, l) {
          var e = {};
          return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
        }
        var ia = {
          animationend: Ue("Animation", "AnimationEnd"),
          animationiteration: Ue("Animation", "AnimationIteration"),
          animationstart: Ue("Animation", "AnimationStart"),
          transitionrun: Ue("Transition", "TransitionRun"),
          transitionstart: Ue("Transition", "TransitionStart"),
          transitioncancel: Ue("Transition", "TransitionCancel"),
          transitionend: Ue("Transition", "TransitionEnd")
        }, Ni = {}, As = {};
        Gl && (As = document.createElement("div").style, "AnimationEvent" in window || (delete ia.animationend.animation, delete ia.animationiteration.animation, delete ia.animationstart.animation), "TransitionEvent" in window || delete ia.transitionend.transition);
        function Ne(t) {
          if (Ni[t]) return Ni[t];
          if (!ia[t]) return t;
          var l = ia[t], e;
          for (e in l) if (l.hasOwnProperty(e) && e in As) return Ni[t] = l[e];
          return t;
        }
        var zs = Ne("animationend"), Es = Ne("animationiteration"), xs = Ne("animationstart"), d0 = Ne("transitionrun"), m0 = Ne("transitionstart"), y0 = Ne("transitioncancel"), Ms = Ne("transitionend"), Os = /* @__PURE__ */ new Map(), Hi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Hi.push("scrollEnd");
        function El(t, l) {
          Os.set(t, l), Re(l, [
            t
          ]);
        }
        var Rs = /* @__PURE__ */ new WeakMap();
        function gl(t, l) {
          if (typeof t == "object" && t !== null) {
            var e = Rs.get(t);
            return e !== void 0 ? e : (l = {
              value: t,
              source: l,
              stack: Lf(l)
            }, Rs.set(t, l), l);
          }
          return {
            value: t,
            source: l,
            stack: Lf(l)
          };
        }
        var bl = [], ca = 0, qi = 0;
        function Iu() {
          for (var t = ca, l = qi = ca = 0; l < t; ) {
            var e = bl[l];
            bl[l++] = null;
            var a = bl[l];
            bl[l++] = null;
            var u = bl[l];
            bl[l++] = null;
            var n = bl[l];
            if (bl[l++] = null, a !== null && u !== null) {
              var i = a.pending;
              i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
            }
            n !== 0 && Ds(e, u, n);
          }
        }
        function Pu(t, l, e, a) {
          bl[ca++] = t, bl[ca++] = l, bl[ca++] = e, bl[ca++] = a, qi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
        }
        function Ci(t, l, e, a) {
          return Pu(t, l, e, a), tn(t);
        }
        function fa(t, l) {
          return Pu(t, null, null, l), tn(t);
        }
        function Ds(t, l, e) {
          t.lanes |= e;
          var a = t.alternate;
          a !== null && (a.lanes |= e);
          for (var u = false, n = t.return; n !== null; ) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = true)), t = n, n = n.return;
          return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - il(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [
            l
          ] : a.push(l), l.lane = e | 536870912), n) : null;
        }
        function tn(t) {
          if (50 < Su) throw Su = 0, Xc = null, Error(s(185));
          for (var l = t.return; l !== null; ) t = l, l = t.return;
          return t.tag === 3 ? t.stateNode : null;
        }
        var sa = {};
        function v0(t, l, e, a) {
          this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function fl(t, l, e, a) {
          return new v0(t, l, e, a);
        }
        function Bi(t) {
          return t = t.prototype, !(!t || !t.isReactComponent);
        }
        function wl(t, l) {
          var e = t.alternate;
          return e === null ? (e = fl(t.tag, l, t.key, t.mode), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : {
            lanes: l.lanes,
            firstContext: l.firstContext
          }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
        }
        function Us(t, l) {
          t.flags &= 65011714;
          var e = t.alternate;
          return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
            lanes: l.lanes,
            firstContext: l.firstContext
          }), t;
        }
        function ln(t, l, e, a, u, n) {
          var i = 0;
          if (a = t, typeof t == "function") Bi(t) && (i = 1);
          else if (typeof t == "string") i = gy(t, e, C.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
          else t: switch (t) {
            case Ut:
              return t = fl(31, e, l, u), t.elementType = Ut, t.lanes = n, t;
            case P:
              return He(e.children, u, n, l);
            case ct:
              i = 8, u |= 24;
              break;
            case gt:
              return t = fl(12, e, l, u | 2), t.elementType = gt, t.lanes = n, t;
            case W:
              return t = fl(13, e, l, u), t.elementType = W, t.lanes = n, t;
            case Mt:
              return t = fl(19, e, l, u), t.elementType = Mt, t.lanes = n, t;
            default:
              if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case $t:
                case zt:
                  i = 10;
                  break t;
                case It:
                  i = 9;
                  break t;
                case wt:
                  i = 11;
                  break t;
                case Ct:
                  i = 14;
                  break t;
                case X:
                  i = 16, a = null;
                  break t;
              }
              i = 29, e = Error(s(130, t === null ? "null" : typeof t, "")), a = null;
          }
          return l = fl(i, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
        }
        function He(t, l, e, a) {
          return t = fl(7, t, a, l), t.lanes = e, t;
        }
        function Yi(t, l, e) {
          return t = fl(6, t, null, l), t.lanes = e, t;
        }
        function Gi(t, l, e) {
          return l = fl(4, t.children !== null ? t.children : [], t.key, l), l.lanes = e, l.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
          }, l;
        }
        var oa = [], ra = 0, en = null, an = 0, pl = [], Sl = 0, qe = null, jl = 1, Xl = "";
        function Ce(t, l) {
          oa[ra++] = an, oa[ra++] = en, en = t, an = l;
        }
        function Ns(t, l, e) {
          pl[Sl++] = jl, pl[Sl++] = Xl, pl[Sl++] = qe, qe = t;
          var a = jl;
          t = Xl;
          var u = 32 - il(a) - 1;
          a &= ~(1 << u), e += 1;
          var n = 32 - il(l) + u;
          if (30 < n) {
            var i = u - u % 5;
            n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, jl = 1 << 32 - il(l) + u | e << u | a, Xl = n + t;
          } else jl = 1 << n | e << u | a, Xl = t;
        }
        function wi(t) {
          t.return !== null && (Ce(t, 1), Ns(t, 1, 0));
        }
        function ji(t) {
          for (; t === en; ) en = oa[--ra], oa[ra] = null, an = oa[--ra], oa[ra] = null;
          for (; t === qe; ) qe = pl[--Sl], pl[Sl] = null, Xl = pl[--Sl], pl[Sl] = null, jl = pl[--Sl], pl[Sl] = null;
        }
        var Ft = null, Et = null, ft = false, Be = null, Ul = false, Xi = Error(s(519));
        function Ye(t) {
          var l = Error(s(418, ""));
          throw Ia(gl(l, t)), Xi;
        }
        function Hs(t) {
          var l = t.stateNode, e = t.type, a = t.memoizedProps;
          switch (l[Jt] = t, l[Pt] = a, e) {
            case "dialog":
              et("cancel", l), et("close", l);
              break;
            case "iframe":
            case "object":
            case "embed":
              et("load", l);
              break;
            case "video":
            case "audio":
              for (e = 0; e < Tu.length; e++) et(Tu[e], l);
              break;
            case "source":
              et("error", l);
              break;
            case "img":
            case "image":
            case "link":
              et("error", l), et("load", l);
              break;
            case "details":
              et("toggle", l);
              break;
            case "input":
              et("invalid", l), kf(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true), Zu(l);
              break;
            case "select":
              et("invalid", l);
              break;
            case "textarea":
              et("invalid", l), $f(l, a.value, a.defaultValue, a.children), Zu(l);
          }
          e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === true || Fr(l.textContent, e) ? (a.popover != null && (et("beforetoggle", l), et("toggle", l)), a.onScroll != null && et("scroll", l), a.onScrollEnd != null && et("scrollend", l), a.onClick != null && (l.onclick = Gn), l = true) : l = false, l || Ye(t);
        }
        function qs(t) {
          for (Ft = t.return; Ft; ) switch (Ft.tag) {
            case 5:
            case 13:
              Ul = false;
              return;
            case 27:
            case 3:
              Ul = true;
              return;
            default:
              Ft = Ft.return;
          }
        }
        function $a(t) {
          if (t !== Ft) return false;
          if (!ft) return qs(t), ft = true, false;
          var l = t.tag, e;
          if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || af(t.type, t.memoizedProps)), e = !e), e && Et && Ye(t), qs(t), l === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
            t: {
              for (t = t.nextSibling, l = 0; t; ) {
                if (t.nodeType === 8) if (e = t.data, e === "/$") {
                  if (l === 0) {
                    Et = Ml(t.nextSibling);
                    break t;
                  }
                  l--;
                } else e !== "$" && e !== "$!" && e !== "$?" || l++;
                t = t.nextSibling;
              }
              Et = null;
            }
          } else l === 27 ? (l = Et, Se(t.type) ? (t = ff, ff = null, Et = t) : Et = l) : Et = Ft ? Ml(t.stateNode.nextSibling) : null;
          return true;
        }
        function Fa() {
          Et = Ft = null, ft = false;
        }
        function Cs() {
          var t = Be;
          return t !== null && (al === null ? al = t : al.push.apply(al, t), Be = null), t;
        }
        function Ia(t) {
          Be === null ? Be = [
            t
          ] : Be.push(t);
        }
        var Qi = M(null), Ge = null, Ql = null;
        function ne(t, l, e) {
          U(Qi, l._currentValue), l._currentValue = e;
        }
        function Zl(t) {
          t._currentValue = Qi.current, q(Qi);
        }
        function Zi(t, l, e) {
          for (; t !== null; ) {
            var a = t.alternate;
            if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
            t = t.return;
          }
        }
        function Vi(t, l, e, a) {
          var u = t.child;
          for (u !== null && (u.return = t); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
              var i = u.child;
              n = n.firstContext;
              t: for (; n !== null; ) {
                var c = n;
                n = u;
                for (var o = 0; o < l.length; o++) if (c.context === l[o]) {
                  n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Zi(n.return, e, t), a || (i = null);
                  break t;
                }
                n = c.next;
              }
            } else if (u.tag === 18) {
              if (i = u.return, i === null) throw Error(s(341));
              i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Zi(i, e, t), i = null;
            } else i = u.child;
            if (i !== null) i.return = u;
            else for (i = u; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (u = i.sibling, u !== null) {
                u.return = i.return, i = u;
                break;
              }
              i = i.return;
            }
            u = i;
          }
        }
        function Pa(t, l, e, a) {
          t = null;
          for (var u = l, n = false; u !== null; ) {
            if (!n) {
              if ((u.flags & 524288) !== 0) n = true;
              else if ((u.flags & 262144) !== 0) break;
            }
            if (u.tag === 10) {
              var i = u.alternate;
              if (i === null) throw Error(s(387));
              if (i = i.memoizedProps, i !== null) {
                var c = u.type;
                cl(u.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [
                  c
                ]);
              }
            } else if (u === nt.current) {
              if (i = u.alternate, i === null) throw Error(s(387));
              i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Ou) : t = [
                Ou
              ]);
            }
            u = u.return;
          }
          t !== null && Vi(l, t, e, a), l.flags |= 262144;
        }
        function un(t) {
          for (t = t.firstContext; t !== null; ) {
            if (!cl(t.context._currentValue, t.memoizedValue)) return true;
            t = t.next;
          }
          return false;
        }
        function we(t) {
          Ge = t, Ql = null, t = t.dependencies, t !== null && (t.firstContext = null);
        }
        function kt(t) {
          return Bs(Ge, t);
        }
        function nn(t, l) {
          return Ge === null && we(t), Bs(t, l);
        }
        function Bs(t, l) {
          var e = l._currentValue;
          if (l = {
            context: l,
            memoizedValue: e,
            next: null
          }, Ql === null) {
            if (t === null) throw Error(s(308));
            Ql = l, t.dependencies = {
              lanes: 0,
              firstContext: l
            }, t.flags |= 524288;
          } else Ql = Ql.next = l;
          return e;
        }
        var h0 = typeof AbortController < "u" ? AbortController : function() {
          var t = [], l = this.signal = {
            aborted: false,
            addEventListener: function(e, a) {
              t.push(a);
            }
          };
          this.abort = function() {
            l.aborted = true, t.forEach(function(e) {
              return e();
            });
          };
        }, g0 = f.unstable_scheduleCallback, b0 = f.unstable_NormalPriority, Bt = {
          $$typeof: zt,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0
        };
        function Li() {
          return {
            controller: new h0(),
            data: /* @__PURE__ */ new Map(),
            refCount: 0
          };
        }
        function tu(t) {
          t.refCount--, t.refCount === 0 && g0(b0, function() {
            t.controller.abort();
          });
        }
        var lu = null, Ki = 0, da = 0, ma = null;
        function p0(t, l) {
          if (lu === null) {
            var e = lu = [];
            Ki = 0, da = kc(), ma = {
              status: "pending",
              value: void 0,
              then: function(a) {
                e.push(a);
              }
            };
          }
          return Ki++, l.then(Ys, Ys), l;
        }
        function Ys() {
          if (--Ki === 0 && lu !== null) {
            ma !== null && (ma.status = "fulfilled");
            var t = lu;
            lu = null, da = 0, ma = null;
            for (var l = 0; l < t.length; l++) (0, t[l])();
          }
        }
        function S0(t, l) {
          var e = [], a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
              e.push(u);
            }
          };
          return t.then(function() {
            a.status = "fulfilled", a.value = l;
            for (var u = 0; u < e.length; u++) (0, e[u])(l);
          }, function(u) {
            for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0);
          }), a;
        }
        var Gs = T.S;
        T.S = function(t, l) {
          typeof l == "object" && l !== null && typeof l.then == "function" && p0(t, l), Gs !== null && Gs(t, l);
        };
        var je = M(null);
        function Ji() {
          var t = je.current;
          return t !== null ? t : St.pooledCache;
        }
        function cn(t, l) {
          l === null ? U(je, je.current) : U(je, l.pool);
        }
        function ws() {
          var t = Ji();
          return t === null ? null : {
            parent: Bt._currentValue,
            pool: t
          };
        }
        var eu = Error(s(460)), js = Error(s(474)), fn = Error(s(542)), ki = {
          then: function() {
          }
        };
        function Xs(t) {
          return t = t.status, t === "fulfilled" || t === "rejected";
        }
        function sn() {
        }
        function Qs(t, l, e) {
          switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(sn, sn), l = e), l.status) {
            case "fulfilled":
              return l.value;
            case "rejected":
              throw t = l.reason, Vs(t), t;
            default:
              if (typeof l.status == "string") l.then(sn, sn);
              else {
                if (t = St, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
                t = l, t.status = "pending", t.then(function(a) {
                  if (l.status === "pending") {
                    var u = l;
                    u.status = "fulfilled", u.value = a;
                  }
                }, function(a) {
                  if (l.status === "pending") {
                    var u = l;
                    u.status = "rejected", u.reason = a;
                  }
                });
              }
              switch (l.status) {
                case "fulfilled":
                  return l.value;
                case "rejected":
                  throw t = l.reason, Vs(t), t;
              }
              throw au = l, eu;
          }
        }
        var au = null;
        function Zs() {
          if (au === null) throw Error(s(459));
          var t = au;
          return au = null, t;
        }
        function Vs(t) {
          if (t === eu || t === fn) throw Error(s(483));
        }
        var ie = false;
        function Wi(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null,
              lanes: 0,
              hiddenCallbacks: null
            },
            callbacks: null
          };
        }
        function $i(t, l) {
          t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
          });
        }
        function ce(t) {
          return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
          };
        }
        function fe(t, l, e) {
          var a = t.updateQueue;
          if (a === null) return null;
          if (a = a.shared, (dt & 2) !== 0) {
            var u = a.pending;
            return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = tn(t), Ds(t, null, e), l;
          }
          return Pu(t, a, l, e), tn(t);
        }
        function uu(t, l, e) {
          if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
            var a = l.lanes;
            a &= t.pendingLanes, e |= a, l.lanes = e, Yf(t, e);
          }
        }
        function Fi(t, l) {
          var e = t.updateQueue, a = t.alternate;
          if (a !== null && (a = a.updateQueue, e === a)) {
            var u = null, n = null;
            if (e = e.firstBaseUpdate, e !== null) {
              do {
                var i = {
                  lane: e.lane,
                  tag: e.tag,
                  payload: e.payload,
                  callback: null,
                  next: null
                };
                n === null ? u = n = i : n = n.next = i, e = e.next;
              } while (e !== null);
              n === null ? u = n = l : n = n.next = l;
            } else u = n = l;
            e = {
              baseState: a.baseState,
              firstBaseUpdate: u,
              lastBaseUpdate: n,
              shared: a.shared,
              callbacks: a.callbacks
            }, t.updateQueue = e;
            return;
          }
          t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
        }
        var Ii = false;
        function nu() {
          if (Ii) {
            var t = ma;
            if (t !== null) throw t;
          }
        }
        function iu(t, l, e, a) {
          Ii = false;
          var u = t.updateQueue;
          ie = false;
          var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
          if (c !== null) {
            u.shared.pending = null;
            var o = c, g = o.next;
            o.next = null, i === null ? n = g : i.next = g, i = o;
            var A = t.alternate;
            A !== null && (A = A.updateQueue, c = A.lastBaseUpdate, c !== i && (c === null ? A.firstBaseUpdate = g : c.next = g, A.lastBaseUpdate = o));
          }
          if (n !== null) {
            var x = u.baseState;
            i = 0, A = g = o = null, c = n;
            do {
              var b = c.lane & -536870913, p = b !== c.lane;
              if (p ? (ut & b) === b : (a & b) === b) {
                b !== 0 && b === da && (Ii = true), A !== null && (A = A.next = {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null
                });
                t: {
                  var V = t, Q = c;
                  b = l;
                  var ht = e;
                  switch (Q.tag) {
                    case 1:
                      if (V = Q.payload, typeof V == "function") {
                        x = V.call(ht, x, b);
                        break t;
                      }
                      x = V;
                      break t;
                    case 3:
                      V.flags = V.flags & -65537 | 128;
                    case 0:
                      if (V = Q.payload, b = typeof V == "function" ? V.call(ht, x, b) : V, b == null) break t;
                      x = N({}, x, b);
                      break t;
                    case 2:
                      ie = true;
                  }
                }
                b = c.callback, b !== null && (t.flags |= 64, p && (t.flags |= 8192), p = u.callbacks, p === null ? u.callbacks = [
                  b
                ] : p.push(b));
              } else p = {
                lane: b,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null
              }, A === null ? (g = A = p, o = x) : A = A.next = p, i |= b;
              if (c = c.next, c === null) {
                if (c = u.shared.pending, c === null) break;
                p = c, c = p.next, p.next = null, u.lastBaseUpdate = p, u.shared.pending = null;
              }
            } while (true);
            A === null && (o = x), u.baseState = o, u.firstBaseUpdate = g, u.lastBaseUpdate = A, n === null && (u.shared.lanes = 0), he |= i, t.lanes = i, t.memoizedState = x;
          }
        }
        function Ls(t, l) {
          if (typeof t != "function") throw Error(s(191, t));
          t.call(l);
        }
        function Ks(t, l) {
          var e = t.callbacks;
          if (e !== null) for (t.callbacks = null, t = 0; t < e.length; t++) Ls(e[t], l);
        }
        var ya = M(null), on = M(0);
        function Js(t, l) {
          t = $l, U(on, t), U(ya, l), $l = t | l.baseLanes;
        }
        function Pi() {
          U(on, $l), U(ya, ya.current);
        }
        function tc() {
          $l = on.current, q(ya), q(on);
        }
        var se = 0, $ = null, yt = null, Nt = null, rn = false, va = false, Xe = false, dn = 0, cu = 0, ha = null, _0 = 0;
        function Rt() {
          throw Error(s(321));
        }
        function lc(t, l) {
          if (l === null) return false;
          for (var e = 0; e < l.length && e < t.length; e++) if (!cl(t[e], l[e])) return false;
          return true;
        }
        function ec(t, l, e, a, u, n) {
          return se = n, $ = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, T.H = t === null || t.memoizedState === null ? Uo : No, Xe = false, n = e(a, u), Xe = false, va && (n = Ws(l, e, a, u)), ks(t), n;
        }
        function ks(t) {
          T.H = bn;
          var l = yt !== null && yt.next !== null;
          if (se = 0, Nt = yt = $ = null, rn = false, cu = 0, ha = null, l) throw Error(s(300));
          t === null || Xt || (t = t.dependencies, t !== null && un(t) && (Xt = true));
        }
        function Ws(t, l, e, a) {
          $ = t;
          var u = 0;
          do {
            if (va && (ha = null), cu = 0, va = false, 25 <= u) throw Error(s(301));
            if (u += 1, Nt = yt = null, t.updateQueue != null) {
              var n = t.updateQueue;
              n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
            }
            T.H = O0, n = l(e, a);
          } while (va);
          return n;
        }
        function T0() {
          var t = T.H, l = t.useState()[0];
          return l = typeof l.then == "function" ? fu(l) : l, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && ($.flags |= 1024), l;
        }
        function ac() {
          var t = dn !== 0;
          return dn = 0, t;
        }
        function uc(t, l, e) {
          l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
        }
        function nc(t) {
          if (rn) {
            for (t = t.memoizedState; t !== null; ) {
              var l = t.queue;
              l !== null && (l.pending = null), t = t.next;
            }
            rn = false;
          }
          se = 0, Nt = yt = $ = null, va = false, cu = dn = 0, ha = null;
        }
        function ll() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
          };
          return Nt === null ? $.memoizedState = Nt = t : Nt = Nt.next = t, Nt;
        }
        function Ht() {
          if (yt === null) {
            var t = $.alternate;
            t = t !== null ? t.memoizedState : null;
          } else t = yt.next;
          var l = Nt === null ? $.memoizedState : Nt.next;
          if (l !== null) Nt = l, yt = t;
          else {
            if (t === null) throw $.alternate === null ? Error(s(467)) : Error(s(310));
            yt = t, t = {
              memoizedState: yt.memoizedState,
              baseState: yt.baseState,
              baseQueue: yt.baseQueue,
              queue: yt.queue,
              next: null
            }, Nt === null ? $.memoizedState = Nt = t : Nt = Nt.next = t;
          }
          return Nt;
        }
        function ic() {
          return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
          };
        }
        function fu(t) {
          var l = cu;
          return cu += 1, ha === null && (ha = []), t = Qs(ha, t, l), l = $, (Nt === null ? l.memoizedState : Nt.next) === null && (l = l.alternate, T.H = l === null || l.memoizedState === null ? Uo : No), t;
        }
        function mn(t) {
          if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return fu(t);
            if (t.$$typeof === zt) return kt(t);
          }
          throw Error(s(438, String(t)));
        }
        function cc(t) {
          var l = null, e = $.updateQueue;
          if (e !== null && (l = e.memoCache), l == null) {
            var a = $.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
              data: a.data.map(function(u) {
                return u.slice();
              }),
              index: 0
            })));
          }
          if (l == null && (l = {
            data: [],
            index: 0
          }), e === null && (e = ic(), $.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0) for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = Bl;
          return l.index++, e;
        }
        function Vl(t, l) {
          return typeof l == "function" ? l(t) : l;
        }
        function yn(t) {
          var l = Ht();
          return fc(l, yt, t);
        }
        function fc(t, l, e) {
          var a = t.queue;
          if (a === null) throw Error(s(311));
          a.lastRenderedReducer = e;
          var u = t.baseQueue, n = a.pending;
          if (n !== null) {
            if (u !== null) {
              var i = u.next;
              u.next = n.next, n.next = i;
            }
            l.baseQueue = u = n, a.pending = null;
          }
          if (n = t.baseState, u === null) t.memoizedState = n;
          else {
            l = u.next;
            var c = i = null, o = null, g = l, A = false;
            do {
              var x = g.lane & -536870913;
              if (x !== g.lane ? (ut & x) === x : (se & x) === x) {
                var b = g.revertLane;
                if (b === 0) o !== null && (o = o.next = {
                  lane: 0,
                  revertLane: 0,
                  action: g.action,
                  hasEagerState: g.hasEagerState,
                  eagerState: g.eagerState,
                  next: null
                }), x === da && (A = true);
                else if ((se & b) === b) {
                  g = g.next, b === da && (A = true);
                  continue;
                } else x = {
                  lane: 0,
                  revertLane: g.revertLane,
                  action: g.action,
                  hasEagerState: g.hasEagerState,
                  eagerState: g.eagerState,
                  next: null
                }, o === null ? (c = o = x, i = n) : o = o.next = x, $.lanes |= b, he |= b;
                x = g.action, Xe && e(n, x), n = g.hasEagerState ? g.eagerState : e(n, x);
              } else b = {
                lane: x,
                revertLane: g.revertLane,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null
              }, o === null ? (c = o = b, i = n) : o = o.next = b, $.lanes |= x, he |= x;
              g = g.next;
            } while (g !== null && g !== l);
            if (o === null ? i = n : o.next = c, !cl(n, t.memoizedState) && (Xt = true, A && (e = ma, e !== null))) throw e;
            t.memoizedState = n, t.baseState = i, t.baseQueue = o, a.lastRenderedState = n;
          }
          return u === null && (a.lanes = 0), [
            t.memoizedState,
            a.dispatch
          ];
        }
        function sc(t) {
          var l = Ht(), e = l.queue;
          if (e === null) throw Error(s(311));
          e.lastRenderedReducer = t;
          var a = e.dispatch, u = e.pending, n = l.memoizedState;
          if (u !== null) {
            e.pending = null;
            var i = u = u.next;
            do
              n = t(n, i.action), i = i.next;
            while (i !== u);
            cl(n, l.memoizedState) || (Xt = true), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
          }
          return [
            n,
            a
          ];
        }
        function $s(t, l, e) {
          var a = $, u = Ht(), n = ft;
          if (n) {
            if (e === void 0) throw Error(s(407));
            e = e();
          } else e = l();
          var i = !cl((yt || u).memoizedState, e);
          i && (u.memoizedState = e, Xt = true), u = u.queue;
          var c = Ps.bind(null, a, u, t);
          if (su(2048, 8, c, [
            t
          ]), u.getSnapshot !== l || i || Nt !== null && Nt.memoizedState.tag & 1) {
            if (a.flags |= 2048, ga(9, vn(), Is.bind(null, a, u, e, l), null), St === null) throw Error(s(349));
            n || (se & 124) !== 0 || Fs(a, l, e);
          }
          return e;
        }
        function Fs(t, l, e) {
          t.flags |= 16384, t = {
            getSnapshot: l,
            value: e
          }, l = $.updateQueue, l === null ? (l = ic(), $.updateQueue = l, l.stores = [
            t
          ]) : (e = l.stores, e === null ? l.stores = [
            t
          ] : e.push(t));
        }
        function Is(t, l, e, a) {
          l.value = e, l.getSnapshot = a, to(l) && lo(t);
        }
        function Ps(t, l, e) {
          return e(function() {
            to(l) && lo(t);
          });
        }
        function to(t) {
          var l = t.getSnapshot;
          t = t.value;
          try {
            var e = l();
            return !cl(t, e);
          } catch {
            return true;
          }
        }
        function lo(t) {
          var l = fa(t, 2);
          l !== null && ml(l, t, 2);
        }
        function oc(t) {
          var l = ll();
          if (typeof t == "function") {
            var e = t;
            if (t = e(), Xe) {
              ee(true);
              try {
                e();
              } finally {
                ee(false);
              }
            }
          }
          return l.memoizedState = l.baseState = t, l.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vl,
            lastRenderedState: t
          }, l;
        }
        function eo(t, l, e, a) {
          return t.baseState = e, fc(t, yt, typeof a == "function" ? a : Vl);
        }
        function A0(t, l, e, a, u) {
          if (gn(t)) throw Error(s(485));
          if (t = l.action, t !== null) {
            var n = {
              payload: u,
              action: t,
              next: null,
              isTransition: true,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function(i) {
                n.listeners.push(i);
              }
            };
            T.T !== null ? e(true) : n.isTransition = false, a(n), e = l.pending, e === null ? (n.next = l.pending = n, ao(l, n)) : (n.next = e.next, l.pending = e.next = n);
          }
        }
        function ao(t, l) {
          var e = l.action, a = l.payload, u = t.state;
          if (l.isTransition) {
            var n = T.T, i = {};
            T.T = i;
            try {
              var c = e(u, a), o = T.S;
              o !== null && o(i, c), uo(t, l, c);
            } catch (g) {
              rc(t, l, g);
            } finally {
              T.T = n;
            }
          } else try {
            n = e(u, a), uo(t, l, n);
          } catch (g) {
            rc(t, l, g);
          }
        }
        function uo(t, l, e) {
          e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            no(t, l, a);
          }, function(a) {
            return rc(t, l, a);
          }) : no(t, l, e);
        }
        function no(t, l, e) {
          l.status = "fulfilled", l.value = e, io(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, ao(t, e)));
        }
        function rc(t, l, e) {
          var a = t.pending;
          if (t.pending = null, a !== null) {
            a = a.next;
            do
              l.status = "rejected", l.reason = e, io(l), l = l.next;
            while (l !== a);
          }
          t.action = null;
        }
        function io(t) {
          t = t.listeners;
          for (var l = 0; l < t.length; l++) (0, t[l])();
        }
        function co(t, l) {
          return l;
        }
        function fo(t, l) {
          if (ft) {
            var e = St.formState;
            if (e !== null) {
              t: {
                var a = $;
                if (ft) {
                  if (Et) {
                    l: {
                      for (var u = Et, n = Ul; u.nodeType !== 8; ) {
                        if (!n) {
                          u = null;
                          break l;
                        }
                        if (u = Ml(u.nextSibling), u === null) {
                          u = null;
                          break l;
                        }
                      }
                      n = u.data, u = n === "F!" || n === "F" ? u : null;
                    }
                    if (u) {
                      Et = Ml(u.nextSibling), a = u.data === "F!";
                      break t;
                    }
                  }
                  Ye(a);
                }
                a = false;
              }
              a && (l = e[0]);
            }
          }
          return e = ll(), e.memoizedState = e.baseState = l, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: co,
            lastRenderedState: l
          }, e.queue = a, e = Oo.bind(null, $, a), a.dispatch = e, a = oc(false), n = hc.bind(null, $, false, a.queue), a = ll(), u = {
            state: l,
            dispatch: null,
            action: t,
            pending: null
          }, a.queue = u, e = A0.bind(null, $, u, n, e), u.dispatch = e, a.memoizedState = t, [
            l,
            e,
            false
          ];
        }
        function so(t) {
          var l = Ht();
          return oo(l, yt, t);
        }
        function oo(t, l, e) {
          if (l = fc(t, l, co)[0], t = yn(Vl)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
            var a = fu(l);
          } catch (i) {
            throw i === eu ? fn : i;
          }
          else a = l;
          l = Ht();
          var u = l.queue, n = u.dispatch;
          return e !== l.memoizedState && ($.flags |= 2048, ga(9, vn(), z0.bind(null, u, e), null)), [
            a,
            n,
            t
          ];
        }
        function z0(t, l) {
          t.action = l;
        }
        function ro(t) {
          var l = Ht(), e = yt;
          if (e !== null) return oo(l, e, t);
          Ht(), l = l.memoizedState, e = Ht();
          var a = e.queue.dispatch;
          return e.memoizedState = t, [
            l,
            a,
            false
          ];
        }
        function ga(t, l, e, a) {
          return t = {
            tag: t,
            create: e,
            deps: a,
            inst: l,
            next: null
          }, l = $.updateQueue, l === null && (l = ic(), $.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
        }
        function vn() {
          return {
            destroy: void 0,
            resource: void 0
          };
        }
        function mo() {
          return Ht().memoizedState;
        }
        function hn(t, l, e, a) {
          var u = ll();
          a = a === void 0 ? null : a, $.flags |= t, u.memoizedState = ga(1 | l, vn(), e, a);
        }
        function su(t, l, e, a) {
          var u = Ht();
          a = a === void 0 ? null : a;
          var n = u.memoizedState.inst;
          yt !== null && a !== null && lc(a, yt.memoizedState.deps) ? u.memoizedState = ga(l, n, e, a) : ($.flags |= t, u.memoizedState = ga(1 | l, n, e, a));
        }
        function yo(t, l) {
          hn(8390656, 8, t, l);
        }
        function vo(t, l) {
          su(2048, 8, t, l);
        }
        function ho(t, l) {
          return su(4, 2, t, l);
        }
        function go(t, l) {
          return su(4, 4, t, l);
        }
        function bo(t, l) {
          if (typeof l == "function") {
            t = t();
            var e = l(t);
            return function() {
              typeof e == "function" ? e() : l(null);
            };
          }
          if (l != null) return t = t(), l.current = t, function() {
            l.current = null;
          };
        }
        function po(t, l, e) {
          e = e != null ? e.concat([
            t
          ]) : null, su(4, 4, bo.bind(null, l, t), e);
        }
        function dc() {
        }
        function So(t, l) {
          var e = Ht();
          l = l === void 0 ? null : l;
          var a = e.memoizedState;
          return l !== null && lc(l, a[1]) ? a[0] : (e.memoizedState = [
            t,
            l
          ], t);
        }
        function _o(t, l) {
          var e = Ht();
          l = l === void 0 ? null : l;
          var a = e.memoizedState;
          if (l !== null && lc(l, a[1])) return a[0];
          if (a = t(), Xe) {
            ee(true);
            try {
              t();
            } finally {
              ee(false);
            }
          }
          return e.memoizedState = [
            a,
            l
          ], a;
        }
        function mc(t, l, e) {
          return e === void 0 || (se & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = zr(), $.lanes |= t, he |= t, e);
        }
        function To(t, l, e, a) {
          return cl(e, l) ? e : ya.current !== null ? (t = mc(t, e, a), cl(t, l) || (Xt = true), t) : (se & 42) === 0 ? (Xt = true, t.memoizedState = e) : (t = zr(), $.lanes |= t, he |= t, l);
        }
        function Ao(t, l, e, a, u) {
          var n = H.p;
          H.p = n !== 0 && 8 > n ? n : 8;
          var i = T.T, c = {};
          T.T = c, hc(t, false, l, e);
          try {
            var o = u(), g = T.S;
            if (g !== null && g(c, o), o !== null && typeof o == "object" && typeof o.then == "function") {
              var A = S0(o, a);
              ou(t, l, A, dl(t));
            } else ou(t, l, a, dl(t));
          } catch (x) {
            ou(t, l, {
              then: function() {
              },
              status: "rejected",
              reason: x
            }, dl());
          } finally {
            H.p = n, T.T = i;
          }
        }
        function E0() {
        }
        function yc(t, l, e, a) {
          if (t.tag !== 5) throw Error(s(476));
          var u = zo(t).queue;
          Ao(t, u, l, R, e === null ? E0 : function() {
            return Eo(t), e(a);
          });
        }
        function zo(t) {
          var l = t.memoizedState;
          if (l !== null) return l;
          l = {
            memoizedState: R,
            baseState: R,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Vl,
              lastRenderedState: R
            },
            next: null
          };
          var e = {};
          return l.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Vl,
              lastRenderedState: e
            },
            next: null
          }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
        }
        function Eo(t) {
          var l = zo(t).next.queue;
          ou(t, l, {}, dl());
        }
        function vc() {
          return kt(Ou);
        }
        function xo() {
          return Ht().memoizedState;
        }
        function Mo() {
          return Ht().memoizedState;
        }
        function x0(t) {
          for (var l = t.return; l !== null; ) {
            switch (l.tag) {
              case 24:
              case 3:
                var e = dl();
                t = ce(e);
                var a = fe(l, t, e);
                a !== null && (ml(a, l, e), uu(a, l, e)), l = {
                  cache: Li()
                }, t.payload = l;
                return;
            }
            l = l.return;
          }
        }
        function M0(t, l, e) {
          var a = dl();
          e = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: false,
            eagerState: null,
            next: null
          }, gn(t) ? Ro(l, e) : (e = Ci(t, l, e, a), e !== null && (ml(e, t, a), Do(e, l, a)));
        }
        function Oo(t, l, e) {
          var a = dl();
          ou(t, l, e, a);
        }
        function ou(t, l, e, a) {
          var u = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: false,
            eagerState: null,
            next: null
          };
          if (gn(t)) Ro(l, u);
          else {
            var n = t.alternate;
            if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null)) try {
              var i = l.lastRenderedState, c = n(i, e);
              if (u.hasEagerState = true, u.eagerState = c, cl(c, i)) return Pu(t, l, u, 0), St === null && Iu(), false;
            } catch {
            } finally {
            }
            if (e = Ci(t, l, u, a), e !== null) return ml(e, t, a), Do(e, l, a), true;
          }
          return false;
        }
        function hc(t, l, e, a) {
          if (a = {
            lane: 2,
            revertLane: kc(),
            action: a,
            hasEagerState: false,
            eagerState: null,
            next: null
          }, gn(t)) {
            if (l) throw Error(s(479));
          } else l = Ci(t, e, a, 2), l !== null && ml(l, t, 2);
        }
        function gn(t) {
          var l = t.alternate;
          return t === $ || l !== null && l === $;
        }
        function Ro(t, l) {
          va = rn = true;
          var e = t.pending;
          e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
        }
        function Do(t, l, e) {
          if ((e & 4194048) !== 0) {
            var a = l.lanes;
            a &= t.pendingLanes, e |= a, l.lanes = e, Yf(t, e);
          }
        }
        var bn = {
          readContext: kt,
          use: mn,
          useCallback: Rt,
          useContext: Rt,
          useEffect: Rt,
          useImperativeHandle: Rt,
          useLayoutEffect: Rt,
          useInsertionEffect: Rt,
          useMemo: Rt,
          useReducer: Rt,
          useRef: Rt,
          useState: Rt,
          useDebugValue: Rt,
          useDeferredValue: Rt,
          useTransition: Rt,
          useSyncExternalStore: Rt,
          useId: Rt,
          useHostTransitionStatus: Rt,
          useFormState: Rt,
          useActionState: Rt,
          useOptimistic: Rt,
          useMemoCache: Rt,
          useCacheRefresh: Rt
        }, Uo = {
          readContext: kt,
          use: mn,
          useCallback: function(t, l) {
            return ll().memoizedState = [
              t,
              l === void 0 ? null : l
            ], t;
          },
          useContext: kt,
          useEffect: yo,
          useImperativeHandle: function(t, l, e) {
            e = e != null ? e.concat([
              t
            ]) : null, hn(4194308, 4, bo.bind(null, l, t), e);
          },
          useLayoutEffect: function(t, l) {
            return hn(4194308, 4, t, l);
          },
          useInsertionEffect: function(t, l) {
            hn(4, 2, t, l);
          },
          useMemo: function(t, l) {
            var e = ll();
            l = l === void 0 ? null : l;
            var a = t();
            if (Xe) {
              ee(true);
              try {
                t();
              } finally {
                ee(false);
              }
            }
            return e.memoizedState = [
              a,
              l
            ], a;
          },
          useReducer: function(t, l, e) {
            var a = ll();
            if (e !== void 0) {
              var u = e(l);
              if (Xe) {
                ee(true);
                try {
                  e(l);
                } finally {
                  ee(false);
                }
              }
            } else u = l;
            return a.memoizedState = a.baseState = u, t = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: u
            }, a.queue = t, t = t.dispatch = M0.bind(null, $, t), [
              a.memoizedState,
              t
            ];
          },
          useRef: function(t) {
            var l = ll();
            return t = {
              current: t
            }, l.memoizedState = t;
          },
          useState: function(t) {
            t = oc(t);
            var l = t.queue, e = Oo.bind(null, $, l);
            return l.dispatch = e, [
              t.memoizedState,
              e
            ];
          },
          useDebugValue: dc,
          useDeferredValue: function(t, l) {
            var e = ll();
            return mc(e, t, l);
          },
          useTransition: function() {
            var t = oc(false);
            return t = Ao.bind(null, $, t.queue, true, false), ll().memoizedState = t, [
              false,
              t
            ];
          },
          useSyncExternalStore: function(t, l, e) {
            var a = $, u = ll();
            if (ft) {
              if (e === void 0) throw Error(s(407));
              e = e();
            } else {
              if (e = l(), St === null) throw Error(s(349));
              (ut & 124) !== 0 || Fs(a, l, e);
            }
            u.memoizedState = e;
            var n = {
              value: e,
              getSnapshot: l
            };
            return u.queue = n, yo(Ps.bind(null, a, n, t), [
              t
            ]), a.flags |= 2048, ga(9, vn(), Is.bind(null, a, n, e, l), null), e;
          },
          useId: function() {
            var t = ll(), l = St.identifierPrefix;
            if (ft) {
              var e = Xl, a = jl;
              e = (a & ~(1 << 32 - il(a) - 1)).toString(32) + e, l = "\xAB" + l + "R" + e, e = dn++, 0 < e && (l += "H" + e.toString(32)), l += "\xBB";
            } else e = _0++, l = "\xAB" + l + "r" + e.toString(32) + "\xBB";
            return t.memoizedState = l;
          },
          useHostTransitionStatus: vc,
          useFormState: fo,
          useActionState: fo,
          useOptimistic: function(t) {
            var l = ll();
            l.memoizedState = l.baseState = t;
            var e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null
            };
            return l.queue = e, l = hc.bind(null, $, true, e), e.dispatch = l, [
              t,
              l
            ];
          },
          useMemoCache: cc,
          useCacheRefresh: function() {
            return ll().memoizedState = x0.bind(null, $);
          }
        }, No = {
          readContext: kt,
          use: mn,
          useCallback: So,
          useContext: kt,
          useEffect: vo,
          useImperativeHandle: po,
          useInsertionEffect: ho,
          useLayoutEffect: go,
          useMemo: _o,
          useReducer: yn,
          useRef: mo,
          useState: function() {
            return yn(Vl);
          },
          useDebugValue: dc,
          useDeferredValue: function(t, l) {
            var e = Ht();
            return To(e, yt.memoizedState, t, l);
          },
          useTransition: function() {
            var t = yn(Vl)[0], l = Ht().memoizedState;
            return [
              typeof t == "boolean" ? t : fu(t),
              l
            ];
          },
          useSyncExternalStore: $s,
          useId: xo,
          useHostTransitionStatus: vc,
          useFormState: so,
          useActionState: so,
          useOptimistic: function(t, l) {
            var e = Ht();
            return eo(e, yt, t, l);
          },
          useMemoCache: cc,
          useCacheRefresh: Mo
        }, O0 = {
          readContext: kt,
          use: mn,
          useCallback: So,
          useContext: kt,
          useEffect: vo,
          useImperativeHandle: po,
          useInsertionEffect: ho,
          useLayoutEffect: go,
          useMemo: _o,
          useReducer: sc,
          useRef: mo,
          useState: function() {
            return sc(Vl);
          },
          useDebugValue: dc,
          useDeferredValue: function(t, l) {
            var e = Ht();
            return yt === null ? mc(e, t, l) : To(e, yt.memoizedState, t, l);
          },
          useTransition: function() {
            var t = sc(Vl)[0], l = Ht().memoizedState;
            return [
              typeof t == "boolean" ? t : fu(t),
              l
            ];
          },
          useSyncExternalStore: $s,
          useId: xo,
          useHostTransitionStatus: vc,
          useFormState: ro,
          useActionState: ro,
          useOptimistic: function(t, l) {
            var e = Ht();
            return yt !== null ? eo(e, yt, t, l) : (e.baseState = t, [
              t,
              e.queue.dispatch
            ]);
          },
          useMemoCache: cc,
          useCacheRefresh: Mo
        }, ba = null, ru = 0;
        function pn(t) {
          var l = ru;
          return ru += 1, ba === null && (ba = []), Qs(ba, t, l);
        }
        function du(t, l) {
          l = l.props.ref, t.ref = l !== void 0 ? l : null;
        }
        function Sn(t, l) {
          throw l.$$typeof === K ? Error(s(525)) : (t = Object.prototype.toString.call(l), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)));
        }
        function Ho(t) {
          var l = t._init;
          return l(t._payload);
        }
        function qo(t) {
          function l(m, d) {
            if (t) {
              var h = m.deletions;
              h === null ? (m.deletions = [
                d
              ], m.flags |= 16) : h.push(d);
            }
          }
          function e(m, d) {
            if (!t) return null;
            for (; d !== null; ) l(m, d), d = d.sibling;
            return null;
          }
          function a(m) {
            for (var d = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? d.set(m.key, m) : d.set(m.index, m), m = m.sibling;
            return d;
          }
          function u(m, d) {
            return m = wl(m, d), m.index = 0, m.sibling = null, m;
          }
          function n(m, d, h) {
            return m.index = h, t ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 67108866, d) : h) : (m.flags |= 67108866, d)) : (m.flags |= 1048576, d);
          }
          function i(m) {
            return t && m.alternate === null && (m.flags |= 67108866), m;
          }
          function c(m, d, h, z) {
            return d === null || d.tag !== 6 ? (d = Yi(h, m.mode, z), d.return = m, d) : (d = u(d, h), d.return = m, d);
          }
          function o(m, d, h, z) {
            var B = h.type;
            return B === P ? A(m, d, h.props.children, z, h.key) : d !== null && (d.elementType === B || typeof B == "object" && B !== null && B.$$typeof === X && Ho(B) === d.type) ? (d = u(d, h.props), du(d, h), d.return = m, d) : (d = ln(h.type, h.key, h.props, null, m.mode, z), du(d, h), d.return = m, d);
          }
          function g(m, d, h, z) {
            return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Gi(h, m.mode, z), d.return = m, d) : (d = u(d, h.children || []), d.return = m, d);
          }
          function A(m, d, h, z, B) {
            return d === null || d.tag !== 7 ? (d = He(h, m.mode, z, B), d.return = m, d) : (d = u(d, h), d.return = m, d);
          }
          function x(m, d, h) {
            if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = Yi("" + d, m.mode, h), d.return = m, d;
            if (typeof d == "object" && d !== null) {
              switch (d.$$typeof) {
                case J:
                  return h = ln(d.type, d.key, d.props, null, m.mode, h), du(h, d), h.return = m, h;
                case st:
                  return d = Gi(d, m.mode, h), d.return = m, d;
                case X:
                  var z = d._init;
                  return d = z(d._payload), x(m, d, h);
              }
              if (Tt(d) || Ot(d)) return d = He(d, m.mode, h, null), d.return = m, d;
              if (typeof d.then == "function") return x(m, pn(d), h);
              if (d.$$typeof === zt) return x(m, nn(m, d), h);
              Sn(m, d);
            }
            return null;
          }
          function b(m, d, h, z) {
            var B = d !== null ? d.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return B !== null ? null : c(m, d, "" + h, z);
            if (typeof h == "object" && h !== null) {
              switch (h.$$typeof) {
                case J:
                  return h.key === B ? o(m, d, h, z) : null;
                case st:
                  return h.key === B ? g(m, d, h, z) : null;
                case X:
                  return B = h._init, h = B(h._payload), b(m, d, h, z);
              }
              if (Tt(h) || Ot(h)) return B !== null ? null : A(m, d, h, z, null);
              if (typeof h.then == "function") return b(m, d, pn(h), z);
              if (h.$$typeof === zt) return b(m, d, nn(m, h), z);
              Sn(m, h);
            }
            return null;
          }
          function p(m, d, h, z, B) {
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return m = m.get(h) || null, c(d, m, "" + z, B);
            if (typeof z == "object" && z !== null) {
              switch (z.$$typeof) {
                case J:
                  return m = m.get(z.key === null ? h : z.key) || null, o(d, m, z, B);
                case st:
                  return m = m.get(z.key === null ? h : z.key) || null, g(d, m, z, B);
                case X:
                  var I = z._init;
                  return z = I(z._payload), p(m, d, h, z, B);
              }
              if (Tt(z) || Ot(z)) return m = m.get(h) || null, A(d, m, z, B, null);
              if (typeof z.then == "function") return p(m, d, h, pn(z), B);
              if (z.$$typeof === zt) return p(m, d, h, nn(d, z), B);
              Sn(d, z);
            }
            return null;
          }
          function V(m, d, h, z) {
            for (var B = null, I = null, j = d, Z = d = 0, Zt = null; j !== null && Z < h.length; Z++) {
              j.index > Z ? (Zt = j, j = null) : Zt = j.sibling;
              var it = b(m, j, h[Z], z);
              if (it === null) {
                j === null && (j = Zt);
                break;
              }
              t && j && it.alternate === null && l(m, j), d = n(it, d, Z), I === null ? B = it : I.sibling = it, I = it, j = Zt;
            }
            if (Z === h.length) return e(m, j), ft && Ce(m, Z), B;
            if (j === null) {
              for (; Z < h.length; Z++) j = x(m, h[Z], z), j !== null && (d = n(j, d, Z), I === null ? B = j : I.sibling = j, I = j);
              return ft && Ce(m, Z), B;
            }
            for (j = a(j); Z < h.length; Z++) Zt = p(j, m, Z, h[Z], z), Zt !== null && (t && Zt.alternate !== null && j.delete(Zt.key === null ? Z : Zt.key), d = n(Zt, d, Z), I === null ? B = Zt : I.sibling = Zt, I = Zt);
            return t && j.forEach(function(Ee) {
              return l(m, Ee);
            }), ft && Ce(m, Z), B;
          }
          function Q(m, d, h, z) {
            if (h == null) throw Error(s(151));
            for (var B = null, I = null, j = d, Z = d = 0, Zt = null, it = h.next(); j !== null && !it.done; Z++, it = h.next()) {
              j.index > Z ? (Zt = j, j = null) : Zt = j.sibling;
              var Ee = b(m, j, it.value, z);
              if (Ee === null) {
                j === null && (j = Zt);
                break;
              }
              t && j && Ee.alternate === null && l(m, j), d = n(Ee, d, Z), I === null ? B = Ee : I.sibling = Ee, I = Ee, j = Zt;
            }
            if (it.done) return e(m, j), ft && Ce(m, Z), B;
            if (j === null) {
              for (; !it.done; Z++, it = h.next()) it = x(m, it.value, z), it !== null && (d = n(it, d, Z), I === null ? B = it : I.sibling = it, I = it);
              return ft && Ce(m, Z), B;
            }
            for (j = a(j); !it.done; Z++, it = h.next()) it = p(j, m, Z, it.value, z), it !== null && (t && it.alternate !== null && j.delete(it.key === null ? Z : it.key), d = n(it, d, Z), I === null ? B = it : I.sibling = it, I = it);
            return t && j.forEach(function(Ry) {
              return l(m, Ry);
            }), ft && Ce(m, Z), B;
          }
          function ht(m, d, h, z) {
            if (typeof h == "object" && h !== null && h.type === P && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
              switch (h.$$typeof) {
                case J:
                  t: {
                    for (var B = h.key; d !== null; ) {
                      if (d.key === B) {
                        if (B = h.type, B === P) {
                          if (d.tag === 7) {
                            e(m, d.sibling), z = u(d, h.props.children), z.return = m, m = z;
                            break t;
                          }
                        } else if (d.elementType === B || typeof B == "object" && B !== null && B.$$typeof === X && Ho(B) === d.type) {
                          e(m, d.sibling), z = u(d, h.props), du(z, h), z.return = m, m = z;
                          break t;
                        }
                        e(m, d);
                        break;
                      } else l(m, d);
                      d = d.sibling;
                    }
                    h.type === P ? (z = He(h.props.children, m.mode, z, h.key), z.return = m, m = z) : (z = ln(h.type, h.key, h.props, null, m.mode, z), du(z, h), z.return = m, m = z);
                  }
                  return i(m);
                case st:
                  t: {
                    for (B = h.key; d !== null; ) {
                      if (d.key === B) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                        e(m, d.sibling), z = u(d, h.children || []), z.return = m, m = z;
                        break t;
                      } else {
                        e(m, d);
                        break;
                      }
                      else l(m, d);
                      d = d.sibling;
                    }
                    z = Gi(h, m.mode, z), z.return = m, m = z;
                  }
                  return i(m);
                case X:
                  return B = h._init, h = B(h._payload), ht(m, d, h, z);
              }
              if (Tt(h)) return V(m, d, h, z);
              if (Ot(h)) {
                if (B = Ot(h), typeof B != "function") throw Error(s(150));
                return h = B.call(h), Q(m, d, h, z);
              }
              if (typeof h.then == "function") return ht(m, d, pn(h), z);
              if (h.$$typeof === zt) return ht(m, d, nn(m, h), z);
              Sn(m, h);
            }
            return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, d !== null && d.tag === 6 ? (e(m, d.sibling), z = u(d, h), z.return = m, m = z) : (e(m, d), z = Yi(h, m.mode, z), z.return = m, m = z), i(m)) : e(m, d);
          }
          return function(m, d, h, z) {
            try {
              ru = 0;
              var B = ht(m, d, h, z);
              return ba = null, B;
            } catch (j) {
              if (j === eu || j === fn) throw j;
              var I = fl(29, j, null, m.mode);
              return I.lanes = z, I.return = m, I;
            } finally {
            }
          };
        }
        var pa = qo(true), Co = qo(false), _l = M(null), Nl = null;
        function oe(t) {
          var l = t.alternate;
          U(Yt, Yt.current & 1), U(_l, t), Nl === null && (l === null || ya.current !== null || l.memoizedState !== null) && (Nl = t);
        }
        function Bo(t) {
          if (t.tag === 22) {
            if (U(Yt, Yt.current), U(_l, t), Nl === null) {
              var l = t.alternate;
              l !== null && l.memoizedState !== null && (Nl = t);
            }
          } else re();
        }
        function re() {
          U(Yt, Yt.current), U(_l, _l.current);
        }
        function Ll(t) {
          q(_l), Nl === t && (Nl = null), q(Yt);
        }
        var Yt = M(0);
        function _n(t) {
          for (var l = t; l !== null; ) {
            if (l.tag === 13) {
              var e = l.memoizedState;
              if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || cf(e))) return l;
            } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
              if ((l.flags & 128) !== 0) return l;
            } else if (l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) return null;
              l = l.return;
            }
            l.sibling.return = l.return, l = l.sibling;
          }
          return null;
        }
        function gc(t, l, e, a) {
          l = t.memoizedState, e = e(a, l), e = e == null ? l : N({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
        }
        var bc = {
          enqueueSetState: function(t, l, e) {
            t = t._reactInternals;
            var a = dl(), u = ce(a);
            u.payload = l, e != null && (u.callback = e), l = fe(t, u, a), l !== null && (ml(l, t, a), uu(l, t, a));
          },
          enqueueReplaceState: function(t, l, e) {
            t = t._reactInternals;
            var a = dl(), u = ce(a);
            u.tag = 1, u.payload = l, e != null && (u.callback = e), l = fe(t, u, a), l !== null && (ml(l, t, a), uu(l, t, a));
          },
          enqueueForceUpdate: function(t, l) {
            t = t._reactInternals;
            var e = dl(), a = ce(e);
            a.tag = 2, l != null && (a.callback = l), l = fe(t, a, e), l !== null && (ml(l, t, e), uu(l, t, e));
          }
        };
        function Yo(t, l, e, a, u, n, i) {
          return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, i) : l.prototype && l.prototype.isPureReactComponent ? !ka(e, a) || !ka(u, n) : true;
        }
        function Go(t, l, e, a) {
          t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && bc.enqueueReplaceState(l, l.state, null);
        }
        function Qe(t, l) {
          var e = l;
          if ("ref" in l) {
            e = {};
            for (var a in l) a !== "ref" && (e[a] = l[a]);
          }
          if (t = t.defaultProps) {
            e === l && (e = N({}, e));
            for (var u in t) e[u] === void 0 && (e[u] = t[u]);
          }
          return e;
        }
        var Tn = typeof reportError == "function" ? reportError : function(t) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var l = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
              error: t
            });
            if (!window.dispatchEvent(l)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
        function wo(t) {
          Tn(t);
        }
        function jo(t) {
          console.error(t);
        }
        function Xo(t) {
          Tn(t);
        }
        function An(t, l) {
          try {
            var e = t.onUncaughtError;
            e(l.value, {
              componentStack: l.stack
            });
          } catch (a) {
            setTimeout(function() {
              throw a;
            });
          }
        }
        function Qo(t, l, e) {
          try {
            var a = t.onCaughtError;
            a(e.value, {
              componentStack: e.stack,
              errorBoundary: l.tag === 1 ? l.stateNode : null
            });
          } catch (u) {
            setTimeout(function() {
              throw u;
            });
          }
        }
        function pc(t, l, e) {
          return e = ce(e), e.tag = 3, e.payload = {
            element: null
          }, e.callback = function() {
            An(t, l);
          }, e;
        }
        function Zo(t) {
          return t = ce(t), t.tag = 3, t;
        }
        function Vo(t, l, e, a) {
          var u = e.type.getDerivedStateFromError;
          if (typeof u == "function") {
            var n = a.value;
            t.payload = function() {
              return u(n);
            }, t.callback = function() {
              Qo(l, e, a);
            };
          }
          var i = e.stateNode;
          i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            Qo(l, e, a), typeof u != "function" && (ge === null ? ge = /* @__PURE__ */ new Set([
              this
            ]) : ge.add(this));
            var c = a.stack;
            this.componentDidCatch(a.value, {
              componentStack: c !== null ? c : ""
            });
          });
        }
        function R0(t, l, e, a, u) {
          if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (l = e.alternate, l !== null && Pa(l, e, u, true), e = _l.current, e !== null) {
              switch (e.tag) {
                case 13:
                  return Nl === null ? Zc() : e.alternate === null && xt === 0 && (xt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === ki ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([
                    a
                  ]) : l.add(a), Lc(t, a, u)), false;
                case 22:
                  return e.flags |= 65536, a === ki ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                    transitions: null,
                    markerInstances: null,
                    retryQueue: /* @__PURE__ */ new Set([
                      a
                    ])
                  }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([
                    a
                  ]) : e.add(a)), Lc(t, a, u)), false;
              }
              throw Error(s(435, e.tag));
            }
            return Lc(t, a, u), Zc(), false;
          }
          if (ft) return l = _l.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== Xi && (t = Error(s(422), {
            cause: a
          }), Ia(gl(t, e)))) : (a !== Xi && (l = Error(s(423), {
            cause: a
          }), Ia(gl(l, e))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = gl(a, e), u = pc(t.stateNode, a, u), Fi(t, u), xt !== 4 && (xt = 2)), false;
          var n = Error(s(520), {
            cause: a
          });
          if (n = gl(n, e), pu === null ? pu = [
            n
          ] : pu.push(n), xt !== 4 && (xt = 2), l === null) return true;
          a = gl(a, e), e = l;
          do {
            switch (e.tag) {
              case 3:
                return e.flags |= 65536, t = u & -u, e.lanes |= t, t = pc(e.stateNode, a, t), Fi(e, t), false;
              case 1:
                if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ge === null || !ge.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Zo(u), Vo(u, t, e, a), Fi(e, u), false;
            }
            e = e.return;
          } while (e !== null);
          return false;
        }
        var Lo = Error(s(461)), Xt = false;
        function Vt(t, l, e, a) {
          l.child = t === null ? Co(l, null, e, a) : pa(l, t.child, e, a);
        }
        function Ko(t, l, e, a, u) {
          e = e.render;
          var n = l.ref;
          if ("ref" in a) {
            var i = {};
            for (var c in a) c !== "ref" && (i[c] = a[c]);
          } else i = a;
          return we(l), a = ec(t, l, e, i, n, u), c = ac(), t !== null && !Xt ? (uc(t, l, u), Kl(t, l, u)) : (ft && c && wi(l), l.flags |= 1, Vt(t, l, a, u), l.child);
        }
        function Jo(t, l, e, a, u) {
          if (t === null) {
            var n = e.type;
            return typeof n == "function" && !Bi(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, ko(t, l, n, a, u)) : (t = ln(e.type, null, a, l, l.mode, u), t.ref = l.ref, t.return = l, l.child = t);
          }
          if (n = t.child, !Mc(t, u)) {
            var i = n.memoizedProps;
            if (e = e.compare, e = e !== null ? e : ka, e(i, a) && t.ref === l.ref) return Kl(t, l, u);
          }
          return l.flags |= 1, t = wl(n, a), t.ref = l.ref, t.return = l, l.child = t;
        }
        function ko(t, l, e, a, u) {
          if (t !== null) {
            var n = t.memoizedProps;
            if (ka(n, a) && t.ref === l.ref) if (Xt = false, l.pendingProps = a = n, Mc(t, u)) (t.flags & 131072) !== 0 && (Xt = true);
            else return l.lanes = t.lanes, Kl(t, l, u);
          }
          return Sc(t, l, e, a, u);
        }
        function Wo(t, l, e) {
          var a = l.pendingProps, u = a.children, n = t !== null ? t.memoizedState : null;
          if (a.mode === "hidden") {
            if ((l.flags & 128) !== 0) {
              if (a = n !== null ? n.baseLanes | e : e, t !== null) {
                for (u = l.child = t.child, n = 0; u !== null; ) n = n | u.lanes | u.childLanes, u = u.sibling;
                l.childLanes = n & ~a;
              } else l.childLanes = 0, l.child = null;
              return $o(t, l, a, e);
            }
            if ((e & 536870912) !== 0) l.memoizedState = {
              baseLanes: 0,
              cachePool: null
            }, t !== null && cn(l, n !== null ? n.cachePool : null), n !== null ? Js(l, n) : Pi(), Bo(l);
            else return l.lanes = l.childLanes = 536870912, $o(t, l, n !== null ? n.baseLanes | e : e, e);
          } else n !== null ? (cn(l, n.cachePool), Js(l, n), re(), l.memoizedState = null) : (t !== null && cn(l, null), Pi(), re());
          return Vt(t, l, u, e), l.child;
        }
        function $o(t, l, e, a) {
          var u = Ji();
          return u = u === null ? null : {
            parent: Bt._currentValue,
            pool: u
          }, l.memoizedState = {
            baseLanes: e,
            cachePool: u
          }, t !== null && cn(l, null), Pi(), Bo(l), t !== null && Pa(t, l, a, true), null;
        }
        function zn(t, l) {
          var e = l.ref;
          if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
          else {
            if (typeof e != "function" && typeof e != "object") throw Error(s(284));
            (t === null || t.ref !== e) && (l.flags |= 4194816);
          }
        }
        function Sc(t, l, e, a, u) {
          return we(l), e = ec(t, l, e, a, void 0, u), a = ac(), t !== null && !Xt ? (uc(t, l, u), Kl(t, l, u)) : (ft && a && wi(l), l.flags |= 1, Vt(t, l, e, u), l.child);
        }
        function Fo(t, l, e, a, u, n) {
          return we(l), l.updateQueue = null, e = Ws(l, a, e, u), ks(t), a = ac(), t !== null && !Xt ? (uc(t, l, n), Kl(t, l, n)) : (ft && a && wi(l), l.flags |= 1, Vt(t, l, e, n), l.child);
        }
        function Io(t, l, e, a, u) {
          if (we(l), l.stateNode === null) {
            var n = sa, i = e.contextType;
            typeof i == "object" && i !== null && (n = kt(i)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = bc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Wi(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? kt(i) : sa, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (gc(l, e, i, a), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && bc.enqueueReplaceState(n, n.state, null), iu(l, a, n, u), nu(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = true;
          } else if (t === null) {
            n = l.stateNode;
            var c = l.memoizedProps, o = Qe(e, c);
            n.props = o;
            var g = n.context, A = e.contextType;
            i = sa, typeof A == "object" && A !== null && (i = kt(A));
            var x = e.getDerivedStateFromProps;
            A = typeof x == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, A || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || g !== i) && Go(l, n, a, i), ie = false;
            var b = l.memoizedState;
            n.state = b, iu(l, a, n, u), nu(), g = l.memoizedState, c || b !== g || ie ? (typeof x == "function" && (gc(l, e, x, a), g = l.memoizedState), (o = ie || Yo(l, e, o, a, b, g, i)) ? (A || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = g), n.props = a, n.state = g, n.context = i, a = o) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = false);
          } else {
            n = l.stateNode, $i(t, l), i = l.memoizedProps, A = Qe(e, i), n.props = A, x = l.pendingProps, b = n.context, g = e.contextType, o = sa, typeof g == "object" && g !== null && (o = kt(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== x || b !== o) && Go(l, n, a, o), ie = false, b = l.memoizedState, n.state = b, iu(l, a, n, u), nu();
            var p = l.memoizedState;
            i !== x || b !== p || ie || t !== null && t.dependencies !== null && un(t.dependencies) ? (typeof c == "function" && (gc(l, e, c, a), p = l.memoizedState), (A = ie || Yo(l, e, A, a, b, p, o) || t !== null && t.dependencies !== null && un(t.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, o), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, p, o)), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && b === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && b === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = p), n.props = a, n.state = p, n.context = o, a = A) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && b === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && b === t.memoizedState || (l.flags |= 1024), a = false);
          }
          return n = a, zn(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = pa(l, t.child, null, u), l.child = pa(l, null, e, u)) : Vt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Kl(t, l, u), t;
        }
        function Po(t, l, e, a) {
          return Fa(), l.flags |= 256, Vt(t, l, e, a), l.child;
        }
        var _c = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null
        };
        function Tc(t) {
          return {
            baseLanes: t,
            cachePool: ws()
          };
        }
        function Ac(t, l, e) {
          return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Tl), t;
        }
        function tr(t, l, e) {
          var a = l.pendingProps, u = false, n = (l.flags & 128) !== 0, i;
          if ((i = n) || (i = t !== null && t.memoizedState === null ? false : (Yt.current & 2) !== 0), i && (u = true, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
            if (ft) {
              if (u ? oe(l) : re(), ft) {
                var c = Et, o;
                if (o = c) {
                  t: {
                    for (o = c, c = Ul; o.nodeType !== 8; ) {
                      if (!c) {
                        c = null;
                        break t;
                      }
                      if (o = Ml(o.nextSibling), o === null) {
                        c = null;
                        break t;
                      }
                    }
                    c = o;
                  }
                  c !== null ? (l.memoizedState = {
                    dehydrated: c,
                    treeContext: qe !== null ? {
                      id: jl,
                      overflow: Xl
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                  }, o = fl(18, null, null, 0), o.stateNode = c, o.return = l, l.child = o, Ft = l, Et = null, o = true) : o = false;
                }
                o || Ye(l);
              }
              if (c = l.memoizedState, c !== null && (c = c.dehydrated, c !== null)) return cf(c) ? l.lanes = 32 : l.lanes = 536870912, null;
              Ll(l);
            }
            return c = a.children, a = a.fallback, u ? (re(), u = l.mode, c = En({
              mode: "hidden",
              children: c
            }, u), a = He(a, u, e, null), c.return = l, a.return = l, c.sibling = a, l.child = c, u = l.child, u.memoizedState = Tc(e), u.childLanes = Ac(t, i, e), l.memoizedState = _c, a) : (oe(l), zc(l, c));
          }
          if (o = t.memoizedState, o !== null && (c = o.dehydrated, c !== null)) {
            if (n) l.flags & 256 ? (oe(l), l.flags &= -257, l = Ec(t, l, e)) : l.memoizedState !== null ? (re(), l.child = t.child, l.flags |= 128, l = null) : (re(), u = a.fallback, c = l.mode, a = En({
              mode: "visible",
              children: a.children
            }, c), u = He(u, c, e, null), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, pa(l, t.child, null, e), a = l.child, a.memoizedState = Tc(e), a.childLanes = Ac(t, i, e), l.memoizedState = _c, l = u);
            else if (oe(l), cf(c)) {
              if (i = c.nextSibling && c.nextSibling.dataset, i) var g = i.dgst;
              i = g, a = Error(s(419)), a.stack = "", a.digest = i, Ia({
                value: a,
                source: null,
                stack: null
              }), l = Ec(t, l, e);
            } else if (Xt || Pa(t, l, e, false), i = (e & t.childLanes) !== 0, Xt || i) {
              if (i = St, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : ci(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane)) throw o.retryLane = a, fa(t, a), ml(i, t, a), Lo;
              c.data === "$?" || Zc(), l = Ec(t, l, e);
            } else c.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = o.treeContext, Et = Ml(c.nextSibling), Ft = l, ft = true, Be = null, Ul = false, t !== null && (pl[Sl++] = jl, pl[Sl++] = Xl, pl[Sl++] = qe, jl = t.id, Xl = t.overflow, qe = l), l = zc(l, a.children), l.flags |= 4096);
            return l;
          }
          return u ? (re(), u = a.fallback, c = l.mode, o = t.child, g = o.sibling, a = wl(o, {
            mode: "hidden",
            children: a.children
          }), a.subtreeFlags = o.subtreeFlags & 65011712, g !== null ? u = wl(g, u) : (u = He(u, c, e, null), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, c = t.child.memoizedState, c === null ? c = Tc(e) : (o = c.cachePool, o !== null ? (g = Bt._currentValue, o = o.parent !== g ? {
            parent: g,
            pool: g
          } : o) : o = ws(), c = {
            baseLanes: c.baseLanes | e,
            cachePool: o
          }), u.memoizedState = c, u.childLanes = Ac(t, i, e), l.memoizedState = _c, a) : (oe(l), e = t.child, t = e.sibling, e = wl(e, {
            mode: "visible",
            children: a.children
          }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [
            t
          ], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
        }
        function zc(t, l) {
          return l = En({
            mode: "visible",
            children: l
          }, t.mode), l.return = t, t.child = l;
        }
        function En(t, l) {
          return t = fl(22, t, null, l), t.lanes = 0, t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
          }, t;
        }
        function Ec(t, l, e) {
          return pa(l, t.child, null, e), t = zc(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t;
        }
        function lr(t, l, e) {
          t.lanes |= l;
          var a = t.alternate;
          a !== null && (a.lanes |= l), Zi(t.return, l, e);
        }
        function xc(t, l, e, a, u) {
          var n = t.memoizedState;
          n === null ? t.memoizedState = {
            isBackwards: l,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: u
          } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = e, n.tailMode = u);
        }
        function er(t, l, e) {
          var a = l.pendingProps, u = a.revealOrder, n = a.tail;
          if (Vt(t, l, a.children, e), a = Yt.current, (a & 2) !== 0) a = a & 1 | 2, l.flags |= 128;
          else {
            if (t !== null && (t.flags & 128) !== 0) t: for (t = l.child; t !== null; ) {
              if (t.tag === 13) t.memoizedState !== null && lr(t, e, l);
              else if (t.tag === 19) lr(t, e, l);
              else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === l) break t;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === l) break t;
                t = t.return;
              }
              t.sibling.return = t.return, t = t.sibling;
            }
            a &= 1;
          }
          switch (U(Yt, a), u) {
            case "forwards":
              for (e = l.child, u = null; e !== null; ) t = e.alternate, t !== null && _n(t) === null && (u = e), e = e.sibling;
              e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), xc(l, false, u, e, n);
              break;
            case "backwards":
              for (e = null, u = l.child, l.child = null; u !== null; ) {
                if (t = u.alternate, t !== null && _n(t) === null) {
                  l.child = u;
                  break;
                }
                t = u.sibling, u.sibling = e, e = u, u = t;
              }
              xc(l, true, e, null, n);
              break;
            case "together":
              xc(l, false, null, null, void 0);
              break;
            default:
              l.memoizedState = null;
          }
          return l.child;
        }
        function Kl(t, l, e) {
          if (t !== null && (l.dependencies = t.dependencies), he |= l.lanes, (e & l.childLanes) === 0) if (t !== null) {
            if (Pa(t, l, e, false), (e & l.childLanes) === 0) return null;
          } else return null;
          if (t !== null && l.child !== t.child) throw Error(s(153));
          if (l.child !== null) {
            for (t = l.child, e = wl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; ) t = t.sibling, e = e.sibling = wl(t, t.pendingProps), e.return = l;
            e.sibling = null;
          }
          return l.child;
        }
        function Mc(t, l) {
          return (t.lanes & l) !== 0 ? true : (t = t.dependencies, !!(t !== null && un(t)));
        }
        function D0(t, l, e) {
          switch (l.tag) {
            case 3:
              bt(l, l.stateNode.containerInfo), ne(l, Bt, t.memoizedState.cache), Fa();
              break;
            case 27:
            case 5:
              Pl(l);
              break;
            case 4:
              bt(l, l.stateNode.containerInfo);
              break;
            case 10:
              ne(l, l.type, l.memoizedProps.value);
              break;
            case 13:
              var a = l.memoizedState;
              if (a !== null) return a.dehydrated !== null ? (oe(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? tr(t, l, e) : (oe(l), t = Kl(t, l, e), t !== null ? t.sibling : null);
              oe(l);
              break;
            case 19:
              var u = (t.flags & 128) !== 0;
              if (a = (e & l.childLanes) !== 0, a || (Pa(t, l, e, false), a = (e & l.childLanes) !== 0), u) {
                if (a) return er(t, l, e);
                l.flags |= 128;
              }
              if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), U(Yt, Yt.current), a) break;
              return null;
            case 22:
            case 23:
              return l.lanes = 0, Wo(t, l, e);
            case 24:
              ne(l, Bt, t.memoizedState.cache);
          }
          return Kl(t, l, e);
        }
        function ar(t, l, e) {
          if (t !== null) if (t.memoizedProps !== l.pendingProps) Xt = true;
          else {
            if (!Mc(t, e) && (l.flags & 128) === 0) return Xt = false, D0(t, l, e);
            Xt = (t.flags & 131072) !== 0;
          }
          else Xt = false, ft && (l.flags & 1048576) !== 0 && Ns(l, an, l.index);
          switch (l.lanes = 0, l.tag) {
            case 16:
              t: {
                t = l.pendingProps;
                var a = l.elementType, u = a._init;
                if (a = u(a._payload), l.type = a, typeof a == "function") Bi(a) ? (t = Qe(a, t), l.tag = 1, l = Io(null, l, a, t, e)) : (l.tag = 0, l = Sc(null, l, a, t, e));
                else {
                  if (a != null) {
                    if (u = a.$$typeof, u === wt) {
                      l.tag = 11, l = Ko(null, l, a, t, e);
                      break t;
                    } else if (u === Ct) {
                      l.tag = 14, l = Jo(null, l, a, t, e);
                      break t;
                    }
                  }
                  throw l = zl(a) || a, Error(s(306, l, ""));
                }
              }
              return l;
            case 0:
              return Sc(t, l, l.type, l.pendingProps, e);
            case 1:
              return a = l.type, u = Qe(a, l.pendingProps), Io(t, l, a, u, e);
            case 3:
              t: {
                if (bt(l, l.stateNode.containerInfo), t === null) throw Error(s(387));
                a = l.pendingProps;
                var n = l.memoizedState;
                u = n.element, $i(t, l), iu(l, a, null, e);
                var i = l.memoizedState;
                if (a = i.cache, ne(l, Bt, a), a !== n.cache && Vi(l, [
                  Bt
                ], e, true), nu(), a = i.element, n.isDehydrated) if (n = {
                  element: a,
                  isDehydrated: false,
                  cache: i.cache
                }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
                  l = Po(t, l, a, e);
                  break t;
                } else if (a !== u) {
                  u = gl(Error(s(424)), l), Ia(u), l = Po(t, l, a, e);
                  break t;
                } else {
                  switch (t = l.stateNode.containerInfo, t.nodeType) {
                    case 9:
                      t = t.body;
                      break;
                    default:
                      t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
                  }
                  for (Et = Ml(t.firstChild), Ft = l, ft = true, Be = null, Ul = true, e = Co(l, null, a, e), l.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
                }
                else {
                  if (Fa(), a === u) {
                    l = Kl(t, l, e);
                    break t;
                  }
                  Vt(t, l, a, e);
                }
                l = l.child;
              }
              return l;
            case 26:
              return zn(t, l), t === null ? (e = cd(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : ft || (e = l.type, t = l.pendingProps, a = wn(L.current).createElement(e), a[Jt] = l, a[Pt] = t, Kt(a, e, t), jt(a), l.stateNode = a) : l.memoizedState = cd(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
            case 27:
              return Pl(l), t === null && ft && (a = l.stateNode = ud(l.type, l.pendingProps, L.current), Ft = l, Ul = true, u = Et, Se(l.type) ? (ff = u, Et = Ml(a.firstChild)) : Et = u), Vt(t, l, l.pendingProps.children, e), zn(t, l), t === null && (l.flags |= 4194304), l.child;
            case 5:
              return t === null && ft && ((u = a = Et) && (a = uy(a, l.type, l.pendingProps, Ul), a !== null ? (l.stateNode = a, Ft = l, Et = Ml(a.firstChild), Ul = false, u = true) : u = false), u || Ye(l)), Pl(l), u = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = n.children, af(u, n) ? a = null : i !== null && af(u, i) && (l.flags |= 32), l.memoizedState !== null && (u = ec(t, l, T0, null, null, e), Ou._currentValue = u), zn(t, l), Vt(t, l, a, e), l.child;
            case 6:
              return t === null && ft && ((t = e = Et) && (e = ny(e, l.pendingProps, Ul), e !== null ? (l.stateNode = e, Ft = l, Et = null, t = true) : t = false), t || Ye(l)), null;
            case 13:
              return tr(t, l, e);
            case 4:
              return bt(l, l.stateNode.containerInfo), a = l.pendingProps, t === null ? l.child = pa(l, null, a, e) : Vt(t, l, a, e), l.child;
            case 11:
              return Ko(t, l, l.type, l.pendingProps, e);
            case 7:
              return Vt(t, l, l.pendingProps, e), l.child;
            case 8:
              return Vt(t, l, l.pendingProps.children, e), l.child;
            case 12:
              return Vt(t, l, l.pendingProps.children, e), l.child;
            case 10:
              return a = l.pendingProps, ne(l, l.type, a.value), Vt(t, l, a.children, e), l.child;
            case 9:
              return u = l.type._context, a = l.pendingProps.children, we(l), u = kt(u), a = a(u), l.flags |= 1, Vt(t, l, a, e), l.child;
            case 14:
              return Jo(t, l, l.type, l.pendingProps, e);
            case 15:
              return ko(t, l, l.type, l.pendingProps, e);
            case 19:
              return er(t, l, e);
            case 31:
              return a = l.pendingProps, e = l.mode, a = {
                mode: a.mode,
                children: a.children
              }, t === null ? (e = En(a, e), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = wl(t.child, a), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
            case 22:
              return Wo(t, l, e);
            case 24:
              return we(l), a = kt(Bt), t === null ? (u = Ji(), u === null && (u = St, n = Li(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
                parent: a,
                cache: u
              }, Wi(l), ne(l, Bt, u)) : ((t.lanes & e) !== 0 && ($i(t, l), iu(l, null, null, e), nu()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = {
                parent: a,
                cache: a
              }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), ne(l, Bt, a)) : (a = n.cache, ne(l, Bt, a), a !== u.cache && Vi(l, [
                Bt
              ], e, true))), Vt(t, l, l.pendingProps.children, e), l.child;
            case 29:
              throw l.pendingProps;
          }
          throw Error(s(156, l.tag));
        }
        function Jl(t) {
          t.flags |= 4;
        }
        function ur(t, l) {
          if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) t.flags &= -16777217;
          else if (t.flags |= 16777216, !dd(l)) {
            if (l = _l.current, l !== null && ((ut & 4194048) === ut ? Nl !== null : (ut & 62914560) !== ut && (ut & 536870912) === 0 || l !== Nl)) throw au = ki, js;
            t.flags |= 8192;
          }
        }
        function xn(t, l) {
          l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Cf() : 536870912, t.lanes |= l, Aa |= l);
        }
        function mu(t, l) {
          if (!ft) switch (t.tailMode) {
            case "hidden":
              l = t.tail;
              for (var e = null; l !== null; ) l.alternate !== null && (e = l), l = l.sibling;
              e === null ? t.tail = null : e.sibling = null;
              break;
            case "collapsed":
              e = t.tail;
              for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
              a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          }
        }
        function At(t) {
          var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
          if (l) for (var u = t.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
          else for (u = t.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
          return t.subtreeFlags |= a, t.childLanes = e, l;
        }
        function U0(t, l, e) {
          var a = l.pendingProps;
          switch (ji(l), l.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return At(l), null;
            case 1:
              return At(l), null;
            case 3:
              return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Zl(Bt), ul(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && ($a(l) ? Jl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Cs())), At(l), null;
            case 26:
              return e = l.memoizedState, t === null ? (Jl(l), e !== null ? (At(l), ur(l, e)) : (At(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Jl(l), At(l), ur(l, e)) : (At(l), l.flags &= -16777217) : (t.memoizedProps !== a && Jl(l), At(l), l.flags &= -16777217), null;
            case 27:
              te(l), e = L.current;
              var u = l.type;
              if (t !== null && l.stateNode != null) t.memoizedProps !== a && Jl(l);
              else {
                if (!a) {
                  if (l.stateNode === null) throw Error(s(166));
                  return At(l), null;
                }
                t = C.current, $a(l) ? Hs(l) : (t = ud(u, a, e), l.stateNode = t, Jl(l));
              }
              return At(l), null;
            case 5:
              if (te(l), e = l.type, t !== null && l.stateNode != null) t.memoizedProps !== a && Jl(l);
              else {
                if (!a) {
                  if (l.stateNode === null) throw Error(s(166));
                  return At(l), null;
                }
                if (t = C.current, $a(l)) Hs(l);
                else {
                  switch (u = wn(L.current), t) {
                    case 1:
                      t = u.createElementNS("http://www.w3.org/2000/svg", e);
                      break;
                    case 2:
                      t = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                      break;
                    default:
                      switch (e) {
                        case "svg":
                          t = u.createElementNS("http://www.w3.org/2000/svg", e);
                          break;
                        case "math":
                          t = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                          break;
                        case "script":
                          t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                          break;
                        case "select":
                          t = typeof a.is == "string" ? u.createElement("select", {
                            is: a.is
                          }) : u.createElement("select"), a.multiple ? t.multiple = true : a.size && (t.size = a.size);
                          break;
                        default:
                          t = typeof a.is == "string" ? u.createElement(e, {
                            is: a.is
                          }) : u.createElement(e);
                      }
                  }
                  t[Jt] = l, t[Pt] = a;
                  t: for (u = l.child; u !== null; ) {
                    if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
                    else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                      u.child.return = u, u = u.child;
                      continue;
                    }
                    if (u === l) break t;
                    for (; u.sibling === null; ) {
                      if (u.return === null || u.return === l) break t;
                      u = u.return;
                    }
                    u.sibling.return = u.return, u = u.sibling;
                  }
                  l.stateNode = t;
                  t: switch (Kt(t, e, a), e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      t = !!a.autoFocus;
                      break t;
                    case "img":
                      t = true;
                      break t;
                    default:
                      t = false;
                  }
                  t && Jl(l);
                }
              }
              return At(l), l.flags &= -16777217, null;
            case 6:
              if (t && l.stateNode != null) t.memoizedProps !== a && Jl(l);
              else {
                if (typeof a != "string" && l.stateNode === null) throw Error(s(166));
                if (t = L.current, $a(l)) {
                  if (t = l.stateNode, e = l.memoizedProps, a = null, u = Ft, u !== null) switch (u.tag) {
                    case 27:
                    case 5:
                      a = u.memoizedProps;
                  }
                  t[Jt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === true || Fr(t.nodeValue, e)), t || Ye(l);
                } else t = wn(t).createTextNode(a), t[Jt] = l, l.stateNode = t;
              }
              return At(l), null;
            case 13:
              if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (u = $a(l), a !== null && a.dehydrated !== null) {
                  if (t === null) {
                    if (!u) throw Error(s(318));
                    if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
                    u[Jt] = l;
                  } else Fa(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                  At(l), u = false;
                } else u = Cs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = true;
                if (!u) return l.flags & 256 ? (Ll(l), l) : (Ll(l), null);
              }
              if (Ll(l), (l.flags & 128) !== 0) return l.lanes = e, l;
              if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
                a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                var n = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048);
              }
              return e !== t && e && (l.child.flags |= 8192), xn(l, l.updateQueue), At(l), null;
            case 4:
              return ul(), t === null && Ic(l.stateNode.containerInfo), At(l), null;
            case 10:
              return Zl(l.type), At(l), null;
            case 19:
              if (q(Yt), u = l.memoizedState, u === null) return At(l), null;
              if (a = (l.flags & 128) !== 0, n = u.rendering, n === null) if (a) mu(u, false);
              else {
                if (xt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = l.child; t !== null; ) {
                  if (n = _n(t), n !== null) {
                    for (l.flags |= 128, mu(u, false), t = n.updateQueue, l.updateQueue = t, xn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; ) Us(e, t), e = e.sibling;
                    return U(Yt, Yt.current & 1 | 2), l.child;
                  }
                  t = t.sibling;
                }
                u.tail !== null && Dl() > Rn && (l.flags |= 128, a = true, mu(u, false), l.lanes = 4194304);
              }
              else {
                if (!a) if (t = _n(n), t !== null) {
                  if (l.flags |= 128, a = true, t = t.updateQueue, l.updateQueue = t, xn(l, t), mu(u, true), u.tail === null && u.tailMode === "hidden" && !n.alternate && !ft) return At(l), null;
                } else 2 * Dl() - u.renderingStartTime > Rn && e !== 536870912 && (l.flags |= 128, a = true, mu(u, false), l.lanes = 4194304);
                u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
              }
              return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Dl(), l.sibling = null, t = Yt.current, U(Yt, a ? t & 1 | 2 : t & 1), l) : (At(l), null);
            case 22:
            case 23:
              return Ll(l), tc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (At(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : At(l), e = l.updateQueue, e !== null && xn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && q(je), null;
            case 24:
              return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Zl(Bt), At(l), null;
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(s(156, l.tag));
        }
        function N0(t, l) {
          switch (ji(l), l.tag) {
            case 1:
              return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
            case 3:
              return Zl(Bt), ul(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
            case 26:
            case 27:
            case 5:
              return te(l), null;
            case 13:
              if (Ll(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
                if (l.alternate === null) throw Error(s(340));
                Fa();
              }
              return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
            case 19:
              return q(Yt), null;
            case 4:
              return ul(), null;
            case 10:
              return Zl(l.type), null;
            case 22:
            case 23:
              return Ll(l), tc(), t !== null && q(je), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
            case 24:
              return Zl(Bt), null;
            case 25:
              return null;
            default:
              return null;
          }
        }
        function nr(t, l) {
          switch (ji(l), l.tag) {
            case 3:
              Zl(Bt), ul();
              break;
            case 26:
            case 27:
            case 5:
              te(l);
              break;
            case 4:
              ul();
              break;
            case 13:
              Ll(l);
              break;
            case 19:
              q(Yt);
              break;
            case 10:
              Zl(l.type);
              break;
            case 22:
            case 23:
              Ll(l), tc(), t !== null && q(je);
              break;
            case 24:
              Zl(Bt);
          }
        }
        function yu(t, l) {
          try {
            var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
            if (a !== null) {
              var u = a.next;
              e = u;
              do {
                if ((e.tag & t) === t) {
                  a = void 0;
                  var n = e.create, i = e.inst;
                  a = n(), i.destroy = a;
                }
                e = e.next;
              } while (e !== u);
            }
          } catch (c) {
            pt(l, l.return, c);
          }
        }
        function de(t, l, e) {
          try {
            var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
            if (u !== null) {
              var n = u.next;
              a = n;
              do {
                if ((a.tag & t) === t) {
                  var i = a.inst, c = i.destroy;
                  if (c !== void 0) {
                    i.destroy = void 0, u = l;
                    var o = e, g = c;
                    try {
                      g();
                    } catch (A) {
                      pt(u, o, A);
                    }
                  }
                }
                a = a.next;
              } while (a !== n);
            }
          } catch (A) {
            pt(l, l.return, A);
          }
        }
        function ir(t) {
          var l = t.updateQueue;
          if (l !== null) {
            var e = t.stateNode;
            try {
              Ks(l, e);
            } catch (a) {
              pt(t, t.return, a);
            }
          }
        }
        function cr(t, l, e) {
          e.props = Qe(t.type, t.memoizedProps), e.state = t.memoizedState;
          try {
            e.componentWillUnmount();
          } catch (a) {
            pt(t, l, a);
          }
        }
        function vu(t, l) {
          try {
            var e = t.ref;
            if (e !== null) {
              switch (t.tag) {
                case 26:
                case 27:
                case 5:
                  var a = t.stateNode;
                  break;
                case 30:
                  a = t.stateNode;
                  break;
                default:
                  a = t.stateNode;
              }
              typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
            }
          } catch (u) {
            pt(t, l, u);
          }
        }
        function Hl(t, l) {
          var e = t.ref, a = t.refCleanup;
          if (e !== null) if (typeof a == "function") try {
            a();
          } catch (u) {
            pt(t, l, u);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
          else if (typeof e == "function") try {
            e(null);
          } catch (u) {
            pt(t, l, u);
          }
          else e.current = null;
        }
        function fr(t) {
          var l = t.type, e = t.memoizedProps, a = t.stateNode;
          try {
            t: switch (l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e.autoFocus && a.focus();
                break t;
              case "img":
                e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
            }
          } catch (u) {
            pt(t, t.return, u);
          }
        }
        function Oc(t, l, e) {
          try {
            var a = t.stateNode;
            P0(a, t.type, e, l), a[Pt] = l;
          } catch (u) {
            pt(t, t.return, u);
          }
        }
        function sr(t) {
          return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Se(t.type) || t.tag === 4;
        }
        function Rc(t) {
          t: for (; ; ) {
            for (; t.sibling === null; ) {
              if (t.return === null || sr(t.return)) return null;
              t = t.return;
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
              if (t.tag === 27 && Se(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
              t.child.return = t, t = t.child;
            }
            if (!(t.flags & 2)) return t.stateNode;
          }
        }
        function Dc(t, l, e) {
          var a = t.tag;
          if (a === 5 || a === 6) t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Gn));
          else if (a !== 4 && (a === 27 && Se(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null)) for (Dc(t, l, e), t = t.sibling; t !== null; ) Dc(t, l, e), t = t.sibling;
        }
        function Mn(t, l, e) {
          var a = t.tag;
          if (a === 5 || a === 6) t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
          else if (a !== 4 && (a === 27 && Se(t.type) && (e = t.stateNode), t = t.child, t !== null)) for (Mn(t, l, e), t = t.sibling; t !== null; ) Mn(t, l, e), t = t.sibling;
        }
        function or(t) {
          var l = t.stateNode, e = t.memoizedProps;
          try {
            for (var a = t.type, u = l.attributes; u.length; ) l.removeAttributeNode(u[0]);
            Kt(l, a, e), l[Jt] = t, l[Pt] = e;
          } catch (n) {
            pt(t, t.return, n);
          }
        }
        var kl = false, Dt = false, Uc = false, rr = typeof WeakSet == "function" ? WeakSet : Set, Qt = null;
        function H0(t, l) {
          if (t = t.containerInfo, lf = Ln, t = _s(t), Ri(t)) {
            if ("selectionStart" in t) var e = {
              start: t.selectionStart,
              end: t.selectionEnd
            };
            else t: {
              e = (e = t.ownerDocument) && e.defaultView || window;
              var a = e.getSelection && e.getSelection();
              if (a && a.rangeCount !== 0) {
                e = a.anchorNode;
                var u = a.anchorOffset, n = a.focusNode;
                a = a.focusOffset;
                try {
                  e.nodeType, n.nodeType;
                } catch {
                  e = null;
                  break t;
                }
                var i = 0, c = -1, o = -1, g = 0, A = 0, x = t, b = null;
                l: for (; ; ) {
                  for (var p; x !== e || u !== 0 && x.nodeType !== 3 || (c = i + u), x !== n || a !== 0 && x.nodeType !== 3 || (o = i + a), x.nodeType === 3 && (i += x.nodeValue.length), (p = x.firstChild) !== null; ) b = x, x = p;
                  for (; ; ) {
                    if (x === t) break l;
                    if (b === e && ++g === u && (c = i), b === n && ++A === a && (o = i), (p = x.nextSibling) !== null) break;
                    x = b, b = x.parentNode;
                  }
                  x = p;
                }
                e = c === -1 || o === -1 ? null : {
                  start: c,
                  end: o
                };
              } else e = null;
            }
            e = e || {
              start: 0,
              end: 0
            };
          } else e = null;
          for (ef = {
            focusedElem: t,
            selectionRange: e
          }, Ln = false, Qt = l; Qt !== null; ) if (l = Qt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null) t.return = l, Qt = t;
          else for (; Qt !== null; ) {
            switch (l = Qt, n = l.alternate, t = l.flags, l.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((t & 1024) !== 0 && n !== null) {
                  t = void 0, e = l, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                  try {
                    var V = Qe(e.type, u, e.elementType === e.type);
                    t = a.getSnapshotBeforeUpdate(V, n), a.__reactInternalSnapshotBeforeUpdate = t;
                  } catch (Q) {
                    pt(e, e.return, Q);
                  }
                }
                break;
              case 3:
                if ((t & 1024) !== 0) {
                  if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9) nf(t);
                  else if (e === 1) switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((t & 1024) !== 0) throw Error(s(163));
            }
            if (t = l.sibling, t !== null) {
              t.return = l.return, Qt = t;
              break;
            }
            Qt = l.return;
          }
        }
        function dr(t, l, e) {
          var a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              me(t, e), a & 4 && yu(5, e);
              break;
            case 1:
              if (me(t, e), a & 4) if (t = e.stateNode, l === null) try {
                t.componentDidMount();
              } catch (i) {
                pt(e, e.return, i);
              }
              else {
                var u = Qe(e.type, l.memoizedProps);
                l = l.memoizedState;
                try {
                  t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
                } catch (i) {
                  pt(e, e.return, i);
                }
              }
              a & 64 && ir(e), a & 512 && vu(e, e.return);
              break;
            case 3:
              if (me(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
                if (l = null, e.child !== null) switch (e.child.tag) {
                  case 27:
                  case 5:
                    l = e.child.stateNode;
                    break;
                  case 1:
                    l = e.child.stateNode;
                }
                try {
                  Ks(t, l);
                } catch (i) {
                  pt(e, e.return, i);
                }
              }
              break;
            case 27:
              l === null && a & 4 && or(e);
            case 26:
            case 5:
              me(t, e), l === null && a & 4 && fr(e), a & 512 && vu(e, e.return);
              break;
            case 12:
              me(t, e);
              break;
            case 13:
              me(t, e), a & 4 && vr(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Q0.bind(null, e), iy(t, e))));
              break;
            case 22:
              if (a = e.memoizedState !== null || kl, !a) {
                l = l !== null && l.memoizedState !== null || Dt, u = kl;
                var n = Dt;
                kl = a, (Dt = l) && !n ? ye(t, e, (e.subtreeFlags & 8772) !== 0) : me(t, e), kl = u, Dt = n;
              }
              break;
            case 30:
              break;
            default:
              me(t, e);
          }
        }
        function mr(t) {
          var l = t.alternate;
          l !== null && (t.alternate = null, mr(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && oi(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
        }
        var _t = null, el = false;
        function Wl(t, l, e) {
          for (e = e.child; e !== null; ) yr(t, l, e), e = e.sibling;
        }
        function yr(t, l, e) {
          if (nl && typeof nl.onCommitFiberUnmount == "function") try {
            nl.onCommitFiberUnmount(Ba, e);
          } catch {
          }
          switch (e.tag) {
            case 26:
              Dt || Hl(e, l), Wl(t, l, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
              break;
            case 27:
              Dt || Hl(e, l);
              var a = _t, u = el;
              Se(e.type) && (_t = e.stateNode, el = false), Wl(t, l, e), zu(e.stateNode), _t = a, el = u;
              break;
            case 5:
              Dt || Hl(e, l);
            case 6:
              if (a = _t, u = el, _t = null, Wl(t, l, e), _t = a, el = u, _t !== null) if (el) try {
                (_t.nodeType === 9 ? _t.body : _t.nodeName === "HTML" ? _t.ownerDocument.body : _t).removeChild(e.stateNode);
              } catch (n) {
                pt(e, l, n);
              }
              else try {
                _t.removeChild(e.stateNode);
              } catch (n) {
                pt(e, l, n);
              }
              break;
            case 18:
              _t !== null && (el ? (t = _t, ed(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode), Nu(t)) : ed(_t, e.stateNode));
              break;
            case 4:
              a = _t, u = el, _t = e.stateNode.containerInfo, el = true, Wl(t, l, e), _t = a, el = u;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Dt || de(2, e, l), Dt || de(4, e, l), Wl(t, l, e);
              break;
            case 1:
              Dt || (Hl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && cr(e, l, a)), Wl(t, l, e);
              break;
            case 21:
              Wl(t, l, e);
              break;
            case 22:
              Dt = (a = Dt) || e.memoizedState !== null, Wl(t, l, e), Dt = a;
              break;
            default:
              Wl(t, l, e);
          }
        }
        function vr(t, l) {
          if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            Nu(t);
          } catch (e) {
            pt(l, l.return, e);
          }
        }
        function q0(t) {
          switch (t.tag) {
            case 13:
            case 19:
              var l = t.stateNode;
              return l === null && (l = t.stateNode = new rr()), l;
            case 22:
              return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new rr()), l;
            default:
              throw Error(s(435, t.tag));
          }
        }
        function Nc(t, l) {
          var e = q0(t);
          l.forEach(function(a) {
            var u = Z0.bind(null, t, a);
            e.has(a) || (e.add(a), a.then(u, u));
          });
        }
        function sl(t, l) {
          var e = l.deletions;
          if (e !== null) for (var a = 0; a < e.length; a++) {
            var u = e[a], n = t, i = l, c = i;
            t: for (; c !== null; ) {
              switch (c.tag) {
                case 27:
                  if (Se(c.type)) {
                    _t = c.stateNode, el = false;
                    break t;
                  }
                  break;
                case 5:
                  _t = c.stateNode, el = false;
                  break t;
                case 3:
                case 4:
                  _t = c.stateNode.containerInfo, el = true;
                  break t;
              }
              c = c.return;
            }
            if (_t === null) throw Error(s(160));
            yr(n, i, u), _t = null, el = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
          }
          if (l.subtreeFlags & 13878) for (l = l.child; l !== null; ) hr(l, t), l = l.sibling;
        }
        var xl = null;
        function hr(t, l) {
          var e = t.alternate, a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              sl(l, t), ol(t), a & 4 && (de(3, t, t.return), yu(3, t), de(5, t, t.return));
              break;
            case 1:
              sl(l, t), ol(t), a & 512 && (Dt || e === null || Hl(e, e.return)), a & 64 && kl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
              break;
            case 26:
              var u = xl;
              if (sl(l, t), ol(t), a & 512 && (Dt || e === null || Hl(e, e.return)), a & 4) {
                var n = e !== null ? e.memoizedState : null;
                if (a = t.memoizedState, e === null) if (a === null) if (t.stateNode === null) {
                  t: {
                    a = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                    l: switch (a) {
                      case "title":
                        n = u.getElementsByTagName("title")[0], (!n || n[wa] || n[Jt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Kt(n, a, e), n[Jt] = t, jt(n), a = n;
                        break t;
                      case "link":
                        var i = od("link", "href", u).get(a + (e.href || ""));
                        if (i) {
                          for (var c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break l;
                          }
                        }
                        n = u.createElement(a), Kt(n, a, e), u.head.appendChild(n);
                        break;
                      case "meta":
                        if (i = od("meta", "content", u).get(a + (e.content || ""))) {
                          for (c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break l;
                          }
                        }
                        n = u.createElement(a), Kt(n, a, e), u.head.appendChild(n);
                        break;
                      default:
                        throw Error(s(468, a));
                    }
                    n[Jt] = t, jt(n), a = n;
                  }
                  t.stateNode = a;
                } else rd(u, t.type, t.stateNode);
                else t.stateNode = sd(u, a, t.memoizedProps);
                else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? rd(u, t.type, t.stateNode) : sd(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && Oc(t, t.memoizedProps, e.memoizedProps);
              }
              break;
            case 27:
              sl(l, t), ol(t), a & 512 && (Dt || e === null || Hl(e, e.return)), e !== null && a & 4 && Oc(t, t.memoizedProps, e.memoizedProps);
              break;
            case 5:
              if (sl(l, t), ol(t), a & 512 && (Dt || e === null || Hl(e, e.return)), t.flags & 32) {
                u = t.stateNode;
                try {
                  la(u, "");
                } catch (p) {
                  pt(t, t.return, p);
                }
              }
              a & 4 && t.stateNode != null && (u = t.memoizedProps, Oc(t, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Uc = true);
              break;
            case 6:
              if (sl(l, t), ol(t), a & 4) {
                if (t.stateNode === null) throw Error(s(162));
                a = t.memoizedProps, e = t.stateNode;
                try {
                  e.nodeValue = a;
                } catch (p) {
                  pt(t, t.return, p);
                }
              }
              break;
            case 3:
              if (Qn = null, u = xl, xl = jn(l.containerInfo), sl(l, t), xl = u, ol(t), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
                Nu(l.containerInfo);
              } catch (p) {
                pt(t, t.return, p);
              }
              Uc && (Uc = false, gr(t));
              break;
            case 4:
              a = xl, xl = jn(t.stateNode.containerInfo), sl(l, t), ol(t), xl = a;
              break;
            case 12:
              sl(l, t), ol(t);
              break;
            case 13:
              sl(l, t), ol(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Gc = Dl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Nc(t, a)));
              break;
            case 22:
              u = t.memoizedState !== null;
              var o = e !== null && e.memoizedState !== null, g = kl, A = Dt;
              if (kl = g || u, Dt = A || o, sl(l, t), Dt = A, kl = g, ol(t), a & 8192) t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || o || kl || Dt || Ze(t)), e = null, l = t; ; ) {
                if (l.tag === 5 || l.tag === 26) {
                  if (e === null) {
                    o = e = l;
                    try {
                      if (n = o.stateNode, u) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                      else {
                        c = o.stateNode;
                        var x = o.memoizedProps.style, b = x != null && x.hasOwnProperty("display") ? x.display : null;
                        c.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
                      }
                    } catch (p) {
                      pt(o, o.return, p);
                    }
                  }
                } else if (l.tag === 6) {
                  if (e === null) {
                    o = l;
                    try {
                      o.stateNode.nodeValue = u ? "" : o.memoizedProps;
                    } catch (p) {
                      pt(o, o.return, p);
                    }
                  }
                } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
                  l.child.return = l, l = l.child;
                  continue;
                }
                if (l === t) break t;
                for (; l.sibling === null; ) {
                  if (l.return === null || l.return === t) break t;
                  e === l && (e = null), l = l.return;
                }
                e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
              }
              a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Nc(t, e))));
              break;
            case 19:
              sl(l, t), ol(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Nc(t, a)));
              break;
            case 30:
              break;
            case 21:
              break;
            default:
              sl(l, t), ol(t);
          }
        }
        function ol(t) {
          var l = t.flags;
          if (l & 2) {
            try {
              for (var e, a = t.return; a !== null; ) {
                if (sr(a)) {
                  e = a;
                  break;
                }
                a = a.return;
              }
              if (e == null) throw Error(s(160));
              switch (e.tag) {
                case 27:
                  var u = e.stateNode, n = Rc(t);
                  Mn(t, n, u);
                  break;
                case 5:
                  var i = e.stateNode;
                  e.flags & 32 && (la(i, ""), e.flags &= -33);
                  var c = Rc(t);
                  Mn(t, c, i);
                  break;
                case 3:
                case 4:
                  var o = e.stateNode.containerInfo, g = Rc(t);
                  Dc(t, g, o);
                  break;
                default:
                  throw Error(s(161));
              }
            } catch (A) {
              pt(t, t.return, A);
            }
            t.flags &= -3;
          }
          l & 4096 && (t.flags &= -4097);
        }
        function gr(t) {
          if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
            var l = t;
            gr(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
          }
        }
        function me(t, l) {
          if (l.subtreeFlags & 8772) for (l = l.child; l !== null; ) dr(t, l.alternate, l), l = l.sibling;
        }
        function Ze(t) {
          for (t = t.child; t !== null; ) {
            var l = t;
            switch (l.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                de(4, l, l.return), Ze(l);
                break;
              case 1:
                Hl(l, l.return);
                var e = l.stateNode;
                typeof e.componentWillUnmount == "function" && cr(l, l.return, e), Ze(l);
                break;
              case 27:
                zu(l.stateNode);
              case 26:
              case 5:
                Hl(l, l.return), Ze(l);
                break;
              case 22:
                l.memoizedState === null && Ze(l);
                break;
              case 30:
                Ze(l);
                break;
              default:
                Ze(l);
            }
            t = t.sibling;
          }
        }
        function ye(t, l, e) {
          for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
            var a = l.alternate, u = t, n = l, i = n.flags;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ye(u, n, e), yu(4, n);
                break;
              case 1:
                if (ye(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
                  u.componentDidMount();
                } catch (g) {
                  pt(a, a.return, g);
                }
                if (a = n, u = a.updateQueue, u !== null) {
                  var c = a.stateNode;
                  try {
                    var o = u.shared.hiddenCallbacks;
                    if (o !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < o.length; u++) Ls(o[u], c);
                  } catch (g) {
                    pt(a, a.return, g);
                  }
                }
                e && i & 64 && ir(n), vu(n, n.return);
                break;
              case 27:
                or(n);
              case 26:
              case 5:
                ye(u, n, e), e && a === null && i & 4 && fr(n), vu(n, n.return);
                break;
              case 12:
                ye(u, n, e);
                break;
              case 13:
                ye(u, n, e), e && i & 4 && vr(u, n);
                break;
              case 22:
                n.memoizedState === null && ye(u, n, e), vu(n, n.return);
                break;
              case 30:
                break;
              default:
                ye(u, n, e);
            }
            l = l.sibling;
          }
        }
        function Hc(t, l) {
          var e = null;
          t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && tu(e));
        }
        function qc(t, l) {
          t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && tu(t));
        }
        function ql(t, l, e, a) {
          if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) br(t, l, e, a), l = l.sibling;
        }
        function br(t, l, e, a) {
          var u = l.flags;
          switch (l.tag) {
            case 0:
            case 11:
            case 15:
              ql(t, l, e, a), u & 2048 && yu(9, l);
              break;
            case 1:
              ql(t, l, e, a);
              break;
            case 3:
              ql(t, l, e, a), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && tu(t)));
              break;
            case 12:
              if (u & 2048) {
                ql(t, l, e, a), t = l.stateNode;
                try {
                  var n = l.memoizedProps, i = n.id, c = n.onPostCommit;
                  typeof c == "function" && c(i, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
                } catch (o) {
                  pt(l, l.return, o);
                }
              } else ql(t, l, e, a);
              break;
            case 13:
              ql(t, l, e, a);
              break;
            case 23:
              break;
            case 22:
              n = l.stateNode, i = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? ql(t, l, e, a) : hu(t, l) : n._visibility & 2 ? ql(t, l, e, a) : (n._visibility |= 2, Sa(t, l, e, a, (l.subtreeFlags & 10256) !== 0)), u & 2048 && Hc(i, l);
              break;
            case 24:
              ql(t, l, e, a), u & 2048 && qc(l.alternate, l);
              break;
            default:
              ql(t, l, e, a);
          }
        }
        function Sa(t, l, e, a, u) {
          for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
            var n = t, i = l, c = e, o = a, g = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Sa(n, i, c, o, u), yu(8, i);
                break;
              case 23:
                break;
              case 22:
                var A = i.stateNode;
                i.memoizedState !== null ? A._visibility & 2 ? Sa(n, i, c, o, u) : hu(n, i) : (A._visibility |= 2, Sa(n, i, c, o, u)), u && g & 2048 && Hc(i.alternate, i);
                break;
              case 24:
                Sa(n, i, c, o, u), u && g & 2048 && qc(i.alternate, i);
                break;
              default:
                Sa(n, i, c, o, u);
            }
            l = l.sibling;
          }
        }
        function hu(t, l) {
          if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) {
            var e = t, a = l, u = a.flags;
            switch (a.tag) {
              case 22:
                hu(e, a), u & 2048 && Hc(a.alternate, a);
                break;
              case 24:
                hu(e, a), u & 2048 && qc(a.alternate, a);
                break;
              default:
                hu(e, a);
            }
            l = l.sibling;
          }
        }
        var gu = 8192;
        function _a(t) {
          if (t.subtreeFlags & gu) for (t = t.child; t !== null; ) pr(t), t = t.sibling;
        }
        function pr(t) {
          switch (t.tag) {
            case 26:
              _a(t), t.flags & gu && t.memoizedState !== null && py(xl, t.memoizedState, t.memoizedProps);
              break;
            case 5:
              _a(t);
              break;
            case 3:
            case 4:
              var l = xl;
              xl = jn(t.stateNode.containerInfo), _a(t), xl = l;
              break;
            case 22:
              t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = gu, gu = 16777216, _a(t), gu = l) : _a(t));
              break;
            default:
              _a(t);
          }
        }
        function Sr(t) {
          var l = t.alternate;
          if (l !== null && (t = l.child, t !== null)) {
            l.child = null;
            do
              l = t.sibling, t.sibling = null, t = l;
            while (t !== null);
          }
        }
        function bu(t) {
          var l = t.deletions;
          if ((t.flags & 16) !== 0) {
            if (l !== null) for (var e = 0; e < l.length; e++) {
              var a = l[e];
              Qt = a, Tr(a, t);
            }
            Sr(t);
          }
          if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) _r(t), t = t.sibling;
        }
        function _r(t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              bu(t), t.flags & 2048 && de(9, t, t.return);
              break;
            case 3:
              bu(t);
              break;
            case 12:
              bu(t);
              break;
            case 22:
              var l = t.stateNode;
              t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, On(t)) : bu(t);
              break;
            default:
              bu(t);
          }
        }
        function On(t) {
          var l = t.deletions;
          if ((t.flags & 16) !== 0) {
            if (l !== null) for (var e = 0; e < l.length; e++) {
              var a = l[e];
              Qt = a, Tr(a, t);
            }
            Sr(t);
          }
          for (t = t.child; t !== null; ) {
            switch (l = t, l.tag) {
              case 0:
              case 11:
              case 15:
                de(8, l, l.return), On(l);
                break;
              case 22:
                e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, On(l));
                break;
              default:
                On(l);
            }
            t = t.sibling;
          }
        }
        function Tr(t, l) {
          for (; Qt !== null; ) {
            var e = Qt;
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                de(8, e, l);
                break;
              case 23:
              case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                  var a = e.memoizedState.cachePool.pool;
                  a != null && a.refCount++;
                }
                break;
              case 24:
                tu(e.memoizedState.cache);
            }
            if (a = e.child, a !== null) a.return = e, Qt = a;
            else t: for (e = t; Qt !== null; ) {
              a = Qt;
              var u = a.sibling, n = a.return;
              if (mr(a), a === e) {
                Qt = null;
                break t;
              }
              if (u !== null) {
                u.return = n, Qt = u;
                break t;
              }
              Qt = n;
            }
          }
        }
        var C0 = {
          getCacheForType: function(t) {
            var l = kt(Bt), e = l.data.get(t);
            return e === void 0 && (e = t(), l.data.set(t, e)), e;
          }
        }, B0 = typeof WeakMap == "function" ? WeakMap : Map, dt = 0, St = null, lt = null, ut = 0, mt = 0, rl = null, ve = false, Ta = false, Cc = false, $l = 0, xt = 0, he = 0, Ve = 0, Bc = 0, Tl = 0, Aa = 0, pu = null, al = null, Yc = false, Gc = 0, Rn = 1 / 0, Dn = null, ge = null, Lt = 0, be = null, za = null, Ea = 0, wc = 0, jc = null, Ar = null, Su = 0, Xc = null;
        function dl() {
          if ((dt & 2) !== 0 && ut !== 0) return ut & -ut;
          if (T.T !== null) {
            var t = da;
            return t !== 0 ? t : kc();
          }
          return Gf();
        }
        function zr() {
          Tl === 0 && (Tl = (ut & 536870912) === 0 || ft ? qf() : 536870912);
          var t = _l.current;
          return t !== null && (t.flags |= 32), Tl;
        }
        function ml(t, l, e) {
          (t === St && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (xa(t, 0), pe(t, ut, Tl, false)), Ga(t, e), ((dt & 2) === 0 || t !== St) && (t === St && ((dt & 2) === 0 && (Ve |= e), xt === 4 && pe(t, ut, Tl, false)), Cl(t));
        }
        function Er(t, l, e) {
          if ((dt & 6) !== 0) throw Error(s(327));
          var a = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || Ya(t, l), u = a ? w0(t, l) : Vc(t, l, true), n = a;
          do {
            if (u === 0) {
              Ta && !a && pe(t, l, 0, false);
              break;
            } else {
              if (e = t.current.alternate, n && !Y0(e)) {
                u = Vc(t, l, false), n = false;
                continue;
              }
              if (u === 2) {
                if (n = l, t.errorRecoveryDisabledLanes & n) var i = 0;
                else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                if (i !== 0) {
                  l = i;
                  t: {
                    var c = t;
                    u = pu;
                    var o = c.current.memoizedState.isDehydrated;
                    if (o && (xa(c, i).flags |= 256), i = Vc(c, i, false), i !== 2) {
                      if (Cc && !o) {
                        c.errorRecoveryDisabledLanes |= n, Ve |= n, u = 4;
                        break t;
                      }
                      n = al, al = u, n !== null && (al === null ? al = n : al.push.apply(al, n));
                    }
                    u = i;
                  }
                  if (n = false, u !== 2) continue;
                }
              }
              if (u === 1) {
                xa(t, 0), pe(t, l, 0, true);
                break;
              }
              t: {
                switch (a = t, n = u, n) {
                  case 0:
                  case 1:
                    throw Error(s(345));
                  case 4:
                    if ((l & 4194048) !== l) break;
                  case 6:
                    pe(a, l, Tl, !ve);
                    break t;
                  case 2:
                    al = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(s(329));
                }
                if ((l & 62914560) === l && (u = Gc + 300 - Dl(), 10 < u)) {
                  if (pe(a, l, Tl, !ve), ju(a, 0, true) !== 0) break t;
                  a.timeoutHandle = td(xr.bind(null, a, e, al, Dn, Yc, l, Tl, Ve, Aa, ve, n, 2, -0, 0), u);
                  break t;
                }
                xr(a, e, al, Dn, Yc, l, Tl, Ve, Aa, ve, n, 0, -0, 0);
              }
            }
            break;
          } while (true);
          Cl(t);
        }
        function xr(t, l, e, a, u, n, i, c, o, g, A, x, b, p) {
          if (t.timeoutHandle = -1, x = l.subtreeFlags, (x & 8192 || (x & 16785408) === 16785408) && (Mu = {
            stylesheets: null,
            count: 0,
            unsuspend: by
          }, pr(l), x = Sy(), x !== null)) {
            t.cancelPendingCommit = x(Hr.bind(null, t, l, n, e, a, u, i, c, o, A, 1, b, p)), pe(t, n, i, !g);
            return;
          }
          Hr(t, l, n, e, a, u, i, c, o);
        }
        function Y0(t) {
          for (var l = t; ; ) {
            var e = l.tag;
            if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
              var u = e[a], n = u.getSnapshot;
              u = u.value;
              try {
                if (!cl(n(), u)) return false;
              } catch {
                return false;
              }
            }
            if (e = l.child, l.subtreeFlags & 16384 && e !== null) e.return = l, l = e;
            else {
              if (l === t) break;
              for (; l.sibling === null; ) {
                if (l.return === null || l.return === t) return true;
                l = l.return;
              }
              l.sibling.return = l.return, l = l.sibling;
            }
          }
          return true;
        }
        function pe(t, l, e, a) {
          l &= ~Bc, l &= ~Ve, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
          for (var u = l; 0 < u; ) {
            var n = 31 - il(u), i = 1 << n;
            a[n] = -1, u &= ~i;
          }
          e !== 0 && Bf(t, e, l);
        }
        function Un() {
          return (dt & 6) === 0 ? (_u(0), false) : true;
        }
        function Qc() {
          if (lt !== null) {
            if (mt === 0) var t = lt.return;
            else t = lt, Ql = Ge = null, nc(t), ba = null, ru = 0, t = lt;
            for (; t !== null; ) nr(t.alternate, t), t = t.return;
            lt = null;
          }
        }
        function xa(t, l) {
          var e = t.timeoutHandle;
          e !== -1 && (t.timeoutHandle = -1, ly(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Qc(), St = t, lt = e = wl(t.current, null), ut = l, mt = 0, rl = null, ve = false, Ta = Ya(t, l), Cc = false, Aa = Tl = Bc = Ve = he = xt = 0, al = pu = null, Yc = false, (l & 8) !== 0 && (l |= l & 32);
          var a = t.entangledLanes;
          if (a !== 0) for (t = t.entanglements, a &= l; 0 < a; ) {
            var u = 31 - il(a), n = 1 << u;
            l |= t[u], a &= ~n;
          }
          return $l = l, Iu(), e;
        }
        function Mr(t, l) {
          $ = null, T.H = bn, l === eu || l === fn ? (l = Zs(), mt = 3) : l === js ? (l = Zs(), mt = 4) : mt = l === Lo ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, rl = l, lt === null && (xt = 1, An(t, gl(l, t.current)));
        }
        function Or() {
          var t = T.H;
          return T.H = bn, t === null ? bn : t;
        }
        function Rr() {
          var t = T.A;
          return T.A = C0, t;
        }
        function Zc() {
          xt = 4, ve || (ut & 4194048) !== ut && _l.current !== null || (Ta = true), (he & 134217727) === 0 && (Ve & 134217727) === 0 || St === null || pe(St, ut, Tl, false);
        }
        function Vc(t, l, e) {
          var a = dt;
          dt |= 2;
          var u = Or(), n = Rr();
          (St !== t || ut !== l) && (Dn = null, xa(t, l)), l = false;
          var i = xt;
          t: do
            try {
              if (mt !== 0 && lt !== null) {
                var c = lt, o = rl;
                switch (mt) {
                  case 8:
                    Qc(), i = 6;
                    break t;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    _l.current === null && (l = true);
                    var g = mt;
                    if (mt = 0, rl = null, Ma(t, c, o, g), e && Ta) {
                      i = 0;
                      break t;
                    }
                    break;
                  default:
                    g = mt, mt = 0, rl = null, Ma(t, c, o, g);
                }
              }
              G0(), i = xt;
              break;
            } catch (A) {
              Mr(t, A);
            }
          while (true);
          return l && t.shellSuspendCounter++, Ql = Ge = null, dt = a, T.H = u, T.A = n, lt === null && (St = null, ut = 0, Iu()), i;
        }
        function G0() {
          for (; lt !== null; ) Dr(lt);
        }
        function w0(t, l) {
          var e = dt;
          dt |= 2;
          var a = Or(), u = Rr();
          St !== t || ut !== l ? (Dn = null, Rn = Dl() + 500, xa(t, l)) : Ta = Ya(t, l);
          t: do
            try {
              if (mt !== 0 && lt !== null) {
                l = lt;
                var n = rl;
                l: switch (mt) {
                  case 1:
                    mt = 0, rl = null, Ma(t, l, n, 1);
                    break;
                  case 2:
                  case 9:
                    if (Xs(n)) {
                      mt = 0, rl = null, Ur(l);
                      break;
                    }
                    l = function() {
                      mt !== 2 && mt !== 9 || St !== t || (mt = 7), Cl(t);
                    }, n.then(l, l);
                    break t;
                  case 3:
                    mt = 7;
                    break t;
                  case 4:
                    mt = 5;
                    break t;
                  case 7:
                    Xs(n) ? (mt = 0, rl = null, Ur(l)) : (mt = 0, rl = null, Ma(t, l, n, 7));
                    break;
                  case 5:
                    var i = null;
                    switch (lt.tag) {
                      case 26:
                        i = lt.memoizedState;
                      case 5:
                      case 27:
                        var c = lt;
                        if (!i || dd(i)) {
                          mt = 0, rl = null;
                          var o = c.sibling;
                          if (o !== null) lt = o;
                          else {
                            var g = c.return;
                            g !== null ? (lt = g, Nn(g)) : lt = null;
                          }
                          break l;
                        }
                    }
                    mt = 0, rl = null, Ma(t, l, n, 5);
                    break;
                  case 6:
                    mt = 0, rl = null, Ma(t, l, n, 6);
                    break;
                  case 8:
                    Qc(), xt = 6;
                    break t;
                  default:
                    throw Error(s(462));
                }
              }
              j0();
              break;
            } catch (A) {
              Mr(t, A);
            }
          while (true);
          return Ql = Ge = null, T.H = a, T.A = u, dt = e, lt !== null ? 0 : (St = null, ut = 0, Iu(), xt);
        }
        function j0() {
          for (; lt !== null && !fm(); ) Dr(lt);
        }
        function Dr(t) {
          var l = ar(t.alternate, t, $l);
          t.memoizedProps = t.pendingProps, l === null ? Nn(t) : lt = l;
        }
        function Ur(t) {
          var l = t, e = l.alternate;
          switch (l.tag) {
            case 15:
            case 0:
              l = Fo(e, l, l.pendingProps, l.type, void 0, ut);
              break;
            case 11:
              l = Fo(e, l, l.pendingProps, l.type.render, l.ref, ut);
              break;
            case 5:
              nc(l);
            default:
              nr(e, l), l = lt = Us(l, $l), l = ar(e, l, $l);
          }
          t.memoizedProps = t.pendingProps, l === null ? Nn(t) : lt = l;
        }
        function Ma(t, l, e, a) {
          Ql = Ge = null, nc(l), ba = null, ru = 0;
          var u = l.return;
          try {
            if (R0(t, u, l, e, ut)) {
              xt = 1, An(t, gl(e, t.current)), lt = null;
              return;
            }
          } catch (n) {
            if (u !== null) throw lt = u, n;
            xt = 1, An(t, gl(e, t.current)), lt = null;
            return;
          }
          l.flags & 32768 ? (ft || a === 1 ? t = true : Ta || (ut & 536870912) !== 0 ? t = false : (ve = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = _l.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Nr(l, t)) : Nn(l);
        }
        function Nn(t) {
          var l = t;
          do {
            if ((l.flags & 32768) !== 0) {
              Nr(l, ve);
              return;
            }
            t = l.return;
            var e = U0(l.alternate, l, $l);
            if (e !== null) {
              lt = e;
              return;
            }
            if (l = l.sibling, l !== null) {
              lt = l;
              return;
            }
            lt = l = t;
          } while (l !== null);
          xt === 0 && (xt = 5);
        }
        function Nr(t, l) {
          do {
            var e = N0(t.alternate, t);
            if (e !== null) {
              e.flags &= 32767, lt = e;
              return;
            }
            if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
              lt = t;
              return;
            }
            lt = t = e;
          } while (t !== null);
          xt = 6, lt = null;
        }
        function Hr(t, l, e, a, u, n, i, c, o) {
          t.cancelPendingCommit = null;
          do
            Hn();
          while (Lt !== 0);
          if ((dt & 6) !== 0) throw Error(s(327));
          if (l !== null) {
            if (l === t.current) throw Error(s(177));
            if (n = l.lanes | l.childLanes, n |= qi, bm(t, e, n, i, c, o), t === St && (lt = St = null, ut = 0), za = l, be = t, Ea = e, wc = n, jc = u, Ar = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, V0(Yu, function() {
              return Gr(), null;
            })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
              a = T.T, T.T = null, u = H.p, H.p = 2, i = dt, dt |= 4;
              try {
                H0(t, l, e);
              } finally {
                dt = i, H.p = u, T.T = a;
              }
            }
            Lt = 1, qr(), Cr(), Br();
          }
        }
        function qr() {
          if (Lt === 1) {
            Lt = 0;
            var t = be, l = za, e = (l.flags & 13878) !== 0;
            if ((l.subtreeFlags & 13878) !== 0 || e) {
              e = T.T, T.T = null;
              var a = H.p;
              H.p = 2;
              var u = dt;
              dt |= 4;
              try {
                hr(l, t);
                var n = ef, i = _s(t.containerInfo), c = n.focusedElem, o = n.selectionRange;
                if (i !== c && c && c.ownerDocument && Ss(c.ownerDocument.documentElement, c)) {
                  if (o !== null && Ri(c)) {
                    var g = o.start, A = o.end;
                    if (A === void 0 && (A = g), "selectionStart" in c) c.selectionStart = g, c.selectionEnd = Math.min(A, c.value.length);
                    else {
                      var x = c.ownerDocument || document, b = x && x.defaultView || window;
                      if (b.getSelection) {
                        var p = b.getSelection(), V = c.textContent.length, Q = Math.min(o.start, V), ht = o.end === void 0 ? Q : Math.min(o.end, V);
                        !p.extend && Q > ht && (i = ht, ht = Q, Q = i);
                        var m = ps(c, Q), d = ps(c, ht);
                        if (m && d && (p.rangeCount !== 1 || p.anchorNode !== m.node || p.anchorOffset !== m.offset || p.focusNode !== d.node || p.focusOffset !== d.offset)) {
                          var h = x.createRange();
                          h.setStart(m.node, m.offset), p.removeAllRanges(), Q > ht ? (p.addRange(h), p.extend(d.node, d.offset)) : (h.setEnd(d.node, d.offset), p.addRange(h));
                        }
                      }
                    }
                  }
                  for (x = [], p = c; p = p.parentNode; ) p.nodeType === 1 && x.push({
                    element: p,
                    left: p.scrollLeft,
                    top: p.scrollTop
                  });
                  for (typeof c.focus == "function" && c.focus(), c = 0; c < x.length; c++) {
                    var z = x[c];
                    z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
                  }
                }
                Ln = !!lf, ef = lf = null;
              } finally {
                dt = u, H.p = a, T.T = e;
              }
            }
            t.current = l, Lt = 2;
          }
        }
        function Cr() {
          if (Lt === 2) {
            Lt = 0;
            var t = be, l = za, e = (l.flags & 8772) !== 0;
            if ((l.subtreeFlags & 8772) !== 0 || e) {
              e = T.T, T.T = null;
              var a = H.p;
              H.p = 2;
              var u = dt;
              dt |= 4;
              try {
                dr(t, l.alternate, l);
              } finally {
                dt = u, H.p = a, T.T = e;
              }
            }
            Lt = 3;
          }
        }
        function Br() {
          if (Lt === 4 || Lt === 3) {
            Lt = 0, sm();
            var t = be, l = za, e = Ea, a = Ar;
            (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Lt = 5 : (Lt = 0, za = be = null, Yr(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (ge = null), fi(e), l = l.stateNode, nl && typeof nl.onCommitFiberRoot == "function") try {
              nl.onCommitFiberRoot(Ba, l, void 0, (l.current.flags & 128) === 128);
            } catch {
            }
            if (a !== null) {
              l = T.T, u = H.p, H.p = 2, T.T = null;
              try {
                for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
                  var c = a[i];
                  n(c.value, {
                    componentStack: c.stack
                  });
                }
              } finally {
                T.T = l, H.p = u;
              }
            }
            (Ea & 3) !== 0 && Hn(), Cl(t), u = t.pendingLanes, (e & 4194090) !== 0 && (u & 42) !== 0 ? t === Xc ? Su++ : (Su = 0, Xc = t) : Su = 0, _u(0);
          }
        }
        function Yr(t, l) {
          (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, tu(l)));
        }
        function Hn(t) {
          return qr(), Cr(), Br(), Gr();
        }
        function Gr() {
          if (Lt !== 5) return false;
          var t = be, l = wc;
          wc = 0;
          var e = fi(Ea), a = T.T, u = H.p;
          try {
            H.p = 32 > e ? 32 : e, T.T = null, e = jc, jc = null;
            var n = be, i = Ea;
            if (Lt = 0, za = be = null, Ea = 0, (dt & 6) !== 0) throw Error(s(331));
            var c = dt;
            if (dt |= 4, _r(n.current), br(n, n.current, i, e), dt = c, _u(0, false), nl && typeof nl.onPostCommitFiberRoot == "function") try {
              nl.onPostCommitFiberRoot(Ba, n);
            } catch {
            }
            return true;
          } finally {
            H.p = u, T.T = a, Yr(t, l);
          }
        }
        function wr(t, l, e) {
          l = gl(e, l), l = pc(t.stateNode, l, 2), t = fe(t, l, 2), t !== null && (Ga(t, 2), Cl(t));
        }
        function pt(t, l, e) {
          if (t.tag === 3) wr(t, t, e);
          else for (; l !== null; ) {
            if (l.tag === 3) {
              wr(l, t, e);
              break;
            } else if (l.tag === 1) {
              var a = l.stateNode;
              if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ge === null || !ge.has(a))) {
                t = gl(e, t), e = Zo(2), a = fe(l, e, 2), a !== null && (Vo(e, a, l, t), Ga(a, 2), Cl(a));
                break;
              }
            }
            l = l.return;
          }
        }
        function Lc(t, l, e) {
          var a = t.pingCache;
          if (a === null) {
            a = t.pingCache = new B0();
            var u = /* @__PURE__ */ new Set();
            a.set(l, u);
          } else u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
          u.has(e) || (Cc = true, u.add(e), t = X0.bind(null, t, l, e), l.then(t, t));
        }
        function X0(t, l, e) {
          var a = t.pingCache;
          a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, St === t && (ut & e) === e && (xt === 4 || xt === 3 && (ut & 62914560) === ut && 300 > Dl() - Gc ? (dt & 2) === 0 && xa(t, 0) : Bc |= e, Aa === ut && (Aa = 0)), Cl(t);
        }
        function jr(t, l) {
          l === 0 && (l = Cf()), t = fa(t, l), t !== null && (Ga(t, l), Cl(t));
        }
        function Q0(t) {
          var l = t.memoizedState, e = 0;
          l !== null && (e = l.retryLane), jr(t, e);
        }
        function Z0(t, l) {
          var e = 0;
          switch (t.tag) {
            case 13:
              var a = t.stateNode, u = t.memoizedState;
              u !== null && (e = u.retryLane);
              break;
            case 19:
              a = t.stateNode;
              break;
            case 22:
              a = t.stateNode._retryCache;
              break;
            default:
              throw Error(s(314));
          }
          a !== null && a.delete(l), jr(t, e);
        }
        function V0(t, l) {
          return ui(t, l);
        }
        var qn = null, Oa = null, Kc = false, Cn = false, Jc = false, Le = 0;
        function Cl(t) {
          t !== Oa && t.next === null && (Oa === null ? qn = Oa = t : Oa = Oa.next = t), Cn = true, Kc || (Kc = true, K0());
        }
        function _u(t, l) {
          if (!Jc && Cn) {
            Jc = true;
            do
              for (var e = false, a = qn; a !== null; ) {
                if (t !== 0) {
                  var u = a.pendingLanes;
                  if (u === 0) var n = 0;
                  else {
                    var i = a.suspendedLanes, c = a.pingedLanes;
                    n = (1 << 31 - il(42 | t) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
                  }
                  n !== 0 && (e = true, Vr(a, n));
                } else n = ut, n = ju(a, a === St ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ya(a, n) || (e = true, Vr(a, n));
                a = a.next;
              }
            while (e);
            Jc = false;
          }
        }
        function L0() {
          Xr();
        }
        function Xr() {
          Cn = Kc = false;
          var t = 0;
          Le !== 0 && (ty() && (t = Le), Le = 0);
          for (var l = Dl(), e = null, a = qn; a !== null; ) {
            var u = a.next, n = Qr(a, l);
            n === 0 ? (a.next = null, e === null ? qn = u : e.next = u, u === null && (Oa = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (Cn = true)), a = u;
          }
          _u(t);
        }
        function Qr(t, l) {
          for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
            var i = 31 - il(n), c = 1 << i, o = u[i];
            o === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = gm(c, l)) : o <= l && (t.expiredLanes |= c), n &= ~c;
          }
          if (l = St, e = ut, e = ju(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, e === 0 || t === l && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && ni(a), t.callbackNode = null, t.callbackPriority = 0;
          if ((e & 3) === 0 || Ya(t, e)) {
            if (l = e & -e, l === t.callbackPriority) return l;
            switch (a !== null && ni(a), fi(e)) {
              case 2:
              case 8:
                e = Nf;
                break;
              case 32:
                e = Yu;
                break;
              case 268435456:
                e = Hf;
                break;
              default:
                e = Yu;
            }
            return a = Zr.bind(null, t), e = ui(e, a), t.callbackPriority = l, t.callbackNode = e, l;
          }
          return a !== null && a !== null && ni(a), t.callbackPriority = 2, t.callbackNode = null, 2;
        }
        function Zr(t, l) {
          if (Lt !== 0 && Lt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
          var e = t.callbackNode;
          if (Hn() && t.callbackNode !== e) return null;
          var a = ut;
          return a = ju(t, t === St ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Er(t, a, l), Qr(t, Dl()), t.callbackNode != null && t.callbackNode === e ? Zr.bind(null, t) : null);
        }
        function Vr(t, l) {
          if (Hn()) return null;
          Er(t, l, true);
        }
        function K0() {
          ey(function() {
            (dt & 6) !== 0 ? ui(Uf, L0) : Xr();
          });
        }
        function kc() {
          return Le === 0 && (Le = qf()), Le;
        }
        function Lr(t) {
          return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Lu("" + t);
        }
        function Kr(t, l) {
          var e = l.ownerDocument.createElement("input");
          return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
        }
        function J0(t, l, e, a, u) {
          if (l === "submit" && e && e.stateNode === u) {
            var n = Lr((u[Pt] || null).action), i = a.submitter;
            i && (l = (l = i[Pt] || null) ? Lr(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
            var c = new Wu("action", "action", null, a, u);
            t.push({
              event: c,
              listeners: [
                {
                  instance: null,
                  listener: function() {
                    if (a.defaultPrevented) {
                      if (Le !== 0) {
                        var o = i ? Kr(u, i) : new FormData(u);
                        yc(e, {
                          pending: true,
                          data: o,
                          method: u.method,
                          action: n
                        }, null, o);
                      }
                    } else typeof n == "function" && (c.preventDefault(), o = i ? Kr(u, i) : new FormData(u), yc(e, {
                      pending: true,
                      data: o,
                      method: u.method,
                      action: n
                    }, n, o));
                  },
                  currentTarget: u
                }
              ]
            });
          }
        }
        for (var Wc = 0; Wc < Hi.length; Wc++) {
          var $c = Hi[Wc], k0 = $c.toLowerCase(), W0 = $c[0].toUpperCase() + $c.slice(1);
          El(k0, "on" + W0);
        }
        El(zs, "onAnimationEnd"), El(Es, "onAnimationIteration"), El(xs, "onAnimationStart"), El("dblclick", "onDoubleClick"), El("focusin", "onFocus"), El("focusout", "onBlur"), El(d0, "onTransitionRun"), El(m0, "onTransitionStart"), El(y0, "onTransitionCancel"), El(Ms, "onTransitionEnd"), Ie("onMouseEnter", [
          "mouseout",
          "mouseover"
        ]), Ie("onMouseLeave", [
          "mouseout",
          "mouseover"
        ]), Ie("onPointerEnter", [
          "pointerout",
          "pointerover"
        ]), Ie("onPointerLeave", [
          "pointerout",
          "pointerover"
        ]), Re("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Re("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Re("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste"
        ]), Re("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Re("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Re("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Tu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tu));
        function Jr(t, l) {
          l = (l & 4) !== 0;
          for (var e = 0; e < t.length; e++) {
            var a = t[e], u = a.event;
            a = a.listeners;
            t: {
              var n = void 0;
              if (l) for (var i = a.length - 1; 0 <= i; i--) {
                var c = a[i], o = c.instance, g = c.currentTarget;
                if (c = c.listener, o !== n && u.isPropagationStopped()) break t;
                n = c, u.currentTarget = g;
                try {
                  n(u);
                } catch (A) {
                  Tn(A);
                }
                u.currentTarget = null, n = o;
              }
              else for (i = 0; i < a.length; i++) {
                if (c = a[i], o = c.instance, g = c.currentTarget, c = c.listener, o !== n && u.isPropagationStopped()) break t;
                n = c, u.currentTarget = g;
                try {
                  n(u);
                } catch (A) {
                  Tn(A);
                }
                u.currentTarget = null, n = o;
              }
            }
          }
        }
        function et(t, l) {
          var e = l[si];
          e === void 0 && (e = l[si] = /* @__PURE__ */ new Set());
          var a = t + "__bubble";
          e.has(a) || (kr(l, t, 2, false), e.add(a));
        }
        function Fc(t, l, e) {
          var a = 0;
          l && (a |= 4), kr(e, t, a, l);
        }
        var Bn = "_reactListening" + Math.random().toString(36).slice(2);
        function Ic(t) {
          if (!t[Bn]) {
            t[Bn] = true, jf.forEach(function(e) {
              e !== "selectionchange" && ($0.has(e) || Fc(e, false, t), Fc(e, true, t));
            });
            var l = t.nodeType === 9 ? t : t.ownerDocument;
            l === null || l[Bn] || (l[Bn] = true, Fc("selectionchange", false, l));
          }
        }
        function kr(t, l, e, a) {
          switch (bd(l)) {
            case 2:
              var u = Ay;
              break;
            case 8:
              u = zy;
              break;
            default:
              u = mf;
          }
          e = u.bind(null, l, e, t), u = void 0, !Si || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = true), a ? u !== void 0 ? t.addEventListener(l, e, {
            capture: true,
            passive: u
          }) : t.addEventListener(l, e, true) : u !== void 0 ? t.addEventListener(l, e, {
            passive: u
          }) : t.addEventListener(l, e, false);
        }
        function Pc(t, l, e, a, u) {
          var n = a;
          if ((l & 1) === 0 && (l & 2) === 0 && a !== null) t: for (; ; ) {
            if (a === null) return;
            var i = a.tag;
            if (i === 3 || i === 4) {
              var c = a.stateNode.containerInfo;
              if (c === u) break;
              if (i === 4) for (i = a.return; i !== null; ) {
                var o = i.tag;
                if ((o === 3 || o === 4) && i.stateNode.containerInfo === u) return;
                i = i.return;
              }
              for (; c !== null; ) {
                if (i = We(c), i === null) return;
                if (o = i.tag, o === 5 || o === 6 || o === 26 || o === 27) {
                  a = n = i;
                  continue t;
                }
                c = c.parentNode;
              }
            }
            a = a.return;
          }
          ts(function() {
            var g = n, A = bi(e), x = [];
            t: {
              var b = Os.get(t);
              if (b !== void 0) {
                var p = Wu, V = t;
                switch (t) {
                  case "keypress":
                    if (Ju(e) === 0) break t;
                  case "keydown":
                  case "keyup":
                    p = Vm;
                    break;
                  case "focusin":
                    V = "focus", p = zi;
                    break;
                  case "focusout":
                    V = "blur", p = zi;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    p = zi;
                    break;
                  case "click":
                    if (e.button === 2) break t;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    p = as;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    p = Nm;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    p = Jm;
                    break;
                  case zs:
                  case Es:
                  case xs:
                    p = Cm;
                    break;
                  case Ms:
                    p = Wm;
                    break;
                  case "scroll":
                  case "scrollend":
                    p = Dm;
                    break;
                  case "wheel":
                    p = Fm;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    p = Ym;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    p = ns;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    p = Pm;
                }
                var Q = (l & 4) !== 0, ht = !Q && (t === "scroll" || t === "scrollend"), m = Q ? b !== null ? b + "Capture" : null : b;
                Q = [];
                for (var d = g, h; d !== null; ) {
                  var z = d;
                  if (h = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || h === null || m === null || (z = Xa(d, m), z != null && Q.push(Au(d, z, h))), ht) break;
                  d = d.return;
                }
                0 < Q.length && (b = new p(b, V, null, e, A), x.push({
                  event: b,
                  listeners: Q
                }));
              }
            }
            if ((l & 7) === 0) {
              t: {
                if (b = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", b && e !== gi && (V = e.relatedTarget || e.fromElement) && (We(V) || V[ke])) break t;
                if ((p || b) && (b = A.window === A ? A : (b = A.ownerDocument) ? b.defaultView || b.parentWindow : window, p ? (V = e.relatedTarget || e.toElement, p = g, V = V ? We(V) : null, V !== null && (ht = E(V), Q = V.tag, V !== ht || Q !== 5 && Q !== 27 && Q !== 6) && (V = null)) : (p = null, V = g), p !== V)) {
                  if (Q = as, z = "onMouseLeave", m = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (Q = ns, z = "onPointerLeave", m = "onPointerEnter", d = "pointer"), ht = p == null ? b : ja(p), h = V == null ? b : ja(V), b = new Q(z, d + "leave", p, e, A), b.target = ht, b.relatedTarget = h, z = null, We(A) === g && (Q = new Q(m, d + "enter", V, e, A), Q.target = h, Q.relatedTarget = ht, z = Q), ht = z, p && V) l: {
                    for (Q = p, m = V, d = 0, h = Q; h; h = Ra(h)) d++;
                    for (h = 0, z = m; z; z = Ra(z)) h++;
                    for (; 0 < d - h; ) Q = Ra(Q), d--;
                    for (; 0 < h - d; ) m = Ra(m), h--;
                    for (; d--; ) {
                      if (Q === m || m !== null && Q === m.alternate) break l;
                      Q = Ra(Q), m = Ra(m);
                    }
                    Q = null;
                  }
                  else Q = null;
                  p !== null && Wr(x, b, p, Q, false), V !== null && ht !== null && Wr(x, ht, V, Q, true);
                }
              }
              t: {
                if (b = g ? ja(g) : window, p = b.nodeName && b.nodeName.toLowerCase(), p === "select" || p === "input" && b.type === "file") var B = ms;
                else if (rs(b)) if (ys) B = s0;
                else {
                  B = c0;
                  var I = i0;
                }
                else p = b.nodeName, !p || p.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? g && hi(g.elementType) && (B = ms) : B = f0;
                if (B && (B = B(t, g))) {
                  ds(x, B, e, A);
                  break t;
                }
                I && I(t, b, g), t === "focusout" && g && b.type === "number" && g.memoizedProps.value != null && vi(b, "number", b.value);
              }
              switch (I = g ? ja(g) : window, t) {
                case "focusin":
                  (rs(I) || I.contentEditable === "true") && (na = I, Di = g, Wa = null);
                  break;
                case "focusout":
                  Wa = Di = na = null;
                  break;
                case "mousedown":
                  Ui = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  Ui = false, Ts(x, e, A);
                  break;
                case "selectionchange":
                  if (r0) break;
                case "keydown":
                case "keyup":
                  Ts(x, e, A);
              }
              var j;
              if (xi) t: {
                switch (t) {
                  case "compositionstart":
                    var Z = "onCompositionStart";
                    break t;
                  case "compositionend":
                    Z = "onCompositionEnd";
                    break t;
                  case "compositionupdate":
                    Z = "onCompositionUpdate";
                    break t;
                }
                Z = void 0;
              }
              else ua ? ss(t, e) && (Z = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (Z = "onCompositionStart");
              Z && (is && e.locale !== "ko" && (ua || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && ua && (j = ls()) : (ue = A, _i = "value" in ue ? ue.value : ue.textContent, ua = true)), I = Yn(g, Z), 0 < I.length && (Z = new us(Z, t, null, e, A), x.push({
                event: Z,
                listeners: I
              }), j ? Z.data = j : (j = os(e), j !== null && (Z.data = j)))), (j = l0 ? e0(t, e) : a0(t, e)) && (Z = Yn(g, "onBeforeInput"), 0 < Z.length && (I = new us("onBeforeInput", "beforeinput", null, e, A), x.push({
                event: I,
                listeners: Z
              }), I.data = j)), J0(x, t, g, e, A);
            }
            Jr(x, l);
          });
        }
        function Au(t, l, e) {
          return {
            instance: t,
            listener: l,
            currentTarget: e
          };
        }
        function Yn(t, l) {
          for (var e = l + "Capture", a = []; t !== null; ) {
            var u = t, n = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Xa(t, e), u != null && a.unshift(Au(t, u, n)), u = Xa(t, l), u != null && a.push(Au(t, u, n))), t.tag === 3) return a;
            t = t.return;
          }
          return [];
        }
        function Ra(t) {
          if (t === null) return null;
          do
            t = t.return;
          while (t && t.tag !== 5 && t.tag !== 27);
          return t || null;
        }
        function Wr(t, l, e, a, u) {
          for (var n = l._reactName, i = []; e !== null && e !== a; ) {
            var c = e, o = c.alternate, g = c.stateNode;
            if (c = c.tag, o !== null && o === a) break;
            c !== 5 && c !== 26 && c !== 27 || g === null || (o = g, u ? (g = Xa(e, n), g != null && i.unshift(Au(e, g, o))) : u || (g = Xa(e, n), g != null && i.push(Au(e, g, o)))), e = e.return;
          }
          i.length !== 0 && t.push({
            event: l,
            listeners: i
          });
        }
        var F0 = /\r\n?/g, I0 = /\u0000|\uFFFD/g;
        function $r(t) {
          return (typeof t == "string" ? t : "" + t).replace(F0, `
`).replace(I0, "");
        }
        function Fr(t, l) {
          return l = $r(l), $r(t) === l;
        }
        function Gn() {
        }
        function vt(t, l, e, a, u, n) {
          switch (e) {
            case "children":
              typeof a == "string" ? l === "body" || l === "textarea" && a === "" || la(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && la(t, "" + a);
              break;
            case "className":
              Qu(t, "class", a);
              break;
            case "tabIndex":
              Qu(t, "tabindex", a);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              Qu(t, e, a);
              break;
            case "style":
              If(t, a, n);
              break;
            case "data":
              if (l !== "object") {
                Qu(t, "data", a);
                break;
              }
            case "src":
            case "href":
              if (a === "" && (l !== "a" || e !== "href")) {
                t.removeAttribute(e);
                break;
              }
              if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(e);
                break;
              }
              a = Lu("" + a), t.setAttribute(e, a);
              break;
            case "action":
            case "formAction":
              if (typeof a == "function") {
                t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break;
              } else typeof n == "function" && (e === "formAction" ? (l !== "input" && vt(t, l, "name", u.name, u, null), vt(t, l, "formEncType", u.formEncType, u, null), vt(t, l, "formMethod", u.formMethod, u, null), vt(t, l, "formTarget", u.formTarget, u, null)) : (vt(t, l, "encType", u.encType, u, null), vt(t, l, "method", u.method, u, null), vt(t, l, "target", u.target, u, null)));
              if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(e);
                break;
              }
              a = Lu("" + a), t.setAttribute(e, a);
              break;
            case "onClick":
              a != null && (t.onclick = Gn);
              break;
            case "onScroll":
              a != null && et("scroll", t);
              break;
            case "onScrollEnd":
              a != null && et("scrollend", t);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                if (e = a.__html, e != null) {
                  if (u.children != null) throw Error(s(60));
                  t.innerHTML = e;
                }
              }
              break;
            case "multiple":
              t.multiple = a && typeof a != "function" && typeof a != "symbol";
              break;
            case "muted":
              t.muted = a && typeof a != "function" && typeof a != "symbol";
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
              break;
            case "autoFocus":
              break;
            case "xlinkHref":
              if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break;
              }
              e = Lu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
              break;
            case "capture":
            case "download":
              a === true ? t.setAttribute(e, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
              break;
            case "rowSpan":
            case "start":
              a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
              break;
            case "popover":
              et("beforetoggle", t), et("toggle", t), Xu(t, "popover", a);
              break;
            case "xlinkActuate":
              Yl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
              break;
            case "xlinkArcrole":
              Yl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
              break;
            case "xlinkRole":
              Yl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
              break;
            case "xlinkShow":
              Yl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
              break;
            case "xlinkTitle":
              Yl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
              break;
            case "xlinkType":
              Yl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
              break;
            case "xmlBase":
              Yl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
              break;
            case "xmlLang":
              Yl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
              break;
            case "xmlSpace":
              Yl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
              break;
            case "is":
              Xu(t, "is", a);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Om.get(e) || e, Xu(t, e, a));
          }
        }
        function tf(t, l, e, a, u, n) {
          switch (e) {
            case "style":
              If(t, a, n);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                if (e = a.__html, e != null) {
                  if (u.children != null) throw Error(s(60));
                  t.innerHTML = e;
                }
              }
              break;
            case "children":
              typeof a == "string" ? la(t, a) : (typeof a == "number" || typeof a == "bigint") && la(t, "" + a);
              break;
            case "onScroll":
              a != null && et("scroll", t);
              break;
            case "onScrollEnd":
              a != null && et("scrollend", t);
              break;
            case "onClick":
              a != null && (t.onclick = Gn);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              if (!Xf.hasOwnProperty(e)) t: {
                if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[Pt] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
                  typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
                  break t;
                }
                e in t ? t[e] = a : a === true ? t.setAttribute(e, "") : Xu(t, e, a);
              }
          }
        }
        function Kt(t, l, e) {
          switch (l) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              et("error", t), et("load", t);
              var a = false, u = false, n;
              for (n in e) if (e.hasOwnProperty(n)) {
                var i = e[n];
                if (i != null) switch (n) {
                  case "src":
                    a = true;
                    break;
                  case "srcSet":
                    u = true;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(s(137, l));
                  default:
                    vt(t, l, n, i, e, null);
                }
              }
              u && vt(t, l, "srcSet", e.srcSet, e, null), a && vt(t, l, "src", e.src, e, null);
              return;
            case "input":
              et("invalid", t);
              var c = n = i = u = null, o = null, g = null;
              for (a in e) if (e.hasOwnProperty(a)) {
                var A = e[a];
                if (A != null) switch (a) {
                  case "name":
                    u = A;
                    break;
                  case "type":
                    i = A;
                    break;
                  case "checked":
                    o = A;
                    break;
                  case "defaultChecked":
                    g = A;
                    break;
                  case "value":
                    n = A;
                    break;
                  case "defaultValue":
                    c = A;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (A != null) throw Error(s(137, l));
                    break;
                  default:
                    vt(t, l, a, A, e, null);
                }
              }
              kf(t, n, c, o, g, i, u, false), Zu(t);
              return;
            case "select":
              et("invalid", t), a = i = n = null;
              for (u in e) if (e.hasOwnProperty(u) && (c = e[u], c != null)) switch (u) {
                case "value":
                  n = c;
                  break;
                case "defaultValue":
                  i = c;
                  break;
                case "multiple":
                  a = c;
                default:
                  vt(t, l, u, c, e, null);
              }
              l = n, e = i, t.multiple = !!a, l != null ? ta(t, !!a, l, false) : e != null && ta(t, !!a, e, true);
              return;
            case "textarea":
              et("invalid", t), n = u = a = null;
              for (i in e) if (e.hasOwnProperty(i) && (c = e[i], c != null)) switch (i) {
                case "value":
                  a = c;
                  break;
                case "defaultValue":
                  u = c;
                  break;
                case "children":
                  n = c;
                  break;
                case "dangerouslySetInnerHTML":
                  if (c != null) throw Error(s(91));
                  break;
                default:
                  vt(t, l, i, c, e, null);
              }
              $f(t, a, u, n), Zu(t);
              return;
            case "option":
              for (o in e) if (e.hasOwnProperty(o) && (a = e[o], a != null)) switch (o) {
                case "selected":
                  t.selected = a && typeof a != "function" && typeof a != "symbol";
                  break;
                default:
                  vt(t, l, o, a, e, null);
              }
              return;
            case "dialog":
              et("beforetoggle", t), et("toggle", t), et("cancel", t), et("close", t);
              break;
            case "iframe":
            case "object":
              et("load", t);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Tu.length; a++) et(Tu[a], t);
              break;
            case "image":
              et("error", t), et("load", t);
              break;
            case "details":
              et("toggle", t);
              break;
            case "embed":
            case "source":
            case "link":
              et("error", t), et("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (g in e) if (e.hasOwnProperty(g) && (a = e[g], a != null)) switch (g) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  vt(t, l, g, a, e, null);
              }
              return;
            default:
              if (hi(l)) {
                for (A in e) e.hasOwnProperty(A) && (a = e[A], a !== void 0 && tf(t, l, A, a, e, void 0));
                return;
              }
          }
          for (c in e) e.hasOwnProperty(c) && (a = e[c], a != null && vt(t, l, c, a, e, null));
        }
        function P0(t, l, e, a) {
          switch (l) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "input":
              var u = null, n = null, i = null, c = null, o = null, g = null, A = null;
              for (p in e) {
                var x = e[p];
                if (e.hasOwnProperty(p) && x != null) switch (p) {
                  case "checked":
                    break;
                  case "value":
                    break;
                  case "defaultValue":
                    o = x;
                  default:
                    a.hasOwnProperty(p) || vt(t, l, p, null, a, x);
                }
              }
              for (var b in a) {
                var p = a[b];
                if (x = e[b], a.hasOwnProperty(b) && (p != null || x != null)) switch (b) {
                  case "type":
                    n = p;
                    break;
                  case "name":
                    u = p;
                    break;
                  case "checked":
                    g = p;
                    break;
                  case "defaultChecked":
                    A = p;
                    break;
                  case "value":
                    i = p;
                    break;
                  case "defaultValue":
                    c = p;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (p != null) throw Error(s(137, l));
                    break;
                  default:
                    p !== x && vt(t, l, b, p, a, x);
                }
              }
              yi(t, i, c, o, g, A, n, u);
              return;
            case "select":
              p = i = c = b = null;
              for (n in e) if (o = e[n], e.hasOwnProperty(n) && o != null) switch (n) {
                case "value":
                  break;
                case "multiple":
                  p = o;
                default:
                  a.hasOwnProperty(n) || vt(t, l, n, null, a, o);
              }
              for (u in a) if (n = a[u], o = e[u], a.hasOwnProperty(u) && (n != null || o != null)) switch (u) {
                case "value":
                  b = n;
                  break;
                case "defaultValue":
                  c = n;
                  break;
                case "multiple":
                  i = n;
                default:
                  n !== o && vt(t, l, u, n, a, o);
              }
              l = c, e = i, a = p, b != null ? ta(t, !!e, b, false) : !!a != !!e && (l != null ? ta(t, !!e, l, true) : ta(t, !!e, e ? [] : "", false));
              return;
            case "textarea":
              p = b = null;
              for (c in e) if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c)) switch (c) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  vt(t, l, c, null, a, u);
              }
              for (i in a) if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null)) switch (i) {
                case "value":
                  b = u;
                  break;
                case "defaultValue":
                  p = u;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (u != null) throw Error(s(91));
                  break;
                default:
                  u !== n && vt(t, l, i, u, a, n);
              }
              Wf(t, b, p);
              return;
            case "option":
              for (var V in e) if (b = e[V], e.hasOwnProperty(V) && b != null && !a.hasOwnProperty(V)) switch (V) {
                case "selected":
                  t.selected = false;
                  break;
                default:
                  vt(t, l, V, null, a, b);
              }
              for (o in a) if (b = a[o], p = e[o], a.hasOwnProperty(o) && b !== p && (b != null || p != null)) switch (o) {
                case "selected":
                  t.selected = b && typeof b != "function" && typeof b != "symbol";
                  break;
                default:
                  vt(t, l, o, b, a, p);
              }
              return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
              for (var Q in e) b = e[Q], e.hasOwnProperty(Q) && b != null && !a.hasOwnProperty(Q) && vt(t, l, Q, null, a, b);
              for (g in a) if (b = a[g], p = e[g], a.hasOwnProperty(g) && b !== p && (b != null || p != null)) switch (g) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(s(137, l));
                  break;
                default:
                  vt(t, l, g, b, a, p);
              }
              return;
            default:
              if (hi(l)) {
                for (var ht in e) b = e[ht], e.hasOwnProperty(ht) && b !== void 0 && !a.hasOwnProperty(ht) && tf(t, l, ht, void 0, a, b);
                for (A in a) b = a[A], p = e[A], !a.hasOwnProperty(A) || b === p || b === void 0 && p === void 0 || tf(t, l, A, b, a, p);
                return;
              }
          }
          for (var m in e) b = e[m], e.hasOwnProperty(m) && b != null && !a.hasOwnProperty(m) && vt(t, l, m, null, a, b);
          for (x in a) b = a[x], p = e[x], !a.hasOwnProperty(x) || b === p || b == null && p == null || vt(t, l, x, b, a, p);
        }
        var lf = null, ef = null;
        function wn(t) {
          return t.nodeType === 9 ? t : t.ownerDocument;
        }
        function Ir(t) {
          switch (t) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Pr(t, l) {
          if (t === 0) switch (l) {
            case "svg":
              return 1;
            case "math":
              return 2;
            default:
              return 0;
          }
          return t === 1 && l === "foreignObject" ? 0 : t;
        }
        function af(t, l) {
          return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
        }
        var uf = null;
        function ty() {
          var t = window.event;
          return t && t.type === "popstate" ? t === uf ? false : (uf = t, true) : (uf = null, false);
        }
        var td = typeof setTimeout == "function" ? setTimeout : void 0, ly = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, ey = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(t) {
          return ld.resolve(null).then(t).catch(ay);
        } : td;
        function ay(t) {
          setTimeout(function() {
            throw t;
          });
        }
        function Se(t) {
          return t === "head";
        }
        function ed(t, l) {
          var e = l, a = 0, u = 0;
          do {
            var n = e.nextSibling;
            if (t.removeChild(e), n && n.nodeType === 8) if (e = n.data, e === "/$") {
              if (0 < a && 8 > a) {
                e = a;
                var i = t.ownerDocument;
                if (e & 1 && zu(i.documentElement), e & 2 && zu(i.body), e & 4) for (e = i.head, zu(e), i = e.firstChild; i; ) {
                  var c = i.nextSibling, o = i.nodeName;
                  i[wa] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = c;
                }
              }
              if (u === 0) {
                t.removeChild(n), Nu(l);
                return;
              }
              u--;
            } else e === "$" || e === "$?" || e === "$!" ? u++ : a = e.charCodeAt(0) - 48;
            else a = 0;
            e = n;
          } while (e);
          Nu(l);
        }
        function nf(t) {
          var l = t.firstChild;
          for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
            var e = l;
            switch (l = l.nextSibling, e.nodeName) {
              case "HTML":
              case "HEAD":
              case "BODY":
                nf(e), oi(e);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if (e.rel.toLowerCase() === "stylesheet") continue;
            }
            t.removeChild(e);
          }
        }
        function uy(t, l, e, a) {
          for (; t.nodeType === 1; ) {
            var u = e;
            if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
              if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
            } else if (a) {
              if (!t[wa]) switch (l) {
                case "meta":
                  if (!t.hasAttribute("itemprop")) break;
                  return t;
                case "link":
                  if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence")) break;
                  if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                  return t;
                case "style":
                  if (t.hasAttribute("data-precedence")) break;
                  return t;
                case "script":
                  if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                  return t;
                default:
                  return t;
              }
            } else if (l === "input" && t.type === "hidden") {
              var n = u.name == null ? null : "" + u.name;
              if (u.type === "hidden" && t.getAttribute("name") === n) return t;
            } else return t;
            if (t = Ml(t.nextSibling), t === null) break;
          }
          return null;
        }
        function ny(t, l, e) {
          if (l === "") return null;
          for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ml(t.nextSibling), t === null)) return null;
          return t;
        }
        function cf(t) {
          return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
        }
        function iy(t, l) {
          var e = t.ownerDocument;
          if (t.data !== "$?" || e.readyState === "complete") l();
          else {
            var a = function() {
              l(), e.removeEventListener("DOMContentLoaded", a);
            };
            e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
          }
        }
        function Ml(t) {
          for (; t != null; t = t.nextSibling) {
            var l = t.nodeType;
            if (l === 1 || l === 3) break;
            if (l === 8) {
              if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F") break;
              if (l === "/$") return null;
            }
          }
          return t;
        }
        var ff = null;
        function ad(t) {
          t = t.previousSibling;
          for (var l = 0; t; ) {
            if (t.nodeType === 8) {
              var e = t.data;
              if (e === "$" || e === "$!" || e === "$?") {
                if (l === 0) return t;
                l--;
              } else e === "/$" && l++;
            }
            t = t.previousSibling;
          }
          return null;
        }
        function ud(t, l, e) {
          switch (l = wn(e), t) {
            case "html":
              if (t = l.documentElement, !t) throw Error(s(452));
              return t;
            case "head":
              if (t = l.head, !t) throw Error(s(453));
              return t;
            case "body":
              if (t = l.body, !t) throw Error(s(454));
              return t;
            default:
              throw Error(s(451));
          }
        }
        function zu(t) {
          for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
          oi(t);
        }
        var Al = /* @__PURE__ */ new Map(), nd = /* @__PURE__ */ new Set();
        function jn(t) {
          return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
        }
        var Fl = H.d;
        H.d = {
          f: cy,
          r: fy,
          D: sy,
          C: oy,
          L: ry,
          m: dy,
          X: yy,
          S: my,
          M: vy
        };
        function cy() {
          var t = Fl.f(), l = Un();
          return t || l;
        }
        function fy(t) {
          var l = $e(t);
          l !== null && l.tag === 5 && l.type === "form" ? Eo(l) : Fl.r(t);
        }
        var Da = typeof document > "u" ? null : document;
        function id(t, l, e) {
          var a = Da;
          if (a && typeof l == "string" && l) {
            var u = hl(l);
            u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), nd.has(u) || (nd.add(u), t = {
              rel: t,
              crossOrigin: e,
              href: l
            }, a.querySelector(u) === null && (l = a.createElement("link"), Kt(l, "link", t), jt(l), a.head.appendChild(l)));
          }
        }
        function sy(t) {
          Fl.D(t), id("dns-prefetch", t, null);
        }
        function oy(t, l) {
          Fl.C(t, l), id("preconnect", t, l);
        }
        function ry(t, l, e) {
          Fl.L(t, l, e);
          var a = Da;
          if (a && t && l) {
            var u = 'link[rel="preload"][as="' + hl(l) + '"]';
            l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + hl(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + hl(e.imageSizes) + '"]')) : u += '[href="' + hl(t) + '"]';
            var n = u;
            switch (l) {
              case "style":
                n = Ua(t);
                break;
              case "script":
                n = Na(t);
            }
            Al.has(n) || (t = N({
              rel: "preload",
              href: l === "image" && e && e.imageSrcSet ? void 0 : t,
              as: l
            }, e), Al.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(Eu(n)) || l === "script" && a.querySelector(xu(n)) || (l = a.createElement("link"), Kt(l, "link", t), jt(l), a.head.appendChild(l)));
          }
        }
        function dy(t, l) {
          Fl.m(t, l);
          var e = Da;
          if (e && t) {
            var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + hl(a) + '"][href="' + hl(t) + '"]', n = u;
            switch (a) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                n = Na(t);
            }
            if (!Al.has(n) && (t = N({
              rel: "modulepreload",
              href: t
            }, l), Al.set(n, t), e.querySelector(u) === null)) {
              switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  if (e.querySelector(xu(n))) return;
              }
              a = e.createElement("link"), Kt(a, "link", t), jt(a), e.head.appendChild(a);
            }
          }
        }
        function my(t, l, e) {
          Fl.S(t, l, e);
          var a = Da;
          if (a && t) {
            var u = Fe(a).hoistableStyles, n = Ua(t);
            l = l || "default";
            var i = u.get(n);
            if (!i) {
              var c = {
                loading: 0,
                preload: null
              };
              if (i = a.querySelector(Eu(n))) c.loading = 5;
              else {
                t = N({
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": l
                }, e), (e = Al.get(n)) && sf(t, e);
                var o = i = a.createElement("link");
                jt(o), Kt(o, "link", t), o._p = new Promise(function(g, A) {
                  o.onload = g, o.onerror = A;
                }), o.addEventListener("load", function() {
                  c.loading |= 1;
                }), o.addEventListener("error", function() {
                  c.loading |= 2;
                }), c.loading |= 4, Xn(i, l, a);
              }
              i = {
                type: "stylesheet",
                instance: i,
                count: 1,
                state: c
              }, u.set(n, i);
            }
          }
        }
        function yy(t, l) {
          Fl.X(t, l);
          var e = Da;
          if (e && t) {
            var a = Fe(e).hoistableScripts, u = Na(t), n = a.get(u);
            n || (n = e.querySelector(xu(u)), n || (t = N({
              src: t,
              async: true
            }, l), (l = Al.get(u)) && of(t, l), n = e.createElement("script"), jt(n), Kt(n, "link", t), e.head.appendChild(n)), n = {
              type: "script",
              instance: n,
              count: 1,
              state: null
            }, a.set(u, n));
          }
        }
        function vy(t, l) {
          Fl.M(t, l);
          var e = Da;
          if (e && t) {
            var a = Fe(e).hoistableScripts, u = Na(t), n = a.get(u);
            n || (n = e.querySelector(xu(u)), n || (t = N({
              src: t,
              async: true,
              type: "module"
            }, l), (l = Al.get(u)) && of(t, l), n = e.createElement("script"), jt(n), Kt(n, "link", t), e.head.appendChild(n)), n = {
              type: "script",
              instance: n,
              count: 1,
              state: null
            }, a.set(u, n));
          }
        }
        function cd(t, l, e, a) {
          var u = (u = L.current) ? jn(u) : null;
          if (!u) throw Error(s(446));
          switch (t) {
            case "meta":
            case "title":
              return null;
            case "style":
              return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Ua(e.href), e = Fe(u).hoistableStyles, a = e.get(l), a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
              }, e.set(l, a)), a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
              };
            case "link":
              if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                t = Ua(e.href);
                var n = Fe(u).hoistableStyles, i = n.get(t);
                if (i || (u = u.ownerDocument || u, i = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: {
                    loading: 0,
                    preload: null
                  }
                }, n.set(t, i), (n = u.querySelector(Eu(t))) && !n._p && (i.instance = n, i.state.loading = 5), Al.has(t) || (e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy
                }, Al.set(t, e), n || hy(u, t, e, i.state))), l && a === null) throw Error(s(528, ""));
                return i;
              }
              if (l && a !== null) throw Error(s(529, ""));
              return null;
            case "script":
              return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Na(e), e = Fe(u).hoistableScripts, a = e.get(l), a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
              }, e.set(l, a)), a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
              };
            default:
              throw Error(s(444, t));
          }
        }
        function Ua(t) {
          return 'href="' + hl(t) + '"';
        }
        function Eu(t) {
          return 'link[rel="stylesheet"][' + t + "]";
        }
        function fd(t) {
          return N({}, t, {
            "data-precedence": t.precedence,
            precedence: null
          });
        }
        function hy(t, l, e, a) {
          t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
            return a.loading |= 1;
          }), l.addEventListener("error", function() {
            return a.loading |= 2;
          }), Kt(l, "link", e), jt(l), t.head.appendChild(l));
        }
        function Na(t) {
          return '[src="' + hl(t) + '"]';
        }
        function xu(t) {
          return "script[async]" + t;
        }
        function sd(t, l, e) {
          if (l.count++, l.instance === null) switch (l.type) {
            case "style":
              var a = t.querySelector('style[data-href~="' + hl(e.href) + '"]');
              if (a) return l.instance = a, jt(a), a;
              var u = N({}, e, {
                "data-href": e.href,
                "data-precedence": e.precedence,
                href: null,
                precedence: null
              });
              return a = (t.ownerDocument || t).createElement("style"), jt(a), Kt(a, "style", u), Xn(a, e.precedence, t), l.instance = a;
            case "stylesheet":
              u = Ua(e.href);
              var n = t.querySelector(Eu(u));
              if (n) return l.state.loading |= 4, l.instance = n, jt(n), n;
              a = fd(e), (u = Al.get(u)) && sf(a, u), n = (t.ownerDocument || t).createElement("link"), jt(n);
              var i = n;
              return i._p = new Promise(function(c, o) {
                i.onload = c, i.onerror = o;
              }), Kt(n, "link", a), l.state.loading |= 4, Xn(n, e.precedence, t), l.instance = n;
            case "script":
              return n = Na(e.src), (u = t.querySelector(xu(n))) ? (l.instance = u, jt(u), u) : (a = e, (u = Al.get(n)) && (a = N({}, e), of(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), jt(u), Kt(u, "link", a), t.head.appendChild(u), l.instance = u);
            case "void":
              return null;
            default:
              throw Error(s(443, l.type));
          }
          else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Xn(a, e.precedence, t));
          return l.instance;
        }
        function Xn(t, l, e) {
          for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.dataset.precedence === l) n = c;
            else if (n !== u) break;
          }
          n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
        }
        function sf(t, l) {
          t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
        }
        function of(t, l) {
          t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
        }
        var Qn = null;
        function od(t, l, e) {
          if (Qn === null) {
            var a = /* @__PURE__ */ new Map(), u = Qn = /* @__PURE__ */ new Map();
            u.set(e, a);
          } else u = Qn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
          if (a.has(t)) return a;
          for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
            var n = e[u];
            if (!(n[wa] || n[Jt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
              var i = n.getAttribute(l) || "";
              i = t + i;
              var c = a.get(i);
              c ? c.push(n) : a.set(i, [
                n
              ]);
            }
          }
          return a;
        }
        function rd(t, l, e) {
          t = t.ownerDocument || t, t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null);
        }
        function gy(t, l, e) {
          if (e === 1 || l.itemProp != null) return false;
          switch (t) {
            case "meta":
            case "title":
              return true;
            case "style":
              if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
              return true;
            case "link":
              if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
              switch (l.rel) {
                case "stylesheet":
                  return t = l.disabled, typeof l.precedence == "string" && t == null;
                default:
                  return true;
              }
            case "script":
              if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return true;
          }
          return false;
        }
        function dd(t) {
          return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
        }
        var Mu = null;
        function by() {
        }
        function py(t, l, e) {
          if (Mu === null) throw Error(s(475));
          var a = Mu;
          if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== false) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
              var u = Ua(e.href), n = t.querySelector(Eu(u));
              if (n) {
                t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Zn.bind(a), t.then(a, a)), l.state.loading |= 4, l.instance = n, jt(n);
                return;
              }
              n = t.ownerDocument || t, e = fd(e), (u = Al.get(u)) && sf(e, u), n = n.createElement("link"), jt(n);
              var i = n;
              i._p = new Promise(function(c, o) {
                i.onload = c, i.onerror = o;
              }), Kt(n, "link", e), l.instance = n;
            }
            a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (a.count++, l = Zn.bind(a), t.addEventListener("load", l), t.addEventListener("error", l));
          }
        }
        function Sy() {
          if (Mu === null) throw Error(s(475));
          var t = Mu;
          return t.stylesheets && t.count === 0 && rf(t, t.stylesheets), 0 < t.count ? function(l) {
            var e = setTimeout(function() {
              if (t.stylesheets && rf(t, t.stylesheets), t.unsuspend) {
                var a = t.unsuspend;
                t.unsuspend = null, a();
              }
            }, 6e4);
            return t.unsuspend = l, function() {
              t.unsuspend = null, clearTimeout(e);
            };
          } : null;
        }
        function Zn() {
          if (this.count--, this.count === 0) {
            if (this.stylesheets) rf(this, this.stylesheets);
            else if (this.unsuspend) {
              var t = this.unsuspend;
              this.unsuspend = null, t();
            }
          }
        }
        var Vn = null;
        function rf(t, l) {
          t.stylesheets = null, t.unsuspend !== null && (t.count++, Vn = /* @__PURE__ */ new Map(), l.forEach(_y, t), Vn = null, Zn.call(t));
        }
        function _y(t, l) {
          if (!(l.state.loading & 4)) {
            var e = Vn.get(t);
            if (e) var a = e.get(null);
            else {
              e = /* @__PURE__ */ new Map(), Vn.set(t, e);
              for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                var i = u[n];
                (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
              }
              a && e.set(null, a);
            }
            u = l.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = Zn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
          }
        }
        var Ou = {
          $$typeof: zt,
          Provider: null,
          Consumer: null,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0
        };
        function Ty(t, l, e, a, u, n, i, c) {
          this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ii(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ii(0), this.hiddenUpdates = ii(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }
        function md(t, l, e, a, u, n, i, c, o, g, A, x) {
          return t = new Ty(t, l, e, i, c, o, g, x), l = 1, n === true && (l |= 24), n = fl(3, null, null, l), t.current = n, n.stateNode = t, l = Li(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: l
          }, Wi(n), t;
        }
        function yd(t) {
          return t ? (t = sa, t) : sa;
        }
        function vd(t, l, e, a, u, n) {
          u = yd(u), a.context === null ? a.context = u : a.pendingContext = u, a = ce(l), a.payload = {
            element: e
          }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = fe(t, a, l), e !== null && (ml(e, t, l), uu(e, t, l));
        }
        function hd(t, l) {
          if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var e = t.retryLane;
            t.retryLane = e !== 0 && e < l ? e : l;
          }
        }
        function df(t, l) {
          hd(t, l), (t = t.alternate) && hd(t, l);
        }
        function gd(t) {
          if (t.tag === 13) {
            var l = fa(t, 67108864);
            l !== null && ml(l, t, 67108864), df(t, 67108864);
          }
        }
        var Ln = true;
        function Ay(t, l, e, a) {
          var u = T.T;
          T.T = null;
          var n = H.p;
          try {
            H.p = 2, mf(t, l, e, a);
          } finally {
            H.p = n, T.T = u;
          }
        }
        function zy(t, l, e, a) {
          var u = T.T;
          T.T = null;
          var n = H.p;
          try {
            H.p = 8, mf(t, l, e, a);
          } finally {
            H.p = n, T.T = u;
          }
        }
        function mf(t, l, e, a) {
          if (Ln) {
            var u = yf(a);
            if (u === null) Pc(t, l, a, Kn, e), pd(t, a);
            else if (xy(u, t, l, e, a)) a.stopPropagation();
            else if (pd(t, a), l & 4 && -1 < Ey.indexOf(t)) {
              for (; u !== null; ) {
                var n = $e(u);
                if (n !== null) switch (n.tag) {
                  case 3:
                    if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                      var i = Oe(n.pendingLanes);
                      if (i !== 0) {
                        var c = n;
                        for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                          var o = 1 << 31 - il(i);
                          c.entanglements[1] |= o, i &= ~o;
                        }
                        Cl(n), (dt & 6) === 0 && (Rn = Dl() + 500, _u(0));
                      }
                    }
                    break;
                  case 13:
                    c = fa(n, 2), c !== null && ml(c, n, 2), Un(), df(n, 2);
                }
                if (n = yf(a), n === null && Pc(t, l, a, Kn, e), n === u) break;
                u = n;
              }
              u !== null && a.stopPropagation();
            } else Pc(t, l, a, null, e);
          }
        }
        function yf(t) {
          return t = bi(t), vf(t);
        }
        var Kn = null;
        function vf(t) {
          if (Kn = null, t = We(t), t !== null) {
            var l = E(t);
            if (l === null) t = null;
            else {
              var e = l.tag;
              if (e === 13) {
                if (t = D(l), t !== null) return t;
                t = null;
              } else if (e === 3) {
                if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
                t = null;
              } else l !== t && (t = null);
            }
          }
          return Kn = t, null;
        }
        function bd(t) {
          switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (om()) {
                case Uf:
                  return 2;
                case Nf:
                  return 8;
                case Yu:
                case rm:
                  return 32;
                case Hf:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var hf = false, _e = null, Te = null, Ae = null, Ru = /* @__PURE__ */ new Map(), Du = /* @__PURE__ */ new Map(), ze = [], Ey = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function pd(t, l) {
          switch (t) {
            case "focusin":
            case "focusout":
              _e = null;
              break;
            case "dragenter":
            case "dragleave":
              Te = null;
              break;
            case "mouseover":
            case "mouseout":
              Ae = null;
              break;
            case "pointerover":
            case "pointerout":
              Ru.delete(l.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Du.delete(l.pointerId);
          }
        }
        function Uu(t, l, e, a, u, n) {
          return t === null || t.nativeEvent !== n ? (t = {
            blockedOn: l,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [
              u
            ]
          }, l !== null && (l = $e(l), l !== null && gd(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
        }
        function xy(t, l, e, a, u) {
          switch (l) {
            case "focusin":
              return _e = Uu(_e, t, l, e, a, u), true;
            case "dragenter":
              return Te = Uu(Te, t, l, e, a, u), true;
            case "mouseover":
              return Ae = Uu(Ae, t, l, e, a, u), true;
            case "pointerover":
              var n = u.pointerId;
              return Ru.set(n, Uu(Ru.get(n) || null, t, l, e, a, u)), true;
            case "gotpointercapture":
              return n = u.pointerId, Du.set(n, Uu(Du.get(n) || null, t, l, e, a, u)), true;
          }
          return false;
        }
        function Sd(t) {
          var l = We(t.target);
          if (l !== null) {
            var e = E(l);
            if (e !== null) {
              if (l = e.tag, l === 13) {
                if (l = D(e), l !== null) {
                  t.blockedOn = l, pm(t.priority, function() {
                    if (e.tag === 13) {
                      var a = dl();
                      a = ci(a);
                      var u = fa(e, a);
                      u !== null && ml(u, e, a), df(e, a);
                    }
                  });
                  return;
                }
              } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                return;
              }
            }
          }
          t.blockedOn = null;
        }
        function Jn(t) {
          if (t.blockedOn !== null) return false;
          for (var l = t.targetContainers; 0 < l.length; ) {
            var e = yf(t.nativeEvent);
            if (e === null) {
              e = t.nativeEvent;
              var a = new e.constructor(e.type, e);
              gi = a, e.target.dispatchEvent(a), gi = null;
            } else return l = $e(e), l !== null && gd(l), t.blockedOn = e, false;
            l.shift();
          }
          return true;
        }
        function _d(t, l, e) {
          Jn(t) && e.delete(l);
        }
        function My() {
          hf = false, _e !== null && Jn(_e) && (_e = null), Te !== null && Jn(Te) && (Te = null), Ae !== null && Jn(Ae) && (Ae = null), Ru.forEach(_d), Du.forEach(_d);
        }
        function kn(t, l) {
          t.blockedOn === l && (t.blockedOn = null, hf || (hf = true, f.unstable_scheduleCallback(f.unstable_NormalPriority, My)));
        }
        var Wn = null;
        function Td(t) {
          Wn !== t && (Wn = t, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
            Wn === t && (Wn = null);
            for (var l = 0; l < t.length; l += 3) {
              var e = t[l], a = t[l + 1], u = t[l + 2];
              if (typeof a != "function") {
                if (vf(a || e) === null) continue;
                break;
              }
              var n = $e(e);
              n !== null && (t.splice(l, 3), l -= 3, yc(n, {
                pending: true,
                data: u,
                method: e.method,
                action: a
              }, a, u));
            }
          }));
        }
        function Nu(t) {
          function l(o) {
            return kn(o, t);
          }
          _e !== null && kn(_e, t), Te !== null && kn(Te, t), Ae !== null && kn(Ae, t), Ru.forEach(l), Du.forEach(l);
          for (var e = 0; e < ze.length; e++) {
            var a = ze[e];
            a.blockedOn === t && (a.blockedOn = null);
          }
          for (; 0 < ze.length && (e = ze[0], e.blockedOn === null); ) Sd(e), e.blockedOn === null && ze.shift();
          if (e = (t.ownerDocument || t).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
            var u = e[a], n = e[a + 1], i = u[Pt] || null;
            if (typeof n == "function") i || Td(e);
            else if (i) {
              var c = null;
              if (n && n.hasAttribute("formAction")) {
                if (u = n, i = n[Pt] || null) c = i.formAction;
                else if (vf(u) !== null) continue;
              } else c = i.action;
              typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Td(e);
            }
          }
        }
        function gf(t) {
          this._internalRoot = t;
        }
        $n.prototype.render = gf.prototype.render = function(t) {
          var l = this._internalRoot;
          if (l === null) throw Error(s(409));
          var e = l.current, a = dl();
          vd(e, a, t, l, null, null);
        }, $n.prototype.unmount = gf.prototype.unmount = function() {
          var t = this._internalRoot;
          if (t !== null) {
            this._internalRoot = null;
            var l = t.containerInfo;
            vd(t.current, 2, null, t, null, null), Un(), l[ke] = null;
          }
        };
        function $n(t) {
          this._internalRoot = t;
        }
        $n.prototype.unstable_scheduleHydration = function(t) {
          if (t) {
            var l = Gf();
            t = {
              blockedOn: null,
              target: t,
              priority: l
            };
            for (var e = 0; e < ze.length && l !== 0 && l < ze[e].priority; e++) ;
            ze.splice(e, 0, t), e === 0 && Sd(t);
          }
        };
        var Ad = v.version;
        if (Ad !== "19.1.0") throw Error(s(527, Ad, "19.1.0"));
        H.findDOMNode = function(t) {
          var l = t._reactInternals;
          if (l === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
          return t = O(l), t = t !== null ? S(t) : null, t = t === null ? null : t.stateNode, t;
        };
        var Oy = {
          bundleType: 0,
          version: "19.1.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: T,
          reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
          var Fn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Fn.isDisabled && Fn.supportsFiber) try {
            Ba = Fn.inject(Oy), nl = Fn;
          } catch {
          }
        }
        return qu.createRoot = function(t, l) {
          if (!_(t)) throw Error(s(299));
          var e = false, a = "", u = wo, n = jo, i = Xo, c = null;
          return l != null && (l.unstable_strictMode === true && (e = true), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (c = l.unstable_transitionCallbacks)), l = md(t, 1, false, null, null, e, a, u, n, i, c, null), t[ke] = l.current, Ic(t), new gf(l);
        }, qu.hydrateRoot = function(t, l, e) {
          if (!_(t)) throw Error(s(299));
          var a = false, u = "", n = wo, i = jo, c = Xo, o = null, g = null;
          return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks), e.formState !== void 0 && (g = e.formState)), l = md(t, 1, true, l, e ?? null, a, u, n, i, c, o, g), l.context = yd(null), e = l.current, a = dl(), a = ci(a), u = ce(a), u.callback = null, fe(e, u, a), e = a, l.current.lanes = e, Ga(l, e), Cl(l), t[ke] = l.current, Ic(t), new $n(l);
        }, qu.version = "19.1.0", qu;
      }
      var Hd;
      function Gy() {
        if (Hd) return Sf.exports;
        Hd = 1;
        function f() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
          } catch (v) {
            console.error(v);
          }
        }
        return f(), Sf.exports = Yy(), Sf.exports;
      }
      var wy = Gy();
      const jy = "/zaddr-wasm-parser/assets/zaddr_wasm_parser_bg-D15b5_Ez.wasm", Xy = async (f = {}, v) => {
        let y;
        if (v.startsWith("data:")) {
          const s = v.replace(/^data:.*?base64,/, "");
          let _;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") _ = Buffer.from(s, "base64");
          else if (typeof atob == "function") {
            const E = atob(s);
            _ = new Uint8Array(E.length);
            for (let D = 0; D < E.length; D++) _[D] = E.charCodeAt(D);
          } else throw new Error("Cannot decode base64-encoded data URL");
          y = await WebAssembly.instantiate(_, f);
        } else {
          const s = await fetch(v), _ = s.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && _.startsWith("application/wasm")) y = await WebAssembly.instantiateStreaming(s, f);
          else {
            const E = await s.arrayBuffer();
            y = await WebAssembly.instantiate(E, f);
          }
        }
        return y.instance.exports;
      };
      let qt;
      function Qy(f) {
        qt = f;
      }
      const Zy = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let Zd = new Zy("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Zd.decode();
      let In = null;
      function li() {
        return (In === null || In.byteLength === 0) && (In = new Uint8Array(qt.memory.buffer)), In;
      }
      function ai(f, v) {
        return f = f >>> 0, Zd.decode(li().subarray(f, f + v));
      }
      let Je = 0;
      const Vy = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let ei = new Vy("utf-8");
      const Ly = typeof ei.encodeInto == "function" ? function(f, v) {
        return ei.encodeInto(f, v);
      } : function(f, v) {
        const y = ei.encode(f);
        return v.set(y), {
          read: f.length,
          written: y.length
        };
      };
      function Bu(f, v, y) {
        if (y === void 0) {
          const w = ei.encode(f), O = v(w.length, 1) >>> 0;
          return li().subarray(O, O + w.length).set(w), Je = w.length, O;
        }
        let s = f.length, _ = v(s, 1) >>> 0;
        const E = li();
        let D = 0;
        for (; D < s; D++) {
          const w = f.charCodeAt(D);
          if (w > 127) break;
          E[_ + D] = w;
        }
        if (D !== s) {
          D !== 0 && (f = f.slice(D)), _ = y(_, s, s = D + f.length * 3, 1) >>> 0;
          const w = li().subarray(_ + D, _ + s), O = Ly(f, w);
          D += O.written, _ = y(_, s, D, 1) >>> 0;
        }
        return Je = D, _;
      }
      function Ky(f) {
        let v, y;
        try {
          const s = Bu(f, qt.__wbindgen_malloc, qt.__wbindgen_realloc), _ = Je, E = qt.get_raw_zcash_address(s, _);
          return v = E[0], y = E[1], ai(E[0], E[1]);
        } finally {
          qt.__wbindgen_free(v, y, 1);
        }
      }
      function Jy(f) {
        const v = Bu(f, qt.__wbindgen_malloc, qt.__wbindgen_realloc), y = Je;
        return qt.is_valid_zcash_address(v, y) !== 0;
      }
      function ky(f) {
        const v = Bu(f, qt.__wbindgen_malloc, qt.__wbindgen_realloc), y = Je;
        return qt.is_valid_zcash_address(v, y) !== 0;
      }
      function Wy(f) {
        let v, y;
        try {
          const s = Bu(f, qt.__wbindgen_malloc, qt.__wbindgen_realloc), _ = Je, E = qt.get_zcash_address_type(s, _);
          return v = E[0], y = E[1], ai(E[0], E[1]);
        } finally {
          qt.__wbindgen_free(v, y, 1);
        }
      }
      function $y(f) {
        const v = Bu(f, qt.__wbindgen_malloc, qt.__wbindgen_realloc), y = Je;
        return qt.get_ua_receivers(v, y);
      }
      function Fy() {
        return new Array();
      }
      function Iy(f, v, y) {
        f[v >>> 0] = y;
      }
      function Py() {
        const f = qt.__wbindgen_export_0, v = f.grow(4);
        f.set(0, void 0), f.set(v + 0, void 0), f.set(v + 1, null), f.set(v + 2, true), f.set(v + 3, false);
      }
      function tv(f, v) {
        return ai(f, v);
      }
      function lv(f, v) {
        throw new Error(ai(f, v));
      }
      URL = globalThis.URL;
      const Ol = await Xy({
        "./zaddr_wasm_parser_bg.js": {
          __wbindgen_string_new: tv,
          __wbg_new_78feb108b6472713: Fy,
          __wbg_set_37837023f3d740e8: Iy,
          __wbindgen_throw: lv,
          __wbindgen_init_externref_table: Py
        }
      }, jy), ev = Ol.memory, av = Ol.get_raw_zcash_address, uv = Ol.is_valid_zcash_address, nv = Ol.get_zcash_address_type, iv = Ol.get_ua_receivers, cv = Ol.parse_zcash_address, fv = Ol.__wbindgen_export_0, sv = Ol.__wbindgen_malloc, ov = Ol.__wbindgen_realloc, rv = Ol.__wbindgen_free, Vd = Ol.__wbindgen_start, dv = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbindgen_export_0: fv,
        __wbindgen_free: rv,
        __wbindgen_malloc: sv,
        __wbindgen_realloc: ov,
        __wbindgen_start: Vd,
        get_raw_zcash_address: av,
        get_ua_receivers: iv,
        get_zcash_address_type: nv,
        is_valid_zcash_address: uv,
        memory: ev,
        parse_zcash_address: cv
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      Qy(dv);
      Vd();
      function Ld(f) {
        var v, y, s = "";
        if (typeof f == "string" || typeof f == "number") s += f;
        else if (typeof f == "object") if (Array.isArray(f)) {
          var _ = f.length;
          for (v = 0; v < _; v++) f[v] && (y = Ld(f[v])) && (s && (s += " "), s += y);
        } else for (y in f) f[y] && (s && (s += " "), s += y);
        return s;
      }
      function Kd() {
        for (var f, v, y = 0, s = "", _ = arguments.length; y < _; y++) (f = arguments[y]) && (v = Ld(f)) && (s && (s += " "), s += v);
        return s;
      }
      const Df = "-", mv = (f) => {
        const v = vv(f), { conflictingClassGroups: y, conflictingClassGroupModifiers: s } = f;
        return {
          getClassGroupId: (D) => {
            const w = D.split(Df);
            return w[0] === "" && w.length !== 1 && w.shift(), Jd(w, v) || yv(D);
          },
          getConflictingClassGroupIds: (D, w) => {
            const O = y[D] || [];
            return w && s[D] ? [
              ...O,
              ...s[D]
            ] : O;
          }
        };
      }, Jd = (f, v) => {
        var _a;
        if (f.length === 0) return v.classGroupId;
        const y = f[0], s = v.nextPart.get(y), _ = s ? Jd(f.slice(1), s) : void 0;
        if (_) return _;
        if (v.validators.length === 0) return;
        const E = f.join(Df);
        return (_a = v.validators.find(({ validator: D }) => D(E))) == null ? void 0 : _a.classGroupId;
      }, qd = /^\[(.+)\]$/, yv = (f) => {
        if (qd.test(f)) {
          const v = qd.exec(f)[1], y = v == null ? void 0 : v.substring(0, v.indexOf(":"));
          if (y) return "arbitrary.." + y;
        }
      }, vv = (f) => {
        const { theme: v, classGroups: y } = f, s = {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        };
        for (const _ in y) xf(y[_], s, _, v);
        return s;
      }, xf = (f, v, y, s) => {
        f.forEach((_) => {
          if (typeof _ == "string") {
            const E = _ === "" ? v : Cd(v, _);
            E.classGroupId = y;
            return;
          }
          if (typeof _ == "function") {
            if (hv(_)) {
              xf(_(s), v, y, s);
              return;
            }
            v.validators.push({
              validator: _,
              classGroupId: y
            });
            return;
          }
          Object.entries(_).forEach(([E, D]) => {
            xf(D, Cd(v, E), y, s);
          });
        });
      }, Cd = (f, v) => {
        let y = f;
        return v.split(Df).forEach((s) => {
          y.nextPart.has(s) || y.nextPart.set(s, {
            nextPart: /* @__PURE__ */ new Map(),
            validators: []
          }), y = y.nextPart.get(s);
        }), y;
      }, hv = (f) => f.isThemeGetter, gv = (f) => {
        if (f < 1) return {
          get: () => {
          },
          set: () => {
          }
        };
        let v = 0, y = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
        const _ = (E, D) => {
          y.set(E, D), v++, v > f && (v = 0, s = y, y = /* @__PURE__ */ new Map());
        };
        return {
          get(E) {
            let D = y.get(E);
            if (D !== void 0) return D;
            if ((D = s.get(E)) !== void 0) return _(E, D), D;
          },
          set(E, D) {
            y.has(E) ? y.set(E, D) : _(E, D);
          }
        };
      }, Mf = "!", Of = ":", bv = Of.length, pv = (f) => {
        const { prefix: v, experimentalParseClassName: y } = f;
        let s = (_) => {
          const E = [];
          let D = 0, w = 0, O = 0, S;
          for (let P = 0; P < _.length; P++) {
            let ct = _[P];
            if (D === 0 && w === 0) {
              if (ct === Of) {
                E.push(_.slice(O, P)), O = P + bv;
                continue;
              }
              if (ct === "/") {
                S = P;
                continue;
              }
            }
            ct === "[" ? D++ : ct === "]" ? D-- : ct === "(" ? w++ : ct === ")" && w--;
          }
          const N = E.length === 0 ? _ : _.substring(O), K = Sv(N), J = K !== N, st = S && S > O ? S - O : void 0;
          return {
            modifiers: E,
            hasImportantModifier: J,
            baseClassName: K,
            maybePostfixModifierPosition: st
          };
        };
        if (v) {
          const _ = v + Of, E = s;
          s = (D) => D.startsWith(_) ? E(D.substring(_.length)) : {
            isExternal: true,
            modifiers: [],
            hasImportantModifier: false,
            baseClassName: D,
            maybePostfixModifierPosition: void 0
          };
        }
        if (y) {
          const _ = s;
          s = (E) => y({
            className: E,
            parseClassName: _
          });
        }
        return s;
      }, Sv = (f) => f.endsWith(Mf) ? f.substring(0, f.length - 1) : f.startsWith(Mf) ? f.substring(1) : f, _v = (f) => {
        const v = Object.fromEntries(f.orderSensitiveModifiers.map((s) => [
          s,
          true
        ]));
        return (s) => {
          if (s.length <= 1) return s;
          const _ = [];
          let E = [];
          return s.forEach((D) => {
            D[0] === "[" || v[D] ? (_.push(...E.sort(), D), E = []) : E.push(D);
          }), _.push(...E.sort()), _;
        };
      }, Tv = (f) => ({
        cache: gv(f.cacheSize),
        parseClassName: pv(f),
        sortModifiers: _v(f),
        ...mv(f)
      }), Av = /\s+/, zv = (f, v) => {
        const { parseClassName: y, getClassGroupId: s, getConflictingClassGroupIds: _, sortModifiers: E } = v, D = [], w = f.trim().split(Av);
        let O = "";
        for (let S = w.length - 1; S >= 0; S -= 1) {
          const N = w[S], { isExternal: K, modifiers: J, hasImportantModifier: st, baseClassName: P, maybePostfixModifierPosition: ct } = y(N);
          if (K) {
            O = N + (O.length > 0 ? " " + O : O);
            continue;
          }
          let gt = !!ct, $t = s(gt ? P.substring(0, ct) : P);
          if (!$t) {
            if (!gt) {
              O = N + (O.length > 0 ? " " + O : O);
              continue;
            }
            if ($t = s(P), !$t) {
              O = N + (O.length > 0 ? " " + O : O);
              continue;
            }
            gt = false;
          }
          const It = E(J).join(":"), zt = st ? It + Mf : It, wt = zt + $t;
          if (D.includes(wt)) continue;
          D.push(wt);
          const W = _($t, gt);
          for (let Mt = 0; Mt < W.length; ++Mt) {
            const Ct = W[Mt];
            D.push(zt + Ct);
          }
          O = N + (O.length > 0 ? " " + O : O);
        }
        return O;
      };
      function Ev() {
        let f = 0, v, y, s = "";
        for (; f < arguments.length; ) (v = arguments[f++]) && (y = kd(v)) && (s && (s += " "), s += y);
        return s;
      }
      const kd = (f) => {
        if (typeof f == "string") return f;
        let v, y = "";
        for (let s = 0; s < f.length; s++) f[s] && (v = kd(f[s])) && (y && (y += " "), y += v);
        return y;
      };
      function xv(f, ...v) {
        let y, s, _, E = D;
        function D(O) {
          const S = v.reduce((N, K) => K(N), f());
          return y = Tv(S), s = y.cache.get, _ = y.cache.set, E = w, w(O);
        }
        function w(O) {
          const S = s(O);
          if (S) return S;
          const N = zv(O, y);
          return _(O, N), N;
        }
        return function() {
          return E(Ev.apply(null, arguments));
        };
      }
      const Gt = (f) => {
        const v = (y) => y[f] || [];
        return v.isThemeGetter = true, v;
      }, Wd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, $d = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Mv = /^\d+\/\d+$/, Ov = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Rv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Uv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Nv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ha = (f) => Mv.test(f), F = (f) => !!f && !Number.isNaN(Number(f)), xe = (f) => !!f && Number.isInteger(Number(f)), zf = (f) => f.endsWith("%") && F(f.slice(0, -1)), Il = (f) => Ov.test(f), Hv = () => true, qv = (f) => Rv.test(f) && !Dv.test(f), Fd = () => false, Cv = (f) => Uv.test(f), Bv = (f) => Nv.test(f), Yv = (f) => !Y(f) && !G(f), Gv = (f) => qa(f, tm, Fd), Y = (f) => Wd.test(f), Ke = (f) => qa(f, lm, qv), Ef = (f) => qa(f, Zv, F), Bd = (f) => qa(f, Id, Fd), wv = (f) => qa(f, Pd, Bv), Pn = (f) => qa(f, em, Cv), G = (f) => $d.test(f), Cu = (f) => Ca(f, lm), jv = (f) => Ca(f, Vv), Yd = (f) => Ca(f, Id), Xv = (f) => Ca(f, tm), Qv = (f) => Ca(f, Pd), ti = (f) => Ca(f, em, true), qa = (f, v, y) => {
        const s = Wd.exec(f);
        return s ? s[1] ? v(s[1]) : y(s[2]) : false;
      }, Ca = (f, v, y = false) => {
        const s = $d.exec(f);
        return s ? s[1] ? v(s[1]) : y : false;
      }, Id = (f) => f === "position" || f === "percentage", Pd = (f) => f === "image" || f === "url", tm = (f) => f === "length" || f === "size" || f === "bg-size", lm = (f) => f === "length", Zv = (f) => f === "number", Vv = (f) => f === "family-name", em = (f) => f === "shadow", Lv = () => {
        const f = Gt("color"), v = Gt("font"), y = Gt("text"), s = Gt("font-weight"), _ = Gt("tracking"), E = Gt("leading"), D = Gt("breakpoint"), w = Gt("container"), O = Gt("spacing"), S = Gt("radius"), N = Gt("shadow"), K = Gt("inset-shadow"), J = Gt("text-shadow"), st = Gt("drop-shadow"), P = Gt("blur"), ct = Gt("perspective"), gt = Gt("aspect"), $t = Gt("ease"), It = Gt("animate"), zt = () => [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column"
        ], wt = () => [
          "center",
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          "left-top",
          "top-right",
          "right-top",
          "bottom-right",
          "right-bottom",
          "bottom-left",
          "left-bottom"
        ], W = () => [
          ...wt(),
          G,
          Y
        ], Mt = () => [
          "auto",
          "hidden",
          "clip",
          "visible",
          "scroll"
        ], Ct = () => [
          "auto",
          "contain",
          "none"
        ], X = () => [
          G,
          Y,
          O
        ], Ut = () => [
          Ha,
          "full",
          "auto",
          ...X()
        ], Bl = () => [
          xe,
          "none",
          "subgrid",
          G,
          Y
        ], yl = () => [
          "auto",
          {
            span: [
              "full",
              xe,
              G,
              Y
            ]
          },
          xe,
          G,
          Y
        ], Ot = () => [
          xe,
          "auto",
          G,
          Y
        ], Rl = () => [
          "auto",
          "min",
          "max",
          "fr",
          G,
          Y
        ], zl = () => [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
          "baseline",
          "center-safe",
          "end-safe"
        ], Tt = () => [
          "start",
          "end",
          "center",
          "stretch",
          "center-safe",
          "end-safe"
        ], T = () => [
          "auto",
          ...X()
        ], H = () => [
          Ha,
          "auto",
          "full",
          "dvw",
          "dvh",
          "lvw",
          "lvh",
          "svw",
          "svh",
          "min",
          "max",
          "fit",
          ...X()
        ], R = () => [
          f,
          G,
          Y
        ], ot = () => [
          ...wt(),
          Yd,
          Bd,
          {
            position: [
              G,
              Y
            ]
          }
        ], r = () => [
          "no-repeat",
          {
            repeat: [
              "",
              "x",
              "y",
              "space",
              "round"
            ]
          }
        ], M = () => [
          "auto",
          "cover",
          "contain",
          Xv,
          Gv,
          {
            size: [
              G,
              Y
            ]
          }
        ], q = () => [
          zf,
          Cu,
          Ke
        ], U = () => [
          "",
          "none",
          "full",
          S,
          G,
          Y
        ], C = () => [
          "",
          F,
          Cu,
          Ke
        ], tt = () => [
          "solid",
          "dashed",
          "dotted",
          "double"
        ], L = () => [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity"
        ], nt = () => [
          F,
          zf,
          Yd,
          Bd
        ], bt = () => [
          "",
          "none",
          P,
          G,
          Y
        ], ul = () => [
          "none",
          F,
          G,
          Y
        ], Pl = () => [
          "none",
          F,
          G,
          Y
        ], te = () => [
          F,
          G,
          Y
        ], le = () => [
          Ha,
          "full",
          ...X()
        ];
        return {
          cacheSize: 500,
          theme: {
            animate: [
              "spin",
              "ping",
              "pulse",
              "bounce"
            ],
            aspect: [
              "video"
            ],
            blur: [
              Il
            ],
            breakpoint: [
              Il
            ],
            color: [
              Hv
            ],
            container: [
              Il
            ],
            "drop-shadow": [
              Il
            ],
            ease: [
              "in",
              "out",
              "in-out"
            ],
            font: [
              Yv
            ],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black"
            ],
            "inset-shadow": [
              Il
            ],
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose"
            ],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none"
            ],
            radius: [
              Il
            ],
            shadow: [
              Il
            ],
            spacing: [
              "px",
              F
            ],
            text: [
              Il
            ],
            "text-shadow": [
              Il
            ],
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest"
            ]
          },
          classGroups: {
            aspect: [
              {
                aspect: [
                  "auto",
                  "square",
                  Ha,
                  Y,
                  G,
                  gt
                ]
              }
            ],
            container: [
              "container"
            ],
            columns: [
              {
                columns: [
                  F,
                  Y,
                  G,
                  w
                ]
              }
            ],
            "break-after": [
              {
                "break-after": zt()
              }
            ],
            "break-before": [
              {
                "break-before": zt()
              }
            ],
            "break-inside": [
              {
                "break-inside": [
                  "auto",
                  "avoid",
                  "avoid-page",
                  "avoid-column"
                ]
              }
            ],
            "box-decoration": [
              {
                "box-decoration": [
                  "slice",
                  "clone"
                ]
              }
            ],
            box: [
              {
                box: [
                  "border",
                  "content"
                ]
              }
            ],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden"
            ],
            sr: [
              "sr-only",
              "not-sr-only"
            ],
            float: [
              {
                float: [
                  "right",
                  "left",
                  "none",
                  "start",
                  "end"
                ]
              }
            ],
            clear: [
              {
                clear: [
                  "left",
                  "right",
                  "both",
                  "none",
                  "start",
                  "end"
                ]
              }
            ],
            isolation: [
              "isolate",
              "isolation-auto"
            ],
            "object-fit": [
              {
                object: [
                  "contain",
                  "cover",
                  "fill",
                  "none",
                  "scale-down"
                ]
              }
            ],
            "object-position": [
              {
                object: W()
              }
            ],
            overflow: [
              {
                overflow: Mt()
              }
            ],
            "overflow-x": [
              {
                "overflow-x": Mt()
              }
            ],
            "overflow-y": [
              {
                "overflow-y": Mt()
              }
            ],
            overscroll: [
              {
                overscroll: Ct()
              }
            ],
            "overscroll-x": [
              {
                "overscroll-x": Ct()
              }
            ],
            "overscroll-y": [
              {
                "overscroll-y": Ct()
              }
            ],
            position: [
              "static",
              "fixed",
              "absolute",
              "relative",
              "sticky"
            ],
            inset: [
              {
                inset: Ut()
              }
            ],
            "inset-x": [
              {
                "inset-x": Ut()
              }
            ],
            "inset-y": [
              {
                "inset-y": Ut()
              }
            ],
            start: [
              {
                start: Ut()
              }
            ],
            end: [
              {
                end: Ut()
              }
            ],
            top: [
              {
                top: Ut()
              }
            ],
            right: [
              {
                right: Ut()
              }
            ],
            bottom: [
              {
                bottom: Ut()
              }
            ],
            left: [
              {
                left: Ut()
              }
            ],
            visibility: [
              "visible",
              "invisible",
              "collapse"
            ],
            z: [
              {
                z: [
                  xe,
                  "auto",
                  G,
                  Y
                ]
              }
            ],
            basis: [
              {
                basis: [
                  Ha,
                  "full",
                  "auto",
                  w,
                  ...X()
                ]
              }
            ],
            "flex-direction": [
              {
                flex: [
                  "row",
                  "row-reverse",
                  "col",
                  "col-reverse"
                ]
              }
            ],
            "flex-wrap": [
              {
                flex: [
                  "nowrap",
                  "wrap",
                  "wrap-reverse"
                ]
              }
            ],
            flex: [
              {
                flex: [
                  F,
                  Ha,
                  "auto",
                  "initial",
                  "none",
                  Y
                ]
              }
            ],
            grow: [
              {
                grow: [
                  "",
                  F,
                  G,
                  Y
                ]
              }
            ],
            shrink: [
              {
                shrink: [
                  "",
                  F,
                  G,
                  Y
                ]
              }
            ],
            order: [
              {
                order: [
                  xe,
                  "first",
                  "last",
                  "none",
                  G,
                  Y
                ]
              }
            ],
            "grid-cols": [
              {
                "grid-cols": Bl()
              }
            ],
            "col-start-end": [
              {
                col: yl()
              }
            ],
            "col-start": [
              {
                "col-start": Ot()
              }
            ],
            "col-end": [
              {
                "col-end": Ot()
              }
            ],
            "grid-rows": [
              {
                "grid-rows": Bl()
              }
            ],
            "row-start-end": [
              {
                row: yl()
              }
            ],
            "row-start": [
              {
                "row-start": Ot()
              }
            ],
            "row-end": [
              {
                "row-end": Ot()
              }
            ],
            "grid-flow": [
              {
                "grid-flow": [
                  "row",
                  "col",
                  "dense",
                  "row-dense",
                  "col-dense"
                ]
              }
            ],
            "auto-cols": [
              {
                "auto-cols": Rl()
              }
            ],
            "auto-rows": [
              {
                "auto-rows": Rl()
              }
            ],
            gap: [
              {
                gap: X()
              }
            ],
            "gap-x": [
              {
                "gap-x": X()
              }
            ],
            "gap-y": [
              {
                "gap-y": X()
              }
            ],
            "justify-content": [
              {
                justify: [
                  ...zl(),
                  "normal"
                ]
              }
            ],
            "justify-items": [
              {
                "justify-items": [
                  ...Tt(),
                  "normal"
                ]
              }
            ],
            "justify-self": [
              {
                "justify-self": [
                  "auto",
                  ...Tt()
                ]
              }
            ],
            "align-content": [
              {
                content: [
                  "normal",
                  ...zl()
                ]
              }
            ],
            "align-items": [
              {
                items: [
                  ...Tt(),
                  {
                    baseline: [
                      "",
                      "last"
                    ]
                  }
                ]
              }
            ],
            "align-self": [
              {
                self: [
                  "auto",
                  ...Tt(),
                  {
                    baseline: [
                      "",
                      "last"
                    ]
                  }
                ]
              }
            ],
            "place-content": [
              {
                "place-content": zl()
              }
            ],
            "place-items": [
              {
                "place-items": [
                  ...Tt(),
                  "baseline"
                ]
              }
            ],
            "place-self": [
              {
                "place-self": [
                  "auto",
                  ...Tt()
                ]
              }
            ],
            p: [
              {
                p: X()
              }
            ],
            px: [
              {
                px: X()
              }
            ],
            py: [
              {
                py: X()
              }
            ],
            ps: [
              {
                ps: X()
              }
            ],
            pe: [
              {
                pe: X()
              }
            ],
            pt: [
              {
                pt: X()
              }
            ],
            pr: [
              {
                pr: X()
              }
            ],
            pb: [
              {
                pb: X()
              }
            ],
            pl: [
              {
                pl: X()
              }
            ],
            m: [
              {
                m: T()
              }
            ],
            mx: [
              {
                mx: T()
              }
            ],
            my: [
              {
                my: T()
              }
            ],
            ms: [
              {
                ms: T()
              }
            ],
            me: [
              {
                me: T()
              }
            ],
            mt: [
              {
                mt: T()
              }
            ],
            mr: [
              {
                mr: T()
              }
            ],
            mb: [
              {
                mb: T()
              }
            ],
            ml: [
              {
                ml: T()
              }
            ],
            "space-x": [
              {
                "space-x": X()
              }
            ],
            "space-x-reverse": [
              "space-x-reverse"
            ],
            "space-y": [
              {
                "space-y": X()
              }
            ],
            "space-y-reverse": [
              "space-y-reverse"
            ],
            size: [
              {
                size: H()
              }
            ],
            w: [
              {
                w: [
                  w,
                  "screen",
                  ...H()
                ]
              }
            ],
            "min-w": [
              {
                "min-w": [
                  w,
                  "screen",
                  "none",
                  ...H()
                ]
              }
            ],
            "max-w": [
              {
                "max-w": [
                  w,
                  "screen",
                  "none",
                  "prose",
                  {
                    screen: [
                      D
                    ]
                  },
                  ...H()
                ]
              }
            ],
            h: [
              {
                h: [
                  "screen",
                  ...H()
                ]
              }
            ],
            "min-h": [
              {
                "min-h": [
                  "screen",
                  "none",
                  ...H()
                ]
              }
            ],
            "max-h": [
              {
                "max-h": [
                  "screen",
                  ...H()
                ]
              }
            ],
            "font-size": [
              {
                text: [
                  "base",
                  y,
                  Cu,
                  Ke
                ]
              }
            ],
            "font-smoothing": [
              "antialiased",
              "subpixel-antialiased"
            ],
            "font-style": [
              "italic",
              "not-italic"
            ],
            "font-weight": [
              {
                font: [
                  s,
                  G,
                  Ef
                ]
              }
            ],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  zf,
                  Y
                ]
              }
            ],
            "font-family": [
              {
                font: [
                  jv,
                  Y,
                  v
                ]
              }
            ],
            "fvn-normal": [
              "normal-nums"
            ],
            "fvn-ordinal": [
              "ordinal"
            ],
            "fvn-slashed-zero": [
              "slashed-zero"
            ],
            "fvn-figure": [
              "lining-nums",
              "oldstyle-nums"
            ],
            "fvn-spacing": [
              "proportional-nums",
              "tabular-nums"
            ],
            "fvn-fraction": [
              "diagonal-fractions",
              "stacked-fractions"
            ],
            tracking: [
              {
                tracking: [
                  _,
                  G,
                  Y
                ]
              }
            ],
            "line-clamp": [
              {
                "line-clamp": [
                  F,
                  "none",
                  G,
                  Ef
                ]
              }
            ],
            leading: [
              {
                leading: [
                  E,
                  ...X()
                ]
              }
            ],
            "list-image": [
              {
                "list-image": [
                  "none",
                  G,
                  Y
                ]
              }
            ],
            "list-style-position": [
              {
                list: [
                  "inside",
                  "outside"
                ]
              }
            ],
            "list-style-type": [
              {
                list: [
                  "disc",
                  "decimal",
                  "none",
                  G,
                  Y
                ]
              }
            ],
            "text-alignment": [
              {
                text: [
                  "left",
                  "center",
                  "right",
                  "justify",
                  "start",
                  "end"
                ]
              }
            ],
            "placeholder-color": [
              {
                placeholder: R()
              }
            ],
            "text-color": [
              {
                text: R()
              }
            ],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline"
            ],
            "text-decoration-style": [
              {
                decoration: [
                  ...tt(),
                  "wavy"
                ]
              }
            ],
            "text-decoration-thickness": [
              {
                decoration: [
                  F,
                  "from-font",
                  "auto",
                  G,
                  Ke
                ]
              }
            ],
            "text-decoration-color": [
              {
                decoration: R()
              }
            ],
            "underline-offset": [
              {
                "underline-offset": [
                  F,
                  "auto",
                  G,
                  Y
                ]
              }
            ],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case"
            ],
            "text-overflow": [
              "truncate",
              "text-ellipsis",
              "text-clip"
            ],
            "text-wrap": [
              {
                text: [
                  "wrap",
                  "nowrap",
                  "balance",
                  "pretty"
                ]
              }
            ],
            indent: [
              {
                indent: X()
              }
            ],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  G,
                  Y
                ]
              }
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces"
                ]
              }
            ],
            break: [
              {
                break: [
                  "normal",
                  "words",
                  "all",
                  "keep"
                ]
              }
            ],
            wrap: [
              {
                wrap: [
                  "break-word",
                  "anywhere",
                  "normal"
                ]
              }
            ],
            hyphens: [
              {
                hyphens: [
                  "none",
                  "manual",
                  "auto"
                ]
              }
            ],
            content: [
              {
                content: [
                  "none",
                  G,
                  Y
                ]
              }
            ],
            "bg-attachment": [
              {
                bg: [
                  "fixed",
                  "local",
                  "scroll"
                ]
              }
            ],
            "bg-clip": [
              {
                "bg-clip": [
                  "border",
                  "padding",
                  "content",
                  "text"
                ]
              }
            ],
            "bg-origin": [
              {
                "bg-origin": [
                  "border",
                  "padding",
                  "content"
                ]
              }
            ],
            "bg-position": [
              {
                bg: ot()
              }
            ],
            "bg-repeat": [
              {
                bg: r()
              }
            ],
            "bg-size": [
              {
                bg: M()
              }
            ],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      {
                        to: [
                          "t",
                          "tr",
                          "r",
                          "br",
                          "b",
                          "bl",
                          "l",
                          "tl"
                        ]
                      },
                      xe,
                      G,
                      Y
                    ],
                    radial: [
                      "",
                      G,
                      Y
                    ],
                    conic: [
                      xe,
                      G,
                      Y
                    ]
                  },
                  Qv,
                  wv
                ]
              }
            ],
            "bg-color": [
              {
                bg: R()
              }
            ],
            "gradient-from-pos": [
              {
                from: q()
              }
            ],
            "gradient-via-pos": [
              {
                via: q()
              }
            ],
            "gradient-to-pos": [
              {
                to: q()
              }
            ],
            "gradient-from": [
              {
                from: R()
              }
            ],
            "gradient-via": [
              {
                via: R()
              }
            ],
            "gradient-to": [
              {
                to: R()
              }
            ],
            rounded: [
              {
                rounded: U()
              }
            ],
            "rounded-s": [
              {
                "rounded-s": U()
              }
            ],
            "rounded-e": [
              {
                "rounded-e": U()
              }
            ],
            "rounded-t": [
              {
                "rounded-t": U()
              }
            ],
            "rounded-r": [
              {
                "rounded-r": U()
              }
            ],
            "rounded-b": [
              {
                "rounded-b": U()
              }
            ],
            "rounded-l": [
              {
                "rounded-l": U()
              }
            ],
            "rounded-ss": [
              {
                "rounded-ss": U()
              }
            ],
            "rounded-se": [
              {
                "rounded-se": U()
              }
            ],
            "rounded-ee": [
              {
                "rounded-ee": U()
              }
            ],
            "rounded-es": [
              {
                "rounded-es": U()
              }
            ],
            "rounded-tl": [
              {
                "rounded-tl": U()
              }
            ],
            "rounded-tr": [
              {
                "rounded-tr": U()
              }
            ],
            "rounded-br": [
              {
                "rounded-br": U()
              }
            ],
            "rounded-bl": [
              {
                "rounded-bl": U()
              }
            ],
            "border-w": [
              {
                border: C()
              }
            ],
            "border-w-x": [
              {
                "border-x": C()
              }
            ],
            "border-w-y": [
              {
                "border-y": C()
              }
            ],
            "border-w-s": [
              {
                "border-s": C()
              }
            ],
            "border-w-e": [
              {
                "border-e": C()
              }
            ],
            "border-w-t": [
              {
                "border-t": C()
              }
            ],
            "border-w-r": [
              {
                "border-r": C()
              }
            ],
            "border-w-b": [
              {
                "border-b": C()
              }
            ],
            "border-w-l": [
              {
                "border-l": C()
              }
            ],
            "divide-x": [
              {
                "divide-x": C()
              }
            ],
            "divide-x-reverse": [
              "divide-x-reverse"
            ],
            "divide-y": [
              {
                "divide-y": C()
              }
            ],
            "divide-y-reverse": [
              "divide-y-reverse"
            ],
            "border-style": [
              {
                border: [
                  ...tt(),
                  "hidden",
                  "none"
                ]
              }
            ],
            "divide-style": [
              {
                divide: [
                  ...tt(),
                  "hidden",
                  "none"
                ]
              }
            ],
            "border-color": [
              {
                border: R()
              }
            ],
            "border-color-x": [
              {
                "border-x": R()
              }
            ],
            "border-color-y": [
              {
                "border-y": R()
              }
            ],
            "border-color-s": [
              {
                "border-s": R()
              }
            ],
            "border-color-e": [
              {
                "border-e": R()
              }
            ],
            "border-color-t": [
              {
                "border-t": R()
              }
            ],
            "border-color-r": [
              {
                "border-r": R()
              }
            ],
            "border-color-b": [
              {
                "border-b": R()
              }
            ],
            "border-color-l": [
              {
                "border-l": R()
              }
            ],
            "divide-color": [
              {
                divide: R()
              }
            ],
            "outline-style": [
              {
                outline: [
                  ...tt(),
                  "none",
                  "hidden"
                ]
              }
            ],
            "outline-offset": [
              {
                "outline-offset": [
                  F,
                  G,
                  Y
                ]
              }
            ],
            "outline-w": [
              {
                outline: [
                  "",
                  F,
                  Cu,
                  Ke
                ]
              }
            ],
            "outline-color": [
              {
                outline: R()
              }
            ],
            shadow: [
              {
                shadow: [
                  "",
                  "none",
                  N,
                  ti,
                  Pn
                ]
              }
            ],
            "shadow-color": [
              {
                shadow: R()
              }
            ],
            "inset-shadow": [
              {
                "inset-shadow": [
                  "none",
                  K,
                  ti,
                  Pn
                ]
              }
            ],
            "inset-shadow-color": [
              {
                "inset-shadow": R()
              }
            ],
            "ring-w": [
              {
                ring: C()
              }
            ],
            "ring-w-inset": [
              "ring-inset"
            ],
            "ring-color": [
              {
                ring: R()
              }
            ],
            "ring-offset-w": [
              {
                "ring-offset": [
                  F,
                  Ke
                ]
              }
            ],
            "ring-offset-color": [
              {
                "ring-offset": R()
              }
            ],
            "inset-ring-w": [
              {
                "inset-ring": C()
              }
            ],
            "inset-ring-color": [
              {
                "inset-ring": R()
              }
            ],
            "text-shadow": [
              {
                "text-shadow": [
                  "none",
                  J,
                  ti,
                  Pn
                ]
              }
            ],
            "text-shadow-color": [
              {
                "text-shadow": R()
              }
            ],
            opacity: [
              {
                opacity: [
                  F,
                  G,
                  Y
                ]
              }
            ],
            "mix-blend": [
              {
                "mix-blend": [
                  ...L(),
                  "plus-darker",
                  "plus-lighter"
                ]
              }
            ],
            "bg-blend": [
              {
                "bg-blend": L()
              }
            ],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view"
                ]
              },
              "mask-no-clip"
            ],
            "mask-composite": [
              {
                mask: [
                  "add",
                  "subtract",
                  "intersect",
                  "exclude"
                ]
              }
            ],
            "mask-image-linear-pos": [
              {
                "mask-linear": [
                  F
                ]
              }
            ],
            "mask-image-linear-from-pos": [
              {
                "mask-linear-from": nt()
              }
            ],
            "mask-image-linear-to-pos": [
              {
                "mask-linear-to": nt()
              }
            ],
            "mask-image-linear-from-color": [
              {
                "mask-linear-from": R()
              }
            ],
            "mask-image-linear-to-color": [
              {
                "mask-linear-to": R()
              }
            ],
            "mask-image-t-from-pos": [
              {
                "mask-t-from": nt()
              }
            ],
            "mask-image-t-to-pos": [
              {
                "mask-t-to": nt()
              }
            ],
            "mask-image-t-from-color": [
              {
                "mask-t-from": R()
              }
            ],
            "mask-image-t-to-color": [
              {
                "mask-t-to": R()
              }
            ],
            "mask-image-r-from-pos": [
              {
                "mask-r-from": nt()
              }
            ],
            "mask-image-r-to-pos": [
              {
                "mask-r-to": nt()
              }
            ],
            "mask-image-r-from-color": [
              {
                "mask-r-from": R()
              }
            ],
            "mask-image-r-to-color": [
              {
                "mask-r-to": R()
              }
            ],
            "mask-image-b-from-pos": [
              {
                "mask-b-from": nt()
              }
            ],
            "mask-image-b-to-pos": [
              {
                "mask-b-to": nt()
              }
            ],
            "mask-image-b-from-color": [
              {
                "mask-b-from": R()
              }
            ],
            "mask-image-b-to-color": [
              {
                "mask-b-to": R()
              }
            ],
            "mask-image-l-from-pos": [
              {
                "mask-l-from": nt()
              }
            ],
            "mask-image-l-to-pos": [
              {
                "mask-l-to": nt()
              }
            ],
            "mask-image-l-from-color": [
              {
                "mask-l-from": R()
              }
            ],
            "mask-image-l-to-color": [
              {
                "mask-l-to": R()
              }
            ],
            "mask-image-x-from-pos": [
              {
                "mask-x-from": nt()
              }
            ],
            "mask-image-x-to-pos": [
              {
                "mask-x-to": nt()
              }
            ],
            "mask-image-x-from-color": [
              {
                "mask-x-from": R()
              }
            ],
            "mask-image-x-to-color": [
              {
                "mask-x-to": R()
              }
            ],
            "mask-image-y-from-pos": [
              {
                "mask-y-from": nt()
              }
            ],
            "mask-image-y-to-pos": [
              {
                "mask-y-to": nt()
              }
            ],
            "mask-image-y-from-color": [
              {
                "mask-y-from": R()
              }
            ],
            "mask-image-y-to-color": [
              {
                "mask-y-to": R()
              }
            ],
            "mask-image-radial": [
              {
                "mask-radial": [
                  G,
                  Y
                ]
              }
            ],
            "mask-image-radial-from-pos": [
              {
                "mask-radial-from": nt()
              }
            ],
            "mask-image-radial-to-pos": [
              {
                "mask-radial-to": nt()
              }
            ],
            "mask-image-radial-from-color": [
              {
                "mask-radial-from": R()
              }
            ],
            "mask-image-radial-to-color": [
              {
                "mask-radial-to": R()
              }
            ],
            "mask-image-radial-shape": [
              {
                "mask-radial": [
                  "circle",
                  "ellipse"
                ]
              }
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  {
                    closest: [
                      "side",
                      "corner"
                    ],
                    farthest: [
                      "side",
                      "corner"
                    ]
                  }
                ]
              }
            ],
            "mask-image-radial-pos": [
              {
                "mask-radial-at": wt()
              }
            ],
            "mask-image-conic-pos": [
              {
                "mask-conic": [
                  F
                ]
              }
            ],
            "mask-image-conic-from-pos": [
              {
                "mask-conic-from": nt()
              }
            ],
            "mask-image-conic-to-pos": [
              {
                "mask-conic-to": nt()
              }
            ],
            "mask-image-conic-from-color": [
              {
                "mask-conic-from": R()
              }
            ],
            "mask-image-conic-to-color": [
              {
                "mask-conic-to": R()
              }
            ],
            "mask-mode": [
              {
                mask: [
                  "alpha",
                  "luminance",
                  "match"
                ]
              }
            ],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view"
                ]
              }
            ],
            "mask-position": [
              {
                mask: ot()
              }
            ],
            "mask-repeat": [
              {
                mask: r()
              }
            ],
            "mask-size": [
              {
                mask: M()
              }
            ],
            "mask-type": [
              {
                "mask-type": [
                  "alpha",
                  "luminance"
                ]
              }
            ],
            "mask-image": [
              {
                mask: [
                  "none",
                  G,
                  Y
                ]
              }
            ],
            filter: [
              {
                filter: [
                  "",
                  "none",
                  G,
                  Y
                ]
              }
            ],
            blur: [
              {
                blur: bt()
              }
            ],
            brightness: [
              {
                brightness: [
                  F,
                  G,
                  Y
                ]
              }
            ],
            contrast: [
              {
                contrast: [
                  F,
                  G,
                  Y
                ]
              }
            ],
            "drop-shadow": [
              {
                "drop-shadow": [
                  "",
                  "none",
                  st,
                  ti,
                  Pn
                ]
              }
            ],
            "drop-shadow-color": [
              {
                "drop-shadow": R()
              }
            ],
            grayscale: [
              {
                grayscale: [
                  "",
                  F,
                  G,
                  Y
                ]
              }
            ],
            "hue-rotate": [
              {
                "hue-rotate": [
                  F,
                  G,
                  Y
                ]
              }
            ],
            invert: [
              {
                invert: [
                  "",
                  F,
                  G,
                  Y
                ]
              }
            ],
            saturate: [
              {
                saturate: [
                  F,
                  G,
                  Y
                ]
              }
            ],
            sepia: [
              {
                sepia: [
                  "",
                  F,
                  G,
                  Y
                ]
              }
            ],
            "backdrop-filter": [
              {
                "backdrop-filter": [
                  "",
                  "none",
                  G,
                  Y
                ]
              }
            ],
            "backdrop-blur": [
              {
                "backdrop-blur": bt()
              }
            ],
            "backdrop-brightness": [
              {
                "backdrop-brightness": [
                  F,
                  G,
                  Y
                ]
              }
            ],
            "backdrop-contrast": [
              {
                "backdrop-contrast": [
                  F,
                  G,
                  Y
                ]
              }
            ],
            "backdrop-grayscale": [
              {
                "backdrop-grayscale": [
                  "",
                  F,
                  G,
                  Y
                ]
              }
            ],
            "backdrop-hue-rotate": [
              {
                "backdrop-hue-rotate": [
                  F,
                  G,
                  Y
                ]
              }
            ],
            "backdrop-invert": [
              {
                "backdrop-invert": [
                  "",
                  F,
                  G,
                  Y
                ]
              }
            ],
            "backdrop-opacity": [
              {
                "backdrop-opacity": [
                  F,
                  G,
                  Y
                ]
              }
            ],
            "backdrop-saturate": [
              {
                "backdrop-saturate": [
                  F,
                  G,
                  Y
                ]
              }
            ],
            "backdrop-sepia": [
              {
                "backdrop-sepia": [
                  "",
                  F,
                  G,
                  Y
                ]
              }
            ],
            "border-collapse": [
              {
                border: [
                  "collapse",
                  "separate"
                ]
              }
            ],
            "border-spacing": [
              {
                "border-spacing": X()
              }
            ],
            "border-spacing-x": [
              {
                "border-spacing-x": X()
              }
            ],
            "border-spacing-y": [
              {
                "border-spacing-y": X()
              }
            ],
            "table-layout": [
              {
                table: [
                  "auto",
                  "fixed"
                ]
              }
            ],
            caption: [
              {
                caption: [
                  "top",
                  "bottom"
                ]
              }
            ],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  G,
                  Y
                ]
              }
            ],
            "transition-behavior": [
              {
                transition: [
                  "normal",
                  "discrete"
                ]
              }
            ],
            duration: [
              {
                duration: [
                  F,
                  "initial",
                  G,
                  Y
                ]
              }
            ],
            ease: [
              {
                ease: [
                  "linear",
                  "initial",
                  $t,
                  G,
                  Y
                ]
              }
            ],
            delay: [
              {
                delay: [
                  F,
                  G,
                  Y
                ]
              }
            ],
            animate: [
              {
                animate: [
                  "none",
                  It,
                  G,
                  Y
                ]
              }
            ],
            backface: [
              {
                backface: [
                  "hidden",
                  "visible"
                ]
              }
            ],
            perspective: [
              {
                perspective: [
                  ct,
                  G,
                  Y
                ]
              }
            ],
            "perspective-origin": [
              {
                "perspective-origin": W()
              }
            ],
            rotate: [
              {
                rotate: ul()
              }
            ],
            "rotate-x": [
              {
                "rotate-x": ul()
              }
            ],
            "rotate-y": [
              {
                "rotate-y": ul()
              }
            ],
            "rotate-z": [
              {
                "rotate-z": ul()
              }
            ],
            scale: [
              {
                scale: Pl()
              }
            ],
            "scale-x": [
              {
                "scale-x": Pl()
              }
            ],
            "scale-y": [
              {
                "scale-y": Pl()
              }
            ],
            "scale-z": [
              {
                "scale-z": Pl()
              }
            ],
            "scale-3d": [
              "scale-3d"
            ],
            skew: [
              {
                skew: te()
              }
            ],
            "skew-x": [
              {
                "skew-x": te()
              }
            ],
            "skew-y": [
              {
                "skew-y": te()
              }
            ],
            transform: [
              {
                transform: [
                  G,
                  Y,
                  "",
                  "none",
                  "gpu",
                  "cpu"
                ]
              }
            ],
            "transform-origin": [
              {
                origin: W()
              }
            ],
            "transform-style": [
              {
                transform: [
                  "3d",
                  "flat"
                ]
              }
            ],
            translate: [
              {
                translate: le()
              }
            ],
            "translate-x": [
              {
                "translate-x": le()
              }
            ],
            "translate-y": [
              {
                "translate-y": le()
              }
            ],
            "translate-z": [
              {
                "translate-z": le()
              }
            ],
            "translate-none": [
              "translate-none"
            ],
            accent: [
              {
                accent: R()
              }
            ],
            appearance: [
              {
                appearance: [
                  "none",
                  "auto"
                ]
              }
            ],
            "caret-color": [
              {
                caret: R()
              }
            ],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light"
                ]
              }
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  G,
                  Y
                ]
              }
            ],
            "field-sizing": [
              {
                "field-sizing": [
                  "fixed",
                  "content"
                ]
              }
            ],
            "pointer-events": [
              {
                "pointer-events": [
                  "auto",
                  "none"
                ]
              }
            ],
            resize: [
              {
                resize: [
                  "none",
                  "",
                  "y",
                  "x"
                ]
              }
            ],
            "scroll-behavior": [
              {
                scroll: [
                  "auto",
                  "smooth"
                ]
              }
            ],
            "scroll-m": [
              {
                "scroll-m": X()
              }
            ],
            "scroll-mx": [
              {
                "scroll-mx": X()
              }
            ],
            "scroll-my": [
              {
                "scroll-my": X()
              }
            ],
            "scroll-ms": [
              {
                "scroll-ms": X()
              }
            ],
            "scroll-me": [
              {
                "scroll-me": X()
              }
            ],
            "scroll-mt": [
              {
                "scroll-mt": X()
              }
            ],
            "scroll-mr": [
              {
                "scroll-mr": X()
              }
            ],
            "scroll-mb": [
              {
                "scroll-mb": X()
              }
            ],
            "scroll-ml": [
              {
                "scroll-ml": X()
              }
            ],
            "scroll-p": [
              {
                "scroll-p": X()
              }
            ],
            "scroll-px": [
              {
                "scroll-px": X()
              }
            ],
            "scroll-py": [
              {
                "scroll-py": X()
              }
            ],
            "scroll-ps": [
              {
                "scroll-ps": X()
              }
            ],
            "scroll-pe": [
              {
                "scroll-pe": X()
              }
            ],
            "scroll-pt": [
              {
                "scroll-pt": X()
              }
            ],
            "scroll-pr": [
              {
                "scroll-pr": X()
              }
            ],
            "scroll-pb": [
              {
                "scroll-pb": X()
              }
            ],
            "scroll-pl": [
              {
                "scroll-pl": X()
              }
            ],
            "snap-align": [
              {
                snap: [
                  "start",
                  "end",
                  "center",
                  "align-none"
                ]
              }
            ],
            "snap-stop": [
              {
                snap: [
                  "normal",
                  "always"
                ]
              }
            ],
            "snap-type": [
              {
                snap: [
                  "none",
                  "x",
                  "y",
                  "both"
                ]
              }
            ],
            "snap-strictness": [
              {
                snap: [
                  "mandatory",
                  "proximity"
                ]
              }
            ],
            touch: [
              {
                touch: [
                  "auto",
                  "none",
                  "manipulation"
                ]
              }
            ],
            "touch-x": [
              {
                "touch-pan": [
                  "x",
                  "left",
                  "right"
                ]
              }
            ],
            "touch-y": [
              {
                "touch-pan": [
                  "y",
                  "up",
                  "down"
                ]
              }
            ],
            "touch-pz": [
              "touch-pinch-zoom"
            ],
            select: [
              {
                select: [
                  "none",
                  "text",
                  "all",
                  "auto"
                ]
              }
            ],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  G,
                  Y
                ]
              }
            ],
            fill: [
              {
                fill: [
                  "none",
                  ...R()
                ]
              }
            ],
            "stroke-w": [
              {
                stroke: [
                  F,
                  Cu,
                  Ke,
                  Ef
                ]
              }
            ],
            stroke: [
              {
                stroke: [
                  "none",
                  ...R()
                ]
              }
            ],
            "forced-color-adjust": [
              {
                "forced-color-adjust": [
                  "auto",
                  "none"
                ]
              }
            ]
          },
          conflictingClassGroups: {
            overflow: [
              "overflow-x",
              "overflow-y"
            ],
            overscroll: [
              "overscroll-x",
              "overscroll-y"
            ],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left"
            ],
            "inset-x": [
              "right",
              "left"
            ],
            "inset-y": [
              "top",
              "bottom"
            ],
            flex: [
              "basis",
              "grow",
              "shrink"
            ],
            gap: [
              "gap-x",
              "gap-y"
            ],
            p: [
              "px",
              "py",
              "ps",
              "pe",
              "pt",
              "pr",
              "pb",
              "pl"
            ],
            px: [
              "pr",
              "pl"
            ],
            py: [
              "pt",
              "pb"
            ],
            m: [
              "mx",
              "my",
              "ms",
              "me",
              "mt",
              "mr",
              "mb",
              "ml"
            ],
            mx: [
              "mr",
              "ml"
            ],
            my: [
              "mt",
              "mb"
            ],
            size: [
              "w",
              "h"
            ],
            "font-size": [
              "leading"
            ],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction"
            ],
            "fvn-ordinal": [
              "fvn-normal"
            ],
            "fvn-slashed-zero": [
              "fvn-normal"
            ],
            "fvn-figure": [
              "fvn-normal"
            ],
            "fvn-spacing": [
              "fvn-normal"
            ],
            "fvn-fraction": [
              "fvn-normal"
            ],
            "line-clamp": [
              "display",
              "overflow"
            ],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl"
            ],
            "rounded-s": [
              "rounded-ss",
              "rounded-es"
            ],
            "rounded-e": [
              "rounded-se",
              "rounded-ee"
            ],
            "rounded-t": [
              "rounded-tl",
              "rounded-tr"
            ],
            "rounded-r": [
              "rounded-tr",
              "rounded-br"
            ],
            "rounded-b": [
              "rounded-br",
              "rounded-bl"
            ],
            "rounded-l": [
              "rounded-tl",
              "rounded-bl"
            ],
            "border-spacing": [
              "border-spacing-x",
              "border-spacing-y"
            ],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l"
            ],
            "border-w-x": [
              "border-w-r",
              "border-w-l"
            ],
            "border-w-y": [
              "border-w-t",
              "border-w-b"
            ],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l"
            ],
            "border-color-x": [
              "border-color-r",
              "border-color-l"
            ],
            "border-color-y": [
              "border-color-t",
              "border-color-b"
            ],
            translate: [
              "translate-x",
              "translate-y",
              "translate-none"
            ],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z"
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml"
            ],
            "scroll-mx": [
              "scroll-mr",
              "scroll-ml"
            ],
            "scroll-my": [
              "scroll-mt",
              "scroll-mb"
            ],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl"
            ],
            "scroll-px": [
              "scroll-pr",
              "scroll-pl"
            ],
            "scroll-py": [
              "scroll-pt",
              "scroll-pb"
            ],
            touch: [
              "touch-x",
              "touch-y",
              "touch-pz"
            ],
            "touch-x": [
              "touch"
            ],
            "touch-y": [
              "touch"
            ],
            "touch-pz": [
              "touch"
            ]
          },
          conflictingClassGroupModifiers: {
            "font-size": [
              "leading"
            ]
          },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection"
          ]
        };
      }, Kv = xv(Lv);
      function Me(...f) {
        return Kv(Kd(f));
      }
      function Jv({ className: f, type: v, ...y }) {
        return at.jsx("input", {
          type: v,
          "data-slot": "input",
          className: Me("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", f),
          ...y
        });
      }
      function Gd(f, v) {
        if (typeof f == "function") return f(v);
        f != null && (f.current = v);
      }
      function kv(...f) {
        return (v) => {
          let y = false;
          const s = f.map((_) => {
            const E = Gd(_, v);
            return !y && typeof E == "function" && (y = true), E;
          });
          if (y) return () => {
            for (let _ = 0; _ < s.length; _++) {
              const E = s[_];
              typeof E == "function" ? E() : Gd(f[_], null);
            }
          };
        };
      }
      function Wv(f) {
        const v = Fv(f), y = rt.forwardRef((s, _) => {
          const { children: E, ...D } = s, w = rt.Children.toArray(E), O = w.find(Pv);
          if (O) {
            const S = O.props.children, N = w.map((K) => K === O ? rt.Children.count(S) > 1 ? rt.Children.only(null) : rt.isValidElement(S) ? S.props.children : null : K);
            return at.jsx(v, {
              ...D,
              ref: _,
              children: rt.isValidElement(S) ? rt.cloneElement(S, void 0, N) : null
            });
          }
          return at.jsx(v, {
            ...D,
            ref: _,
            children: E
          });
        });
        return y.displayName = `${f}.Slot`, y;
      }
      var $v = Wv("Slot");
      function Fv(f) {
        const v = rt.forwardRef((y, s) => {
          const { children: _, ...E } = y;
          if (rt.isValidElement(_)) {
            const D = lh(_), w = th(E, _.props);
            return _.type !== rt.Fragment && (w.ref = s ? kv(s, D) : D), rt.cloneElement(_, w);
          }
          return rt.Children.count(_) > 1 ? rt.Children.only(null) : null;
        });
        return v.displayName = `${f}.SlotClone`, v;
      }
      var Iv = Symbol("radix.slottable");
      function Pv(f) {
        return rt.isValidElement(f) && typeof f.type == "function" && "__radixId" in f.type && f.type.__radixId === Iv;
      }
      function th(f, v) {
        const y = {
          ...v
        };
        for (const s in v) {
          const _ = f[s], E = v[s];
          /^on[A-Z]/.test(s) ? _ && E ? y[s] = (...w) => {
            E(...w), _(...w);
          } : _ && (y[s] = _) : s === "style" ? y[s] = {
            ..._,
            ...E
          } : s === "className" && (y[s] = [
            _,
            E
          ].filter(Boolean).join(" "));
        }
        return {
          ...f,
          ...y
        };
      }
      function lh(f) {
        var _a, _b;
        let v = (_a = Object.getOwnPropertyDescriptor(f.props, "ref")) == null ? void 0 : _a.get, y = v && "isReactWarning" in v && v.isReactWarning;
        return y ? f.ref : (v = (_b = Object.getOwnPropertyDescriptor(f, "ref")) == null ? void 0 : _b.get, y = v && "isReactWarning" in v && v.isReactWarning, y ? f.props.ref : f.props.ref || f.ref);
      }
      const wd = (f) => typeof f == "boolean" ? `${f}` : f === 0 ? "0" : f, jd = Kd, eh = (f, v) => (y) => {
        var s;
        if ((v == null ? void 0 : v.variants) == null) return jd(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className);
        const { variants: _, defaultVariants: E } = v, D = Object.keys(_).map((S) => {
          const N = y == null ? void 0 : y[S], K = E == null ? void 0 : E[S];
          if (N === null) return null;
          const J = wd(N) || wd(K);
          return _[S][J];
        }), w = y && Object.entries(y).reduce((S, N) => {
          let [K, J] = N;
          return J === void 0 || (S[K] = J), S;
        }, {}), O = v == null || (s = v.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((S, N) => {
          let { class: K, className: J, ...st } = N;
          return Object.entries(st).every((P) => {
            let [ct, gt] = P;
            return Array.isArray(gt) ? gt.includes({
              ...E,
              ...w
            }[ct]) : {
              ...E,
              ...w
            }[ct] === gt;
          }) ? [
            ...S,
            K,
            J
          ] : S;
        }, []);
        return jd(f, D, O, y == null ? void 0 : y.class, y == null ? void 0 : y.className);
      }, ah = eh("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
          }
        },
        defaultVariants: {
          variant: "default",
          size: "default"
        }
      });
      function Xd({ className: f, variant: v, size: y, asChild: s = false, ..._ }) {
        const E = s ? $v : "button";
        return at.jsx(E, {
          "data-slot": "button",
          className: Me(ah({
            variant: v,
            size: y,
            className: f
          })),
          ..._
        });
      }
      const am = rt.forwardRef(({ className: f, ...v }, y) => at.jsx("div", {
        ref: y,
        className: Me("rounded-xl border bg-card text-card-foreground shadow", f),
        ...v
      }));
      am.displayName = "Card";
      const um = rt.forwardRef(({ className: f, ...v }, y) => at.jsx("div", {
        ref: y,
        className: Me("flex flex-col space-y-1.5 p-6", f),
        ...v
      }));
      um.displayName = "CardHeader";
      const nm = rt.forwardRef(({ className: f, ...v }, y) => at.jsx("div", {
        ref: y,
        className: Me("font-semibold leading-none tracking-tight", f),
        ...v
      }));
      nm.displayName = "CardTitle";
      const im = rt.forwardRef(({ className: f, ...v }, y) => at.jsx("div", {
        ref: y,
        className: Me("text-sm text-muted-foreground", f),
        ...v
      }));
      im.displayName = "CardDescription";
      const cm = rt.forwardRef(({ className: f, ...v }, y) => at.jsx("div", {
        ref: y,
        className: Me("p-6 pt-0", f),
        ...v
      }));
      cm.displayName = "CardContent";
      const uh = rt.forwardRef(({ className: f, ...v }, y) => at.jsx("div", {
        ref: y,
        className: Me("flex items-center p-6 pt-0", f),
        ...v
      }));
      uh.displayName = "CardFooter";
      function Qd(f) {
        return f.replace(/[&<>'"]/g, (v) => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;"
        })[v]);
      }
      function nh(f) {
        const v = document.createElement("input");
        document.body.appendChild(v), v.value = f, v.select(), document.execCommand("copy"), document.body.removeChild(v);
      }
      function ih() {
        const [f, v] = rt.useState(""), [y, s] = rt.useState(false), [_, E] = rt.useState(""), [D, w] = rt.useState(""), [O, S] = rt.useState(""), [N, K] = rt.useState("");
        rt.useEffect(() => {
          (async () => {
          })();
        }, []);
        const J = rt.useMemo(() => {
          try {
            return $y(f);
          } catch {
          }
        }, [
          f
        ]);
        return rt.useEffect(() => {
          (() => {
            const P = f;
            s(!!ky(P)), E(Ky(P)), w(Jy(P)), S(Wy(P));
            const ct = {
              t: "\u{1F50D} Transparent",
              z: "\u{1F6E1}\uFE0F Sapling",
              u: "\u{1F310} Unified",
              tex: "\u{1F4C8} TEX"
            }[O] || "\u2753 Unknown type";
            K(ct);
          })();
        }, [
          f
        ]), at.jsxs(at.Fragment, {
          children: [
            at.jsx("div", {
              className: "card",
              children: at.jsxs("div", {
                className: "flex flex-row gap-3",
                children: [
                  at.jsx(Jv, {
                    type: "text",
                    id: "input",
                    value: f,
                    onChange: (st) => v(st.target.value)
                  }),
                  at.jsx(Xd, {
                    onClick: () => v(""),
                    children: "\u{1F9F9}"
                  })
                ]
              })
            }),
            at.jsxs(am, {
              className: "text-start",
              children: [
                at.jsxs(um, {
                  children: [
                    at.jsx(nm, {
                      children: "UA Address Information"
                    }),
                    at.jsx(im, {
                      className: f && y ? "text-green-500" : "text-red-500",
                      children: f && y ? "\u2705 Address is valid" : "\u26A0\uFE0F Please enter a valid address to check."
                    })
                  ]
                }),
                at.jsxs(cm, {
                  children: [
                    !!_ && at.jsxs("div", {
                      className: "mb-3",
                      children: [
                        "\u{1F517} Normalized: ",
                        at.jsx("span", {
                          className: "break-words font-mono",
                          children: Qd(_)
                        })
                      ]
                    }),
                    !!N && at.jsxs("div", {
                      children: [
                        "\u{1F3F7}\uFE0F Address type: $",
                        N
                      ]
                    }),
                    O === "u" && at.jsxs("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        at.jsx("h3", {
                          children: "\u{1F4E6} Parsing successful"
                        }),
                        at.jsx("span", {
                          children: "This unified address contains:"
                        }),
                        Array.isArray(J) && J.length > 0 && J.map((st, P) => {
                          const ct = Qd(st), gt = [
                            "Orchard Address: ",
                            "Sapling Address: ",
                            "Transparent Address: "
                          ][P] || "";
                          return at.jsxs("div", {
                            className: "flex flex-row gap-4 justify-between max-w-full text-start",
                            children: [
                              at.jsx("span", {
                                children: gt
                              }),
                              at.jsx("span", {
                                className: "font-mono break-all flex-1",
                                children: ct
                              }),
                              at.jsx(Xd, {
                                onClick: () => nh(ct),
                                children: "Copy"
                              })
                            ]
                          });
                        }),
                        at.jsx("div", {})
                      ]
                    }),
                    !D && O === "u" ? at.jsx("div", {
                      children: "\u26A0\uFE0F Parsing failed (unsupported format or error)"
                    }) : null
                  ]
                })
              ]
            })
          ]
        });
      }
      wy.createRoot(document.getElementById("root")).render(at.jsx(rt.StrictMode, {
        children: at.jsx(ih, {})
      }));
    })();
  }
});
export default require_stdin();
