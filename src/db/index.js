import Dexie from 'dexie';

const db = new Dexie('hw-004');

db.version(1).stores({
  assignments: '++id, title, descripiton, progress, date'
});

export default db;