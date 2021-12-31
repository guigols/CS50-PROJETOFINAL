import sqlite3

#createDatabaseForm
db.execute("""
CREATE TABLE IF NOT EXISTS 'database' (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    'nome' TEXT NOT NULL,
    'telefone' INTEGER NOT NULL,
    'email' TEXT NOT NULL,
    'cidade' TEXT NOT NULL,
    'estado' TEXT NOT NULL,
    'pais' TEXT NOT NULL,

    FOREIGN KEY(user_id) REFERENCES users(id)
)
""")

