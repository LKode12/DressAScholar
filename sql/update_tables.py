# from create_tables import user_cursor , schools_cursor , donations_cursor 
import sqlite3

def add_user():
    user_cursor = sqlite3.connect('users.db').cursor()
# schools_cursor = connect_schools.cursor()
# donations_cursor = connect_donations.cursor()


    insert_sql = '''
INSERT INTO users (email, username, password)
VALUES (?, ?, ?)
'''
    values = ('email', 'name', 'value3')
    user_cursor.execute(insert_sql , values)
    user_cursor.close()
    print("updated")





def add_donation():
    pass




def add_school():
    pass   


add_user()