DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS Volunteer;
DROP TabLE IF EXISTS History;

CREATE TABLE Event (
    event_id INT GENERATED ALWAYS AS IDENTITY, 
    event_name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    point INT NOT NULL,
    PRIMARY KEY (event_id)
);

CREATE TABLE History (
    history_id INT GENERATED ALWAYS AS IDENTITY,
    event_id INT NOT NULL,
    PRIMARY KEY (history_id),
    FOREIGN KEY (event_id) REFERENCES Event(event_id)
);

CREATE TABLE Volunteer (
    volunteer_id INT GENERATED ALWAYS AS IDENTITY,
    firstname VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    history_id INT NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    contact_number INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    post_code VARCHAR(20) NOT NULL,
    PRIMARY KEY (volunteer_id),
    FOREIGN KEY (history_id) REFERENCES History(history_id)
);


