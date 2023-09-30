import sqlite3

connect_users = sqlite3.connect('users.db')
connect_schools = sqlite3.connect('schools.db')
connect_donations = sqlite3.connect('donations.db')

user_cursor = connect_users.cursor()
schools_cursor = connect_schools.cursor()
donations_cursor = connect_donations.cursor()

create_user_table = '''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
)
'''

user_cursor.execute(create_user_table)

create_schools_table = '''
CREATE TABLE IF NOT EXISTS schools (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    Quantile INTERGER
)
'''
schools_cursor.execute(create_schools_table)

create_donations_table = '''
CREATE TABLE IF NOT EXISTS donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    amount INTERGER NOT NULL,
    donor_id INTERGER NOT NULL,
    FOREIGN KEY (donor_id) REFERENCES users(id)
)
'''

donations_cursor.execute(create_donations_table)


user_cursor.close()
schools_cursor.close()
donations_cursor.close()