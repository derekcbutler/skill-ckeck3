create table helo_users (
    helo_user_id serial primary key,
    helo_user_username varchar(70),
    helo_user_password varchar(100)
    );

create table helo_accounts (
    helo_account_id serial primary key,
    helo_user_id int references helo_users(helo_user_id)
    );

-- select * from helo_users;
-- select * from helo_accounts;