CREATE TABLE IF NOT EXISTS public."USERS"
(
  "ID" serial NOT NULL UNIQUE,
  "USERNAME" character varying(50) NOT NULL,
  "PASSWORD" character varying(100) NOT NULL,
  "NUM_WINS" smallint DEFAULT 0,
  "NUM_LOSES" smallint DEFAULT 0,
  "WIN_STREAK" smallint DEFAULT 0,
  CONSTRAINT "USERS_pkey" PRIMARY KEY ("ID")
);