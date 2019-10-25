INSERT INTO helo_users (helo_user_username, helo_user_password)
VALUES(
    ${username}
    ${password}
)

returning *;