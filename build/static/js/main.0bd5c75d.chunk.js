(this['webpackJsonpgogo-react'] = this['webpackJsonpgogo-react'] || []).push([
	[3],
	{
		15: function (e, t, n) {
			'use strict';
			n.r(t),
				n.d(t, 'store', function () {
					return M;
				});
			var r = n(22),
				o = n(162),
				a = n(2),
				u = n.n(a),
				c = n(47),
				i = n.n(c),
				s = n(56),
				l = n(156),
				d = n(157),
				f = n(6),
				p = n(158),
				h = (n(295), n(296), n(159)),
				g = n.n(h),
				b = n(9),
				m = n(163),
				j = n(160),
				O = n.n(j),
				v = n(161),
				y = n.n(v),
				k = n(46),
				w = n(12),
				S = n(14),
				x = n(25),
				_ = (n(30), { locale: 'en' }),
				T = n(8),
				I = {
					containerClassnames: T.g,
					subHiddenBreakpoint: T.o,
					menuHiddenBreakpoint: T.l,
					menuClickCount: 0,
					selectedMenuHasSubItems: 'menu-default' === T.g,
				},
				E = n(29),
				C = n(86),
				G = n(38),
				D = n(84),
				L = n(87),
				q = Object(w.combineReducers)({
					menu: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: I,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case x.c:
								return Object(S.a)(
									Object(S.a)({}, e),
									{},
									{ selectedMenuHasSubItems: t.payload },
								);
							case x.f:
							case x.d:
								return Object(S.a)(
									Object(S.a)({}, e),
									{},
									{
										containerClassnames: t.payload.containerClassnames,
										menuClickCount: t.payload.menuClickCount,
									},
								);
							case x.e:
							case x.b:
								return Object(S.a)(
									Object(S.a)({}, e),
									{},
									{ containerClassnames: t.payload },
								);
							default:
								return Object(S.a)({}, e);
						}
					},
					user: C.a,
					locations: D.b,
					credentials: E.b,
					locationGroups: G.c,
					google: L.a,
					settings: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: _,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case x.a:
								return Object(S.a)(
									Object(S.a)({}, e),
									{},
									{ locale: t.payload },
								);
							default:
								return Object(S.a)({}, e);
						}
					},
				}),
				U = function (e, t) {
					return (
						'RESET' === t.type && (localStorage.clear(), (e = void 0)), q(e, t)
					);
				};
			var R = function (e) {
					e &&
						e instanceof Function &&
						n
							.e(33)
							.then(n.bind(null, 726))
							.then(function (t) {
								var n = t.getCLS,
									r = t.getFID,
									o = t.getFCP,
									a = t.getLCP,
									u = t.getTTFB;
								n(e), r(e), o(e), a(e), u(e);
							});
				},
				A = n(7),
				N = n.n(A),
				z = function () {
					(N.a.defaults.baseURL = ''.concat(T.n, '/api')),
						(N.a.defaults.headers.post['Content-Type'] = 'application/json'),
						N.a.interceptors.request.use(
							function (e) {
								if (e.baseURL === ''.concat(T.n, '/api')) {
									var t = M.getState().credentials.token;
									(e.withCredentials = !0), t && (e.headers.authorization = t);
								}
								return e;
							},
							function (e) {
								return Promise.reject(e);
							},
						),
						N.a.interceptors.response.use(
							function (e) {
								return e;
							},
							function (e) {
								var t,
									n,
									r = e.config;
								return (
									401 ===
										(null === (t = e.response) || void 0 === t
											? void 0
											: t.status) &&
										!r.url === ''.concat(T.n, '/api/refresh-token') &&
										(M.dispatch(Object(E.e)()), M.dispatch(Object(E.a)())),
									401 !==
										(null === (n = e.response) || void 0 === n
											? void 0
											: n.status) || r._retry
										? Promise.reject(e)
										: ((r._retry = !0),
										  N.a
												.request({ method: 'POST', url: '/user/refresh-token' })
												.then(function (e) {
													if (200 === e.status)
														return (
															M.dispatch(Object(E.d)(e.data.access_token)),
															N()(r)
														);
												}))
								);
							},
						);
				},
				P = u.a.lazy(function () {
					return Promise.all([n.e(8), n.e(1)]).then(n.bind(null, 735));
				}),
				M = (function (e, t) {
					var n = {
						key: 'client',
						storage: y.a,
						stateReconciler: O.a,
						whiteList: ['menu,settings,user,credentials'],
					};
					return Object(f.a)({
						reducer: Object(m.a)(n, U),
						devTools: !0,
						middleware: function (e) {
							return e({
								serializableCheck: {
									ignoredActions: [b.b, b.h, b.d, b.e, b.f, b.g],
								},
							}).concat(g.a, Object(p.routerMiddleware)(t), k.a);
						},
					});
				})(0, Object(o.a)()),
				H = function () {
					return (
						z(),
						Object(r.jsx)(s.a, {
							store: M,
							children: Object(r.jsx)(d.a, {
								loading: Object(r.jsx)('div', { className: 'loading' }),
								persistor: Object(l.a)(M),
								children: Object(r.jsx)(a.Suspense, {
									fallback: Object(r.jsx)('div', { className: 'loading' }),
									children: Object(r.jsx)(P, {}),
								}),
							}),
						})
					);
				};
			i.a.render(Object(r.jsx)(H, {}), document.getElementById('root')), R();
		},
		166: function (e, t, n) {
			'use strict';
			n.d(t, 'a', function () {
				return u;
			});
			n(15);
			var r = n(8),
				o = null,
				a = function (e) {
					if (e.origin === r.h) e.data;
				},
				u = function () {
					var e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: 'google';
					console.log('popup'), window.removeEventListener('message', a);
					var t = {
							client_id:
								'66875520156-8gc7rf7vvv4570oeboqgag71c84fcr41.apps.googleusercontent.com',
							redirect_uri: ''.concat(r.h, '/oauth2callback'),
							scope: ['https://www.googleapis.com/auth/business.manage'],
							include_granted_scopes: 'true',
							access_type: 'offline',
							state: '/',
							response_type: 'code',
							prompt: 'consent',
						},
						n = 'https://accounts.google.com/o/oauth2/v2/auth?'.concat(
							new URLSearchParams(t).toString(),
						),
						u =
							'toolbar=no, menubar=no, width=600, height=700, top=100, left=100, resizable,scroolbars,status';
					null === o || o.closed ? (o = window.open(n, e, u)) : o.focus();
				};
		},
		167: function (e, t, n) {
			'use strict';
			n.r(t);
			n(168), n(169), n(170), n(171), n(172), n(173), n(174);
			var r = n(8),
				o = n(30),
				a = r.j || r.i ? Object(o.b)() : r.d;
			Object(o.e)(a);
			n(317)('./gogo.'.concat(a, '.scss')).then(function () {
				n(15);
			});
		},
		168: function (e, t, n) {},
		169: function (e, t, n) {},
		180: function (e, t) {},
		182: function (e, t) {},
		194: function (e, t) {},
		196: function (e, t) {},
		224: function (e, t) {},
		226: function (e, t) {},
		227: function (e, t) {},
		232: function (e, t) {},
		234: function (e, t) {},
		25: function (e, t, n) {
			'use strict';
			n.d(t, 'a', function () {
				return l;
			}),
				n.d(t, 'j', function () {
					return d;
				}),
				n.d(t, 'i', function () {
					return f;
				}),
				n.d(t, 'h', function () {
					return p;
				}),
				n.d(t, 'g', function () {
					return h;
				}),
				n.d(t, 'f', function () {
					return g;
				}),
				n.d(t, 'e', function () {
					return b;
				}),
				n.d(t, 'd', function () {
					return m;
				}),
				n.d(t, 'b', function () {
					return j;
				}),
				n.d(t, 'c', function () {
					return O;
				}),
				n.d(t, 'n', function () {
					return r;
				}),
				n.d(t, 'l', function () {
					return o;
				}),
				n.d(t, 'k', function () {
					return a;
				}),
				n.d(t, 'o', function () {
					return u;
				}),
				n.d(t, 'p', function () {
					return c;
				}),
				n.d(t, 'm', function () {
					return s;
				});
			var r = function (e) {
					return { type: O, payload: e };
				},
				o = function (e) {
					return { type: j, payload: e };
				},
				a = function (e, t) {
					var n = !t.indexOf(e) > -1 ? ''.concat(t, ' ').concat(e) : t;
					return { type: b, payload: n };
				},
				u = function (e) {
					var t = e
							? e.split(' ').filter(function (e) {
									return '' !== e && 'sub-show-temporary' !== e;
							  })
							: '',
						n = '';
					return (
						(n = t.includes('main-show-temporary')
							? t
									.filter(function (e) {
										return 'main-show-temporary' !== e;
									})
									.join(' ')
							: ''.concat(t.join(' '), ' main-show-temporary')),
						{ type: m, payload: { containerClassnames: n, menuClickCount: 0 } }
					);
				},
				c = function (e, t, n) {
					var r = t
							? t.split(' ').filter(function (e) {
									return '' !== e;
							  })
							: '',
						o = '';
					return (
						n ||
							(!r.includes('menu-default') ||
								(e % 4 !== 0 && e % 4 !== 3) ||
								(e = 1),
							r.includes('menu-sub-hidden') && e % 4 === 2 && (e = 0),
							!r.includes('menu-hidden') ||
								(e % 4 !== 2 && e % 4 !== 3) ||
								(e = 0)),
						e % 4 === 0
							? (r.includes('menu-default') && r.includes('menu-sub-hidden')
									? (o = 'menu-default menu-sub-hidden')
									: r.includes('menu-default')
									? (o = 'menu-default')
									: r.includes('menu-sub-hidden')
									? (o = 'menu-sub-hidden')
									: r.includes('menu-hidden') && (o = 'menu-hidden'),
							  (e = 0))
							: e % 4 === 1
							? r.includes('menu-default') && r.includes('menu-sub-hidden')
								? (o = 'menu-default menu-sub-hidden main-hidden sub-hidden')
								: r.includes('menu-default')
								? (o = 'menu-default sub-hidden')
								: r.includes('menu-sub-hidden')
								? (o = 'menu-sub-hidden main-hidden sub-hidden')
								: r.includes('menu-hidden') &&
								  (o = 'menu-hidden main-show-temporary')
							: e % 4 === 2
							? r.includes('menu-default') && r.includes('menu-sub-hidden')
								? (o = 'menu-default menu-sub-hidden sub-hidden')
								: r.includes('menu-default')
								? (o = 'menu-default main-hidden sub-hidden')
								: r.includes('menu-sub-hidden')
								? (o = 'menu-sub-hidden sub-hidden')
								: r.includes('menu-hidden') &&
								  (o = 'menu-hidden main-show-temporary sub-show-temporary')
							: e % 4 === 3 &&
							  (r.includes('menu-default') && r.includes('menu-sub-hidden')
									? (o = 'menu-default menu-sub-hidden sub-show-temporary')
									: r.includes('menu-default')
									? (o = 'menu-default sub-hidden')
									: r.includes('menu-sub-hidden')
									? (o = 'menu-sub-hidden sub-show-temporary')
									: r.includes('menu-hidden') &&
									  (o = 'menu-hidden main-show-temporary')),
						r.includes('menu-mobile') && (o += ' menu-mobile'),
						{ type: g, payload: { containerClassnames: o, menuClickCount: e } }
					);
				},
				i = n(30),
				s = function (e) {
					return Object(i.f)(e), { type: l, payload: e };
				},
				l = 'CHANGE_LOCALE',
				d = 'TOKEN_SAVE_SUCCESS',
				f = 'TOKEN_SAVE_ERROR',
				p = 'TOKEN_REVOKE_SUCCESS',
				h = 'TOKEN_REVOKE_ERROR',
				g = 'MENU_SET_CLASSNAMES',
				b = 'MENU_CONTAINER_ADD_CLASSNAME',
				m = 'MENU_CLICK_MOBILE_MENU',
				j = 'MENU_CHANGE_DEFAULT_CLASSES',
				O = 'MENU_CHANGE_HAS_SUB_ITEM_STATUS';
		},
		253: function (e, t) {},
		26: function (e, t, n) {
			'use strict';
			n.d(t, 'c', function () {
				return l;
			}),
				n.d(t, 'd', function () {
					return d;
				}),
				n.d(t, 'e', function () {
					return f;
				}),
				n.d(t, 'b', function () {
					return p;
				}),
				n.d(t, 'g', function () {
					return h;
				}),
				n.d(t, 'a', function () {
					return g;
				}),
				n.d(t, 'f', function () {
					return b;
				});
			var r = n(0),
				o = n.n(r),
				a = n(5),
				u = n(7),
				c = n.n(u),
				i = n(15),
				s = function () {
					return i.store.getState().credentials.token;
				},
				l = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'GET',
														url: '/location/get',
														params: { locationID: t },
														headers: { authorization: s() },
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				d = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'GET',
														url: '/location/list/'.concat(t),
														headers: { authorization: s() },
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				f = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t, n) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'PATCH',
														url: '/location/'.concat(t),
														headers: { authorization: s() },
														data: n,
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				p = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t, n) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'POST',
														url: '/location/create/'.concat(t),
														params: { locationGroupID: t },
														headers: { authorization: s() },
														data: n,
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				h = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t, n, r) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'POST',
														url: '/location/transfer',
														params: { from: n, to: r, locationID: t },
														headers: { authorization: s() },
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t, n, r) {
						return e.apply(this, arguments);
					};
				})(),
				g = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t, n) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'POST',
														url: '/location/batchGet',
														params: { locationGroupID: t },
														headers: { authorization: s() },
														data: n,
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				b = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t, n) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'DELETE',
														url: '/location/delete/'.concat(t, '/').concat(n),
														headers: { authorization: s() },
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})();
		},
		265: function (e, t) {},
		268: function (e, t) {},
		29: function (e, t, n) {
			'use strict';
			n.d(t, 'c', function () {
				return l;
			}),
				n.d(t, 'd', function () {
					return h;
				}),
				n.d(t, 'a', function () {
					return g;
				}),
				n.d(t, 'e', function () {
					return b;
				});
			var r,
				o = n(1),
				a = n(0),
				u = n.n(a),
				c = n(5),
				i = n(6),
				s = n(36),
				l = Object(i.b)(
					'credentials/refreshToken',
					Object(c.a)(
						u.a.mark(function e() {
							var t;
							return u.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (e.next = 2), Object(s.b)();
										case 2:
											return (t = e.sent), e.abrupt('return', t);
										case 4:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					),
				),
				d = Object(i.b)(
					'credentials/revokeToken',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (e.next = 2), Object(s.d)(t);
											case 2:
												return (n = e.sent), e.abrupt('return', n);
											case 4:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				f = Object(i.d)({
					name: 'credentials',
					initialState: {
						token: '',
						refreshToken: { loading: !1, error: null },
						revokeToken: { loading: !1, error: null },
						error: null,
					},
					reducers: {
						saveToken: function (e, t) {
							(e.token = t.payload), (e.error = null);
						},
						clearToken: function (e) {
							e.token = '';
						},
						setError: function (e) {
							e.error = 'Unauthorized';
						},
					},
					extraReducers:
						((r = {}),
						Object(o.a)(r, l.pending, function (e) {
							e.refreshToken.loading = !0;
						}),
						Object(o.a)(r, l.fulfilled, function (e, t) {
							(e.refreshToken.loading = !1),
								(e.refreshToken.error = null),
								(e.token = t.payload.access_token),
								(e.error = '');
						}),
						Object(o.a)(r, l.rejected, function (e, t) {
							(e.token = ''),
								(e.refreshToken.error = t.error.message),
								(e.refreshToken.loading = !1);
						}),
						Object(o.a)(r, d.pending, function (e) {
							e.revokeToken.loading = !0;
						}),
						Object(o.a)(r, d.fulfilled, function (e) {
							(e.revokeToken.loading = !1),
								(e.token = ''),
								(e.revokeToken.error = null);
						}),
						Object(o.a)(r, d.rejected, function (e, t) {
							(e.revokeToken.error = t.error.message),
								(e.revokeToken.loading = !1);
						}),
						r),
				}),
				p = f.actions,
				h = p.saveToken,
				g = p.clearToken,
				b = p.setError;
			t.b = f.reducer;
		},
		30: function (e, t, n) {
			'use strict';
			n.d(t, 'd', function () {
				return u;
			}),
				n.d(t, 'h', function () {
					return c;
				}),
				n.d(t, 'b', function () {
					return i;
				}),
				n.d(t, 'e', function () {
					return s;
				}),
				n.d(t, 'c', function () {
					return l;
				}),
				n.d(t, 'g', function () {
					return d;
				}),
				n.d(t, 'f', function () {
					return f;
				}),
				n.d(t, 'a', function () {
					return p;
				});
			var r = n(154),
				o = n.n(r),
				a = (n(15), n(8)),
				u = function () {
					var e = a.e;
					try {
						if (localStorage.getItem('direction')) {
							var t = localStorage.getItem('direction');
							('rtl' !== t && 'ltr' !== t) || (e = t);
						}
					} catch (n) {
						console.log(
							'>>>>: src/helpers/Utils.js : getDirection -> error',
							n,
						),
							(e = a.e);
					}
					return { direction: e, isRtl: 'rtl' === e };
				},
				c = function (e) {
					var t = 'ltr';
					('rtl' !== e && 'ltr' !== e) || (t = e);
					try {
						localStorage.setItem('direction', t);
					} catch (n) {
						console.log(
							'>>>>: src/helpers/Utils.js : setDirection -> error',
							n,
						);
					}
				},
				i = function () {
					var e = a.d;
					try {
						localStorage.getItem(a.p) && (e = localStorage.getItem(a.p));
					} catch (t) {
						console.log(
							'>>>>: src/helpers/Utils.js : getCurrentColor -> error',
							t,
						),
							(e = a.d);
					}
					return e;
				},
				s = function (e) {
					try {
						localStorage.setItem(a.p, e);
					} catch (t) {
						console.log(
							'>>>>: src/helpers/Utils.js : setCurrentColor -> error',
							t,
						);
					}
				},
				l = function () {
					var e = 'rounded';
					try {
						localStorage.getItem(a.q) && (e = localStorage.getItem(a.q));
					} catch (t) {
						console.log(
							'>>>>: src/helpers/Utils.js : getCurrentRadius -> error',
							t,
						),
							(e = 'rounded');
					}
					return e;
				},
				d = function (e) {
					try {
						localStorage.setItem(a.q, e);
					} catch (t) {
						console.log(
							'>>>>: src/helpers/Utils.js : setCurrentRadius -> error',
							t,
						);
					}
				},
				f = function (e) {
					try {
						localStorage.setItem('currentLanguage', e);
					} catch (t) {
						console.log(
							'>>>>: src/helpers/Utils.js : setCurrentLanguage -> error',
							t,
						);
					}
				},
				p = function (e) {
					if (e) {
						var t = o.a.decode(e);
						return !(
							Date.now() >=
							1e3 * (null === t || void 0 === t ? void 0 : t.exp)
						);
					}
					return !1;
				};
		},
		317: function (e, t, n) {
			var r = {
				'./gogo.dark.bluenavy.scss': [318, 13],
				'./gogo.dark.blueolympic.scss': [319, 14],
				'./gogo.dark.blueyale.scss': [320, 15],
				'./gogo.dark.greenlime.scss': [321, 16],
				'./gogo.dark.greenmoss.scss': [322, 17],
				'./gogo.dark.greysteel.scss': [323, 18],
				'./gogo.dark.orangecarrot.scss': [324, 19],
				'./gogo.dark.purplemonster.scss': [325, 20],
				'./gogo.dark.redruby.scss': [326, 21],
				'./gogo.dark.yellowgranola.scss': [327, 22],
				'./gogo.light.bluenavy.scss': [328, 23],
				'./gogo.light.blueolympic.scss': [329, 24],
				'./gogo.light.blueyale.scss': [330, 25],
				'./gogo.light.greenlime.scss': [331, 26],
				'./gogo.light.greenmoss.scss': [332, 27],
				'./gogo.light.greysteel.scss': [333, 28],
				'./gogo.light.orangecarrot.scss': [334, 29],
				'./gogo.light.purplemonster.scss': [335, 30],
				'./gogo.light.redruby.scss': [336, 31],
				'./gogo.light.yellowgranola.scss': [337, 32],
			};
			function o(e) {
				if (!n.o(r, e))
					return Promise.resolve().then(function () {
						var t = new Error("Cannot find module '" + e + "'");
						throw ((t.code = 'MODULE_NOT_FOUND'), t);
					});
				var t = r[e],
					o = t[0];
				return n.e(t[1]).then(function () {
					return n.t(o, 7);
				});
			}
			(o.keys = function () {
				return Object.keys(r);
			}),
				(o.id = 317),
				(e.exports = o);
		},
		36: function (e, t, n) {
			'use strict';
			n.d(t, 'a', function () {
				return s;
			}),
				n.d(t, 'c', function () {
					return l;
				}),
				n.d(t, 'b', function () {
					return d;
				}),
				n.d(t, 'd', function () {
					return f;
				});
			var r = n(0),
				o = n.n(r),
				a = n(5),
				u = n(7),
				c = n.n(u),
				i = n(15),
				s = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'POST',
														url: '/user/login',
														data: t,
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				l = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'POST',
														url: '/user/register',
														data: t,
													})
													.then(function () {
														return t;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				d = (function () {
					var e = Object(a.a)(
						o.a.mark(function e() {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'POST',
														url: '/user/refresh-token',
														headers: {
															authorization: i.store.getState().credentials
																.token,
														},
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function () {
						return e.apply(this, arguments);
					};
				})(),
				f = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'POST',
														url: '/user/revoke-token',
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})();
		},
		37: function (e, t, n) {
			'use strict';
			n.d(t, 'c', function () {
				return l;
			}),
				n.d(t, 'a', function () {
					return d;
				}),
				n.d(t, 'd', function () {
					return f;
				}),
				n.d(t, 'b', function () {
					return p;
				}),
				n.d(t, 'e', function () {
					return h;
				});
			var r = n(0),
				o = n.n(r),
				a = n(5),
				u = n(7),
				c = n.n(u),
				i = n(15),
				s = function () {
					return i.store.getState().credentials.token;
				},
				l = (function () {
					var e = Object(a.a)(
						o.a.mark(function e() {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'GET',
														url: '/locationGroup/list',
														headers: { authorization: s() },
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function () {
						return e.apply(this, arguments);
					};
				})(),
				d = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'POST',
														url: '/locationGroup/create',
														data: t,
														headers: { authorization: s() },
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				f = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							var n,
								r = arguments;
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(n = r.length > 1 && void 0 !== r[1] ? r[1] : null),
												console.log({ data: t, groupID: n }),
												e.abrupt(
													'return',
													c.a
														.request({
															method: 'PATCH',
															url: '/locationGroup',
															data: t,
															params: { groupID: n },
															headers: { authorization: s() },
														})
														.then(function (e) {
															return e.data;
														})
														.catch(function (e) {
															throw e;
														}),
												)
											);
										case 3:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				p = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'GET',
														url: '/locationGroup/get',
														params: { groupID: t },
														headers: { authorization: s() },
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				h = (function () {
					var e = Object(a.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												c.a
													.request({
														method: 'DELETE',
														url: '/locationGroup',
														data: { groupID: t },
														headers: { authorization: s() },
													})
													.then(function (e) {
														return e.data;
													})
													.catch(function (e) {
														throw e;
													}),
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})();
		},
		38: function (e, t, n) {
			'use strict';
			n.d(t, 'd', function () {
				return f;
			}),
				n.d(t, 'b', function () {
					return p;
				}),
				n.d(t, 'f', function () {
					return h;
				}),
				n.d(t, 'e', function () {
					return g;
				}),
				n.d(t, 'g', function () {
					return y;
				}),
				n.d(t, 'a', function () {
					return k;
				}),
				n.d(t, 'h', function () {
					return S;
				}),
				n.d(t, 'i', function () {
					return x;
				});
			var r,
				o = n(1),
				a = n(0),
				u = n.n(a),
				c = n(5),
				i = n(6),
				s = n(85),
				l = n.n(s),
				d = n(37),
				f = Object(i.b)(
					'locationGroup/list',
					Object(c.a)(
						u.a.mark(function e() {
							var t;
							return u.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (e.next = 2), Object(d.c)();
										case 2:
											return (
												(t = e.sent), e.abrupt('return', t.locationGroupIds)
											);
										case 4:
										case 'end':
											return e.stop();
									}
							}, e);
						}),
					),
				),
				p = Object(i.b)(
					'locationGroup/create',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (e.next = 2), Object(d.a)(t);
											case 2:
												return (n = e.sent), e.abrupt('return', n);
											case 4:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				h = Object(i.b)(
					'locationGroup/remove',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return e.abrupt(
													'return',
													Object(d.e)(t).then(function () {
														return t;
													}),
												);
											case 1:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				g = Object(i.b)(
					'locationGroup/patch',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n, r, o;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(n = t.data),
													(r = t.groupID),
													console.log({ payload: t }),
													(e.next = 4),
													Object(d.d)(n, r)
												);
											case 4:
												return (o = e.sent), e.abrupt('return', o);
											case 6:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				b = Object(i.b)(
					'locationGroup/get',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (e.next = 2), Object(d.b)(t);
											case 2:
												return (n = e.sent), e.abrupt('return', n);
											case 4:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				m = Object(i.c)({
					selectId: function (e) {
						return e._id;
					},
				}),
				j = m.getInitialState({
					list: { loading: !1, error: null },
					create: { loading: !1, error: null },
					remove: { loading: !1, error: null },
					patch: { loading: !1, error: null },
					get: { loading: !1, error: null },
				}),
				O = Object(i.d)({
					name: 'locationGroup',
					initialState: j,
					reducers: {
						removeLocationID: function (e, t) {
							var n = t.payload,
								r = n.locationID,
								o = n.locationGroupID;
							l.a.remove(e.entities[o].locations, function (e) {
								return e === r;
							});
						},
						addLocationID: function (e, t) {
							var n = t.payload,
								r = n.locationID,
								o = n.locationGroupID;
							e.entities[o].locations.push(r);
						},
					},
					extraReducers:
						((r = {}),
						Object(o.a)(r, f.pending, function (e) {
							(e.list.loading = !0), (e.list.error = null);
						}),
						Object(o.a)(r, f.fulfilled, function (e, t) {
							(e.list.loading = !1),
								m.upsertMany(e, t.payload),
								(e.list.error = null);
						}),
						Object(o.a)(r, f.rejected, function (e, t) {
							(e.list.loading = !1), (e.list.error = t.error.message);
						}),
						Object(o.a)(r, p.pending, function (e) {
							(e.create.loading = !0), (e.create.error = null);
						}),
						Object(o.a)(r, p.fulfilled, function (e, t) {
							(e.create.loading = !1),
								m.addOne(e, t.payload),
								(e.create.error = null);
						}),
						Object(o.a)(r, p.rejected, function (e, t) {
							(e.create.loading = !1), (e.create.error = t.error.message);
						}),
						Object(o.a)(r, h.pending, function (e) {
							(e.remove.loading = !0), (e.remove.error = null);
						}),
						Object(o.a)(r, h.fulfilled, function (e, t) {
							(e.remove.loading = !1),
								(e.remove.error = null),
								m.removeOne(e, t.payload);
						}),
						Object(o.a)(r, h.rejected, function (e, t) {
							(e.remove.loading = !1), (e.remove.error = t.error.message);
						}),
						Object(o.a)(r, g.pending, function (e) {
							(e.patch.loading = !0), (e.patch.error = null);
						}),
						Object(o.a)(r, g.fulfilled, function (e, t) {
							console.log({ payload: t.payload }),
								(e.patch.loading = !1),
								(e.patch.error = null),
								m.updateOne(e, { id: t.payload._id, changes: t.payload });
						}),
						Object(o.a)(r, g.rejected, function (e, t) {
							(e.patch.loading = !1), (e.patch.error = t.error.message);
						}),
						Object(o.a)(r, b.pending, function (e) {
							(e.get.loading = !0), (e.get.error = null);
						}),
						Object(o.a)(r, b.fulfilled, function (e, t) {
							(e.get.loading = !1),
								(e.get.error = null),
								m.upsertOne(e, t.payload);
						}),
						Object(o.a)(r, b.rejected, function (e, t) {
							(e.get.loading = !1), (e.get.error = t.error.message);
						}),
						r),
				}),
				v = O.actions,
				y = v.removeLocationID,
				k = v.addLocationID;
			t.c = O.reducer;
			var w = m.getSelectors(),
				S = (w.selectIds, w.selectAll),
				x = (w.selectTotal, w.selectById);
		},
		8: function (e, t, n) {
			'use strict';
			n.d(t, 'g', function () {
				return r;
			}),
				n.d(t, 'o', function () {
					return o;
				}),
				n.d(t, 'l', function () {
					return a;
				}),
				n.d(t, 'f', function () {
					return u;
				}),
				n.d(t, 'k', function () {
					return c;
				}),
				n.d(t, 'h', function () {
					return i;
				}),
				n.d(t, 'n', function () {
					return s;
				}),
				n.d(t, 'a', function () {
					return l;
				}),
				n.d(t, 'b', function () {
					return d;
				}),
				n.d(t, 'm', function () {
					return f;
				}),
				n.d(t, 'p', function () {
					return p;
				}),
				n.d(t, 'j', function () {
					return h;
				}),
				n.d(t, 'd', function () {
					return g;
				}),
				n.d(t, 'i', function () {
					return b;
				}),
				n.d(t, 'e', function () {
					return m;
				}),
				n.d(t, 'q', function () {
					return j;
				}),
				n.d(t, 'c', function () {
					return O;
				});
			var r = 'menu-default',
				o = 1440,
				a = 768,
				u = 'en',
				c = [
					{ id: 'en', name: 'English', direction: 'ltr' },
					{ id: 'es', name: 'Espa\xf1ol', direction: 'ltr' },
				],
				i = 'http://34.133.252.56:5000',
				s = 'http://34.133.252.56:5000',
				l = '/app',
				d = 'https://1.envato.market/k4z0',
				f = ''.concat(l, '/#'),
				p = '__theme_selected_color',
				h = !1,
				g = 'light.purplemonster',
				b = !1,
				m = 'ltr',
				j = '__theme_radius',
				O = [
					'bluenavy',
					'blueyale',
					'blueolympic',
					'greenmoss',
					'greenlime',
					'purplemonster',
					'orangecarrot',
					'redruby',
					'yellowgranola',
					'greysteel',
				];
		},
		82: function (e, t, n) {
			'use strict';
			n.d(t, 'a', function () {
				return c;
			}),
				n.d(t, 'b', function () {
					return i;
				});
			var r = n(7),
				o = n.n(r),
				a = n(15),
				u = function () {
					return a.store.getState().credentials.token;
				},
				c = function (e) {
					return o.a
						.request({
							method: 'POST',
							url: '/google/codetotoken',
							headers: {
								'Content-Type': 'application/json',
								authorization: u(),
							},
							withCredentials: !0,
							data: { code: e },
						})
						.then(function (e) {
							return e.data;
						})
						.catch(function (e) {
							throw e;
						});
				},
				i = function (e) {
					return o.a
						.request({
							method: 'GET',
							url: '/google/refreshtoken',
							headers: {
								'Content-Type': 'application/json',
								authorization: u(),
							},
							withCredentials: !0,
						})
						.then(function (e) {
							return e.data;
						})
						.catch(function (e) {
							throw e;
						});
				};
		},
		84: function (e, t, n) {
			'use strict';
			n.d(t, 'c', function () {
				return h;
			}),
				n.d(t, 'a', function () {
					return g;
				}),
				n.d(t, 'd', function () {
					return b;
				}),
				n.d(t, 'e', function () {
					return O;
				}),
				n.d(t, 'g', function () {
					return S;
				}),
				n.d(t, 'f', function () {
					return _;
				});
			var r,
				o = n(1),
				a = n(0),
				u = n.n(a),
				c = n(5),
				i = n(6),
				s = n(35),
				l = (n(56), n(26)),
				d = n(15),
				f = n(38),
				p = Object(i.b)(
					'locaton/get',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n, r;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (n = t.locationID), (e.next = 3), Object(l.c)(n);
											case 3:
												return (r = e.sent), e.abrupt('return', r);
											case 5:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				h = Object(i.b)(
					'location/list',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (e.next = 2), Object(l.d)(t);
											case 2:
												return (n = e.sent), e.abrupt('return', n);
											case 4:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				g = Object(i.b)(
					'location/create',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t, n) {
								var r, o, a, c, i;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(r = n.dispatch),
													(o = t.locationGroupID),
													(a = t.data),
													(e.next = 4),
													Object(l.b)(o, a)
												);
											case 4:
												return (
													(c = e.sent),
													(i = c._id),
													r(Object(f.a)({ locationGroupID: o, locationID: i })),
													e.abrupt('return', c)
												);
											case 8:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t, n) {
							return e.apply(this, arguments);
						};
					})(),
				),
				b = Object(i.b)(
					'location/patch',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n, r, o;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(n = t.locationID),
													(r = t.data),
													console.log({ payload: t }),
													(e.next = 4),
													Object(l.e)(n, r)
												);
											case 4:
												return (o = e.sent), e.abrupt('return', o);
											case 6:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				m = Object(i.b)(
					'location/transfer',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n, r, o;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(n = t.locationID),
													(r = t.from),
													(o = t.to),
													(e.next = 3),
													Object(l.g)(n, r, o)
												);
											case 3:
												return e.abrupt('return', { from: r, to: o });
											case 4:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				j = Object(i.b)(
					'location/batchGet',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n, r, o;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(n = t.locationGroupID),
													(r = t.data),
													console.log({ payload: t }),
													(e.next = 4),
													Object(l.a)(n, r)
												);
											case 4:
												return (o = e.sent), e.abrupt('return', o);
											case 6:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				O = Object(i.b)(
					'location/remove',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t, n) {
								var r, o, a;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(r = n.dispatch),
													(o = t.locationGroupID),
													(a = t.locationID),
													(e.next = 4),
													Object(l.f)(o, a)
												);
											case 4:
												return (
													r(Object(f.g)({ locationGroupID: o, locationID: a })),
													e.abrupt('return', a)
												);
											case 6:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t, n) {
							return e.apply(this, arguments);
						};
					})(),
				),
				v = Object(i.c)({
					selectId: function (e) {
						return e._id;
					},
				}),
				y = v.getInitialState({
					list: { loading: !1, error: null },
					create: { loading: !1, error: null },
					patch: { loading: !1, error: null },
					remove: { loading: !1, error: null },
					transfer: { loading: !1, error: null },
					get: { loading: !1, error: null },
					batchGet: { loading: !1, error: null },
				}),
				k = Object(i.d)({
					name: 'location',
					initialState: y,
					extraReducers:
						((r = {}),
						Object(o.a)(r, p.pending, function (e) {
							(e.get.loading = !0), (e.get.error = null);
						}),
						Object(o.a)(r, p.fulfilled, function (e, t) {
							(e.get.loading = !1),
								v.upsertOne(e, t.payload),
								(e.get.error = null);
						}),
						Object(o.a)(r, p.rejected, function (e, t) {
							(e.get.loading = !1), (e.get.error = t.error.message);
						}),
						Object(o.a)(r, h.pending, function (e) {
							(e.list.loading = !0), (e.list.error = null);
						}),
						Object(o.a)(r, h.fulfilled, function (e, t) {
							(e.list.loading = !1),
								v.upsertMany(e, t.payload),
								(e.list.error = null);
						}),
						Object(o.a)(r, h.rejected, function (e, t) {
							(e.list.loading = !1), (e.list.error = t.error.message);
						}),
						Object(o.a)(r, g.pending, function (e) {
							(e.create.loading = !0), (e.create.error = null);
						}),
						Object(o.a)(r, g.fulfilled, function (e, t) {
							(e.create.loading = !1),
								v.addOne(e, t.payload),
								(e.create.error = null);
						}),
						Object(o.a)(r, g.rejected, function (e, t) {
							(e.create.loading = !1), (e.create.error = t.error.message);
						}),
						Object(o.a)(r, b.pending, function (e) {
							(e.patch.loading = !0), (e.patch.error = null);
						}),
						Object(o.a)(r, b.fulfilled, function (e, t) {
							(e.patch.loading = !1),
								(e.patch.error = null),
								v.updateOne(e, { id: t.payload._id, changes: t.payload });
						}),
						Object(o.a)(r, b.rejected, function (e, t) {
							(e.patch.loading = !1), (e.patch.error = t.error.message);
						}),
						Object(o.a)(r, m.pending, function (e) {
							(e.transfer.loading = !0), (e.transfer.error = null);
						}),
						Object(o.a)(r, m.fulfilled, function (e, t) {
							(e.transfer.loading = !1),
								(e.transfer.error = null),
								v.removeOne(e, t.payload.from),
								v.addOne(e, t.payload.to);
						}),
						Object(o.a)(r, m.rejected, function (e, t) {
							(e.transfer.loading = !1), (e.transfer.error = t.error.message);
						}),
						Object(o.a)(r, j.pending, function (e) {
							(e.batchGet.loading = !0), (e.batchGet.error = null);
						}),
						Object(o.a)(r, j.fulfilled, function (e, t) {
							(e.batchGet.loading = !1),
								(e.batchGet.error = null),
								v.upsertMany(e, t.payload);
						}),
						Object(o.a)(r, j.rejected, function (e, t) {
							(e.batchGet.loading = !1), (e.batchGet.error = t.error.message);
						}),
						Object(o.a)(r, O.pending, function (e) {
							(e.remove.loading = !0), (e.remove.error = null);
						}),
						Object(o.a)(r, O.fulfilled, function (e, t) {
							(e.remove.loading = !1),
								(e.remove.error = null),
								v.removeOne(e, t.payload);
						}),
						Object(o.a)(r, O.rejected, function (e, t) {
							(e.remove.loading = !1), (e.remove.error = t.error.message);
						}),
						r),
				});
			t.b = k.reducer;
			var w = v.getSelectors(),
				S = (w.selectIds, w.selectAll, w.selectTotal, w.selectById),
				x =
					(w.selectEntities,
					Object(s.a)(
						function (e) {
							return e.locations.entities;
						},
						function (e) {
							return e.filter(function (e) {
								return e.parentId;
							});
						},
					),
					v.getSelectors(function (e) {
						return e.locations;
					})),
				_ = function (e, t, n) {
					var r = t.split(' ');
					return x
						.selectAll(d.store.getState())
						.filter(function (t) {
							return (
								t.parentId === e &&
								r.every(function (e) {
									return JSON.stringify(t)
										.toLocaleLowerCase(n)
										.includes(e.toLocaleLowerCase(n));
								})
							);
						})
						.map(function (e) {
							return e._id;
						});
				};
		},
		86: function (e, t, n) {
			'use strict';
			n.d(t, 'b', function () {
				return l;
			});
			var r,
				o = n(1),
				a = n(0),
				u = n.n(a),
				c = n(5),
				i = n(6),
				s = n(36),
				l =
					(n(15),
					n(29),
					Object(i.b)(
						'user/login',
						(function () {
							var e = Object(c.a)(
								u.a.mark(function e(t) {
									var n;
									return u.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.next = 2), Object(s.a)(t);
												case 2:
													return (n = e.sent), e.abrupt('return', n);
												case 4:
												case 'end':
													return e.stop();
											}
									}, e);
								}),
							);
							return function (t) {
								return e.apply(this, arguments);
							};
						})(),
					)),
				d = Object(i.b)(
					'user/register',
					(function () {
						var e = Object(c.a)(
							u.a.mark(function e(t) {
								var n;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (e.next = 2), Object(s.c)(t);
											case 2:
												return (n = e.sent), e.abrupt('return', n);
											case 4:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				),
				f = {
					user: {},
					loginStatus: { loading: !1, error: null },
					registerStatus: { loading: !1, error: null },
				},
				p = Object(i.d)({
					name: 'user',
					initialState: f,
					reducers: {
						clearState: function (e, t) {
							(e.loginStatus = f.loginStatus),
								(e.registerStatus = f.registerStatus);
						},
					},
					extraReducers:
						((r = {}),
						Object(o.a)(r, l.pending, function (e, t) {
							e.loginStatus.loading = !0;
						}),
						Object(o.a)(r, l.fulfilled, function (e, t) {
							(e.user = t.payload.user), (e.loginStatus.loading = !1);
						}),
						Object(o.a)(r, l.rejected, function (e, t) {
							(e.user = {}),
								(e.loginStatus.loading = !1),
								(e.loginStatus.error = t.error);
						}),
						Object(o.a)(r, d.pending, function (e, t) {
							e.registerStatus.loading = !0;
						}),
						Object(o.a)(r, d.fulfilled, function (e, t) {
							(e.registerStatus.loading = !1), (e.registerStatus.error = null);
						}),
						Object(o.a)(r, d.rejected, function (e, t) {
							(e.registerStatus.error = t.error.message),
								(e.registerStatus.loading = !1),
								(e.user = {});
						}),
						r),
				});
			p.actions.clearState;
			t.a = p.reducer;
		},
		87: function (e, t, n) {
			'use strict';
			n.d(t, 'b', function () {
				return l;
			}),
				n.d(t, 'c', function () {
					return h;
				});
			var r,
				o = n(1),
				a = n(0),
				u = n.n(a),
				c = n(5),
				i = n(6),
				s = n(82),
				l =
					(n(166),
					Object(i.b)(
						'Google/getToken',
						(function () {
							var e = Object(c.a)(
								u.a.mark(function e(t) {
									var n;
									return u.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.next = 2), Object(s.a)(t);
												case 2:
													return (n = e.sent), e.abrupt('return', n);
												case 4:
												case 'end':
													return e.stop();
											}
									}, e);
								}),
							);
							return function (t) {
								return e.apply(this, arguments);
							};
						})(),
					)),
				d =
					(Object(i.b)(
						'Google/refreshToken',
						Object(c.a)(
							u.a.mark(function e() {
								var t;
								return u.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (e.next = 2), Object(s.b)();
											case 2:
												return (t = e.sent), e.abrupt('return', t);
											case 4:
											case 'end':
												return e.stop();
										}
								}, e);
							}),
						),
					),
					{
						token: {
							access_token: '',
							expiry_date: '',
							id_token: '',
							loading: !1,
							error: null,
						},
					}),
				f = Object(i.d)({
					name: 'Google',
					initialState: d,
					reducers: {
						clearToken: function (e, t) {
							e.token = d.token;
						},
						saveToken: function (e, t) {
							var n;
							(e.token.access_token = t.payload.access_token),
								(e.token.expiry_date = t.payload.expiry_date),
								(e.token.id_token =
									(null === (n = t.payload) || void 0 === n
										? void 0
										: n.id_token) || e.token.id_token);
						},
					},
					extraReducers:
						((r = {}),
						Object(o.a)(r, l.pending, function (e) {
							e.token.loading = !0;
						}),
						Object(o.a)(r, l.fulfilled, function (e, t) {
							(e.token.loading = !1),
								(e.token.error = null),
								(e.token.access_token = t.payload.access_token),
								(e.token.expiry_date = t.payload.expiry_date),
								(e.token.id_token = t.payload.id_token),
								window.open('', 'google').close();
						}),
						Object(o.a)(r, l.rejected, function (e, t) {
							(e.token = d.token),
								(e.loading = !1),
								(e.token.error = t.payload.error.message);
						}),
						r),
				});
			t.a = f.reducer;
			var p = f.actions,
				h = p.saveToken;
			p.clearToken;
		},
	},
	[[167, 4, 9]],
]);
