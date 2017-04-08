
#INSERT NEW USER
DROP PROCEDURE IF EXISTS sp_PostUser;
DELIMITER //
CREATE PROCEDURE sp_PostUser(IN _name VARCHAR (40), IN _lastname VARCHAR (40), IN _gender CHAR (1))
  BEGIN
    INSERT INTO USER ( name, lastname, gender)
    VALUES (_name, _lastname , _gender );
  END //
DELIMITER ;

#GET USER
DROP PROCEDURE IF EXISTS sp_GetUser;
DELIMITER //
CREATE PROCEDURE sp_GetUser()
  BEGIN
    SELECT *
    FROM USER;
  END //
DELIMITER ;

CALL sp_PostUser('aaa','asasd','M')

DROP PROCEDURE IF EXISTS sp_PostUs;
DELIMITER //
CREATE PROCEDURE sp_PostUs(IN _name VARCHAR (40))
  BEGIN
    INSERT INTO  demo( name)
    VALUES (_name);
  END //
DELIMITER ;

CALL sp_PostUs('daa')

SELECT * FROM demo