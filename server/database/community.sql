DROP TABLE IF EXISTS Volunteer;
DROP TabLE IF EXISTS History;

DROP TABLE IF EXISTS Event;

CREATE TABLE Event (
    event_id INT GENERATED ALWAYS AS IDENTITY,
    event_date date NOT NULL, 
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

CREATE TABLE token(
    token_id INT GENERATED ALWAYS AS IDENTITY,
    volunteer_id INT NOT NULL,
    token VARCHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (volunteer_id) REFERENCES Volunteer("volunteer_id")
);

INSERT INTO Event (event_date, event_name, description, category, point)
VALUES
    ('2023-10-15', 'Community Gardening Day', 'Join us for a day of gardening and beautifying our community. We''ll plant flowers, maintain the garden, and enjoy some fresh air together.', 'Community Service', 100),
    ('2023-11-05', 'Recycling Workshop', 'Learn about the importance of recycling and how to do it effectively. We''ll cover recycling tips and tricks, and you can bring your recyclables to drop off.', 'Education', 75),
    ('2023-11-20', 'Neighborhood Cleanup Drive', 'Let''s come together to clean up our neighborhood streets and parks. Bring your gloves and bags, and help make our community cleaner and more beautiful.', 'Community Service', 120),
    ('2023-12-10', 'Community Potluck Picnic', 'Bring your favorite dish and join us for a fun community picnic. It''s a great opportunity to connect with neighbors and enjoy delicious food.', 'Community Gathering', 90),
    ('2024-01-15', 'Youth Sports Day', 'Calling all community athletes! Join us for a day of sports and games at the community park. We''ll have soccer, basketball, and more. Get active and have fun!', 'Sports', 110),
    ('2024-02-05', 'Environmental Awareness Talk', 'Learn about environmental issues and how we can make a positive impact on our planet. We''ll have guest speakers and discussions on eco-friendly practices.', 'Education', 80),
    ('2024-02-20', 'Community Arts and Crafts Fair', 'Showcase your artistic talents or explore your creative side at our community arts and crafts fair. We''ll have workshops and a display of local art.', 'Arts and Culture', 130),
    ('2024-03-10', 'Food Drive for the Needy', 'Let''s collect non-perishable food items to help those in need in our community. Your donations will make a difference in someone''s life.', 'Community Service', 95),
    ('2024-04-15', 'Community Health and Wellness Day', 'Focus on your well-being with fitness classes, health screenings, and wellness workshops. Take steps toward a healthier lifestyle.', 'Health and Wellness', 70),
    ('2024-05-05', 'Neighborhood Book Club', 'Join fellow book lovers for a lively discussion of our latest book selection. It''s a great way to engage in meaningful conversations and share your love for reading.', 'Arts and Culture', 105);
