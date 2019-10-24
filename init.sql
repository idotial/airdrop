CREATE TABLE sending_list (
id SERIAL PRIMARY KEY,
state smallint NOT NULL default 0,
address VARCHAR(100) CONSTRAINT lower_case_address CHECK (address=lower(address)),
value VARCHAR(128),
txhash VARCHAR(128),
createAt timestamp default now()
);

CREATE TABLE contract_call_list (
id SERIAL PRIMARY KEY,
state smallint NOT NULL default 0,
address VARCHAR(100) UNIQUE CONSTRAINT lower_case_address CHECK (address=lower(address)),
data text,
value VARCHAR(128) default '0',
txhash VARCHAR(128),
createAt timestamp default now()
);

CREATE TABLE sec_test_account (
id SERIAL PRIMARY KEY,
id1 VARCHAR(100),
id2 VARCHAR(100),
code VARCHAR(100),
address VARCHAR(100) UNIQUE CONSTRAINT lower_case_address CHECK (address=lower(address)),
privateKey VARCHAR(128),
txhash INT,
createAt timestamp default now()
);

CREATE TABLE rzc_list (
id SERIAL PRIMARY KEY,
state smallint NOT NULL default 0,
address VARCHAR(100),
value VARCHAR(128),
txhash VARCHAR(128),
createAt timestamp default now()
);
