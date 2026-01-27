export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.COsgGLvN.js",app:"_app/immutable/entry/app.DMhrge03.js",imports:["_app/immutable/entry/start.COsgGLvN.js","_app/immutable/chunks/DyF3JO-l.js","_app/immutable/chunks/BXKEqkmd.js","_app/immutable/chunks/CGKtECOU.js","_app/immutable/entry/app.DMhrge03.js","_app/immutable/chunks/BXKEqkmd.js","_app/immutable/chunks/BHKB4wiq.js","_app/immutable/chunks/BGe0dSUI.js","_app/immutable/chunks/CGKtECOU.js","_app/immutable/chunks/BLleZ4uT.js","_app/immutable/chunks/Blxebib7.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
