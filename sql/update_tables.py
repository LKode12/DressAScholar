import sqlite3

def add_user(email , username , password):
    user_connect = sqlite3.connect('users.db')
    user_cursor = user_connect.cursor()
    insert_sql = '''
    INSERT INTO users (email, username, password)
    VALUES (?, ?, ?)
    '''
    values = (email, username, password)
    user_cursor.execute(insert_sql, values)
    user_cursor.commit()
    user_cursor.close()


def add_donation(amount , donor_id):
    donations_connect = sqlite3.connect('donations.db')
    donations_cursor = donations_connect.cursor()
    insert_sql = '''
    INSERT INTO users (amount, donor_id)
    VALUES (?, ?, ?, ?)
    '''
    values = (amount, donor_id)
    donations_cursor.execute(insert_sql, values)
    donations_cursor.commit()
    donations_cursor.close()
    

def add_school(name , email , quantile , password):
    school_connect = sqlite3.connect('school.db')
    school_cursor = school_connect.cursor()
    insert_sql = '''
    INSERT INTO users (name, email, quantile , password)
    VALUES (?, ?, ? , ?)
    '''
    values = (name , email , quantile , password)
    school_cursor.execute(insert_sql , values)
    school_cursor.commit()
    school_cursor.close() 


add_user('sudbfusdu@gmail.com' , 'gddydydh' , 'hfudmsk')