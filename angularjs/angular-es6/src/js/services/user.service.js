export default class User {
	constructor(AppConstants, $http, JWT, $state, $q) {
		'ngInject';

		this._AppConstants = AppConstants;
		this._$http = $http;
		this._JWT = JWT;
		this._$state = $state;
		this._$q = $q;

		this.current = null;
	}

	attemptAuth(type, credentials) {
		let route = (type === 'login') ? '/login' : '';

		return this._$http({
			url: this._AppConstants.api + '/users' + route,
			method: 'POST',
			data: {
				user: credentials
			}
		}).then(
			(res) => {
				this._JWT.save(res.data.user.token);
				this.current = res.data.user;

				return res;
			}
		);
	}

	logout() {
		this.current = null;
		this._JWT.destroy();
		// Do a hard reload of current state to ensure all data is flushed
		this._$state.go(this._$state.current, {}, {reload: true});
	}

	verifyAuth() {
		let deferred = this._$q.defer();

	    // Check for JWT token first
	    if (!this._JWT.get()) {
	    	deferred.resolve(false);
	    	return deferred.promise;
	    }

	    // If there's a JWT & user is already set
	    if (this.current) {
	    	deferred.resolve(true);

	    // If current user isn't set, get it from the server.
	    // If server doesn't 401, set current user & resolve promise.
		} else {
			this._$http({
				url: this._AppConstants.api + '/user',
				method: 'GET'
			}).then(
			(res) => {
				this.current = res.data.user;
				deferred.resolve(true);
			},
		        // If an error happens, that means the user's token was invalid.
		        (err) => {
		        	this._JWT.destroy();
		        	deferred.resolve(false);
		        }
		        // Reject automatically handled by auth interceptor
		        // Will boot them to homepage
		        );
		}
		
		return deferred.promise;
	}
}