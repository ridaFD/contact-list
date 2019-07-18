import sqlite from 'sqlite3'
const test = async () => {
  const db = await sqlite.open('./db.sqlite3');
  /**
   * Create the table
   **/ 
  await db.run(`CREATE TABLE contacts (contact_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email text NOT NULL UNIQUE);`);

  /**
   * let's insert a bit of data in it. We're going to insert 10 users
   * We first create a "statement"
   **/
  const stmt = await db.prepare(SQL`INSERT INTO contacts (name, email) VALUES (?, ?)`);
  let i = 0;
  while(i<10){
    await stmt.run(`person ${i}`,`person${i}@server.com`);
    i++
  }
  /** finally, we close the statement **/
  await stmt.finalize();

  /**
   * Then, let's read this data and display it to make sure everything works
   **/
  const rows = await db.all("SELECT contact_id AS id, name, email FROM contacts")
  rows.forEach( ({ id, name, email }) => console.log(`[id:${id}] - ${name} - ${email}`) )
}

export default { test }

}


