var mysql = require('mysql');

function Connection () {
	this.pool = null;

	this.init = function() {
		this.pool = mysql.createPool({
			host: 'us-cdbr-azure-central-a.cloudapp.net',
			user: 'b0f970add66555',
			password: '3dbabaae',
			database: 'ponceapp'
		});
	};

	this.acquire = function(callback) {
		this.pool.getConnection(function(err, connection) {
			callback(err, connection);
		});
	};

}

module.exports = new Connection();