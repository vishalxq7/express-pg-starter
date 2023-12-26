const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});


// creating query builder
// text will be something like 'SELECT * FROM $1'
// params something like this array: ['users'] i.e. the table name
// $1 => replaced by users in final query

const query = async (text, params) => {

    // invocation timestamp for the query method
    const start = Date.now();
    try {
        const res = await pool.query(text, params);
        // time elapsed since invocation to execution
        const duration = Date.now() - start;
        console.log(
            'executed query', 
            {text, duration, rows: res.rowCount}
        );
        return res;
        
    } catch (error) {
        console.log('error in query', {text});
        throw error;
    }
}

module.exports = { query };
