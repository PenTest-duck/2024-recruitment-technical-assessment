# CHAOS Technical Task

***Complete as many questions as you can.***

## Question 1
You have been given a skeleton function `process_data` in the `data.rs` file.
Complete the parameters and body of the function so that given a JSON request of the form

```json
{
  "data": ["Hello", 1, 5, "World", "!"]
}
```

the handler returns the following JSON:
```json
{
  "string_len": 11,
  "int_sum": 6
}
```

Edit the `DataResponse` and `DataRequest` structs as you need.

## Question 2

### a)
Write (Postgres) SQL `CREATE TABLE` statements to create the following schema.
Make sure to include foreign keys for the relationships that will `CASCADE` upon deletion.
![Database Schema](db_schema.png)

**Answer box:**
```sql
CREATE TABLE forms (
    id int PRIMARY KEY,
    title text,
    description text
);

CREATE TYPE question_type AS ENUM ('MultiChoice', 'MultiSelect', 'ShortAnswer');
CREATE TABLE questions (
    id int PRIMARY KEY,
    form_id int REFERENCES forms(id) ON DELETE CASCADE,
    title text,
    question_type question_type
);

CREATE TABLE question_options (
    id int PRIMARY KEY,
    question_id int REFERENCES questions(id) ON DELETE CASCADE,
    option text
);
```

### b)
Using the above schema, write a (Postgres) SQL `SELECT` query to return all questions in the following format, given the form id `26583`:
```
   id    |   form_id   |           title             |   question_type   |     options
------------------------------------------------------------------------------------------------------------
 2       | 26583       | What is your full name?     | ShortAnswer       | [null]
 3       | 26583       | What languages do you know? | MultiSelect       | {"Rust", "JavaScript", "Python"}
 7       | 26583       | What year are you in?       | MultiChoice       | {"1", "2", "3", "4", "5+"}
```

**Answer box:**
```sql
SELECT questions.id, questions.form_id, questions.title, questions.question_type, question_options.option
FROM questions
INNER JOIN question_options
ON questions.id = question_options.question_id
AND questions.form_id = 26583;
```