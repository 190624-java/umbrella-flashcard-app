--Project1, table incrementers
/* 
Auto increments the user id, when one is created
*/
CREATE SEQUENCE fc_card_it
    START WITH 1
    INCREMENT BY 1
;
CREATE OR REPLACE TRIGGER fc_card_it
BEFORE INSERT ON FC_Flashcard
FOR EACH ROW
BEGIN
    IF :new.cardID IS NULL
    THEN
        SELECT fc_card_it.nextval INTO :new.cardID FROM dual;
    END IF;
END;

